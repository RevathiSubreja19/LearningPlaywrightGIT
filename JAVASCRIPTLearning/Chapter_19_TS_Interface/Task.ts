interface userData
{
    name: string;
    age: number;
    marital_status: string;
    Employment: string
    Location?: string;
    phone: number
}

interface userdetails extends userData
{
    readonly bank: string;
    bankLocation: string;
    AccDetails?: number
    run():void
}

class user implements userdetails
{
    name: string;
    age: number;
    marital_status: string;
    Employment: string
    Location?: string;
    phone: number;
    bank: string;
    bankLocation: string;
    

    constructor(name:string,age:number,marital_status:string,Employment: string,Location:string,phone:number,bank: string,bankLocation:string)
    {
        this.name = name;
        this.age = age;
        this.marital_status = marital_status;
        this.Employment = Employment;
        this.Location = Location;
        this.phone = phone;
        this.bank = bank;
        this.bankLocation = bankLocation;
    
    }

    run():void
    {
        console.log("Name: "+this.name)
        console.log("Age: "+this.age)
        console.log("Marital status: "+this.marital_status)
        console.log("Employment: "+this.Employment)
        console.log("Location: "+this.Location)
        console.log("Phone#: "+this.phone)
        console.log("Bank: "+this.bank)
        console.log("BankLocation: "+this.bankLocation)
        }

}
let obj:userdetails = new user("Revathi",32,"married","IT","Chennai",8939681780,"ICICI","Pallikaranai")
obj.run();



