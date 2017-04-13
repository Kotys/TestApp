export class MenuItem {
  public type?: string;
  public title: string;

  constructor(data?: MenuItem) {
    if (data && data.type) this.type = data.type;
    if (data && data.title) this.title = data.title;
  }
}
