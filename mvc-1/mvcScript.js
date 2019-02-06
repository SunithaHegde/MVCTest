import Model from 'model.js';
import Controller from './controller.js';
import View from './view.js';

function main(){
  let model = new Model();
  let controller = new Controller(model);
  let view = new View(controller);
}
main();
