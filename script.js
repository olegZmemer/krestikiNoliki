window.onload = function () {
    for (let i = 0; i < 9; i++) {
        document.querySelector('.block').innerHTML += '<div class = "cell"></div>';
    }

    let cells = document.getElementsByClassName('cell');

    function ai() {
        for (let i = 0; i < cells.length; i++) {
            let randomNumber = Math.floor(Math.random() * 9);
            if (!cells[randomNumber].textContent) {
                cells[randomNumber].innerHTML = 'X';
                break;
            }
            continue;
        }
    }

    function cleanCells() {
        for (let i = 0; i < cells.length; i++) {
            cells[i].innerHTML = ''
        }
    }

    function winnerCheck() {
        if ((cells[0].textContent == 'X' && cells[1].textContent == 'X' && cells[2].textContent == 'X') ||
            (cells[3].textContent == 'X' && cells[4].textContent == 'X' && cells[5].textContent == 'X') ||
            (cells[6].textContent == 'X' && cells[7].textContent == 'X' && cells[8].textContent == 'X') ||
            (cells[0].textContent == 'X' && cells[4].textContent == 'X' && cells[8].textContent == 'X') ||
            (cells[2].textContent == 'X' && cells[4].textContent == 'X' && cells[6].textContent == 'X') ||
            (cells[1].textContent == 'X' && cells[3].textContent == 'X' && cells[6].textContent == 'X') ||
            (cells[1].textContent == 'X' && cells[4].textContent == 'X' && cells[7].textContent == 'X') ||
            (cells[2].textContent == 'X' && cells[5].textContent == 'X' && cells[8].textContent == 'X')) {
            alert('Вы проиграли :(');
            cleanCells()
        }
        if ((cells[0].textContent == 'O' && cells[1].textContent == 'O' && cells[2].textContent == 'O') ||
            (cells[3].textContent == 'O' && cells[4].textContent == 'O' && cells[5].textContent == 'O') ||
            (cells[6].textContent == 'O' && cells[7].textContent == 'O' && cells[8].textContent == 'O') ||
            (cells[0].textContent == 'O' && cells[4].textContent == 'O' && cells[8].textContent == 'O') ||
            (cells[2].textContent == 'O' && cells[4].textContent == 'O' && cells[6].textContent == 'O') ||
            (cells[1].textContent == 'O' && cells[3].textContent == 'O' && cells[6].textContent == 'O') ||
            (cells[1].textContent == 'O' && cells[4].textContent == 'O' && cells[7].textContent == 'O') ||
            (cells[2].textContent == 'O' && cells[5].textContent == 'O' && cells[8].textContent == 'O')) {
            alert('Вы выйграли :)');
            cleanCells()
        }
    }
    let block = document.querySelector('.block');
    block.addEventListener('click', function (e) {
        if (e.target.classList.contains('cell') && !e.target.textContent) {
            e.target.innerHTML = 'O';
            ai();
            winnerCheck();
        }
    });
}