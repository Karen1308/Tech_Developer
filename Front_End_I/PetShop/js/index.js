const toggleBttn = document.getElementById('toggle-bttn')
const navBarLink = document.getElementById('nav-bar-link')

toggleBttn.addEventListener('click',() => {
    navBarLink.classList.toggle('active')
})