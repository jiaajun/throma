function onLoad() {
    window.scroll(0, 0);
    document.getElementById('toggle1').focus({preventScroll:true});
}

function toggleText1() {
    const btnText = document.getElementById('toggletext');
    const text = btnText.innerHTML
    if (text === 'We conduct in-depth research, reviewed monthly, on organisations to ensure that any money given will be put to the upmost use. <br><br>100% of donations towards us will go towards conservation efforts towards endengered species. <br><br>We will also be providing proof of your donation to your email address. <br><button>donate now</button>'){
        //pass
    }
    else{
        btnText.innerHTML = 'We conduct in-depth research, reviewed monthly, on organisations to ensure that any money given will be put to the upmost use. <br><br>100% of donations towards us will go towards conservation efforts towards endengered species. <br><br>We will also be providing proof of your donation to your email address. <br><button>donate now</button>'
    }
}

function toggleText2() {
    const btnText = document.getElementById('toggletext');
    const text = btnText.innerHTML
    if (text === 'Button text 2 here'){
        //pass
    }
    else{
        btnText.innerHTML = 'Button text 2 here'
    }
}

function toggleText3() {
    const btnText = document.getElementById('toggletext');
    const text = btnText.innerHTML
    if (text === 'Button text 3 here'){
        //pass
    }
    else{
        btnText.innerHTML = 'Button text 3 here'
    }
}

var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
