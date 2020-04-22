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
}
module.exports=Mesurement
