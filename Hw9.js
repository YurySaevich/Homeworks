//Практическое задание 4,5
function Animal (name) {
    var foodAmount = 50;


    function formatFoodAmount () {
        return foodAmount + ' гр.';
    }

    this.dailyNorm = function(amount) {
        if (!arguments.length) return formatFoodAmount();

        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }

        foodAmount = amount;
        return this;
    };

    this.name = name;

    this.feedAnimal = function() {
        console.log ('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
        return this;
    };

}
function Cat(name) {
    Animal.call(this);
    Animal.apply(this, arguments);
    var feedCat = this.feedAnimal;
    this.feedAnimal = function () {
        feedCat.call(this);
        this.happyCat();

    };
    this.happyCat = function () {
        console.log('Кот доволен ^_^');
    };
    this.stroke = function(){
        console.log('Гладим кота');
        return this;
    }
}

var barsik = new Cat('Барсик');


console.log(barsik.dailyNorm(550));
console.log(barsik.stroke().feedAnimal());

