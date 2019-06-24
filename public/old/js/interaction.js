const subnav = document.querySelector(".subnav");
subnav.addEventListener("click", function(event){
    const path = event.target.dataset.collection
    getResourceList(path);
    toggleSubNav();
});

const mainNav = document.querySelector(".main-nav");
mainNav.addEventListener("click", function(event){
    if(event.target.classList.contains('has-dropdown')){
        toggleSubNav();
        return;
    }else{
        mainNav.classList.toggle('opened');

    }
});

function toggleSubNav(){
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if(w < 910){
        subnav.classList.toggle('show');
    }
    console.log(w);
}