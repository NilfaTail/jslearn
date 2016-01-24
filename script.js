

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

    document.getElementById('message').appendChild(newTable);

}

