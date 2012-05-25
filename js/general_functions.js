var speed = 1000 ;
var lastshowedrss = false ;
var windowHeightLimit = 610;
var header_links_shown = true;

var iiiiii = 0;

var items = ["index","work","projects","company","contactus"] ;

function writerss(){
	if ((typeof(newstitles) != "undefined")){
		$("#newsticker").text(newstitles[iiiiii]);
		iiiiii = iiiiii+1 ;
		if (iiiiii == newstitles.length) iiiiii = 0; 	
	}
}

function showrss(){
	if (lastshowedrss){
		$("#newsticker").fadeOut(speed,function(){
			lastshowedrss = false ;
		}) ;
	} else {
		writerss();
		$("#newsticker").fadeIn(speed, function() {
		lastshowedrss = true ;
		});		
	}    
}

function initmenu(){
	for (i=0;i<items.length;i++){
		var temp = $('.'+items[i]+"_foo") ;
		if (temp.length == 1){
			var eee = $('#'+items[i]) ;
			eee.fadeTo("slow", 0.33);
		}
        var temp = $('.'+items[i]+"_foo") ;
		if (temp.length == 1){
			var eee1 = $('#'+items[i]+'1') ;
			eee1.fadeTo("slow", 0.33);
		}
	}
}

function windowHeight_initCheck(){
    var windowHeight = $(window).height();
    if (windowHeight > windowHeightLimit) {
        $('.header_links').empty();
        header_links_shown = false ;
    }
}

function windowHeight_check(){
    var windowHeight = $(window).height();
    if (windowHeight < windowHeightLimit) {
        if (header_links_shown == false) {
            var temp = $('.englishlanguage') ;
            if (temp.length == 1) {
                $('#index1').append('Home &raquo;');
                $('#work1').append('Work &raquo;');
                $('#projects1').append('Projects &raquo;');
                $('#company1').append('Company &raquo;');
                $('#contactus1').append('Contact us &raquo;');
                header_links_shown = true;
            }
            else {
                $('#index1').append('Home &raquo;');
                $('#work1').append('Attivit&agrave; &raquo;');
                $('#projects1').append('Progetti &raquo;');
                $('#company1').append('Societ&agrave; &raquo;');
                $('#contactus1').append('Contatti &raquo;');
                header_links_shown = true;
            }
        }
    }
    else {
        $('.header_links').empty();
        header_links_shown = false;
    }
}

function pagelangcheck(){
    var temp = $('.blognews_container') ;
    var temp2 = $('.clausole_ita') ;
    if (temp.length == 1) {
        $('.language_link_container').empty();
    }
    if (temp2.length == 1) {
        $('.language_link_container').empty();
    }
}

function general_init(){
	initmenu();
	showrss();
	setInterval(showrss, 6000);
    windowHeight_initCheck();
    pagelangcheck();
}

$(document).ready(general_init);

$(window).bind("resize", function(){
    windowHeight_check();  
});
