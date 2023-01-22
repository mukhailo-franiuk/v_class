function CoffeeMake(name, price) {
 this.name = name;
 this.price = price;
}
CoffeeMake.prototype.on = function () {
    console.log('Coffe mashine on!')
}
CoffeeMake.prototype.off = function () {
    console.log('Coffe mashine off!')
}

let getSelect = selector => document.querySelector(selector);

function HornCoffeeMaker(name, price) {
  this.name = name;
  this.price = price;
}
HornCoffeeMaker.prototype = Object.create(CoffeeMake.prototype);
HornCoffeeMaker.prototype.constuctor = HornCoffeeMaker;
HornCoffeeMaker.prototype.renderCoffeeMaker01 = function(currency){
    return getSelect('.one-coffee').innerHTML = `
    <div class="img"><img src="https://content1.rozetka.com.ua/goods/images/big/276651160.jpg" alt="img coffee-make"></div>
            <div class="name">${this.name}</div>
            <div class="price">${this.price} ${currency}</div>
    `
}
let hornCoffeeMaker = new HornCoffeeMaker('KRUPS Opio XP320530',`${Math.floor(4299/36.74)}`);
hornCoffeeMaker.renderCoffeeMaker01('USD');

function DripCoffeeMaker(name,price){
HornCoffeeMaker.call(this,name,price);
}
DripCoffeeMaker.prototype = Object.create(HornCoffeeMaker.prototype);
DripCoffeeMaker.prototype.constuctor = DripCoffeeMaker;
DripCoffeeMaker.prototype.renderCoffeeMaker02 = function(currency){
    return getSelect('.two-coffee').innerHTML = `
    <div class="img"><img src="https://content.rozetka.com.ua/goods/images/big/10626703.jpg" alt="img coffee-make"></div>
            <div class="name">${this.name}</div>
            <div class="price">${this.price} ${currency}</div>
    `
}

let dripCoffeeMaker = new DripCoffeeMaker('PHILIPS Daily Collection HD7459/20',`${Math.floor(1799/36.74)}`);
dripCoffeeMaker.renderCoffeeMaker02('USD');

function CoffeeMachine(name,price){
    HornCoffeeMaker.call(this,name,price);
}
CoffeeMachine.prototype = Object.create(HornCoffeeMaker.prototype);
CoffeeMachine.prototype.constuctor = CoffeeMachine;
CoffeeMachine.prototype.renderCoffeeMaker03 = function(currency){
    return getSelect('.three-coffee').innerHTML = `
    <div class="img"><img src="https://content.rozetka.com.ua/goods/images/big/160433459.jpg" alt="img coffee-make"></div>
            <div class="name">${this.name}</div>
            <div class="price">${this.price} ${currency}</div>
    `
}
let coffeeMachine = new CoffeeMachine('KRUPS Essential EA816570',`${Math.floor(13499/36.74)}`);
coffeeMachine.renderCoffeeMaker03('USD');
