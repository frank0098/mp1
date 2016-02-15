// var divs = document.getElementsByTagName('div');
// for(var i=0; i<divs.length; i++) {
//   divs[i].addEventListener("click", highlightThis);
  
//   divs[i].addEventListener("click", highlightThis, true);
//   divs[i].addEventListener("click", highlightThis, false);
// }

// function highlightThis(event) {
//     //event.stopPropagation();

//     var backgroundColor = this.style.backgroundColor;
//     this.style.backgroundColor='yellow';
//     alert(this.className);
//     this.style.backgroundColor=backgroundColor;
// }

$(window).scroll(function(){

        var cur_pos = $(document).scrollTop();

        if (cur_pos >= $(document).height()-$(window).height()-50){
          var total =  $('#navbar a').length;
          $('#navbar a').each(function (index){

            if(index===total-1)
            {
              $('#navbar').removeClass('active');
              $(this).addClass('active');
            }
            else
              $(this).removeClass('active');

       })
      }
      else
      {
          $('#navbar a').each(function (){

         var elem = $( $(this).attr("href"));
         var top_pos = elem.position().top;
         var height = elem.height();
         if(cur_pos>=top_pos && cur_pos<height+top_pos)
         {
          $('#navbar').removeClass('active');
            $(this).addClass('active');
          }
          else
            $(this).removeClass('active');
       })
  
      }

});


$(window).scroll(function(){

      var cur_pos = $(document).scrollTop();

    if(cur_pos>=1)
    {
      $('#navbar ul').stop().animate({height:"55px"});
      $('#navbar li a').stop().animate({padding:"16px"});

    }
    else
    {
      $('#navbar ul').stop().animate({height:"80px"});
      $('#navbar li a').stop().animate({padding:"25px"});
    }
 

});

$('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
     $(document).off("scroll");

    $('#navbar a').each(function (){
       $(this).removeClass('active');
     })
    $(this).addClass('active');
    var target = this.hash;
    // alert(this);
    $target = $(target);
    $('html, body').stop().animate({
          'scrollTop': $target.offset().top+1}, 'slow','swing',function(){
      window.location.hash = target;
      $(document).on("scroll",onScroll);

    });

})

function onScroll(){


var cur_pos = $(document).scrollTop();
   $('#navbar a').each(function (){

         var elem = $( $(this).attr("href"));
         var top_pos = elem.position().top;
         var height = elem.height();
         if(cur_pos>=top_pos && cur_pos<height+top_pos)
         {
          $('#navbar').removeClass('active');
            $(this).addClass('active');
          }
          else
            $(this).removeClass('active');
       })
};
//reference
//http://www.my-html-codes.com/easy-jquery-carousel

$(document).ready(
function(){

  var speed = 5000;
  var run = setInterval('rotate()',speed);

  var item_width = $('#slides li').outerWidth();
  var left_value = item_width*(-1);

  $('#slides li:first').before($('#slides li:last'));
  $('#slides ul').css({'left' : left_value});

   $('#prev').click(function(e) {

    e.preventDefault();
        //get the right position            
        var left_indent = parseInt($('#slides ul').css('left')) + item_width;
        //slide the item            
        $('#slides ul').animate({'left' : left_indent}, 200,function(){               
            $('#slides li:first').before($('#slides li:last'));  
            $('#slides ul').css({'left' : left_value});
        
        });           
        return false;
            
    });
    $('#next').click(function(e) {

      e.preventDefault();
        
        //get the right position
        var left_indent = parseInt($('#slides ul').css('left')) - item_width;
        
        //slide the item
        $('#slides ul').animate({'left' : left_indent}, 200, function () {
            
            $('#slides li:last').after($('#slides li:first'));                     
            
            $('#slides ul').css({'left' : left_value});
        
        });
                 
        return false;
        
    });        
    
    //if mouse hover,
    $('#slides').hover(
        
        function() {
            clearInterval(run);
        }, 
        function() {
            run = setInterval('rotate()', speed);    
        }
    ); 


}
  )

function rotate() {
    $('#next').click();
}


$(document).ready(function() {    
    $('a[name=modal]').click(function(e) {
        e.preventDefault();

        var cur_pos = $(document).scrollTop();
        // $('body').addClass('noscroll');
        // $('noscroll').css({'margin-top':'2500px'});
        // $('noscroll').css({'top':'2500px'});
        //Get the A tag
        var id = $(this).attr('href');
    
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();
    
        // $('#mask').css({'width':'100%','height':'100%'});
        $('#mask').css({'top':cur_pos});   
        $('#mask').fadeIn(1000);    
        $('#mask').fadeTo("slow",0.8);

        window.onscroll = function () { window.animate(window.scrollTo(0, cur_pos)); };    
    
        //Get the window height and width
        var winH = $(window).height();
        var winW = $(window).width();
              
        //Set the popup window to center
        $(id).css('top',  winH/2-$(id).height()/2);
        $(id).css('left', winW/2-$(id).width()/2);
    
        //transition effect
        $(id).fadeIn(2000); 


    
    });
    
    //if close button is clicked
    $('.window .close').click(function (e) {
        //Cancel the link behavior
        e.preventDefault();

        window.onscroll = function () {}; 


        $('#mask, .window').hide();
    });        
    
    //if mask is clicked
    $('#mask').click(function () {
        $(this).hide();
        window.onscroll = function () {}; 
        $('.window').hide();
    });            
    
});





