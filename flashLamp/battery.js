class Battery {
    constructor() {
        this._energy = 100;
    }
    set energy (value) {
        this._energy = value;
    }
    get energy () {
        return this._energy;
    }
    charge () {
        this._energy = 100;
        return 'da sac day pin';
    }
    checkEnergy () {
        return this._energy;
    }
    // decreaseEnergy () {
    //     this._energy-=10;
    // }

}