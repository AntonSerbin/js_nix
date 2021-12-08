let bidsAside = document.querySelector("#bidsAside");
let bids = ["100", "200", "300", "500", "1 000", "2 000", "4 000", "8 000", "16 000", "32 000",
    "64 000", '125 000', '250 000', '500 000', '1 000 000'];

function indicateBidsAside() {
    for (let i = 14; i >= 0; i--) {
        bidsAside.innerHTML += `<p class="asideNumber rowAside${i + 1}">${i + 1}</p>`;
        bidsAside.innerHTML += `<p class="asideBid rowAside${i + 1}">${bids[i]}</p>`;
    }
}

//наполняем блок aside начальными ставками
indicateBidsAside() ;