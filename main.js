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
            if (count % 2 === 0) {
                playerMoves.push($(this).attr('id'));
                $(this).html('X');
                checkWin(playerMoves);
                checkDraw(count);
            } else {
                computerMoves.push($(this).attr('id'));
                $(this).html('O');
                checkWin(computerMoves);
                checkDraw(count);
            }
        }
    });

});
var checkWin = function (array) {
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
            alert('you win');
            window.location.reload();
        }
    }
};
var checkDraw = function (count) {
    if (count == 10) {
        alert('Draw');
        window.location.reload();
    }
}