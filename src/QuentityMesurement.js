console.log("Welcome To Quentity Mesurement")
var unit = require('./Unit')
class Mesurement{
    constructor(unit,value){
        this.unit=unit
        this.value=value
    }
    compare(that){
        if((this.value==null || that.value==null) || (this.value!=that.value)){
            return false
        }
        else if((this.unit!=that.unit) || (this.value==that.value) || (this.unit==that.unit)){
            return this.unit * this.value == that.unit * that.value
        }
    }
}
module.exports=Mesurement
