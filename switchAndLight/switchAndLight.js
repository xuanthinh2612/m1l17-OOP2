class Lamp {
    constructor() {
        this._status = false;
    }
    turnOn () {
        this._status = true;
        return 'da bat den';
    }
    turnOff () {
        this._status = false;
        return ' da tat den'
    }
}

class SwitchButton {
    constructor(lamp) {
        this._lamp = lamp;
    }

    turnOn() {
         this._lamp._status=true;
         return ' da bat den';
    }
    turnOff () {
        this._lamp._status = false;
        return ' da tat den';
    }
}

let lamp = new Lamp();
let button = new SwitchButton(lamp);