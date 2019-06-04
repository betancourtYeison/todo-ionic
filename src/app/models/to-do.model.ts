import { ToDoItem } from "./to-do-item.model";

export class ToDo {
  id: number;
  title: string;
  createdDate: Date;
  completedDate: Date;
  completed: boolean;
  items: ToDoItem[];

  constructor(title: string) {
    this.id = new Date().getTime();
    this.title = title;
    this.createdDate = new Date();
    this.completed = false;
    this.items = [];
  }
}
