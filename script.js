$(document).ready(function(){
	var clicked;
	$(".email").append(email());
	function email(){
		var email = "akebeci";
		email = email + "17";
		email = email + " at";
		email = email + " ku";
		email = email + " dot";
		email = email + " edu";
		email = email + " dot";
		email = email + " tr";
		return email;
}

	function email_(){
		var email = "akebeci";
		email = email + "17";
		email = email + "@";
		email = email + "ku";
		email = email + ".";
		email = email + "edu";
		email = email + ".";
		email = email + "tr";
		return email;
}

	$(".copy-paste-symbol").click(function(){
		var $temp = $("<input>");
		$("body").append($temp);
		$temp.val(email_()).select();
		document.execCommand("copy");
		$temp.remove();
	});

})
