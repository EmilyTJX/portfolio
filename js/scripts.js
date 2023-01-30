/*!
* Start Bootstrap - Resume v7.0.4 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 
var holder = atob("eW91Q291bGRIYXZlSnVzdFJlYWRNeVJlc3VtZUZvck15R3JhZGVz")
window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
var isRevealed = false
function revealGPA(){
    var GPA = document.getElementById("myGPA");
    var box = document.getElementById("checkbox");

    if(isRevealed==false){
        let password = prompt("Please enter password:", "Are you admin?");
        console.log(password)
        if (password==holder && password!=null) {
            GPA.innerHTML = atob("IDMuOTA=");
            box.checked = true;
            isRevealed = true;
        }else{
            checkbox.checked = false;
        }
    }else{
        GPA.innerHTML = "";
        isRevealed = false;
    }
    
}
