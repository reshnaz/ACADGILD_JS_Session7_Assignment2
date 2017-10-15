// helptext function is called on clicking any of the provided html input fields .

// We are using closure concept to display teh helpful text.

function helptext(idValue){
	var helpFunc=displayHelpText(idValue);
	helpFunc();  // Help text is displayed based on return value from displayHelpText function.
}

	function displayHelpText(idVal) {
		function display(){
		if(idVal=="Name"){
			document.getElementById('helpBlock').innerHTML="Please input the username";
		}
		if(idVal=="Age"){
			document.getElementById('helpBlock').innerHTML="Please input the age";
		}
		if(idVal=="City"){
			document.getElementById('helpBlock').innerHTML="Please input the city";
		}
	};
	return display;
}
