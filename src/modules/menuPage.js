let menuPageTest = () => {
    console.log("Menu Page Running")
}

let loadMenuPage = () => {
    let divArray = ['menuTitle', 'menuContainer']
    let otherContent = document.getElementById('otherContent')
    for (let i = 0; i < divArray.length; i++) {
        let div = document.createElement('div');
        div.id = divArray[i];
        div.className = divArray[i];
        otherContent.appendChild(div);
    }
    console.log(otherContent);

    renderMenuPage()
}

let renderMenuPage = () => {
    let menuTitle = document.getElementById('menuTitle')
    let menuContainer = document.getElementById('menuContainer')

    menuTitle.innerHTML = 'Menu'
    menuContainer.innerHTML = 'Menu Container'
}
export {menuPageTest,
        loadMenuPage}