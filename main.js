var isNumber = function(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};

// var phone = (prompt('Please enter your 10 digit phone number: (include the dashes... e.g. xxx-xxx-xxxx'));
// var defaultAnswer = true; // Trigger for final "Number passes" message

// if (phone.charAt(3) !== '-' && phone.charAt(7) !== '-') {
// 	alert('Nice try, but ' + phone + " is missing the dashes in the correct places...");
// 	defaultAnswer = false;
// }
// else if	(phone.length != 12) {
// 	alert("Oops, you didn't enter the right number of digits");
// 	defaultAnswer = false;
// }
// else {
// 	for (var i=0; i < 3; i++) {
// 		if (!isNumber(phone.charAt(i))) {	
// 		alert("Sorry... your area code needs to only contain numbers");
// 		defaultAnswer = false;
// 		break;
// 		}
// 	}
// 	for (var i=4; i<7; i++) {
// 		if (!isNumber(phone.charAt(i))) {
// 		alert("Sorry... your prefix needs to contain only numbers");
// 		defaultAnswer = false;
// 		break;
// 		}
// 	}
// 	for (var i=8; i<12; i++) {
// 		if (!isNumber(phone.charAt(i))) {
// 		alert("Sorry... the end of you number contains a non-number... Try again!")
// 		defaultAnswer = false;
// 		break;
// 		}
// 	}
// }

// if (defaultAnswer === true) {
// 	alert('Congratulations! It appears that ' + phone + ' is a valid phone number!');
// }

// var bDate = prompt("Tell me your birthdate using the format XX/XX/XXXX...");
// alert('Your entry is valid?' + (bDate.charAt(2) === "/" && bDate.charAt(5) === "/"));

// var zip = prompt('Zip Code?');
// alert("Your entry is " + (zip.length === 5 || (zip.length === 10 && zip.charAt(5) === '-')));

var stateAbbrv = prompt('State Code?');
var pos1 = stateAbbrv.charAt(0);
var pos2 = stateAbbrv.charAt(1);

alert(stateAbbrv.length === 2 && pos1 === pos1.toUpperCase() && pos2 === pos2.toUpperCase() && isNaN(pos1) && isNaN(pos2));

// var married = prompt('Married?');

// alert(married.toUpperCase() === "YES" || married.toUpperCase() === "NO");



