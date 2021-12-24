const hiragana_characters = [
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