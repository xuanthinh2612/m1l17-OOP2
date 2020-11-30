function Hero(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    this.moveRight = function () {
        this.left += 100;
        console.log('ok: ' + this.left);
    }
    this.moveDown = function () {
        this.top += 100;
        console.log('ok: ' + this.top);
    }
    this.moveLeft = function () {
        this.left -= 100;
        console.log('ok: ' + this.left);
    }
    this.moveUp = function () {
        this.top -= 100;
        console.log('ok: ' + this.top);
    }

}

var hero = new Hero('banana.gif', 20, 30, 200);

function start() {
    if (hero.left > 0 && hero.left < window.innerWidth - hero.size && hero.top < (window.innerHeight - 250)) {
        hero.moveRight();
    }
    if (hero.left >= (window.innerWidth - hero.size) && hero.top < (window.innerHeight - 250)) {
        hero.moveDown();
    }
    if (hero.top >= (window.innerHeight - 250) && hero.left > 0) {
        hero.moveLeft();
    }
    if (hero.left < 0 && hero.top > 0) {
        hero.moveUp()
    }
    if (hero.top < 0) {
        hero.top = 20;
        hero.left = 30;
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

start();