$(document).ready(function () {
    var count = 1;
    win = [
        [1, 2, 3],
        [1, 4, 7],
        [1, 5, 9],
        [7, 5, 3],
        [7, 8, 9],
        [3, 6, 9],
        [2, 5, 8],
        [4, 5, 6]
    ];
    var playerMoves = [];
    var computerMoves = [];
    for (i = 0; i < win.length; i++) {
        for (j = 0; j < win[i].length; j++) {

        }
    }
    $('.cell').click(function () {
        if ($(this).html() === '')
        {
            count++;
            //  if (count % 2 === 0) {
            playerMoves.push($(this).attr('id'));
            $(this).html('X');
            checkWin(playerMoves, count);
            checkDraw(count);
            //   } else {
            //     computerMoves.push($(this).attr('id'));
            //      $(this).html('O');
            count++;
            computerTurn(computerMoves);
            checkWin(computerMoves, count);
            checkDraw(count);
            //  }
        }
    });

});
var checkWin = function (array, turn) {
    var matches;
    for (i = 0; i < win.length; i++) {
        // console.log('Сейчас проверяется ' + i + ' вариант. ');
        matches = 0;
        for (j = 0; j < win[i].length; j++) {
            //  console.log('Провряем число ' + win[i][j] + '.');
            for (n = 0; n < array.length; n++) {
                //console.log('С числом' + array[n] + '.');
                if (array[n] == win[i][j]) {
                    // console.log('Они совпали');
                    matches++;
                }
            }
        }
        if (matches === 3) {
            if (turn % 2 === 0) {
                alert('Player win');
            } else {
                alert('Computer win');
            }
            window.location.reload();
            throw "stop";
            
        }
    }
};
var checkDraw = function (count) {
    if (count === 10) {
        alert('Draw');
        window.location.reload();
    }
};

var computerTurn = function (computerMoves) {
    var repeat = true;
    for (i = 0; i < win.length; i++) {
        if (repeat) {
            for (j = 0; j < win[i].length; j++) {
                if ($("#" + win[i][j]).html() === "") {
                    // alert('яб сюда походил ' + win[i][j]);
                    computerMoves.push(win[i][j]);
                    $("#" + win[i][j]).html('O');
                    repeat = false;
                    break;
                }
            }
        } else {
            break;
        }
    }
//    var repeat = true;
//    var current = 1;
//    while (repeat === true && current < 10) {
//        if ($("#" + current).html() === "") {
//            //  alert('яб сюда походил ' + current);
//            computerMoves.push(current);
//            $("#" + current).html('O');
//            repeat = false;
//        }
//        current++;
//    }
}