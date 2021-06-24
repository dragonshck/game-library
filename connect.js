$.ajax({
    url: 'https://api.rawg.io/api/games?key=3f274333aa8b4d41b43c0c399d27ac74&dates=2021-01-01,2021-12-31&ordering=-added',
    success: results => {
        const vgames = results.results;
        let cards = '';
        vgames.forEach(vg => {
            cards += showCards(vg);
        });
        $('.vg-container').html(cards);
    }
});

$('.btn-search').on('click', function () {
    $.ajax({
        url: 'https://api.rawg.io/api/games?key=3f274333aa8b4d41b43c0c399d27ac74&search=' + $('.search-field').val(),
        success: results => {
            const vgames = results.results;
            let cards = '';
            vgames.forEach(vg => {
                cards += showCards(vg);
            });
            $('.vg-container').html(cards);
        }
    });
});

function showCards(vg) {
    return `<div class="col-md-6 col-lg-4 filtr-item" data-category="2,3">
    <div class="card border-dark">
    <div class="card-header bg-dark text-light">
        <h5 class="m-0">${vg.name}</h5>
    </div><img class="img-fluid card-img w-100 d-block rounded-0" src="${vg.background_image}">
    <div class="card-body">
        <p class="card-text">${vg.genres[0].name} | ${vg.released}</p>
        <a href="#" class="btn btn-primary modal-detail-button" id="search-button" type="button" style="font-family: 'Bebas Neue', serif;background: var(--red);">show details</a>
    </div>
</div>
</div>`;
};
