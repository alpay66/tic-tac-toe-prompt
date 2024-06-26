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