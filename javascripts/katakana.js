const hiragana_characters = [
    {
        letter: "a",
        char: "ア",
    },
    {
        letter: "i",
        char: "イ",
    },
    {
        letter: "u",
        char: "ウ",
    },
    {
        letter: "e",
        char: "エ",
    },
    {
        letter: "o",
        char: "オ",
    },
    {
        letter: "ka",
        char: "カ",
    },
    {
        letter: "ki",
        char: "キ",
    },
    {
        letter: "ku",
        char: "ク",
    },
    {
        letter: "ke",
        char: "ケ",
    },
    {
        letter: "ko",
        char: "コ",
    },
    {
        letter: "sa",
        char: "サ",
    },
    {
        letter: "si",
        char: "シ",
    },
    {
        letter: "su",
        char: "ス",
    },
    {
        letter: "se",
        char: "セ",
    },
    {
        letter: "so",
        char: "ソ",
    },
    {
        letter: "ta",
        char: "タ",
    },
    {
        letter: "chi",
        char: "チ",
    },
    {
        letter: "tsu",
        char: "ツ",
    },
    {
        letter: "te",
        char: "テ",
    },
    {
        letter: "to",
        char: "ト",
    },
    {
        letter: "na",
        char: "ナ",
    },
    {
        letter: "ni",
        char: "ニ",
    },
    {
        letter: "nu",
        char: "ヌ",
    },
    {
        letter: "ne",
        char: "ネ",
    },
    {
        letter: "no",
        char: "ノ",
    },
    {
        letter: "ha",
        char: "ハ",
    },
    {
        letter: "hi",
        char: "ヒ",
    },
    {
        letter: "fu",
        char: "フ",
    },
    {
        letter: "he",
        char: "ヘ",
    },
    {
        letter: "ho",
        char: "ホ",
    },
    {
        letter: "ma",
        char: "マ",
    },
    {
        letter: "mi",
        char: "ミ",
    },
    {
        letter: "mu",
        char: "ム",
    },
    {
        letter: "me",
        char: "メ",
    },
    {
        letter: "mo",
        char: "モ",
    },
    {
        letter: "ya",
        char: "ヤ",
    },
    {
        letter: "empty",
        char: "empty",
    },
    {
        letter: "yu",
        char: "ユ",
    },
    {
        letter: "empty",
        char: "empty",
    },
    {
        letter: "yo",
        char: "ヨ",
    },
    {
        letter: "ra",
        char: "ラ",
    },
    {
        letter: "ri",
        char: "リ",
    },
    {
        letter: "ru",
        char: "ル",
    },
    {
        letter: "re",
        char: "レ",
    },
    {
        letter: "ro",
        char: "ロ",
    },
    {
        letter: "wa",
        char: "ワ",
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
        char: "ヲ",
    },
    {
        letter: "n",
        char: "ン",
    },
];

// card container
const card = document.querySelector(".letter-box-container li");

function cloneCard(){
    
    for (let index = 0; index < hiragana_characters.length; index++) {
        let name = hiragana_characters[index]["letter"];
        let char = hiragana_characters[index]["char"];

        if (name == "empty" && char == "empty") {
            document.querySelector(".letter span").textContent = "";
            document.querySelector(".kana-char span").textContent = "";
            card.style.opacity = ".5";
            card.style.pointerEvents = "none";
        } else {
            document.querySelector(".letter span").textContent = name;
            document.querySelector(".kana-char span").textContent = char;
            card.style.opacity = "1";
            card.style.pointerEvents = "";
        }    
        
        // Clone item
        let clone = card.cloneNode(true);

        // Append cloned item
        document.getElementsByClassName("letter-box-container")[0].appendChild(clone);
    }
    console.log(card);
}

// Run Function
cloneCard();