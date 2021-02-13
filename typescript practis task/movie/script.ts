class movie{
    title:string;
    studio:string;
    rating:string;
    constructor(title?:string,studio?:string,rating:string='PG13')
    {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    getPG(arr:Array<any>){
        return arr.filter((x) => x.rating.includes("PG"))
    }
}
let movie1 = new movie("Casino Royale", "Eon Productions");
let movie2 = new movie("Avatar", "Paramount Studios");
let movie3 = new movie("Joker", "WarnerBros Studios");
let movie4 = new movie("Avengers", "Marvel Studios");
let movie5 = new movie("Dawn of Justice", "WarnerBros Studios", "R");


let result = movie5.getPG([movie1,movie2,movie3,movie4,movie5])
console.log(result)
 
