import Item from '../../models/item';

export default class ItemController{
  public item: Item;

  constructor(){
    console.log('item controller');
  }

  public toggle() {
    this.item.completed = !this.item.completed;
  }
}