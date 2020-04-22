var assert=require("chai").assert
var quantityMeasurement = require('../src/QuentityMesurement');
var unit=require('../src/Unit')

describe("length Compare test case",function(){
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
    it("should return equal when 3 ft and 1 yard",function(){
        let lenghth1=new quantityMeasurement(unit.FEET,3)
        let lenghth2=new quantityMeasurement(unit.YARD,1)
        let ans=lenghth1.compare(lenghth2)
        assert.equal(ans,true)
    })
    it("should return not equal when 1 ft and 1 yard",function(){
        let lenghth1=new quantityMeasurement(unit.FEET,1)
        let lenghth2=new quantityMeasurement(unit.YARD,1)
        let ans=lenghth1.compare(lenghth2)
        assert.equal(ans,false)
    })
    it("should return not equal when 1 inch and 1 yard",function(){
        let lenghth1=new quantityMeasurement(unit.INCH,1)
        let lenghth2=new quantityMeasurement(unit.YARD,1)
        let ans=lenghth1.compare(lenghth2)
        assert.equal(ans,false)
    })
    it("should return equal when 36 inch and 1 yard",function(){
        let lenghth1=new quantityMeasurement(unit.INCH,36)
        let lenghth2=new quantityMeasurement(unit.YARD,1)
        let ans=lenghth1.compare(lenghth2)
        assert.equal(ans,true)
    })
    it("should return equal when 1 yard and 36 inch",function(){
        let lenghth1=new quantityMeasurement(unit.YARD,1)
        let lenghth2=new quantityMeasurement(unit.INCH,36)
        let ans=lenghth1.compare(lenghth2)
        assert.equal(ans,true)
    })
    it("should return equal when 1 yard and 3 ft",function(){
        let lenghth1=new quantityMeasurement(unit.YARD,1)
        let lenghth2=new quantityMeasurement(unit.FEET,3)
        let ans=lenghth1.compare(lenghth2)
        assert.equal(ans,true)
    })
    it("should return equal when 2 in and 5 cm",function(){
        let lenghth1=new quantityMeasurement(unit.INCH,2)
        let lenghth2=new quantityMeasurement(unit.CM,5)
        let ans=lenghth1.compare(lenghth2)
        assert.equal(ans,true)
    })
})
describe("length Addition test case",function(){
    it("should return 4 when addition of 2 inch and 2 inch  ",function(){
        let lenghth1=new quantityMeasurement(unit.INCH,2)
        let lenghth2=new quantityMeasurement(unit.INCH,2)
        let ans=lenghth1.addition(lenghth2)
        assert.equal(ans,4)
    })
    it("should return 14 when addition of 1 feet and 2 inch  ",function(){
        let lenghth1=new quantityMeasurement(unit.FEET,1)
        let lenghth2=new quantityMeasurement(unit.INCH,2)
        let ans=lenghth1.addition(lenghth2)
        assert.equal(ans,14)
    })
    it("should return 24 when addition of 1 feet and 1 feet  ",function(){
        let lenghth1=new quantityMeasurement(unit.FEET,1)
        let lenghth2=new quantityMeasurement(unit.FEET,1)
        let ans=lenghth1.addition(lenghth2)
        assert.equal(ans,24)
    })
    it("should return 3 when addition of 2 inch and 2.5 cm  ",function(){
        let lenghth1=new quantityMeasurement(unit.INCH,2)
        let lenghth2=new quantityMeasurement(unit.CM,2.5)
        let ans=lenghth1.addition(lenghth2)
        assert.equal(ans,3)
    })
})

describe("Volume Compare test case",function(){
    it("should return equal when 1 gallon and 3.78 ml",function(){
        let volum1=new quantityMeasurement(unit.GALLON,1)
        let volum2=new quantityMeasurement(unit.ML,3.78)
        let ans=volum1.compare(volum2)
        assert.equal(ans,true)
    })
    it("should return equal when 1 litre and 1000 ml",function(){
        let volum1=new quantityMeasurement(unit.LIT,1)
        let volum2=new quantityMeasurement(unit.ML,1000)
        let ans=volum1.compare(volum2)
        assert.equal(ans,true)
    })
})

