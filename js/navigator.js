
var conta_page = 0;
var max_pages = 3;

$(".nav_slide_counter").text(conta_page+"/"+max_pages);	

function goPrev(){
		if(conta_page>0){
			conta_page -= 1;
			$(".nav_prev").removeClass("nav_disabled");
			$(".nav_next").removeClass("nav_disabled");
			$(".slide_container").attr("src","");
			$(".slide_container").prop("src","slides/"+conta_page+"/index.html")
			$(".nav_slide_counter").text(conta_page+"/"+max_pages);	
		}
		else{
			$(".nav_prev").addClass("nav_disabled");
			$(".nav_next").removeClass("nav_disabled");
			return false;
		}
		
}

function goNext(){
	    if(conta_page<max_pages){
	    	conta_page += 1;
	    	$(".nav_prev").removeClass("nav_disabled");
			$(".slide_container").attr("src","");
			$(".slide_container").prop("src","slides/"+conta_page+"/index.html")
			$(".nav_slide_counter").text(conta_page+"/"+max_pages);
			$(".title_section").text("Domanda "+conta_page+":");
		}else{
			$(".nav_next").addClass("nav_disabled");
			$(".nav_prev").removeClass("nav_disabled");
			return false;
		}	
}