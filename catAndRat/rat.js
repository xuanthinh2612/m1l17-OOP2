class Rat {
    constructor(name, weight, speed) {
        this._name = name;
        this._weight = weight;
        this._speed = speed;
        this._status = true;
    }

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    set weight(value) {
        this._weight = value;
    }

    get weight() {
        return this._weight;
    }

    set speed(value) {
        this._speed = value;
    }

    get speed() {
        return this._speed;
    }

    set status(value) {
        this._status = value;
    }

    get status() {
        return this._status;
    }

    sound () {
        return this._name + ' chit chit';
    }
}
