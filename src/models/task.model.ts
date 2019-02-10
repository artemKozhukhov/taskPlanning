export class Task{

  constructor(public title: string, public deadLine: Date, public  type: string, public id: number, public  description?: string){
  }

  // get title(): string {
  //   return this._title;
  // }
  //
  // get deadLine(): Date {
  //   return this._deadLine;
  // }
  //
  // get type(): string {
  //   return this._type;
  // }
  // get description() : string{
  //   return this._description;
  // }
  //
  // set title(value: string) {
  //   this._title = value;
  // }
  //
  // set deadLine(value: Date) {
  //   this._deadLine = value;
  // }
  //
  // set type(value: string) {
  //   this._type = value;
  // }
  //
  // set description(value: string) {
  //   this._description = value;
  // }
  //
  // get number(): number {
  //   return this._number;
  // }
  // set number(value: number) {
  //   this._number = value;
  // }
}
