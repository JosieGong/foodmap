document.addEventListener('DOMContentLoaded', function () {

    var filterBtns   = document.querySelectorAll('.filter-btn');
    var cards        = document.querySelectorAll('.restaurant-card');
    var countDisplay = document.querySelector('#place-count');

    function filterCards(selectedCategory) {
        var visible = 0;
        cards.forEach(function (card) {
            var match = (selectedCategory === 'all') ||
                        (card.dataset.category === selectedCategory);
            card.style.display = match ? 'flex' : 'none';
            if (match) { visible++; }
        });
        if (countDisplay) {
            countDisplay.textContent =
                visible + (visible === 1 ? ' place in total' : ' places in total');
        }
    }

    if (filterBtns.length > 0) {
        filterBtns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                filterBtns.forEach(function (b) { b.classList.remove('active'); });
                this.classList.add('active');
                filterCards(this.dataset.category);
            });
        });
    }

});
