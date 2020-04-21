var assert=require("chai").assert
var quantityMeasurement = require('../src/QuentityMesurement');
var unit=require('../src/Unit')

describe("Tesing for length",function(){
    it("should return equal when 1 feet and 1 feet",function(){
        let lenghth1=new quantityMeasurement(unit.FEET,1)
        let lenghth2=new quantityMeasurement(unit.FEET,1)
        let ans=lenghth1.compare(lenghth2)
        assert.equal(ans,true)
    })
    it("should return not equal when 2 feet and 1 feet",function(){
        let lenghth1=new quantityMeasurement(unit.FEET,2)
        let lenghth2=new quantityMeasurement(unit.FEET,1)
        let ans=lenghth1.compare(lenghth2)
        assert.equal(ans,false)
    })
    it("should return not equal when null feet and 1 feet",function(){
        let lenghth1=new quantityMeasurement(unit.FEET,null)
        let lenghth2=new quantityMeasurement(unit.FEET,1)
        let ans=lenghth1.compare(lenghth2)
        assert.equal(ans,false)
    })
    it("should return equal when same refrance object",function(){
        let lenghth1=new quantityMeasurement(unit.FEET,1)
        let ans=lenghth1.compare(lenghth1)
        assert.equal(ans,true)
    })
    it("should return not equal when type different",function(){
        let lenghth1=new quantityMeasurement(unit.FEET,1)
        let lenghth2=new quantityMeasurement(unit.INCH,1)
        let ans=lenghth1.compare(lenghth2)
        assert.equal(ans,false)
    })
//TEST CASES FOR INCH
    it("should return equal when 1 inch and 1 inch",function(){
        let lenghth1=new quantityMeasurement(unit.INCH,0)
        let lenghth2=new quantityMeasurement(unit.INCH,0)
        let ans=lenghth1.compare(lenghth2)
        assert.equal(ans,true)
    })
    it("should return not equal when 2 inch and 1 inch",function(){
        let lenghth1=new quantityMeasurement(unit.INCH,0)
        let lenghth2=new quantityMeasurement(unit.INCH,1)
        let ans=lenghth1.compare(lenghth2)
        assert.equal(ans,false)
    })
    it("should return not equal when null inch and 1 inch",function(){
        let lenghth1=new quantityMeasurement(unit.INCH,null)
        let lenghth2=new quantityMeasurement(unit.INCH,12)
        let ans=lenghth1.compare(lenghth2)
        assert.equal(ans,false)
    })
    it("should return equal when same refrance object of inch",function(){
        let lenghth1=new quantityMeasurement(unit.INCH,1.0)
        let ans=lenghth1.compare(lenghth1)
        assert.equal(ans,true)
    })
    it("should return not equal when type different unit",function(){
        let lenghth1=new quantityMeasurement(unit.FEET,1)
        let lenghth2=new quantityMeasurement(unit.INCH,2)
        let ans=lenghth1.compare(lenghth2)
        assert.equal(ans,false)
    })
    it("should return not equal when 1 ft and 1 inch",function(){
        let lenghth1=new quantityMeasurement(unit.FEET,1)
        let lenghth2=new quantityMeasurement(unit.INCH,1)
        let ans=lenghth1.compare(lenghth2)
        assert.equal(ans,false)
    })
    it("should return equal when 1 ft and 12 inch",function(){
        let lenghth1=new quantityMeasurement(unit.FEET,1)
        let lenghth2=new quantityMeasurement(unit.INCH,12)
        let ans=lenghth1.compare(lenghth2)
        assert.equal(ans,true)
    })
})
