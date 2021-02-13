class circle{
    radius:number;
    color:string;
    constructor(rds:number,clr:string)
    {
        this.radius=rds
        this.color=clr
    }
    getradius():number{
        return this.radius
    } 
    setradius(newrad:number):void{
        this.radius=newrad
        console.log("updated radius = "+this.radius)
    }
    getcolor():string{
        return this.color
    } 
    setcolor(newclr:string):void{
        this.color=newclr
        console.log("updated color = "+this.color)
    } 
    toString():string{
        return `circle[radius=${this.radius},color=${this.color}]`
    } 
    getArea():number{
        return Math.PI* Math.pow(this.radius, 2)
    }
    getCircumference():number{
        return 2*(Math.PI*this.radius)
    }
}

let c = new circle(1.0,'red')
console.log(c)
console.log("getradius = "+c.getradius())
c.setradius(2.0)
console.log("get color = "+c.getcolor())
c.setcolor("blue")
console.log("toString : "+c.toString())
console.log("get area = "+c.getArea())
console.log("get Circumference = "+c.getCircumference())