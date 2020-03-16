//Практическое задание 4,5
function Animal(name) {
    var foodAmount = 50,
        self = this;
    function formatFoodAmount() {
        return foodAmount + ' гр.';
    }

    this.dailyNorm = function(amount) {
        if (!arguments.length) return formatFoodAmount();
        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }
        foodAmount = amount;
    };

    this.name = name;

    this.feed = function() {
        console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
    };
}
function Cat (name){
    Animal.apply(this,arguments);
    var feed = this.feed;
    this.feed = function () {
        feed();
        this.happyCat();
        return this;
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
console.log(barsik.dailyNorm(20));
console.log(barsik.stroke().feed());

