let loadMoreButton = document.querySelector('#gallery-load-more');
loadMoreButton.addEventListener("click", function (event) {
  let hiddenItems = document.querySelectorAll('.grid-container .d-none');
  let totalItems = hiddenItems.length;
  let imageToShow = totalItems > 12 ? 12 : totalItems;
  if(totalItems <= 12 ){
    loadMoreButton.setAttribute('hidden', '');
  }
  showHiddenItems(imageToShow, hiddenItems);
});

function showHiddenItems(imageToShow, hiddenItems) {
  for (let i = 0; i < imageToShow; i++) {
    hiddenItems[i].classList.remove('d-none');
  }
  const grid = document.querySelector('.grid-container');
  var iso = new Isotope(grid, {
    // options
    itemSelector: '.img-hover-wrap',
    layoutMode: 'masonry'
  });
}