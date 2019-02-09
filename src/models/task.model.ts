export class Task{
  private static _id: number = 0;
  private _number: number;
  constructor(private _title: string, private _deadLine: Date, private  _type: string, private  _description?: string){
    this.number = Task._id;
    Task._id++;
  }

  get title(): string {
    return this._title;
  }

  get deadLine(): Date {
    return this._deadLine;
  }

  get type(): string {
    return this._type;
  }
  get description() : string{
    return this._description;
  }

  set title(value: string) {
    this._title = value;
  }

  set deadLine(value: Date) {
    this._deadLine = value;
  }

  set type(value: string) {
    this._type = value;
  }

  set description(value: string) {
    this._description = value;
  }

  get number(): number {
    return this._number;
  }
  set number(value: number) {
    this._number = value;
  }
}
