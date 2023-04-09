function Device (name) {
    this.name = name, /* Надо ли давать name родительскому классу, если она переопределяется в дочернем? */
    this.isPlug = false
}

Device.prototype.plug = function () {
    if (this.isPlug) return console.log('Устройство уже включено в розетку');
    this.isPlug = true;
    console.log('Устройство включено');
}

Device.prototype.unplug = function () {
    if (!this.isPlug) return console.log('Устройство уже выключено из розетки');
    this.isPlug = false;
    console.log('Устройство выключено');
}

function TableLamp(name, brightness) {
    this.name = name,
    this.brightness = brightness
}

TableLamp.prototype = new Device();

function Computer(name, efficiency) {
    this.name = name,
    this.efficiency = efficiency
}

Computer.prototype = new Device();
Computer.prototype.start = function() { 
    console.log(this.name + ' включен');
}
Computer.prototype.stop = function() {
    console.log(this.name + ' выключен');
}

const lamp = new TableLamp('Лампа настольная', 10);

const pc = new Computer('ПК', 10);

pc.plug();
pc.start();

console.log(lamp);
console.log(pc);
