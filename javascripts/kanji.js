// card
const card = document.querySelector(".self");

function cloneCard(){
    
    let kanjiLevel = 5;

    for (let index = 0; index < 5; index++) {  

        // background image
        document.querySelector(".self").style.backgroundImage = `url("../../images/pictures/kanji_level/kanji_n${kanjiLevel - index}.svg")`;

        // id card 
        document.querySelector(".self").id = `n${kanjiLevel - index}`;

        // title card
        document.querySelector(".self-header h2").textContent = `Kanji N${kanjiLevel - index}`;

        // Clone item
        let clone = card.cloneNode(true);

        // Append cloned item
        document.getElementsByClassName("self-list")[0].appendChild(clone);
    }
    // console.log(card);
}

// link to every kanji level
function linkToKanjiLevelPage() {
    let pageLink = "";
    const cards = document.querySelectorAll(".self");
    
    cards.forEach(card => {
        card.addEventListener("click", ()=> {
            let cardId = card.id;
            window.location.href = `../kanjis/${cardId}.html`;
        });
    });
}

// Run Function
cloneCard();

linkToKanjiLevelPage();