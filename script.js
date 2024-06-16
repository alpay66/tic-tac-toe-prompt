let fields = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
];

let currentPlayer = 'circle';

let winningLine = null;

function init() {
    render();
}

function render() {
    let content = document.getElementById('content');
    let tableHTML = '<table>';

    for (let i = 0; i < 3; i++) {
        tableHTML += '<tr>';
        for (let j = 0; j < 3; j++) {
            const index = i * 3 + j;
            let symbol = '';

            if (fields[index] === 'circle') {
                symbol = generateCircleSVG();
            } else if (fields[index] === 'cross') {
                symbol = generateCrossSVG();
            }

            tableHTML += `<td id="cell-${index}" onclick="handleClick(${index}, this)">${symbol}</td>`;
        }
        tableHTML += '</tr>';
    }

    tableHTML += '</table>';
    content.innerHTML = tableHTML;

    if (winningLine) {
        winningLine.remove();
        winningLine = null;
    }
}

function restartGame() {
    // Setze alle Felder auf null zurück
fields = [
    null, null, null,
    null, null, null,
    null, null, null,
];

// Setze den aktuellen Spieler zurück
currentPlayer = 'circle';

// Rufe die render Funktion auf, um das Spielbrett neu zu rendern
render();
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (fields[a] && fields[a] === fields[b] && fields[a] === fields[c]) {
            return combination;
        }
    }
    return null;
}

function handleClick(index, cell) {
    if (fields[index] === null) {
        fields[index] = currentPlayer;
        cell.innerHTML = currentPlayer === 'circle' ? generateCircleSVG() : generateCrossSVG();
        cell.onclick = null;
        if (checkWinner()) {
            drawWinningLine();
            // Verzögerung für die SVG-Animation (500ms)
            setTimeout(() => {
                if (checkWinner()) {
                    alert(currentPlayer + ' wins!');
                }
            }, 500);
        } else if (fields.every(field => field !== null)) {
            setTimeout(() => alert('Draw!'), 500 );
        } else {
            currentPlayer = currentPlayer === 'circle' ? 'cross' : 'circle';
        }
    }
}

function drawWinningLine() {
    const combination = checkWinner();
    if (combination) {
        const cells = combination.map(index => document.getElementById(`cell-${index}`));
        const [start, , end] = cells;
        const startRect = start.getBoundingClientRect();
        const endRect = end.getBoundingClientRect();

        const line = document.createElement('div');
        line.style.position = 'absolute';
        line.style.backgroundColor = 'white';
        line.style.height = '5px';
        line.style.width = `${Math.hypot(endRect.left - startRect.left, endRect.top - startRect.top)}px`;
        line.style.transformOrigin = 'left';
        line.style.transform = `rotate(${Math.atan2(endRect.top - startRect.top, endRect.left - startRect.left) * 180 / Math.PI}deg)`;
        line.style.left = `${startRect.left + startRect.width / 2}px`;
        line.style.top = `${startRect.top + startRect.height / 2}px`;
        document.body.appendChild(line);

        winningLine = line;
    }
}

