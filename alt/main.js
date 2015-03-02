$(document).ready(function() 
{

// scroll handler
var scrollToDiv = function( id )
{
    // grab the element to scroll to based on the name
    var elem = $("div[id='"+ id +"']");
    // if that didn't work, look for an element with our ID
    if ( typeof( elem.offset() ) === "undefined" )
    {
    	elem = $("#"+id);
    }
    // if the destination element exists
    if ( typeof( elem.offset() ) !== "undefined" )
    {
      // do the scroll
      $('html,body').stop();
      $('html, body').animate(
      {
      	scrollTop: elem.offset().top-50
      }, 1000 );
    }
  };

  var dropMenu = function()
  {
	//$('.dropdown-menu').dropdown('toggle');
	$('.dropdown').addClass('open');
}

  // bind to click event
  $("nav a").click(function( event )
  {
  	event.stopPropagation();
    // only do this if it's an anchor link
    if ( $(this).attr("href").match("#") )
    {
      // cancel default event propagation
      event.preventDefault();
      // scroll to the location
      var href = $(this).attr('href').replace('#', '')
      scrollToDiv( href );
      if (href == "donate") {
      	dropMenu();
      };
    }
  });

  var $starter = $(window).height()-(50);
  $(window).scroll(function()
  {
    if ($('#fullScreen').length)
    {
      if ($(window).scrollTop()>= $starter)
      {
        $('#mainHeader').slideDown();
      } 
      else if ($(window).scrollTop()==0)
      {
        $('#mainHeader').slideUp(1000);
      }
    }
  }); 
  //Check if navbar should be hid on page refresh
  var $starter = $(window).height()-(50);
  if ($('#fullScreen').length)
  {
    if ($(window).scrollTop()>= $starter)
    {
      $('#mainHeader').slideDown(0);
    } 
    else if ($(window).scrollTop()==0)
    {
      $('#mainHeader').slideUp(0);
    }
  }

    $('#sponsor-link').click(function()
  {
    $('#sponsor-modal').modal('show');
  });

    $('#schedule-link').click(function()
  {
    $('#schedule-modal').modal('show');
  });


});
