class Apple {
    constructor() {
        this._weight = 10;
    }
    get weight () {
        return this._weight;
    }

}

class Human {
    constructor(name,gender,weight) {
        this._name = name;
        this._gender = gender;
        this._weight = weight;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        this._gender = value;
    }

    get weight() {
        return this._weight;
    }

    set weight(value) {
        this._weight = value;
    }
    speak () {
        return this._name + 'say: Hello'
    }
    eat (apple) {
        if (apple._weight>0) {
            apple._weight--;
            this._weight++;
            return 'Da an 1 mieng tao';
        }
    }
}
