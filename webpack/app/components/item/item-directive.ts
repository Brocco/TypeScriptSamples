import ItemController from './item-controller';

var template = require('./item.html');

export default function ItemDirective(): ng.IDirective {
  console.log('item directive');
  return {
    bindToController: true,
    controller: ItemController,
    controllerAs: 'item',
    restrict: 'E',
    scope: {
      item: '='
    },
    template: template
  };
}