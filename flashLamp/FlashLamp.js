class Flash {
    constructor(battery) {
        this._status = false;
        this._battery = battery;
    }
    light () {
        if (this._status===true&&this._battery._energy>0) {
            this._battery._energy -=5;
            return 'dang bat den pin';
        } else {
            return 'den pin chua dc bat'
        }

    }
    turnOn () {
        if (this._battery._energy>0) {
            this._status = true;
            this.light();
            return 'da bat den pin'
        } else {
            return 'het pin'
        }
    }
    turnOff () {
        this._status = false;
        return 'da tat den pin'
    }

}