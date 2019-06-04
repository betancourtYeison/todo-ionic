import { Injectable } from "@angular/core";
import { ToDo } from "../models/to-do.model";

@Injectable({
  providedIn: "root"
})
export class ToDoService {
  toDo: ToDo[] = [];

  constructor() {
    this.loadStorage();
  }

  loadStorage() {
    const data = localStorage.getItem("data");
    if (data) {
      this.toDo = JSON.parse(data);
    }
  }

  createToDo(title: string) {
    const TODO = new ToDo(title);
    this.toDo.push(TODO);
    this.saveStorage();
    return TODO.id;
  }

  getToDo(id: number | string) {
    id = Number(id);
    return this.toDo.find(item => item.id === id);
  }

  removeToDo(toDo: ToDo) {
    this.toDo = this.toDo.filter(item => item.id !== toDo.id);
    this.saveStorage();
  }

  saveStorage() {
    localStorage.setItem("data", JSON.stringify(this.toDo));
  }
}
