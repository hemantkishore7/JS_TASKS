class UberPrice{
    constructor(basefare = 50, perMinute , perMile){
        this.basefare=basefare;
        this.perMinute = perMinute
        this.perMile = perMile;
        
    }
    calculate(time, distance){
        return this.basefare + (this.perMinute * time) + (this.perMile * distance);
    }
}

const ride1 = new UberPrice(100,2.5,8);

console.log(ride1.calculate(30,10));
