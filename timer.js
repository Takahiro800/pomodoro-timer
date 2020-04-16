let TIME = 10;
const ONE_MSEC = 1000;

let TIMER = setInterval(
  function() { Count_Down() }, ONE_MSEC);



//カウントダウン
let Count_Down = ()=> {
  // ここで時間をHTMLに渡す
  Count_Show(TIME);
  //時間を減らす
  TIME--;

  if (TIME < 0) {
    clearInterval(TIMER);
    //onとoffの切り替え
  }
}
//これを１秒ごとに更新する！

// ボタン表示
  let Button_Status_Setter = (is_idle) => {
    const text = is_idle ? 'START' : 'CLEAR';
    const back_ground_color = is_idle ? 'red' : 'green';
    const border_color = is_idle ? '#ff7070' : '#308030';
    button_text.innerHTML = text;

    const button = document.getElementById("button_circle");
    button.style.backgroundColor = back_ground_color;
    button.style.borderBottomColor = border_color;
  }


//残り時間の表示
  let Count_Show = (time) => {
    let minute = parseInt( time / 60 );
    let second = parseInt( time % 60 );
    minute_shower.innerHTML = minute;
    second_shower.innerHTML = second;
  }

  let Swich_Count = ()=> {
    //on,offの切り替え
    IS_WORKING = !IS_WORKIG;

  }

  let Timer_Setter = (is_working) => {
    if (is_working) {
      NOW_SET++;
      TIME = WORK_TIME;
    }
    else {
      if (NOW_SET >= WORK_BREAK_SET) {
        TIME = TEA_TIME;
        NOW_SET = 0;
      }
      else {
        TIME = BREAK_TIME;
      }
    }
    TIMER = serInterval(function() { Count_Down() }, CLOCK_MESC);
  }