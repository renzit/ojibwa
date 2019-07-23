function addItems(itemList, user) {
    const templatePicture = document.querySelector('#item-template-picture');
    const grid = document.querySelector('.grid-container');
    grid.innerHTML = "";
    let counter = 0;
    itemList.forEach(function(item) {
        aspectRatioLabel = getAspectRatioLabel(item.width, item.height);
        imgPlaceholder = `data:image/svg+xml,%3csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${item.width} ${item.height}"%3e%3crect fill="%23F8F8F8" width="100%25" height="100%25"/%3e%3c/svg%3e`;
        const templateNode = document.importNode(templatePicture.content, true);
        const image = templateNode.querySelector('img');
        if(counter >= 12){
            image.parentElement.parentElement.classList.add('d-none');
        }
        image.src = imgPlaceholder;
        image.setAttribute('data-src', `https://res.cloudinary.com/${user}/image/upload/w_400,q_auto,ar_${aspectRatioLabel},c_fill,g_auto,e_sharpen/${item.public_id}.jpg`);
        image.setAttribute('data-srcset',
            `https://res.cloudinary.com/${user}/image/upload/w_400,q_auto,ar_${aspectRatioLabel},c_fill,g_auto,e_sharpen/${item.public_id}.jpg 400w,
        https://res.cloudinary.com/${user}/image/upload/w_800,q_auto,ar_${aspectRatioLabel},c_fill,g_auto,e_sharpen/${item.public_id}.jpg 800w`);

        grid.appendChild(templateNode);
        counter ++;
    });
    imagesLoaded(grid, function () {
        console.log('deguging phone bug');
        var iso = new Isotope(grid, {
            // options
            itemSelector: '.img-hover-wrap',
            layoutMode: 'masonry'
        });
    });


    jQuery(".img-hover-wrap").hover3d({
        selector: ".img-hover-card",
        shine: false,
    });

    var lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy"
    });

}
function calculateAspectRatio(width, height) {
    return (height == 0) ? width : calculateAspectRatio(height, width % height);
}

function getAspectRatioLabel(width, height) {
    AspectRatioValue = calculateAspectRatio(width, height);
    return width / AspectRatioValue + ":" + height / AspectRatioValue;
}

function getResourceList(path, user) {
    //'images/gastronomia.json'
    fetch(path)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            addItems(myJson.resources, user);
        });
}
function getQueryStringValueByName(name) {
    var queryStringFromStartOfValue = location.search.split(name + '=')[1];
    return queryStringFromStartOfValue !== undefined ? queryStringFromStartOfValue.split('&')[0] : null;
}
function initializeOJibwaGrid() {
    if(getQueryStringValueByName('mostrar')){
        var filterBy = getQueryStringValueByName('mostrar');
        const galleryName = document.querySelector('#gallery-description');
        galleryName.innerHTML = filterBy;
        return getResourceList(`api/${filterBy}.json`, 'dciyig0yl')
    }

    return getResourceList('api/gastronomia.json', 'dciyig0yl');
}

initializeOJibwaGrid();

function showGalleryTitle(item) {
    titleText = item.querySelector("span").firstChild.nodeValue;
    const galleryName = document.querySelector('#gallery-description');
    galleryName.innerHTML = titleText;
}

const filterCategory = document.querySelectorAll("#filter-category .dropdown-item");
filterCategory.forEach(function (item) {
    item.addEventListener("click", function (event) {
        showGalleryTitle(item);
        let path = item.dataset.collection;
        let user = item.dataset.user;
        getResourceList(path, user);
        showLoadMoreButton();
    });
});

function showLoadMoreButton(){
    let loadMoreButton = document.querySelector('#gallery-load-more');
    loadMoreButton.removeAttribute('hidden');
}

