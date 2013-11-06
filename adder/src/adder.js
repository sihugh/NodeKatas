var add = function(numbers)
{
	var separator = /[\n,]/;
	if(numbers)
	{
		if(numbers.indexOf("//") === 0)
		{
			separator = numbers[2];
			numbers = numbers.substring(4);
		}

		var numberArray = splitString(numbers, separator);
		var numbersAsInts = convertToInts(numberArray);
		var sum = 0;
		for(var i = 0;  i < numbersAsInts.length; i++)
		{
			var item = numbersAsInts[i];
			sum += item;
		}

		return sum;
	}
	return 0;
};

var splitString = function(stringToSplit, separator)
{
	var stringArray = stringToSplit.split(separator);
	return stringArray;
};

var convertToInts = function(numbersAsStringArray){
	var ints = [];
	numbersAsStringArray.forEach(function(s){
		var i = convertToInt(s);		
		ints.push(i);
	});
	return ints;
};


var convertToInt = function(numberInString)
{
	return parseInt(numberInString, 10);
};

exports.add = add;
exports.convertToInt = convertToInt;
exports.convertToInts = convertToInts;