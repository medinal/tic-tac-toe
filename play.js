var turnNum = 1;
var circleWins = 0;
var crossWins = 0;

$('#play').click(begin);

$('#clear').click(endGame);

function begin(){
  $('#play').attr("disabled", "disabled");
  $('#circle').css('visibility','hidden')
  $('#cross').css('visibility','')
  createBoard();
}

function endGame(){
  $('#play').removeAttr("disabled");
  $('.game-board').empty();
  $('.who-won').empty();
  turnNum = 1;
}

function createBoard(){
  var boxNum = 1;
  for (i=1; i<=3; i++){
    for (j=1; j<=3; j++){
       $('.game-board').append('<div class="box box-num' + `${boxNum}` + ' col-xs-4 center-block row' + `${i}` + ' col' + `${j}` + '"></div>');
       boxNum++;
    };
  };
  populateBoard();
}

function populateBoard(){
  for (i=0; i<9; i++){
    $('.box').eq(i).on('click', turn);
  };
};

function turn(event){
  if (turnNum%2===0){
    $(event.target).eq(0).append('<img class="img-responsive" src="circle.png">');
    $('#circle').css('visibility','hidden')
    $('#cross').css('visibility','')
    $(event.target).eq(0).addClass("circle");
    $(event.target).eq(0).off();
    turnNum++;
  } else {
    $(event.target).eq(0).append('<img class="img-responsive" src="cross.png">');
    $('#cross').css('visibility','hidden')
    $('#circle').css('visibility','')
    $(event.target).eq(0).addClass("cross");
    $(event.target).eq(0).off();
    turnNum++;
  }
  if (turnNum>=5){
    checkWin();
  }
}

function checkWin(){
  for (i=1; i<=3; i++){
    if ($('.row'+`${i}` + ".cross").length === 3){
      $('.who-won').text("Cross Wins!")
      crossWins++;
      $('.cross-wins').text("Cross: " + crossWins);
      $('.box').off();
    } else if ($('.row'+`${i}` + ".circle").length === 3){
      $('.who-won').text("Circle Wins!")
      circleWins++;
      $('.circle-wins').text("Circle: " + circleWins);
      $('.box').off();
    } else if ($('.col'+`${i}` + ".cross").length === 3){
      $('.who-won').text("Cross Wins!")
      crossWins++;
      $('.cross-wins').text("Cross: " + crossWins);
      $('.box').off();
    } else if ($('.col'+`${i}` + ".circle").length === 3){
      $('.who-won').text("Circle Wins!")
      circleWins++;
      $('.circle-wins').text("Circle: " + circleWins);
      $('.box').off();
    }
  }
  if ($('.box-num1.cross, .box-num5.cross, .box-num9.cross').length === 3){
    $('.who-won').text("Cross Wins!")
    crossWins++;
    $('.cross-wins').text("Cross: " + crossWins);
    $('.box').off();
  } else if ($('.box-num1.circle, .box-num5.circle, .box-num9.circle').length === 3){
    $('.who-won').text("Circle Wins!")
    circleWins++;
    $('.circle-wins').text("Circle: " + circleWins);
    $('.box').off();
  } else if ($('.box-num3.cross, .box-num5.cross, .box-num7.cross').length === 3){
    $('.who-won').text("Cross Wins!")
    crossWins++;
    $('.cross-wins').text("Cross: " + crossWins);
    $('.box').off();
  } else if ($('.box-num3.circle, .box-num5.circle, .box-num7.circle').length === 3){
    $('.who-won').text("Circle Wins!")
    circleWins++;
    $('.circle-wins').text("Circle: " + circleWins);
     $('.box').off();
  } else if ($('.circle, .cross').length === 9){
    $('.who-won').text("It's a tie!")
    $('.box').off();
  }
}
