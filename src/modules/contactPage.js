let contactPageTest = () => {
    console.log("Contact page running")
}

let loadContactPage = () => {
    let otherContent = document.getElementById('otherContent');
    let divArray = ['contactInfo', 'googleDiv']

    for (let i = 0; i < divArray.length; i++) {
        let div = document.createElement('div');
        div.id = divArray[i];
        div.className = divArray[i];
        otherContent.appendChild(div);
    }
    console.log(otherContent)
    renderOtherContent();
}

let renderOtherContent = () => {
    let contactInfo = document.getElementById('contactInfo')
    let googleDiv = document.getElementById('googleDiv')

    contactInfo.innerHTML = 'Contact Info'
    googleDiv.innerHTML = 'Google Div'
}
export {contactPageTest,
        loadContactPage};