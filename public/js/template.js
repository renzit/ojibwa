

function addItems(itemList) {
    const templatePicture = document.querySelector('#item-template-picture');
    const grid = document.querySelector('.grid');
    itemList.forEach(item => {
        aspectRatioLabel = getAspectRatioLabel(item.width, item.height);
        imgPlaceholder = `data:image/svg+xml,%3csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${item.width} ${item.height}"%3e%3crect fill="%23F8F8F8" width="100%25" height="100%25"/%3e%3c/svg%3e`;
        const node = document.importNode(templatePicture.content, true);
        const source = node.querySelector('source');
        source.setAttribute('data-srcset', 
        `https://res.cloudinary.com/renzit/image/upload/w_400,q_auto,ar_${aspectRatioLabel},c_fill,g_auto,e_sharpen/${item.public_id}.webp 400w,
        https://res.cloudinary.com/renzit/image/upload/w_800,q_auto,ar_${aspectRatioLabel},c_fill,g_auto,e_sharpen/${item.public_id}.webp 800w`);

        const image = node.querySelector('img');
        image.src = imgPlaceholder;
        image.setAttribute('data-src', `https://res.cloudinary.com/renzit/image/upload/w_400,q_auto,ar_${aspectRatioLabel},c_fill,g_auto,e_sharpen/${item.public_id}.jpg`);
        image.setAttribute('data-srcset', 
        `https://res.cloudinary.com/renzit/image/upload/w_400,q_auto,ar_${aspectRatioLabel},c_fill,g_auto,e_sharpen/${item.public_id}.jpg 400w,
        https://res.cloudinary.com/renzit/image/upload/w_800,q_auto,ar_${aspectRatioLabel},c_fill,g_auto,e_sharpen/${item.public_id}.jpg 800w`);

        grid.appendChild(node);
    });

    var msnry;
    imagesLoaded(grid, function () {
        msnry = new Masonry(grid, {
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: true
        });
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