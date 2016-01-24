
function createTable() {

    var N = prompt("Введите N: "),
        M = prompt("Введите M: ");

    var alfaBeth    = new Array('А', 'Б', 'В', 'Г', 'Д', 'Е', 'ё', 'Ж', 'З', 'И', 'й',
                                'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф',
                                'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'ъ', 'Ы', 'ь', 'Э', 'Ю', 'Я'),
        colorBank   = new Array ('red', 'blue', 'yellow', 'brown', 'grey', 'aquamarine', 'white', 'coral', 'olive','green'),
        rand        = 0;

    console.log(rand);

    document.getElementById('message').innerHTML = 'Создаем таблицу размером: ' + N + 'х' + M;

    var newTable = document.createElement('table');
    var row,
        col;

    for ( var i = 0; i < N; i++ ){
        row = document.createElement('tr');
        newTable.appendChild(row);
        for (var j = 0; j < M; j++) {
            col = document.createElement('td');
            row.appendChild(col);

            rand = Math.floor(Math.random() * alfaBeth.length);
            col.innerHTML = alfaBeth[rand];

            rand = Math.floor(Math.random() * colorBank.length);
            col.style.backgroundColor = colorBank[rand];
        }
    }

    document.getElementById('myTable').appendChild(newTable);

}

function createChessTable() {

    var N = 8,
        M = 8,
        rows,
        cols;

    var chessDesk = document.createElement('table');
    var stringArray = new Array('A', 'B', 'C', 'D', 'E', 'F', 'H', 'G');

    for (var i = 0; i < N; i++) {
        rows = document.createElement('tr');
        chessDesk.appendChild(rows);


        for (var j = 0; j < M; j++) {
            cols = document.createElement('td');
            rows.appendChild(cols);

            cols.innerText = stringArray[i]+ '' + (j+1);

            if (i%2) {
                cols.style.backgroundColor = (j%2) && '#F5F5DC' || '#583434';
                cols.style.color = (j%2) && 'black' || 'white';
            } else {
                cols.style.backgroundColor = (j%2) && '#583434' || '#F5F5DC';
                cols.style.color = (j%2) && 'white' || 'black';
            }
        }
    }

    document.getElementById('myGame').appendChild(chessDesk);

}

function selectCell () {
    var elem = document.getElementById('myGame').firstElementChild;

    if (target.tagName != 'TD') {
        return;
    }

    console.log(elem);

    elem.onclick = function(event) {
        var target = event.target;
        console.log(target);

        document.getElementById('infoCell').innerText = target.textContent;

        if (target.classList.contains('selected')) {
            target.classList.remove('selected');
        } else {
            target.classList.add('selected');
        }


    }

}


window.onload = function() {
    createChessTable();
    selectCell();
};