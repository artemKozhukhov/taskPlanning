import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'task-types'
})
export class TaskTypesPipe implements PipeTransform {
  transform(value: number, args?: any): string {

    if(value==0) return "Личная";

    if(value==1) return "Рабочая";

    return "Тип встречи неизвестен";
  }
}
