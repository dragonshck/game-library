$.ajax({
    url: 'https://api.rawg.io/api/games?key=3f274333aa8b4d41b43c0c399d27ac74&dates=2021-01-01,2021-12-31&ordering=-added&page_size=15',
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
        url: 'https://api.rawg.io/api/games?key=3f274333aa8b4d41b43c0c399d27ac74&page_size=15&search=' + $('.search-field').val(),
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
    <h6 class="card-subtitle mb-2 text-muted">Platforms : ${vg.platforms[0].platform['name']}</h6>
        <p class="card-text"><strong>${vg.genres[0].name}</strong> | ${vg.released}</p>
    </div>
</div>
</div>`;
};

// function showGameDetail(vgx) {
//     return `<div class="modal-body" id="detail-game">
//     <div class="container-fluid">
//         <div class="row">
//             <div class="col-md-3">
//                 <img src="${vgx.background_image_additional}" class="img-fluid">
//             </div>
//             <div class="col-md">
//               <ul class="list-group">
//                   <li class="list-group-item"><h4>${vgx.name}</h4></li>
//                   <li class="list-group-item"><strong>Description : </strong> <br> ${vgx.description}</li>
//                   <li class="list-group-item"><strong>Rating : </strong> ${vgx.metacritic} </li>
//                   <li class="list-group-item"><strong>Developers : </strong> ${vgx.developers[0].name} </li>
//                   <li class="list-group-item"><strong>URL : </strong> ${vgx.website} </li>
//                 </ul>
//             </div>
//         </div>
//     </div>
//   </div>`;
// };

// <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#exampleModal" type="button" style="font-family: 'Bebas Neue', serif;background: var(--red);" data-game="${vg.id}">show details</a>