// need to clean up variables, make more readable.

let menuPageTest = () => {
    console.log("Menu Page Running")
}

let loadMenuPage = () => {
    let divArray = ['menuTitle', 'menuContainer']
    let otherContent = document.getElementById('otherContent')

    // dynamically create divs based off Array

    for (let i = 0; i < divArray.length; i++) {
        let div = document.createElement('div');
        div.id = divArray[i];
        div.className = divArray[i];
        otherContent.appendChild(div);
    }
    console.log(otherContent);

    let menuTitle = document.getElementById('menuTitle')
    let menuContainer = document.getElementById('menuContainer')

    // Add titles
    menuTitle.innerHTML = 'Menu'

    // dynamically create new divs for rendering menu

    let menuItemsArr = ['noodles', 'toppings', 'extras']

    for (let i = 0; i < menuItemsArr.length; i++) {
        let div = document.createElement('div');
        div.id = menuItemsArr[i];
        div.className = menuItemsArr[i];
        menuContainer.appendChild(div)
    }

    // create seperate divs for each menu section

    let noodlesDiv = document.getElementById('noodles')
    let toppingsDiv = document.getElementById('toppings')
    let extrasDiv = document.getElementById('extras')

    let menuContainerArr = ['Title','Type', 'Price']

    for (let i = 0; i < menuContainerArr.length; i++) {

        let div = document.createElement('div');
        div.id = 'noodles' + menuContainerArr[i];
        div.className = 'noodles' + menuContainerArr[i];

        noodlesDiv.appendChild(div);

        let div2 = document.createElement('div')
        div2.id = 'toppings' + menuContainerArr[i];
        div2.className = 'toppings' + menuContainerArr[i]

        toppingsDiv.appendChild(div2)

        let div3 = document.createElement('div')
        div3.id = 'extras' + menuContainerArr[i];
        div3.className = 'extras' + menuContainerArr[i]

        extrasDiv.appendChild(div3)
    }

    // add titles to new divs

    let noodlesTitle = document.getElementById('noodlesTitle').textContent = 'Noodles'
    let toppingsTitle = document.getElementById('toppingsTitle').textContent = 'Toppings'
    let extrasTitle = document.getElementById('extrasTitle').textContent = 'Extras'



    console.log(menuContainer);

   renderMenu(menuContainer, menuTitle)
}

let renderMenu = () => {

    // add data to divs that were created above

    let noodlesType = document.getElementById('noodlesType');
    let noodlesPrice = document.getElementById('noodlesPrice');

    let toppingsType = document.getElementById('toppingsType');
    let toppingsPrice = document.getElementById('toppingsPrice');

    let extrasType = document.getElementById('extrasType')
    let extrasPrice = document.getElementById('extrasPrice')

    console.log(menuContainer)
    
    // Menu Arrays to be dynamically added

    let noodleArray = [
                        {type: 'soba',
                        price: "¥800"},
                        {type: 'spicy soba',
                        price: '¥850'},
                        {type: 'udon',
                        price: '¥800'}
                    ]

    let toppingArray = [
                        {type: 'pork',
                        price: '¥100'},
                        {type: 'mochi',
                        price: '¥150'},
                        {type: 'cheese',
                        price: '¥120'},
                        {type: 'kimchi',
                        price: '¥80'},
                        {type: 'squid',
                        price: '¥200'}
                    ]

    let extrasArray = [
                        {type: 'beer',
                        price: '¥500'},
                        {type: 'cola',
                        price: '¥200'},
                        {type: 'water',
                        price: '¥0'}
                    ]

    // dynamically add array items

    //noodles
    for (let i = 0; i < noodleArray.length; i++) {
        let typeValue = document.createElement('p');
        let priceValue = document.createElement('p')

        typeValue.textContent = noodleArray[i].type;
        noodlesType.appendChild(typeValue)

        priceValue.textContent = noodleArray[i].price;
        noodlesPrice.appendChild(priceValue)
    }
    // toppings
    for (let i = 0; i < toppingArray.length; i++) {
        let typeValue = document.createElement('p');
        let priceValue = document.createElement('p')

        typeValue.textContent = toppingArray[i].type;
        toppingsType.appendChild(typeValue)

        priceValue.textContent = toppingArray[i].price;
        toppingsPrice.appendChild(priceValue)
    }
    // extras
    for (let i = 0; i < extrasArray.length; i++) {
        let typeValue = document.createElement('p');
        let priceValue = document.createElement('p')

        typeValue.textContent = noodleArray[i].type;
        extrasType.appendChild(typeValue)

        priceValue.textContent = noodleArray[i].price;
        extrasPrice.appendChild(priceValue)
    }

  
}
export {menuPageTest,
        loadMenuPage}