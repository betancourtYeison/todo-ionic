import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { ToDoService } from "src/app/services/to-do.service";
import { Router } from "@angular/router";
import { AlertController, IonList } from "@ionic/angular";
import { ToDo } from "src/app/models/to-do.model";

@Component({
  selector: "app-to-do",
  templateUrl: "./to-do.component.html",
  styleUrls: ["./to-do.component.scss"]
})
export class ToDoComponent implements OnInit {
  @ViewChild(IonList) toDo: IonList;
  @Input() tab: string = "true";

  constructor(
    public _toDoService: ToDoService,
    private _router: Router,
    private _alertController: AlertController
  ) {}

  ngOnInit() {}

  async editToDo(item: ToDo) {
    const ALERT = await this._alertController.create({
      header: "Editar tarea",
      inputs: [
        {
          name: "title",
          type: "text",
          value: item.title,
          placeholder: "Nombre de la tarea"
        }
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          handler: () => {
            this.toDo.closeSlidingItems();
          }
        },
        {
          text: "Guardar",
          handler: data => {
            if (data.title.length === 0) {
              return;
            }
            item.title = data.title;
            this._toDoService.saveStorage();
            this.toDo.closeSlidingItems();
          }
        }
      ]
    });

    await ALERT.present();
  }

  removeToDo(toDo: ToDo) {
    this._toDoService.removeToDo(toDo);
  }
}
