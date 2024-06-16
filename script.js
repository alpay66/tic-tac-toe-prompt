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
}

let currentPlayer = 'circle';

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

            tableHTML += `<td onclick="handleClick(${index}, this)">${symbol}</td>`;
        }
        tableHTML += '</tr>';
    }

    tableHTML += '</table>';
    content.innerHTML = tableHTML;
}

function handleClick(index, cell) {
    if (fields[index] === null) {
        fields[index] = currentPlayer;
        cell.innerHTML = currentPlayer === 'circle' ? generateCircleSVG() : generateCrossSVG();
        cell.onclick = null;
        currentPlayer = currentPlayer === 'circle' ? 'cross' : 'circle';
    }
}

function generateCircleSVG() {
    return /* html */ `
        <svg 
            width="70" 
            height="70" 
            viewBox="0 0 70 70" 
            xmlns="http://www.w3.org/2000/svg">

            <circle cx="35" cy="35" r="30" fill="none" stroke="#00B0EF" stroke-width="5">
                <animate 
                    attributeName="stroke-dasharray" 
                    from="0, 188.4" 
                    to="188.4, 188.4" 
                    dur="500ms" 
                    fill="freeze" />
            </circle>
        </svg>
    `;
}

function generateCrossSVG() {
    return /* html */ `
        <svg width="70" height="70" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
            <line x1="15" y1="15" x2="55" y2="55" stroke="#FFC000" stroke-width="5">
                <animate 
                    attributeName="stroke-dasharray" 
                    from="0, 56.57" 
                    to="56.57, 56.57" 
                    dur="500ms" 
                    fill="freeze" 
                    begin="0s"/>
            </line>
            <line x1="15" y1="55" x2="55" y2="15" stroke="#FFC000" stroke-width="5">
                <animate 
                    attributeName="stroke-dasharray" 
                    from="0, 56.57" 
                    to="56.57, 56.57" 
                    dur="500ms" 
                    fill="freeze" 
                    begin="0s"/>
            </line>
        </svg>
    `;
}





