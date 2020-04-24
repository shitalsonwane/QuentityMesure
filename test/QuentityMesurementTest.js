var assert=require("chai").assert
var quantityMeasurement = require('../src/QuentityMesurement');
var unit=require('../src/Unit')

describe("length Compare test case",function(){
    //TEST CASE FOR COMPARE SAME FEET VALUE
    it("should return equal when 1 feet and 1 feet",function(){
        let lenghth1=new quantityMeasurement(unit.FEET,1)
        let lenghth2=new quantityMeasurement(unit.FEET,1)
        let ans=lenghth1.compare(lenghth2)
        assert.equal(ans,true)
    })
    //TEST CASE FOR COMPARE DIFFERENT FEET VALUE
    it("should return not equal when 2 feet and 1 feet",function(){
        let lenghth1=new quantityMeasurement(unit.FEET,2)
        let lenghth2=new quantityMeasurement(unit.FEET,1)
        let ans=lenghth1.compare(lenghth2)
        assert.notEqual(ans,true)
    })
    //TEST CASE FOR COMPARE NULL VALUE
    it("should return not equal when null feet and 1 feet",function(){
        let lenghth1=new quantityMeasurement(unit.FEET,null)
        let lenghth2=new quantityMeasurement(unit.FEET,1)
        let ans=lenghth1.compare(lenghth2)
        assert.isNull(null,lenghth1)
    })
    //TEST CASE FOR COMPARE SAME REFRANCE
    it("should return equal when same refrance object",function(){
        let lenghth1=new quantityMeasurement(unit.FEET,1)
        let ans=lenghth1.compare(lenghth1)
        assert.equal(ans,true)
    })
    //TEST CASE FOR COMPARE DIFFERENT VALUE
    it("should return not equal when type different",function(){
        let lenghth1=new quantityMeasurement(unit.FEET,1)
        let lenghth2=new quantityMeasurement(unit.INCH,1)
        let ans=lenghth1.compare(lenghth2)
        assert.notEqual(ans,true)
    })
    //TEST CASES FOR COMPARE SAME INCH
    it("should return equal when 1 inch and 1 inch",function(){
        let lenghth1=new quantityMeasurement(unit.INCH,0)
        let lenghth2=new quantityMeasurement(unit.INCH,0)
        let ans=lenghth1.compare(lenghth2)
        assert.equal(ans,true)
    })
    //TEST CASE FOR COMPARE DIFFERENT VALUE
    it("should return not equal when 2 inch and 1 inch",function(){
        let lenghth1=new quantityMeasurement(unit.INCH,0)
        let lenghth2=new quantityMeasurement(unit.INCH,1)
        let ans=lenghth1.compare(lenghth2)
        assert.notEqual(ans,true)
    })
    //TEST CASE FOR COMPARE NULL VALUE
    it("should return not equal when null inch and 1 inch",function(){
        let lenghth1=new quantityMeasurement(unit.INCH,null)
        let lenghth2=new quantityMeasurement(unit.INCH,12)
        let ans=lenghth1.compare(lenghth2)
        assert.isNull(null,lenghth1)
    })
    //TEST CASE FOR COMPARE SAME REFRANCE
    it("should return equal when same refrance object of inch",function(){
        let lenghth1=new quantityMeasurement(unit.INCH,1.0)
        let ans=lenghth1.compare(lenghth1)
        assert.equal(ans,true)
    })
    //TEST CASE FOR COMPARE TYPE DIFFERENT
    it("should return not equal when type different unit",function(){
        let lenghth1=new quantityMeasurement(unit.FEET,1)
        let lenghth2=new quantityMeasurement(unit.INCH,2)
        let ans=lenghth1.compare(lenghth2)
        assert.notEqual(ans,true)
    })
    //TEST CASE FOR COMPARE FT AND INCH
    it("should return not equal when 1 ft and 1 inch",function(){
        let lenghth1=new quantityMeasurement(unit.FEET,1)
        let lenghth2=new quantityMeasurement(unit.INCH,1)
        let ans=lenghth1.compare(lenghth2)
        assert.notEqual(ans,true)
    })
    //TEST CASE COMPARE COMPARE 1 FT AND 12 INCH
    it("should return equal when 1 ft and 12 inch",function(){
        let lenghth1=new quantityMeasurement(unit.FEET,1)
        let lenghth2=new quantityMeasurement(unit.INCH,12)
        let ans=lenghth1.compare(lenghth2)
        assert.equal(ans,true)
    })
    //TEST CASE FOR COMPARE 3 FT AND 1 YARD
    it("should return equal when 3 ft and 1 yard",function(){
        let lenghth1=new quantityMeasurement(unit.FEET,3)
        let lenghth2=new quantityMeasurement(unit.YARD,1)
        let ans=lenghth1.compare(lenghth2)
        assert.equal(ans,true)
    })
    //TEST CASE FOR COMPARE 1 FT AND 1 YARD
    it("should return not equal when 1 ft and 1 yard",function(){
        let lenghth1=new quantityMeasurement(unit.FEET,1)
        let lenghth2=new quantityMeasurement(unit.YARD,1)
        let ans=lenghth1.compare(lenghth2)
        assert.notEqual(ans,true)
    })
    //TEST CASE FOR COMPARE 1 INCH AND 1 YARD
    it("should return not equal when 1 inch and 1 yard",function(){
        let lenghth1=new quantityMeasurement(unit.INCH,1)
        let lenghth2=new quantityMeasurement(unit.YARD,1)
        let ans=lenghth1.compare(lenghth2)
        assert.equal(ans,false)
    })
    //TEST CASE FOR COMPARE 36 INCH AND 1 YARD
    it("should return equal when 36 inch and 1 yard",function(){
        let lenghth1=new quantityMeasurement(unit.INCH,36)
        let lenghth2=new quantityMeasurement(unit.YARD,1)
        let ans=lenghth1.compare(lenghth2)
        assert.equal(ans,true)
    })
    //TEST CASE FOR COMPARE 1 YARD AND 36 INCH
    it("should return equal when 1 yard and 36 inch",function(){
        let lenghth1=new quantityMeasurement(unit.YARD,1)
        let lenghth2=new quantityMeasurement(unit.INCH,36)
        let ans=lenghth1.compare(lenghth2)
        assert.equal(ans,true)
    })
    //TEST CASE FOR COMPARE 1 YARD AND 3 FT
    it("should return equal when 1 yard and 3 ft",function(){
        let lenghth1=new quantityMeasurement(unit.YARD,1)
        let lenghth2=new quantityMeasurement(unit.FEET,3)
        let ans=lenghth1.compare(lenghth2)
        assert.equal(ans,true)
    })
    //TEST CASE FOR COMPARE 2 INCH AND 5 CM
    it("should return equal when 2 in and 5 cm",function(){
        let lenghth1=new quantityMeasurement(unit.INCH,2)
        let lenghth2=new quantityMeasurement(unit.CM,5)
        let ans=lenghth1.compare(lenghth2)
        assert.equal(ans,true)
    })
})
describe("length Addition test case",function(){
    //TEST CASE FOR ADD 2 INCH 2 INCH
    it("should return 4 when addition of 2 inch and 2 inch  ",function(){
        let lenghth1=new quantityMeasurement(unit.INCH,2)
        let lenghth2=new quantityMeasurement(unit.INCH,2)
        let ans=lenghth1.addition(lenghth2)
        assert.equal(ans,4)
    })
    //TEST CASE FOR ADD 1 FT AND 2 INCH
    it("should return 14 when addition of 1 feet and 2 inch  ",function(){
        let lenghth1=new quantityMeasurement(unit.FEET,1)
        let lenghth2=new quantityMeasurement(unit.INCH,2)
        let ans=lenghth1.addition(lenghth2)
        assert.equal(ans,14)
    })
    //TEST CASE FOR ADD 1 FT AND 1 FT
    it("should return 24 when addition of 1 feet and 1 feet  ",function(){
        let lenghth1=new quantityMeasurement(unit.FEET,1)
        let lenghth2=new quantityMeasurement(unit.FEET,1)
        let ans=lenghth1.addition(lenghth2)
        assert.equal(ans,24)
    })
    //TEST CASE FOR ADD 2 INCH 2.5.CM
    it("should return 3 when addition of 2 inch and 2.5 cm  ",function(){
        let lenghth1=new quantityMeasurement(unit.INCH,2)
        let lenghth2=new quantityMeasurement(unit.CM,2.5)
        let ans=lenghth1.addition(lenghth2)
        assert.equal(ans,3)
    })
})

describe("Volume Compare test case",function(){
    //TEST CASE FOR COMPARE 1 GALLON AND 3.78 LITRE
    it("should return equal when 1 gallon and 3.78 litre",function(){
        let volum1=new quantityMeasurement(unit.GALLON,1)
        let volum2=new quantityMeasurement(unit.LIT,3.78)
        let ans=volum1.compare(volum2)
        assert.equal(ans,true)
    })
    //TEST CASE FOR COMPARE 1 LITRE AND 1000 ML
    it("should return equal when 1 litre and 1000 ml",function(){
        let volum1=new quantityMeasurement(unit.LIT,1)
        let volum2=new quantityMeasurement(unit.ML,1000)
        let ans=volum1.compare(volum2)
        assert.equal(ans,true)
    })
})

describe("Volume Addition test case",function(){
    //TEST CASE FOR ADD 1 GALLON AND 3.78 ML
    it("should return 7.56 when 1 gallon and 3.78 ml",function(){
        let volume1=new quantityMeasurement(unit.GALLON,1)
        let volume2=new quantityMeasurement(unit.LIT,3.78)
        let ans=volume1.addition(volume2)
        assert.equal(ans,7.56)
    })
    //TEST CASE FOR ADD 1 LITRE AND 1000 ML
    it("should return 2 when 1 litre and 1000 ml",function(){
        let volume1=new quantityMeasurement(unit.LIT,1)
        let volume2=new quantityMeasurement(unit.ML,1000)
        let ans=volume1.addition(volume2)
        assert.equal(ans,2)
    })
})

describe("Weight compare test case",function(){
    //TEST CASE FOR COMPARE 1 KG AND 1000 GRAMS
    it("should return equal when 1 kg and 1000 grams",function(){
        let weight1=new quantityMeasurement(unit.KILOGRAMS,1)
        let weight2=new quantityMeasurement(unit.GRAMS,1000)
        let ans=weight1.compare(weight2)
        assert.equal(ans,true)
    })
    //TEST CASE FOR COMPARE 1 TONNE AND 1000 KGS
    it("should return equal when 1 tonne and 1000 kgs",function(){
        let weight1=new quantityMeasurement(unit.TONNE,1)
        let weight2=new quantityMeasurement(unit.KILOGRAMS,1000)
        let ans=weight1.compare(weight2)
        assert.equal(ans,true)
    })
})

describe("Weight Addition test case",function(){
    //TEST CASE FOR ADD 1 TOONE AND 1000 GRAMS
    it("should return 1001 when 1 tonne and 1000 grams",function(){
        let weight1=new quantityMeasurement(unit.TONNE,1)
        let weight2=new quantityMeasurement(unit.GRAMS,1000)
        let ans=weight1.addition(weight2)
        assert.equal(ans,1001)
    })
})

describe('Temprature Compare test cases', function () {
    //TEST CASE FOR COMPARE 1 F AND 1 F
    it('should return equal when of 1 fara and 1 fara.', function () {
      let temprature1 = new quantityMeasurement(unit.FAHRENHEIT, 1);
      let temprature2 = new quantityMeasurement(unit.FAHRENHEIT, 1);
      let ans = temprature1.compareTemprature(temprature2);
      assert.equal(ans, true);
    });
    //TEST CASE FOR COMPARE 1 F AND 0 F
    it('should return equal when of 1 fara and 0 fara.', function () {
      let temprature1 = new quantityMeasurement(unit.FAHRENHEIT, 1);
      let temprature2 = new quantityMeasurement(unit.FAHRENHEIT, 0);
      let ans = temprature1.compareTemprature(temprature2);
      assert.notEqual(ans, true);
    });
    //TEST CASE FOR COMPARE 1 F AND 100 C
    it('should return equal when of 1 fara and -17.22 celcious.', function () {
      let temprature1 = new quantityMeasurement(unit.FAHRENHEIT, 212);
      let temprature2 = new quantityMeasurement(unit.CELSIUS, 100);
      let ans = temprature1.compareTemprature(temprature2);
      assert.equal(ans, true);
    });
    //TEST CASE FOR COMPARE 50 F AND 10 C
    it('should return equal when of 50 fara and 10 celcious.', function () {
      let temprature1 = new quantityMeasurement(unit.FAHRENHEIT, 50);
      let temprature2 = new quantityMeasurement(unit.CELSIUS, 10);
      let ans = temprature1.compareTemprature(temprature2);
      assert.equal(ans, true);
    });
});