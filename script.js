let colorCode = document.querySelector("#colorCode");
let toggleBtn = document.querySelector("#toggleBtn");


function randomColor() {
    let colorChar = '0123456789abcdef';
    let colorHash = '#';
    for (let i = 0; i < 6; i++) {
        colorHash += colorChar[Math.floor(Math.random() * 16)]
    }
    colorCode.textContent = colorHash;
    document.body.style.backgroundColor = colorHash;

    // Stored in Localstorage
    localStorage.setItem('colorValue', colorHash)
}

// Retrive color code from localstorage and show on load

window.addEventListener('load', () => {
    let savedColor = localStorage.getItem('colorValue');
    if (savedColor) {
        colorCode.textContent = savedColor;
        document.body.style.backgroundColor = savedColor;
    }else{
        randomColor();
    }
})

toggleBtn.addEventListener('click', randomColor);
