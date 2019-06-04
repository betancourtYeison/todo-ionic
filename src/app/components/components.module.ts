import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToDoComponent } from "./to-do/to-do.component";
import { PipesModule } from "../pipes/pipes.module";

@NgModule({
  declarations: [ToDoComponent],
  exports: [ToDoComponent],
  imports: [IonicModule, RouterModule, CommonModule, PipesModule]
})
export class ComponentsModule {}
