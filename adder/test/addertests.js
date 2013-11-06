var sut = require("../src/adder"),
	should = require("should");

describe("Adder will sum numbers in a comma separated string", function(){
	it("Empty string returns 0", function(){
		sut.add("").should.equal(0);
	});

	it("Single number in string returns the number", function(){
		sut.add("1").should.equal(1);
		sut.add("2").should.equal(2);
	});

	it("Two numbers in string separated by comma returns sum", function(){
		sut.add("1,2").should.equal(3);
		sut.add("6,1").should.equal(7);
		sut.add("1,2,3,4,5").should.equal(15);
	});


	it("Two numbers in string separated by comma returns sum", function(){
		sut.add("1\n2").should.equal(3);
	});

	it("Seperated by newline or comma is OK", function(){
		sut.add("1,2\n3,4,5").should.equal(15);
	});

	it("Custom delimiter is OK too", function(){
		sut.add("//*\n1*2").should.equal(3);
	});

});

describe("Adder will sum numbers in a comma separated string", function(){
	it("Negative number is parsed correctly", function(){
		sut.convertToInt("-11").should.equal(-11);
	});
});