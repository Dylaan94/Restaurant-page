let menuPageTest = () => {
    console.log("Menu Page Running")
}

let loadMenuPage = () => {
    let otherContent = document.getElementById('otherContent');
    otherContent.innerHTML = 'Menu'
}

export {menuPageTest,
        loadMenuPage}