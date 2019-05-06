const subnav = document.querySelector(".subnav");
subnav.addEventListener("click", function(event){
    console.log('hola');
    const path = event.target.dataset.collection
    getResourceList(path);
});
