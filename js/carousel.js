jQuery(document).ready(function() {
    var carousel = new jQuery('#mycarousel').jcarousel({
        vertical: true,
        scroll : 1, 
        size: $(".content_item").length,
        initCallback: initCarousel
    });
});

function initCarousel(carousel,state){
	if (state == "init"){
		var titles = $(".content_item_title") ;
		var images = $(".content_item_img") ;
		contents = $(".content_item") ;
		for (var i = 0; i < titles.length; i++){
			var ctitle = titles[i].innerHTML ;
			var imgpath = images[i].src ;
			var cid = contents[i].id ;
			carousel.add(i+1, '<img class="imgclick" onclick="imgclicked(\''+ cid +'\');" src="'+ imgpath +'" alt="'+ ctitle +'" />');
		}
   	}
   	carousel.size = titles.length ;
   	imgclicked(contents[0].id) ;
}

function imgclicked(elid){
	
		$("#"+elid).fadeIn('fast', function() {
	    			 // Animation complete
		});
		lastshowed = elid ;		
		
}
