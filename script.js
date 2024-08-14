var profile = document.getElementById("profile")
function goleft(){
    profile.style.marginLeft="-360px"
}
function goright(){
    profile.style.marginLeft="0px"
}

var chemical = document.getElementById("chemical")
function rightchemical(){
    chemical.style.marginLeft="270px"
}
function leftchemical(){
    chemical.style.marginLeft="0px"
}
// about section

var tablink = document.getElementsByClassName("tab-links")
var tabcontain = document.getElementsByClassName('contain')

function change(tab){
    for(tablinks of tablink){
        tablinks.classList.remove("active-link")
    }
    for(tabcontains of tabcontain){
        tabcontains.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tab).classList.add("active-tab")
}
// menu
var navbar = document.getElementById("bars")
function clicking(){
    navbar.style.right="460px"
}
function clickingback(){
    navbar.style.right="300px"
}