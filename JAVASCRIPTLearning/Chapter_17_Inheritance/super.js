class Animal
{
   //8u9ii998i98 name;
     constructor(name)
     {
        this.name = name;
     }
     eat()
     {
        console.log(this.name+" is eating")

     }
     sleep()
     {
        console.log(this.name+" is sleeping")

     }
     food()
     {
        console.log(this.name +" likes chicken")
     }
}

class dog extends Animal
{
    //breed;
    constructor(name,breed)
    {
        super(name);
        this.breed = breed;
    }
    bark()
    {
        console.log(this.name+" is barking")
    }
    food()
     {
        super.food();
        console.log(this.name +" also likes mutton")
     }
}

let obj = new dog("Rex","Labrador")
console.log("The dog's breed is: "+ obj.breed);
obj.eat();
obj.bark();
obj.food();
