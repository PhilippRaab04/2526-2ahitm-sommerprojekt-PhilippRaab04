const mathematikFragen = [
    {
        id: 1,
        frage: "What is 7 + 5?",
        antworten: [
            "10",
            "11",
            "12",
            "13"
        ],
        richtigeAntwort: 3,
        schwierigkeit: "leicht",
        thema: "mathematik"
    },
    {
        id: 2,
        frage: "What is 9 × 3?",
        antworten: [
            "27",
            "21",
            "24",
            "30"
        ],
        richtigeAntwort: 1,
        schwierigkeit: "leicht",
        thema: "mathematik"
    },
    {
        id: 3,
        frage: "What is 15 - 6?",
        antworten: [
            "7",
            "8",
            "9",
            "10"
        ],
        richtigeAntwort: 3,
        schwierigkeit: "leicht",
        thema: "mathematik"
    },
    {
        id: 4,
        frage: "What is 24 ÷ 6?",
        antworten: [
            "3",
            "4",
            "5",
            "6"
        ],
        richtigeAntwort: 2,
        schwierigkeit: "leicht",
        thema: "mathematik"
    },
    {
        id: 5,
        frage: "What is the square of 5?",
        antworten: [
            "10",
            "20",
            "25",
            "30"
        ],
        richtigeAntwort: 3,
        schwierigkeit: "leicht",
        thema: "mathematik"
    },
    {
        id: 6,
        frage: "How many sides does a triangle have?",
        antworten: [
            "3",
            "4",
            "5",
            "6"
        ],
        richtigeAntwort: 1,
        schwierigkeit: "leicht",
        thema: "mathematik"
    },
    {
        id: 7,
        frage: "What is 50% of 20?",
        antworten: [
            "5",
            "10",
            "15",
            "20"
        ],
        richtigeAntwort: 2,
        schwierigkeit: "leicht",
        thema: "mathematik"
    },
    {
        id: 8,
        frage: "What is the next number in the sequence: 2, 4, 6, 8, ...?",
        antworten: [
            "9",
            "10",
            "12",
            "14"
        ],
        richtigeAntwort: 2,
        schwierigkeit: "leicht",
        thema: "mathematik"
    },

    {
        id: 9,
        frage: "What is 12 × 8?",
        antworten: [
            "92",
            "94",
            "96",
            "98"
        ],
        richtigeAntwort: 3,
        schwierigkeit: "mittel",
        thema: "mathematik"
    },
    {
        id: 10,
        frage: "What is the square root of 81?",
        antworten: [
            "7",
            "8",
            "9",
            "10"
        ],
        richtigeAntwort: 3,
        schwierigkeit: "mittel",
        thema: "mathematik"
    },
    {
        id: 11,
        frage: "If x = 4, what is 3x + 2?",
        antworten: [
            "10",
            "12",
            "14",
            "16"
        ],
        richtigeAntwort: 3,
        schwierigkeit: "mittel",
        thema: "mathematik"
    },
    {
        id: 12,
        frage: "What is 25% of 80?",
        antworten: [
            "10",
            "20",
            "30",
            "40"
        ],
        richtigeAntwort: 2,
        schwierigkeit: "mittel",
        thema: "mathematik"
    },
    {
        id: 13,
        frage: "How many degrees are in a right angle?",
        antworten: [
            "45",
            "60",
            "90",
            "180"
        ],
        richtigeAntwort: 3,
        schwierigkeit: "mittel",
        thema: "mathematik"
    },
    {
        id: 14,
        frage: "What is the perimeter of a square with side length 6?",
        antworten: [
            "12",
            "18",
            "24",
            "36"
        ],
        richtigeAntwort: 3,
        schwierigkeit: "mittel",
        thema: "mathematik"
    },
    {
        id: 15,
        frage: "What is 2³?",
        antworten: [
            "4",
            "6",
            "8",
            "16"
        ],
        richtigeAntwort: 3,
        schwierigkeit: "mittel",
        thema: "mathematik"
    },
    {
        id: 16,
        frage: "If a rectangle is 5 units long and 3 units wide, what is its area?",
        antworten: [
            "8",
            "12",
            "15",
            "18"
        ],
        richtigeAntwort: 3,
        schwierigkeit: "mittel",
        thema: "mathematik"
    },

    {
        id: 17,
        frage: "What is the value of π rounded to two decimal places?",
        antworten: [
            "3.12",
            "3.14",
            "3.16",
            "3.18"
        ],
        richtigeAntwort: 2,
        schwierigkeit: "schwer",
        thema: "mathematik"
    },
    {
        id: 18,
        frage: "Solve for x: 2x + 7 = 19",
        antworten: [
            "5",
            "6",
            "7",
            "8"
        ],
        richtigeAntwort: 2,
        schwierigkeit: "schwer",
        thema: "mathematik"
    },
    {
        id: 19,
        frage: "What is the area of a circle with radius 3? (Use π ≈ 3.14)",
        antworten: [
            "18.84",
            "28.26",
            "31.40",
            "37.68"
        ],
        richtigeAntwort: 2,
        schwierigkeit: "schwer",
        thema: "mathematik"
    },
    {
        id: 20,
        frage: "What is the next prime number after 11?",
        antworten: [
            "12",
            "13",
            "15",
            "17"
        ],
        richtigeAntwort: 2,
        schwierigkeit: "schwer",
        thema: "mathematik"
    },
    {
        id: 21,
        frage: "If y = 2 and x = 5, what is xy + y?",
        antworten: [
            "10",
            "11",
            "12",
            "14"
        ],
        richtigeAntwort: 3,
        schwierigkeit: "schwer",
        thema: "mathematik"
    },
    {
        id: 22,
        frage: "What is 15²?",
        antworten: [
            "205",
            "215",
            "225",
            "235"
        ],
        richtigeAntwort: 3,
        schwierigkeit: "schwer",
        thema: "mathematik"
    },
    {
        id: 23,
        frage: "How many faces does a cube have?",
        antworten: [
            "4",
            "5",
            "6",
            "8"
        ],
        richtigeAntwort: 3,
        schwierigkeit: "schwer",
        thema: "mathematik"
    },
    {
        id: 24,
        frage: "What is the result of 144 ÷ 12?",
        antworten: [
            "10",
            "11",
            "12",
            "13"
        ],
        richtigeAntwort: 3,
        schwierigkeit: "schwer",
        thema: "mathematik"
    }
];