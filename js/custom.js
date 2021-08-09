$(document).ready(function() {    

	//Tabs function for Signup page
	$('#tabs li a:not(:first)').addClass('inactive');
	$('.container').hide();
	$('.container:first').show();
	    
	$('#tabs li a').click(function(){
	    var t = $(this).attr('id');
	  if($(this).hasClass('inactive')){ //this is the start of our condition 
	    $('#tabs li a').addClass('inactive');           
	    $(this).removeClass('inactive');
	    
	    $('.container').hide();
	    $('#'+ t + 'C').fadeIn('slow');
	 }
	});

//Tabs function for Landing page
	$('#tabsLanding li a:not(:first)').addClass('inactive');
	$('.container').hide();
	$('.container:first').show();
	    
	$('#tabsLanding li a').click(function(){
	    var t = $(this).attr('id');
	  if($(this).hasClass('inactive')){ //this is the start of our condition 
	    $('#tabsLanding li a').addClass('inactive');           
	    $(this).removeClass('inactive');
	    
	    $('.container').hide();
	    $('#'+ t + 'C').fadeIn('slow');
	 }
	});

	
	$('#owl-carousel-prdDetails .item').click(function(){       
      $('#owl-carousel-prdDetails .item').removeClass('currentBg');
      $(this).addClass('currentBg');
    });

     $('#owl-carousel-prdDetails img').click(function(){
     var thumbSrc = $('.carMainImg').attr('src');
     // Grab img#largeImage src attribute
     var largeSrc = $('#largeImage').attr('src');
      // Use variables to replace src instead of relying on file names.
      $('#largeImage').attr('src',$(this).attr('src').replace(thumbSrc,largeSrc));
      $('#description').html($(this).attr('alt'));
    });      

     


	    $(function(){
	        $(".zoom-box img").jqZoom({
	            selectorWidth: 30,
	            selectorHeight: 30,
	            viewerWidth: 400,
	            viewerHeight: 300
	        });
	    })	

});

 	 $(function(){
        $(".heartIcn").click(function() {         
          if ($(this).attr("class") == "heartIcn") {
            this.src = this.src.replace("_off","_on");
          } else {
            this.src = this.src.replace("_on","_off");
          }
          $(this).toggleClass("on");
        });
      }); 

	var slider = document.getElementById("myRange");
	var output = document.getElementById("priceDemo");
	output.innerHTML = slider.value;

	slider.oninput = function() {
	  output.innerHTML = this.value;
	}
