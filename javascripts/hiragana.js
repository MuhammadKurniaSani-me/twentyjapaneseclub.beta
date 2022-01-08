const hiraganaCharacters = [
    [
        {
            characterName: "Huruf Dasar",
            id: "hiraganaBasic",
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
    ],
    [
        {
            characterName: "Dakuon",
            id: "hiraganaDakuon",
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
        },
    ],
    [
        {
            characterName: "Handakuon",
            id: "hiraganaHanDakuon",
        },
        {
            letter: "pa",
            char: "ぱ",
        },
        {
            letter: "pi",
            char: "ぴ",
        },
        {
            letter: "pu",
            char: "ぷ",
        },
        {
            letter: "pe",
            char: "ぺ",
        },
        {
            letter: "po",
            char: "ぽ",
        },
    ],
    [
        {
            characterName: "Kombo",
            id: "hiraganaCombo",
            numberOfVowel: 3
        },
        {
            letter: "kya",
            char: "きゃ",
        },
        {
            letter: "kyu",
            char: "きゅ",
        },
        {
            letter: "kyo",
            char: "きょ",
        },
        {
            letter: "gya",
            char: "ぎゃ",
        },
        {
            letter: "gyu",
            char: "ぎゅ",
        },
        {
            letter: "gyo",
            char: "ぎょ",
        },
        {
            letter: "sya",
            char: "しゃ",
        },
        {
            letter: "syu",
            char: "しゅ",
        },
        {
            letter: "syo",
            char: "しょ",
        },
        {
            letter: "ja",
            char: "じゃ",
        },
        {
            letter: "ju",
            char: "じゅ",
        },
        {
            letter: "jo",
            char: "じょ",
        },
        {
            letter: "cha",
            char: "ちゃ",
        },
        {
            letter: "chu",
            char: "ちゅ",
        },
        {
            letter: "cho",
            char: "ちょ",
        },
        {
            letter: "ja",
            char: "ぢゃ",
        },
        {
            letter: "ju",
            char: "ぢゅ",
        },
        {
            letter: "jo",
            char: "ぢょ",
        },
        {
            letter: "nya",
            char: "にゃ",
        },
        {
            letter: "nyu",
            char: "にゅ",
        },
        {
            letter: "nyo",
            char: "にょ",
        },
        {
            letter: "hya",
            char: "ひゃ",
        },
        {
            letter: "hyu",
            char: "ひゅ",
        },
        {
            letter: "hyo",
            char: "ひょ",
        },
        {
            letter: "bya",
            char: "びゃ",
        },
        {
            letter: "byu",
            char: "びゅ",
        },
        {
            letter: "byo",
            char: "びょ",
        },
        {
            letter: "pya",
            char: "ぴゃ",
        },
        {
            letter: "pyu",
            char: "ぴゅ",
        },
        {
            letter: "pyo",
            char: "ぴょ",
        },
        {
            letter: "mya",
            char: "みゃ",
        },
        {
            letter: "myu",
            char: "みゅ",
        },
        {
            letter: "myo",
            char: "みょ",
        },
        {
            letter: "rya",
            char: "りゃ",
        },
        {
            letter: "ryu",
            char: "りゅ",
        },
        {
            letter: "ryo",
            char: "りょ",
        },
    ],
    [
        {
            characterName: "っ Kecil",
            id: "hiraganaSmallTsu",
            numberOfVowel: 4,
        },
        {
            letter: "kk",
            char: "っ+k",
        },
        {
            letter: "ss",
            char: "っ+s",
        },
        {
            letter: "tt",
            char: "っ+t",
        },
        {
            letter: "pp",
            char: "っ+p",
        },
    ],
    [
        {
            characterName: "Vokal Panjang",
            id: "hiraganaLongVowel",
            numberOfVowel: 5,
        },
        {
            letter: "aa",
            char: "ああ",
        },
        {
            letter: "ii",
            char: "いい",
        },
        {
            letter: "uu",
            char: "うう",
        },
        {
            letter: "ee",
            char: "ええ",
        },
        {
            letter: "oo",
            char: "おお",
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
            letter: "ei",
            char: "えい",
        },
        {
            letter: "ou",
            char: "おう",
        },
    ],
];

 // start from first index
 const firstIndex = 1;

 function countCardItem(sectionName) {

    // section length
    let sectionLength = 0;

    // search id through every section
    hiraganaCharacters.forEach(section => {
        if (section[0]["id"] == sectionName) {
            sectionLength = section.length - firstIndex;
        }
    });

    return sectionLength;
}

function searchSectionId(sectionName) {
    
    // get container from a section
    return document.body.querySelector(`#${sectionName}`).id;

}

function closeEmptyCard() {

    // get character card template
    let cards = document.querySelectorAll(".wrapper .letter-card");

    
    cards.forEach(card => {

        if (card.querySelector(".kana-char").textContent == "empty") {
            card.querySelector("h3").textContent = "";
            card.querySelector("p").textContent = "";
            card.style.opacity = ".5";
            card.style.pointerEvents = "none";
        }  
                
    });
}

function countNumberOfVowel(sectionId, numberOfVowel) {

    // get card element container 
    let sectionContainer = document.querySelector(`.wrapper #${sectionId}`);

    // change the grid template column based number of vowel
    sectionContainer.style.gridTemplateColumns = `repeat(${numberOfVowel}, 1fr)`;
    // console.log(sectionContainer);

}

function cloneHiraganaSection() {

    // get sectionWrapper template
    const sectionWrapper = document.querySelector(".wrapper");

    // iterate every sectionWrapper from hiraganaCharacters list
    for (let indexSectionWrapper = 0; indexSectionWrapper < hiraganaCharacters.length; indexSectionWrapper++) {

        // clone sectionWrapper
        cloneSection = sectionWrapper.cloneNode(true);
        document.body.querySelector(".letter-container").appendChild(cloneSection);   

    }
}

function changeSectionName() {

    // iterate every sectionWrapper from hiraganaCharacters list
    for (let indexSectionWrapper = 0; indexSectionWrapper < hiraganaCharacters.length; indexSectionWrapper++) {
    
        // add title per sectionWrapper
        let titleCharacter = hiraganaCharacters[indexSectionWrapper][0]["characterName"];
        document.body.getElementsByClassName("title-letter")[indexSectionWrapper].textContent = titleCharacter;
        
        // add id in every hiragana section
        let idCharacter = hiraganaCharacters[indexSectionWrapper][0]["id"];
        document.body.getElementsByClassName("wrapper")[indexSectionWrapper].querySelector("ul").id = idCharacter;

    }
}

function cloneHiraganaCharacter(sectionName, indexList) {

    // get section id
    let sectionId = searchSectionId(sectionName);

    // get character card template
    let card = document.querySelector(`.wrapper #${sectionId} li`);

    // section length
    let sectionsLength = countCardItem(sectionName);

    // clone card with the length of the section
    for (let cardItem = 0; cardItem < sectionsLength; cardItem++) {

        // get character card content template
        let character = hiraganaCharacters[indexList][cardItem + firstIndex]["char"];
        let letter = hiraganaCharacters[indexList][cardItem + firstIndex]["letter"];

        // change character card content template
        card.querySelector("h3").textContent = character;
        card.querySelector("p").textContent = letter;

        // clone card
        cloneCard = card.cloneNode(true);
        document.querySelector(`.wrapper #${sectionName}`).appendChild(cloneCard);  

    }
}

// Run Function

// clone section from the hiraganaCharacters list
cloneHiraganaSection();

// give a name from every section
changeSectionName();

// clone card from every section

// section of hiraganaBasic
cloneHiraganaCharacter("hiraganaBasic", 0);

// section of hiraganaDakuon
cloneHiraganaCharacter("hiraganaDakuon", 1);

// section of hiraganaHanDakuon
cloneHiraganaCharacter("hiraganaHanDakuon", 2);

// section of hiraganaCombo
cloneHiraganaCharacter("hiraganaCombo", 3);

// section of hiraganaSmallTsu
cloneHiraganaCharacter("hiraganaSmallTsu", 4);

// section of hiraganaLongVowel
cloneHiraganaCharacter("hiraganaLongVowel", 5);

// if card is empty then close it
closeEmptyCard();

// change vowel for every hiragana section

// section of hiraganaCombo
countNumberOfVowel("hiraganaCombo", 3)

// section of hiraganaCombo
countNumberOfVowel("hiraganaSmallTsu", 4)
