

function addItems(itemList) {
    const template = document.querySelector('template');
    const grid = document.querySelector('#grid');
    itemList.forEach(item => {
        itemAspectRatio = calculateAspectRatio(item.width, item.height);
        aspectRatio = item.width / itemAspectRatio + ":" + item.height / itemAspectRatio;
        const node = document.importNode(template.content, true);
        const element = node.querySelector('img');
        //element.src = `data:image/svg+xml,%3csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${item.width} ${item.height}"%3e%3crect fill="%23F8F8F8" width="100%25" height="100%25"/%3e%3c/svg%3e`;
        element.src = `https://res.cloudinary.com/renzit/image/upload/w_1000,ar_${aspectRatio},c_fill,g_auto,e_sharpen/${item.public_id}.jpg`;
        //element.setAttribute('data-src', `https://res.cloudinary.com/renzit/image/upload/w_1000,ar_${aspectRatio},c_fill,g_auto,e_sharpen/${item.public_id}.webp`);
        grid.appendChild(node);
    });
    // const templateScripts = document.querySelector('#template-scripts');
    // const scripts = document.importNode(templateScripts.content, true);
    // document.body.appendChild(scripts);

}

function calculateAspectRatio(width, height) {
    return (height == 0) ? width : calculateAspectRatio(height, width % height);
}

window.onload = function () {


}