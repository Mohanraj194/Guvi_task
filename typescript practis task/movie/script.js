var movie = /** @class */ (function () {
    function movie(title, studio, rating) {
        if (rating === void 0) { rating = 'PG13'; }
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    movie.prototype.getPG = function (arr) {
        return arr.filter(function (x) { return x.rating.includes("PG"); });
    };
    return movie;
}());
var movie1 = new movie("Casino Royale", "Eon Productions");
var movie2 = new movie("Avatar", "Paramount Studios");
var movie3 = new movie("Joker", "WarnerBros Studios");
var movie4 = new movie("Avengers", "Marvel Studios");
var movie5 = new movie("Dawn of Justice", "WarnerBros Studios", "R");
var result = movie5.getPG([movie1, movie2, movie3, movie4, movie5]);
console.log(result);
