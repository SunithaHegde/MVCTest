export default class controller {
  constructor(model){
    this.model = model;
  }
  handleEvent(e){
    e.stopPropagation();
    switch(e.type){
      case "click":
                  this.clickHandler(e.target);
                  break;
      default: console.log("Something else");
    }
  }
  clickHandler(elm){
    this.model.heading = "World";
    //elm.innerText =
  }
  getModelHeading(){
    return this.model.heading;
  }
}
