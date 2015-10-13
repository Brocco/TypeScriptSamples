import ListDirective from './components/list/list-directive';
import ItemDirective from './components/item/item-directive';

// require angular so that it will be bundled via webpack
require('angular');

angular.module('todo', [])
  .directive('list', ListDirective)
  .directive('item', ItemDirective);