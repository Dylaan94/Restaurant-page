let contactPageTest = () => {
    console.log("Contact page running")
}

let loadContactPage = () => {
    let otherContent = document.getElementById('otherContent')
    otherContent.innerHTML = "Contact"
}
export {contactPageTest,
        loadContactPage};