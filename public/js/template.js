

function addItems(itemList){
    const template = document.querySelector('template');
    const grid = document.querySelector('#grid');
    itemList.forEach(item => {
        itemAspectRatio = calculateAspectRatio(item.width, item.height);
        aspectRatio = item.width/itemAspectRatio + ":" + item.height/itemAspectRatio;
        const node = document.importNode(template.content, true);
        const element = node.querySelector('img');
        element.src = `https://res.cloudinary.com/renzit/image/upload/w_1000,ar_${aspectRatio},c_fill,g_auto,e_sharpen/${item.public_id}.webp`;
        grid.appendChild(node);
    });
}

function calculateAspectRatio(width, height){
    return (height == 0) ? width : calculateAspectRatio (height, width%height);
}