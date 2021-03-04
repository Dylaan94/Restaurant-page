let aboutPageTest = () => {
    console.log("About Page running")
}

let loadAboutPage = () => {
    let otherContent = document.getElementById('otherContent');
    console.log(otherContent)
    otherContent.innerHTML = "About"
}

export {aboutPageTest,
        loadAboutPage}