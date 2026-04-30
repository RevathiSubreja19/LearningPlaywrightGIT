

interface Calculator
{
   
add(a:number,b:number):number;
sub(a:number,b:number):number;
mul(a:number,b:number):number;
div(a:number,b:number):number;

}
 
 let calc:Calculator =
 {
  
    add: (a,b)=>(a+b),
    sub: (a,b)=>(a-b),
    mul: (a,b)=>(a*b),
    div: (a,b)=>(a/b),

 }

 console.log(calc.add(21,3));
 console.log(calc.sub(21,3));
 console.log(calc.mul(21,3));
 console.log(calc.div(21,3));


 console.log("---------------------------------------------------------------");

 class calcClass implements Calculator
 {
    a:number;
    b:number;

    constructor(a:number,b:number)
    {
      this.a = a;
      this.b = b;
    }
    add():number{
      console.log(this.a+this.b)
      return this.a+this.b
    }
    sub():number{
      console.log(this.a-this.b)
      return this.a-this.b
    }
    mul():number{
      console.log(this.a*this.b)
      return this.a*this.b
    }
    div():number{
      console.log(this.a/this.b)
      return this.a/this.b
    }
 }

 let c = new calcClass(21,3)
 c.add()
 c.sub()
 c.mul()
 c.div()