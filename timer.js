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