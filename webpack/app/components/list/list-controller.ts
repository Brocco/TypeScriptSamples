import Item from '../../models/item';

export default class ListController{
  private items: Item[];
  private newItem: string;

  constructor(){
    this.items = [];
  }

  public addItem(name: string) {
    console.log('add item', name);
    if (name) {
      this.items.push(new Item(name));
      console.log('items', this.items);
      this.newItem = '';
    }
  }
}