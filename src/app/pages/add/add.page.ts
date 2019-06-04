import { Component, OnInit } from "@angular/core";
import { ToDoService } from "src/app/services/to-do.service";
import { ActivatedRoute } from "@angular/router";
import { ToDo } from "src/app/models/to-do.model";
import { ToDoItem } from "src/app/models/to-do-item.model";

@Component({
  selector: "app-add",
  templateUrl: "./add.page.html",
  styleUrls: ["./add.page.scss"]
})
export class AddPage implements OnInit {
  toDo: ToDo;
  itemName: string = "";

  constructor(
    private _toDoService: ToDoService,
    private _activatedRoute: ActivatedRoute
  ) {
    const ID = this._activatedRoute.snapshot.paramMap.get("id");
    this.toDo = this._toDoService.getToDo(ID);
  }

  ngOnInit() {}

  addItem() {
    if (this.itemName.length === 0) {
      return;
    }

    const NEW_ITEM = new ToDoItem(this.itemName);
    this.toDo.items.push(NEW_ITEM);
    this.itemName = "";
    this._toDoService.saveStorage();
  }

  validateCompleted() {
    const PENDING = this.toDo.items.filter(item => !item.completed).length;
    if (PENDING === 0) {
      this.toDo.completedDate = new Date();
      this.toDo.completed = true;
    } else {
      this.toDo.completedDate = null;
      this.toDo.completed = false;
    }
    this._toDoService.saveStorage();
  }

  removeItem(index: number) {
    this.toDo.items.splice(index, 1);
    this.validateCompleted();
    this._toDoService.saveStorage();
  }
}
