
class Cat  {
    constructor(name,weight,maxSpeed) {
        this._name = name;
        this._weight = weight;
        this._maxSpeed = maxSpeed;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get weight() {
        return this._weight;
    }

    set weight(value) {
        this._weight = value;
    }

    get maxSpeed() {
        return this._maxSpeed;
    }

    set maxSpeed(value) {
        this._maxSpeed = value;
    }
    sound () {
        return this._name + ' meo meo';
    }
    catch (rat) {
        if (rat.status==true&&rat.speed<this._maxSpeed) {
            return this._name +'da bat chuot '+ rat.name;
        } else {
            return rat.name + 'chay qua nhanh khong the bat';
        }
    }
    eat (rat) {
        if (rat.status) {
            this._weight+=rat.weight;
            rat._status = false;
            return 'da an ' + rat.name;
        } else {
            return 'chuot chet khong an';
        }
    }
}