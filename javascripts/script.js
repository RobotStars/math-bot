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
	$("#numbers > a").not("#clear,#clearall,#pi").click(function(){
		number += $(this).text();
		totaldiv.text(number);
		testNumLength(number);
	});
	$("#pi").click(function(){
		alert("Hey guys! I don't work. You should approximate pi.");
		pi = "this is going to blow up, you need an approximation of pi";
		number = pi.toString();
		newnumber = "";
		totaldiv.text(number);
		testNumLength(number);
	});
	$("#operators > a").not("#equals").click(function(){
		operator = $(this).text();
		newnumber = number;
		number = "";
		totaldiv.text("0");
	});
	$("#clear,#clearall").click(function(){
		number = "";
		totaldiv.text("0");
		if ($(this).attr("id") === "clearall") {
			newnumber = "";
		}
	});
	$("#equals").click(function(){
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
	});
});
