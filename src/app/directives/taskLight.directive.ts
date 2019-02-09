import {Directive, ElementRef, Input,OnInit } from '@angular/core';

@Directive({
  selector: '[appTaskLight]'
})
export class TaskLightDirective implements OnInit{

  @Input() taskDate: Date;
  currentDate: Date = new Date();

  getMSFromDays(days: number){
    return days * 1000 * 3600 * 24;
  }
  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    let msToTask = (+this.taskDate) - (+this.currentDate);
    console.log("таска в директиве", this.taskDate);
    console.log("разница", msToTask);
    if (msToTask > this.getMSFromDays(1)){
      this.el.nativeElement.style.backgroundColor = 'green';
    }
    else if( msToTask <= this.getMSFromDays(1) && msToTask >= 0){
      this.el.nativeElement.style.backgroundColor = 'yellow';
    }
    else {
      this.el.nativeElement.style.backgroundColor = 'red';
    }
  }
}
