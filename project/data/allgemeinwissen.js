const allgemeinwissenFragen = [
    {
        id: 1,
        frage: "What is the capital of Austria?",
        antworten: [
            "Graz",
            "Linz",
            "Vienna",
            "Salzburg"
        ],
        richtigeAntwort: 3,
        schwierigkeit: "leicht",
        thema: "allgemeinwissen"
    },
    {
        id: 2,
        frage: "How many continents are there?",
        antworten: [
            "5",
            "6",
            "7",
            "8"
        ],
        richtigeAntwort: 3,
        schwierigkeit: "leicht",
        thema: "allgemeinwissen"
    },
    {
        id: 3,
        frage: "Which color do you get when you mix blue and yellow?",
        antworten: [
            "Red",
            "Green",
            "Orange",
            "Purple"
        ],
        richtigeAntwort: 2,
        schwierigkeit: "leicht",
        thema: "allgemeinwissen"
    },
    {
        id: 4,
        frage: "Which animal is often called the king of the animals?",
        antworten: [
            "Tiger",
            "Wolf",
            "Elephant",
            "Lion"
        ],
        richtigeAntwort: 4,
        schwierigkeit: "leicht",
        thema: "allgemeinwissen"
    },
    {
        id: 5,
        frage: "How many days are there in a week?",
        antworten: [
            "5",
            "6",
            "7",
            "8"
        ],
        richtigeAntwort: 3,
        schwierigkeit: "leicht",
        thema: "allgemeinwissen"
    },
    {
        id: 6,
        frage: "Which instrument has black and white keys?",
        antworten: [
            "Violin",
            "Piano",
            "Trumpet",
            "Flute"
        ],
        richtigeAntwort: 2,
        schwierigkeit: "leicht",
        thema: "allgemeinwissen"
    },
    {
        id: 7,
        frage: "What is the largest ocean on Earth?",
        antworten: [
            "Atlantic Ocean",
            "Indian Ocean",
            "Pacific Ocean",
            "Arctic Ocean"
        ],
        richtigeAntwort: 3,
        schwierigkeit: "leicht",
        thema: "allgemeinwissen"
    },
    {
        id: 8,
        frage: "How many months are there in one year?",
        antworten: [
            "10",
            "11",
            "12",
            "13"
        ],
        richtigeAntwort: 3,
        schwierigkeit: "leicht",
        thema: "allgemeinwissen"
    },

    {
        id: 9,
        frage: "Which planet is closest to the Sun?",
        antworten: [
            "Venus",
            "Mars",
            "Mercury",
            "Earth"
        ],
        richtigeAntwort: 3,
        schwierigkeit: "mittel",
        thema: "allgemeinwissen"
    },
    {
        id: 10,
        frage: "Which language is mainly spoken in Brazil?",
        antworten: [
            "Spanish",
            "Portuguese",
            "French",
            "English"
        ],
        richtigeAntwort: 2,
        schwierigkeit: "mittel",
        thema: "allgemeinwissen"
    },
    {
        id: 11,
        frage: "What is the largest organ in the human body?",
        antworten: [
            "Liver",
            "Heart",
            "Lung",
            "Skin"
        ],
        richtigeAntwort: 4,
        schwierigkeit: "mittel",
        thema: "allgemeinwissen"
    },
    {
        id: 12,
        frage: "Which country is the largest in the world by area?",
        antworten: [
            "USA",
            "China",
            "Russia",
            "Canada"
        ],
        richtigeAntwort: 3,
        schwierigkeit: "mittel",
        thema: "allgemeinwissen"
    },
    {
        id: 13,
        frage: "Which unit is used for electric voltage?",
        antworten: [
            "Ampere",
            "Volt",
            "Watt",
            "Ohm"
        ],
        richtigeAntwort: 2,
        schwierigkeit: "mittel",
        thema: "allgemeinwissen"
    },
    {
        id: 14,
        frage: "How many players does a football team usually have on the field?",
        antworten: [
            "9",
            "10",
            "11",
            "12"
        ],
        richtigeAntwort: 3,
        schwierigkeit: "mittel",
        thema: "allgemeinwissen"
    },
    {
        id: 15,
        frage: "Which country is famous for the pyramids?",
        antworten: [
            "Greece",
            "Egypt",
            "Mexico",
            "India"
        ],
        richtigeAntwort: 2,
        schwierigkeit: "mittel",
        thema: "allgemeinwissen"
    },
    {
        id: 16,
        frage: "What do you call frozen water?",
        antworten: [
            "Steam",
            "Snow",
            "Ice",
            "Rain"
        ],
        richtigeAntwort: 3,
        schwierigkeit: "mittel",
        thema: "allgemeinwissen"
    },

    {
        id: 17,
        frage: "What is the chemical symbol for gold?",
        antworten: [
            "Ag",
            "Gd",
            "Au",
            "Go"
        ],
        richtigeAntwort: 3,
        schwierigkeit: "schwer",
        thema: "allgemeinwissen"
    },
    {
        id: 18,
        frage: "Which river is often discussed together with the Amazon as the longest in the world?",
        antworten: [
            "Nile",
            "Mississippi",
            "Danube",
            "Yangtze"
        ],
        richtigeAntwort: 1,
        schwierigkeit: "schwer",
        thema: "allgemeinwissen"
    },
    {
        id: 19,
        frage: "How many minutes are there in a full day?",
        antworten: [
            "1240",
            "1440",
            "1640",
            "1340"
        ],
        richtigeAntwort: 2,
        schwierigkeit: "schwer",
        thema: "allgemeinwissen"
    },
    {
        id: 20,
        frage: "Which ocean lies between Africa, Asia and Australia?",
        antworten: [
            "Atlantic Ocean",
            "Arctic Ocean",
            "Indian Ocean",
            "Pacific Ocean"
        ],
        richtigeAntwort: 3,
        schwierigkeit: "schwer",
        thema: "allgemeinwissen"
    },
    {
        id: 21,
        frage: "What do you call a word that has the same meaning as another word?",
        antworten: [
            "Antonym",
            "Synonym",
            "Acronym",
            "Pseudonym"
        ],
        richtigeAntwort: 2,
        schwierigkeit: "schwer",
        thema: "allgemeinwissen"
    },
    {
        id: 22,
        frage: "Which celestial body is not considered a planet in our solar system?",
        antworten: [
            "Mars",
            "Venus",
            "Pluto",
            "Jupiter"
        ],
        richtigeAntwort: 3,
        schwierigkeit: "schwer",
        thema: "allgemeinwissen"
    },
    {
        id: 23,
        frage: "Which scientist developed the theory of relativity?",
        antworten: [
            "Isaac Newton",
            "Albert Einstein",
            "Galileo Galilei",
            "Nikola Tesla"
        ],
        richtigeAntwort: 2,
        schwierigkeit: "schwer",
        thema: "allgemeinwissen"
    },
    {
        id: 24,
        frage: "What is the hardest natural substance on Earth?",
        antworten: [
            "Iron",
            "Diamond",
            "Granite",
            "Quartz"
        ],
        richtigeAntwort: 2,
        schwierigkeit: "schwer",
        thema: "allgemeinwissen"
    }
];