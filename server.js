function dropdown(){
    const menu = document.querySelector(".hamburger-links")
    menu.classList.toggle("open")
}

// function projectsView(){
//     const project = document.querySelector(".arrow-down")
//     project.classList.toggle("open")
// }

var scrollView = document.getElementById("clickforProject")
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

var upView = document.getElementById('navbar-logo')
upView.addEventListener('click', function(event){
    event.preventDefault()

    var myPageTarget = document.getElementById('info')
    myPageTarget.scrollIntoView({
        behavior: "smooth"
    })
})

var scrollDownHam = document.getElementById('clickforProjectHam')
scrollDownHam.addEventListener('click', function(event){
    event.preventDefault()

    var leadTo = document.getElementById('project-section')
    leadTo.scrollIntoView({
        behavior: "smooth"
    })
})

//for the about section to get into work section of index file smoothly
// document.getElementsByClassName('for-work').addEventListener('click', function(event){
//     event.preventDefault()
   
//     // setTimeout(() => {
//     //     window.location = event.target.href;
//     // }, 1);

// })