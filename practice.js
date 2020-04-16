let WORK_TIME = 1;
let TIMER;

let Button_Status_Setter = (is_idle) => {
  const text = is_idle ? 'START' : 'CLEAR';
  const back_ground_color = is_idle ? 'red' : 'green';
  const border_color = is_idle ? '#ff7070' : '#308030';
  button_text.innerHTML = text;

  const button = document.getElementById("button_circle");
  button.style.backgroundColor = back_ground_color;
  button.style.borderBottomColor = border_color;
}

let Count_Show = (time) => {
  let minute = parseInt( time / 60 );
  let second = parseInt( time % 60 );
  minute_shower.innerHTML = minute;
  second_shower.innerHTML = second;
}