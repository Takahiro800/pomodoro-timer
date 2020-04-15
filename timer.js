let TIME = 10;
const ONE_MSEC = 1000;

let TIMER = setInterval(
  function() {
    console.log( TIME );
    TIME--;
    if ( TIME < 0 ) {
      clearInterval( TIMER )
    }
  },
  ONE_MSEC
);