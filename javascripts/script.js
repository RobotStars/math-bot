$(document).ready(function(){
	var testNumLength = function(number) {
		if (number.length > 9) {
			totaldiv.text(number.substr(number.length-9,9));
			if (number.length > 15) {
				number = "";
				totaldiv.text("Err");
			}
		}
	};
	var number = "";
	var newnumber = "";
	var operator = "";
	var totaldiv = $("#total");
	totaldiv.text("0");

	var equals = function() {
		var i_1 = Number(newnumber);
		var i_2 = Number(number);
		var answer = 0;
		if (operator == "+") {
			answer = i_1 + i_2;
		} else if (operator == "-") {
			answer = i_1 - i_2;
		} else if (operator == "/") {
			answer = i_1 / i_2;
		} else if (operator == "*") {
			answer = i_1 * i_2;
		}
		totaldiv.text(answer.toString());
		testNumLength(answer);
		number = "";
		newnumber = number;
		operator = "";
		return answer;
	};

	$("#numbers > a").not("#clear,#clearall,#pi").click(function(){
		number += $(this).text();
		totaldiv.text(number);
		testNumLength(number);
	});
	$("#operators > a").not("#equals").click(function(){
		// 1 + 1 +
		// when our operator value is empty string we save it
		// when our operator value is NOT empty string we save it AND we equals our previous values 
		if (operator != "") {
			newnumber = equals();
		} else {
			newnumber = number;
		}
		operator = $(this).text();
		number = "";
		totaldiv.text("0");
	});
	$("#clear,#clearall").click(function(){
		number = "";
		totaldiv.text("0");
		if ($(this).attr("id") === "clearall") {
			newnumber = "";
			operator  = "";
		}
	});
	$("#equals").click(function(){
		equals();
	});
});
