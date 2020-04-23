console.log("Welcome To Quentity Mesurement")
var unit = require('./Unit')
class Mesurement{
    constructor(unit,value){
        this.unit=unit
        this.value=value
    }
    compare(that){
        return this.unit * this.value == that.unit * that.value
    }
    addition(that){
        return this.unit*this.value + that.unit*that.value
    }
    compareTemprature(that) {
		if (this.unit == that.unit) {
			return this.value == that.value;
		} else if (that.unit == 'fahrenheit') {
			return (this.value == (that.value - 32) * 5 / 9);
		} else if (that.unit == 'celsius') {
			return (this.value == (that.value * 9 / 5) + 32);
		} else {
			return false;
		}
	}
}
module.exports=Mesurement
