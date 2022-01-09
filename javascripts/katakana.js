const katakanaCharacters = [
    [
        {
            characterName: "Huruf Dasar",
            id: "katakanaBasic",
        },
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
    ],
    [
        {
            characterName: "Dakuon",
            id: "katakanaDakuon",
        },
        {
            letter: "ga",
            char: "ガ",
        },
        {
            letter: "gi",
            char: "ギ",
        },
        {
            letter: "gu",
            char: "グ",
        },
        {
            letter: "ge",
            char: "ゲ",
        },
        {
            letter: "go",
            char: "ゴ",
        },
        {
            letter: "za",
            char: "ザ",
        },
        {
            letter: "ji",
            char: "ジ",
        },
        {
            letter: "zu",
            char: "ズ",
        },
        {
            letter: "ze",
            char: "ゼ",
        },
        {
            letter: "zo",
            char: "ゾ",
        },
        {
            letter: "da",
            char: "ダ",
        },
        {
            letter: "ji",
            char: "ヂ",
        },
        {
            letter: "zu",
            char: "ヅ",
        },
        {
            letter: "de",
            char: "デ",
        },
        {
            letter: "do",
            char: "ド",
        },
        {
            letter: "ba",
            char: "バ",
        },
        {
            letter: "bi",
            char: "ビ",
        },
        {
            letter: "bu",
            char: "ブ",
        },
        {
            letter: "be",
            char: "ベ",
        },
        {
            letter: "bo",
            char: "ボ",
        },
    ],
    [
        {
            characterName: "Handakuon",
            id: "katakanaHanDakuon",
        },
        {
            letter: "pa",
            char: "パ",
        },
        {
            letter: "pi",
            char: "ピ",
        },
        {
            letter: "pu",
            char: "プ",
        },
        {
            letter: "pe",
            char: "ペ",
        },
        {
            letter: "po",
            char: "ポ",
        },
    ],
    [
        {
            characterName: "Kombo",
            id: "katakanaCombo",
            numberOfVowel: 3
        },
        {
            letter: "kya",
            char: "キャ",
        },
        {
            letter: "kyu",
            char: "キュ",
        },
        {
            letter: "kyo",
            char: "キョ",
        },
        {
            letter: "gya",
            char: "ギャ",
        },
        {
            letter: "gyu",
            char: "ギュ",
        },
        {
            letter: "gyo",
            char: "ギョ",
        },
        {
            letter: "sya",
            char: "シャ",
        },
        {
            letter: "syu",
            char: "シュ",
        },
        {
            letter: "syo",
            char: "ショ",
        },
        {
            letter: "ja",
            char: "ジャ",
        },
        {
            letter: "ju",
            char: "ジュ",
        },
        {
            letter: "jo",
            char: "ジョ",
        },
        {
            letter: "cha",
            char: "チャ",
        },
        {
            letter: "chu",
            char: "チュ",
        },
        {
            letter: "cho",
            char: "チョ",
        },
        {
            letter: "ja",
            char: "ヂャ",
        },
        {
            letter: "ju",
            char: "ヂュ",
        },
        {
            letter: "jo",
            char: "ヂョ",
        },
        {
            letter: "nya",
            char: "ニャ",
        },
        {
            letter: "nyu",
            char: "ニュ",
        },
        {
            letter: "nyo",
            char: "ニョ",
        },
        {
            letter: "hya",
            char: "ヒャ",
        },
        {
            letter: "hyu",
            char: "ヒュ",
        },
        {
            letter: "hyo",
            char: "ヒョ",
        },
        {
            letter: "bya",
            char: "ビャ",
        },
        {
            letter: "byu",
            char: "ビュ",
        },
        {
            letter: "byo",
            char: "ビョ",
        },
        {
            letter: "pya",
            char: "ピャ",
        },
        {
            letter: "pyu",
            char: "ピュ",
        },
        {
            letter: "pyo",
            char: "ピョ",
        },
        {
            letter: "mya",
            char: "ミャ",
        },
        {
            letter: "myu",
            char: "ミュ",
        },
        {
            letter: "myo",
            char: "ミョ",
        },
        {
            letter: "rya",
            char: "リャ",
        },
        {
            letter: "ryu",
            char: "リュ",
        },
        {
            letter: "ryo",
            char: "リョ",
        },
    ],
    [
        {
            characterName: "ッ Kecil",
            id: "katakanaSmallTsu",
            numberOfVowel: 4,
        },
        {
            letter: "kk",
            char: "ッ+k",
        },
        {
            letter: "ss",
            char: "ッ+s",
        },
        {
            letter: "tt",
            char: "ッ+t",
        },
        {
            letter: "pp",
            char: "ッ+p",
        },
    ],
    [
        {
            characterName: "Vokal Panjang",
            id: "katakanaLongVowel",
            numberOfVowel: 3,
        },
        {
            letter: "aa",
            char: "アア",
        },
        {
            letter: "ii",
            char: "イイ",
        },
        {
            letter: "uu",
            char: "ウウ",
        },
        {
            letter: "empty",
            char: "empty",
        },
        {
            letter: "ee",
            char: "エエ",
        },
        {
            letter: "oo",
            char: "オオ",
        },
        {
            letter: "empty",
            char: "empty",
        },
        {
            letter: "ei",
            char: "エイ",
        },
        {
            letter: "ou",
            char: "オウ",
        },
    ],
];

 // start from first index
 const firstIndex = 1;

 function countCardItem(sectionName) {

    // section length
    let sectionLength = 0;

    // search id through every section
    katakanaCharacters.forEach(section => {
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

function cloneKatakanaSection() {

    // get sectionWrapper template
    const sectionWrapper = document.querySelector(".wrapper");

    // iterate every sectionWrapper from katakanaCharacters list
    for (let indexSectionWrapper = 0; indexSectionWrapper < katakanaCharacters.length; indexSectionWrapper++) {

        // clone sectionWrapper
        cloneSection = sectionWrapper.cloneNode(true);
        document.body.querySelector(".letter-container").appendChild(cloneSection);   

    }
}

function changeSectionName() {

    // iterate every sectionWrapper from katakanaCharacters list
    for (let indexSectionWrapper = 0; indexSectionWrapper < katakanaCharacters.length; indexSectionWrapper++) {
    
        // add title per sectionWrapper
        let titleCharacter = katakanaCharacters[indexSectionWrapper][0]["characterName"];
        document.body.getElementsByClassName("title-letter")[indexSectionWrapper].textContent = titleCharacter;
        
        // add id in every katakana section
        let idCharacter = katakanaCharacters[indexSectionWrapper][0]["id"];
        document.body.getElementsByClassName("wrapper")[indexSectionWrapper].querySelector("ul").id = idCharacter;

    }
}

function clonekatakanaCharacter(sectionName, indexList) {

    // get section id
    let sectionId = searchSectionId(sectionName);

    // get character card template
    let card = document.querySelector(`.wrapper #${sectionId} li`);

    // section length
    let sectionsLength = countCardItem(sectionName);

    // clone card with the length of the section
    for (let cardItem = 0; cardItem < sectionsLength; cardItem++) {

        // get character card content template
        let character = katakanaCharacters[indexList][cardItem + firstIndex]["char"];
        let letter = katakanaCharacters[indexList][cardItem + firstIndex]["letter"];

        // change character card content template
        card.querySelector("h3").textContent = character;
        card.querySelector("p").textContent = letter;

        // clone card
        cloneCard = card.cloneNode(true);
        document.querySelector(`.wrapper #${sectionName}`).appendChild(cloneCard);  

    }
}

// Run Function

// clone section from the katakanaCharacters list
cloneKatakanaSection();

// give a name from every section
changeSectionName();

// clone card from every section

// section of katakanaBasic
clonekatakanaCharacter("katakanaBasic", 0);

// section of katakanaDakuon
clonekatakanaCharacter("katakanaDakuon", 1);

// section of katakanaHanDakuon
clonekatakanaCharacter("katakanaHanDakuon", 2);

// section of katakanaCombo
clonekatakanaCharacter("katakanaCombo", 3);

// section of katakanaSmallTsu
clonekatakanaCharacter("katakanaSmallTsu", 4);

// section of katakanaLongVowel
clonekatakanaCharacter("katakanaLongVowel", 5);

// if card is empty then close it
closeEmptyCard();

// change vowel for every katakana section

// section of katakanaCombo
countNumberOfVowel("katakanaCombo", 3)

// section of katakanaCombo
countNumberOfVowel("katakanaSmallTsu", 4)

// section of katakanaLongVowel
countNumberOfVowel("katakanaLongVowel", 3);