$(document).ready(function(){
	/*var n = Math.floor((Math.random() * 2));
	var x = "url("+n+".png)";
	$("body").css("background-image",x);
	if(n==0){
		$("body").css("color", "#696969");
		$("#text").css("text-shadow", "1px 0 black");
	}*/
	var n = Math.floor((Math.random() * 3));
	var pic1 = document.getElementById("pic1");
	var pic2 = document.getElementById("pic2");
	if(n==1){
		pic1.src = "pic3.jpg";
	}
	else if(n==2){
		pic2.src = "pic3.jpg";
	}
	var clicked;
	$(".email").append(email());
	$(".email2").append(email2());
	$("a").click(function(){
		if($(this).attr("class")=="nav_link"){
			clean();
			a=$(this).attr("id");
			clicked = a;
			a+="page";
			b="#"+a;
			$(b).css('display', 'inline-block');
			$("div").each(function(){
				if($(this).attr("class")=="page" && $(this).attr("id")!=a){
					$(this).css('display', 'none');
				}
			})
			$(this).css("color","#FF0000");
		}
	});
	$("a").mouseenter(function(){
			if($(this).attr("class")=="nav_link" && $(this).attr("id")!=clicked){	
				$("body").css('cursor','pointer');
				$(this).css("text-shadow","0.15vw 0 #FF0000");
			}
	});
	$("a").mouseleave(function(){
			if($(this).attr("class")=="nav_link"){
				$("body").css('cursor','');
				$(this).css("text-shadow","0vw 0 white");
			}
	});

	$(".show_seminar").mouseenter(function(){
		$("body").css('cursor','pointer');
	});
	$(".show_seminar").mouseleave(function(){
		$("body").css('cursor','');
	});
	$(".show_seminar").click(function(){
		x=$(this).attr("id");
		y=x.split("_")[2];
		z="#seminar_"+y;
		$(z).toggle();
	});

	$(".show_senior").mouseenter(function(){
		$("body").css('cursor','pointer');
	});
	$(".show_senior").mouseleave(function(){
		$("body").css('cursor','');
	});
	$(".show_senior").click(function(){
		x=$(this).attr("id");
		y=x.split("_")[2];
		z="#senior_"+y;
		$(z).toggle();
	});

	$(".show_senior1_abstract").mouseenter(function(){
		$("body").css('cursor','pointer');
	});
	$(".show_senior1_abstract").mouseleave(function(){
			$("body").css('cursor','');
	});
	$(".show_senior1_abstract").click(function(){
		$("#senior1_abstract").toggle();
	});
	
	$(".show_senior2_abstract").mouseenter(function(){
		$("body").css('cursor','pointer');
	});
	$(".show_senior2_abstract").mouseleave(function(){
			$("body").css('cursor','');
	});
	$(".show_senior2_abstract").click(function(){
		$("#senior2_abstract").toggle();
	});
function clean(){
		$("a").each(function(){
			if($(this).attr("class")=="nav_link"){
				$(this).css("color","white");
			}
		})
	}
});
function email2(){
	var email = "akebeci17";
	email = email + " at";
	email = email + " ku";
	email = email + " dot";
	email = email + " edu";
	email = email + " dot";
	email = email + " tr";
	return email;
}
function email(){
	var email = "ahmet";
	email = email + " dot";
	email = email + " kebeci";
	email = email + " at";
	email = email + " ug";
	email = email + " dot";
	email = email + " bilkent";
	email = email + " dot";
	email = email + " edu";
	email = email + " dot";
	email = email + " tr";
	return email;
}