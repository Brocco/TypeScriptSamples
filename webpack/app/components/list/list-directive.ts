import ListController from './list-controller';
var template = require('./list.html');

export default function ListDirective(): ng.IDirective {
  console.log('in list directive');
  return {
    controller: ListController,
    controllerAs: 'list',
    restrict: 'E',
    scope: {},
    template: template
  };
}