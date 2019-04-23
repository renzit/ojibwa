const mainNav = document.querySelector(".main-nav");
mainNav.addEventListener("click", function(event){
    console.log('clicked');
    mainNav.classList.toggle('clicked');
});
