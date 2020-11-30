class Tivi {
    constructor() {
        this._status = false;
        this._volume = 50;
        this._channels = 1;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }

    get volume() {
        return this._volume;
    }

    set volume(value) {
        this._volume = value;
    }

    get channels() {
        return this._channels;
    }

    set channels(value) {
        this._channels = value;
    }
}
class RemoteControl {
    constructor(tivi) {
        this._tivi = tivi;
    }
    changeChannel(number) {
        this._tivi._channels = number;
    }
    volumeUp () {
        this._tivi._volume++;
    }
    volumeDown () {
        this._tivi._volume--;
    }

}

let toshiba = new Tivi();
let remote = new RemoteControl(toshiba);