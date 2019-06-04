import { Pipe, PipeTransform } from "@angular/core";
import { ToDo } from "../models/to-do.model";

@Pipe({
  name: "completedFilter",
  pure: false
})
export class CompletedFilterPipe implements PipeTransform {
  transform(toDo: ToDo[], completed: boolean = true): ToDo[] {
    return toDo.filter(item => item.completed === completed);
  }
}
