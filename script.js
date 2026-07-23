const stores = {
    1: {
        name: "Rebro",
        address: "Бурхана Шахиди, 9а",
        google: "https://clck.ru/39sCPR",
        yandex: "https://clck.ru/3LGvWR",
        gis: "https://go.2gis.com/U6mCW"
    },

    2: {
        name: "Rebro",
        address: "2-я Юго-Западная, 7",
        google: "https://clck.ru/39sCPR",
        yandex: "https://clck.ru/3KCzHp",
        gis: "https://go.2gis.com/0lif2"
    }
};

function selectStore(id){

    const store = stores[id];

    document.getElementById("platforms").innerHTML = `
    
    <div class="buttons">

        <h2 style="margin-bottom:15px;">${store.address}</h2>

        <a class="google" href="${store.google}" target="_blank" onclick="saveReview('${store.address}','Google')">
            ⭐ Оставить отзыв в Google
        </a>

        <a class="yandex" href="${store.yandex}" target="_blank" onclick="saveReview('${store.address}','Яндекс')">
            ⭐ Оставить отзыв в Яндекс
        </a>

        <a class="gis" href="${store.gis}" target="_blank" onclick="saveReview('${store.address}','2ГИС')">
            ⭐ Оставить отзыв в 2ГИС
        </a>

        <a class="back" href="#" onclick="backToStores(event)">
            ← Выбрать другой магазин
        </a>

    </div>
    `;
}

function backToStores(e){
    e.preventDefault();
    document.getElementById("platforms").innerHTML="";
}

function saveReview(store, platform){

    fetch("save.php",{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({
            store:store,
            platform:platform
        })

    }).catch(()=>{});

}