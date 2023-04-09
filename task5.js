class Device {
    constructor(name) {
        this.name = name,
        this.isPlug = false
    }

    plug() {
        if (this.isPlug) return console.log('Устройство уже включено в розетку');
        this.isPlug = true;
        console.log('Устройство включено');
    }

    unplug() {
        if (!this.isPlug) return console.log('Устройство уже выключено из розетки');
        this.isPlug = false;
        console.log('Устройство выключено');
    }
}

class TableLamp extends Device{
    constructor (name, brightness) {
        super(name),
        this.brightness = brightness
        
    }

}

class Computer extends Device{
    constructor (name, efficiency) {
        super(name),
        this.efficiency = efficiency
        
    }

    start() {
        console.log('Включен');
    } 
    stop() { 
        console.log('Выключен');
    }
}

const lamp = new TableLamp('Лампа настольная', 10);

const pc = new Computer('ПК', 10);

pc.plug();
pc.start();

console.log(lamp);
console.log(pc);