import { Component } from "@angular/core";
import { ToDoService } from "src/app/services/to-do.service";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  constructor(
    public _toDoService: ToDoService,
    private _router: Router,
    private _alertController: AlertController
  ) {}

  async addToDo() {
    const ALERT = await this._alertController.create({
      header: "Nueva tarea",
      inputs: [
        {
          name: "title",
          type: "text",
          placeholder: "Nombre de la tarea"
        }
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel"
        },
        {
          text: "Crear",
          handler: data => {
            if (data.title.length === 0) {
              return;
            }

            const ID = this._toDoService.createToDo(data.title);
            this._router.navigateByUrl(`/tabs/tab1/add/${ID}`);
          }
        }
      ]
    });

    await ALERT.present();
  }
}
