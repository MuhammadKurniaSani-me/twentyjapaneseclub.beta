const hiraganaCharacters = [
    {
        characterName: "hiragana",
    },
    {
        letter: "a",
        char: "あ",
    },
    {
        letter: "i",
        char: "い",
    },
    {
        letter: "u",
        char: "う",
    },
    {
        letter: "e",
        char: "え",
    },
    {
        letter: "o",
        char: "お",
    },
    {
        letter: "ka",
        char: "か",
    },
    {
        letter: "ki",
        char: "き",
    },
    {
        letter: "ku",
        char: "く",
    },
    {
        letter: "ke",
        char: "け",
    },
    {
        letter: "ko",
        char: "こ",
    },
    {
        letter: "sa",
        char: "さ",
    },
    {
        letter: "si",
        char: "し",
    },
    {
        letter: "su",
        char: "す",
    },
    {
        letter: "se",
        char: "せ",
    },
    {
        letter: "so",
        char: "そ",
    },
    {
        letter: "ta",
        char: "た",
    },
    {
        letter: "chi",
        char: "ち",
    },
    {
        letter: "tsu",
        char: "つ",
    },
    {
        letter: "te",
        char: "て",
    },
    {
        letter: "to",
        char: "と",
    },
    {
        letter: "na",
        char: "な",
    },
    {
        letter: "ni",
        char: "に",
    },
    {
        letter: "nu",
        char: "ぬ",
    },
    {
        letter: "ne",
        char: "ね",
    },
    {
        letter: "no",
        char: "の",
    },
    {
        letter: "ha",
        char: "は",
    },
    {
        letter: "hi",
        char: "ひ",
    },
    {
        letter: "fu",
        char: "ふ",
    },
    {
        letter: "he",
        char: "へ",
    },
    {
        letter: "ho",
        char: "ほ",
    },
    {
        letter: "ma",
        char: "ま",
    },
    {
        letter: "mi",
        char: "み",
    },
    {
        letter: "mu",
        char: "む",
    },
    {
        letter: "me",
        char: "め",
    },
    {
        letter: "mo",
        char: "も",
    },
    {
        letter: "ya",
        char: "や",
    },
    {
        letter: "empty",
        char: "empty",
    },
    {
        letter: "yu",
        char: "ゆ",
    },
    {
        letter: "empty",
        char: "empty",
    },
    {
        letter: "yo",
        char: "よ",
    },
    {
        letter: "ra",
        char: "ら",
    },
    {
        letter: "ri",
        char: "り",
    },
    {
        letter: "ru",
        char: "る",
    },
    {
        letter: "re",
        char: "れ",
    },
    {
        letter: "ro",
        char: "ろ",
    },
    {
        letter: "wa",
        char: "わ",
    },
    {
        letter: "empty",
        char: "empty",
    },
    {
        letter: "empty",
        char: "empty",
    },
    {
        letter: "empty",
        char: "empty",
    },
    {
        letter: "wo",
        char: "を",
    },
    {
        letter: "n",
        char: "ん",
    },
];

const hiraganaDakuonCharacters = [
    {
        characterName: "hiraganaDakuon",
    },
    {
        letter: "ga",
        char: "が",
    },
    {
        letter: "gi",
        char: "ぎ",
    },
    {
        letter: "gu",
        char: "ぐ",
    },
    {
        letter: "ge",
        char: "げ",
    },
    {
        letter: "go",
        char: "ご",
    },
    {
        letter: "za",
        char: "ざ",
    },
    {
        letter: "ji",
        char: "じ",
    },
    {
        letter: "zu",
        char: "ず",
    },
    {
        letter: "ze",
        char: "ぜ",
    },
    {
        letter: "zo",
        char: "ぞ",
    },
    {
        letter: "da",
        char: "だ",
    },
    {
        letter: "ji",
        char: "ぢ",
    },
    {
        letter: "zu",
        char: "づ",
    },
    {
        letter: "de",
        char: "で",
    },
    {
        letter: "do",
        char: "ど",
    },
    {
        letter: "ba",
        char: "ば",
    },
    {
        letter: "bi",
        char: "び",
    },
    {
        letter: "bu",
        char: "ぶ",
    },
    {
        letter: "be",
        char: "べ",
    },
    {
        letter: "bo",
        char: "ぼ",
    }
];

function cloneCard(characterName, characterContainer){

    // card container
    const card = document.querySelector(`.${characterContainer} .letter-box-container li`);
    
    for (let index = 1; index < characterName.length; index++) {
        let name = characterName[index]["letter"];
        let char = characterName[index]["char"];

        if (name == "empty" && char == "empty") {
            document.querySelector(`.${characterContainer} .letter span`).textContent = "";
            document.querySelector(`.${characterContainer} .kana-char span`).textContent = "";
            card.style.opacity = ".5";
            card.style.pointerEvents = "none";
        } else {
            document.querySelector(`.${characterContainer} .letter span`).textContent = name;
            document.querySelector(`.${characterContainer} .kana-char span`).textContent = char;
            card.style.opacity = "1";
            card.style.pointerEvents = "";
        }    
        
        // Clone item
        let clone = card.cloneNode(true);

        // Append cloned item
        document.querySelector(`.${characterContainer}`).getElementsByClassName("letter-box-container")[0].appendChild(clone);
    }
}

// Run Function

// hiragana basic letter
cloneCard(hiraganaCharacters, hiraganaCharacters[0]["characterName"]);

// hiragana dakuon letter
cloneCard(hiraganaDakuonCharacters, hiraganaDakuonCharacters[0]["characterName"]);