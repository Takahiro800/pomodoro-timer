let TIME = 10;
const ONE_MSEC = 1000;

let TIMER = setInterval(
  function() { Count_Down() }, ONE_MSEC);

function Count_Down() {
  time_text.innerHTML = TIME;
    TIME--;
    if ( TIME < 0 ) {
      clearInterval( TIMER );
}
}

let is_odd_click = fales;

function Click_Button() {
  is_odd_click = !is_odd_click;

  if (is_odd_click) {

  }
  else {

  }
};