const mainNav = document.querySelector(".main-nav");


const navLinks = document.querySelectorAll(".main-nav>ul>li>a");
mainNav.addEventListener("click", function(event){
    var activeLink = document.querySelector(".active");
    if(!mainNav.classList.contains('dropdown-hide')){
        activeLink.innerHTML = event.path[0].innerHTML;
    }
    mainNav.classList.toggle('dropdown-hide');
});

navLinks.forEach(function(item){
    item.addEventListener("click", function(){
        activeLink = document.querySelector(".active");
        var hiddenLinks = document.querySelectorAll(".link-hide");
        if(hiddenLinks){
            hiddenLinks.forEach(function(link){
                if(!(item.innerHTML === activeLink.innerHTML)){
                    link.classList.remove('link-hide');
                }
            });
        }
        item.classList.remove('link-hide');
        if(!(item === activeLink)){
            item.classList.add('link-hide');
        }
    });
});