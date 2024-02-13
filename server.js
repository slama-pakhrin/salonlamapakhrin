function dropdown(){
    const menu = document.querySelector(".hamburger-links")
    menu.classList.toggle("open")
}

// function projectsView(){
//     const project = document.querySelector(".arrow-down")
//     project.classList.toggle("open")
// }

var scrollView = document.getElementById('clickforProject')
scrollView.addEventListener('click', function (event){
    event.preventDefault()

    var targetView = document.getElementById('project-section')
    targetView.scrollIntoView({
        behavior: "smooth" 
    })
})

var downView = document.getElementById('arrow-down')
downView.addEventListener('click', function(event){
    event.preventDefault()

    var targetedView = document.getElementById('project-section')
    targetedView.scrollIntoView({
        behavior: "smooth"
    })
})