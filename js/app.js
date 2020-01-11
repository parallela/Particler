(function ($){
    $.fn.counter = function() {
      const $this = $(this),
      numberFrom = parseInt($this.attr('data-from')),
      numberTo = parseInt($this.attr('data-to')),
      delta = numberTo - numberFrom,
      deltaPositive = delta > 0 ? 1 : 0,
      time = parseInt($this.attr('data-time')),
      changeTime = 10;
      
      let currentNumber = numberFrom,
      value = delta*changeTime/time;
      var interval1;
      const changeNumber = () => {
        currentNumber += value;
        //checks if currentNumber reached numberTo
        (deltaPositive && currentNumber >= numberTo) || (!deltaPositive &&currentNumber<= numberTo) ? currentNumber=numberTo : currentNumber;
        this.text(parseInt(currentNumber));
        currentNumber == numberTo ? clearInterval(interval1) : currentNumber;  
      }
  
      interval1 = setInterval(changeNumber,changeTime);
    }
  }(jQuery));
$(document).ready(function() {

    $('.count-up').counter();
    $('.count1').counter();
    $('.count2').counter();
    $('.count3').counter();
    
    new WOW().init();
    
    setTimeout(function () {
        $('.count5').counter();
    }, 3000);

    particlesJS.load('particles', '/js/particles.json');


    // Typing
    let typingText = ['OnePage template','Responsive on all mobile devices','Made with love by Lubomir Stankov'];
    var typed = new Typed('text', {strings:typingText,typeSpeed: 30,backSpeed: 20, smartBackspace: true,loop: true})
    
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
        scrollHorizontally: true,
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);
});