const geschichteFragen = [
    {
        id: 1,
        frage: "Who was the first President of the United States?",
        antworten: [
            "Thomas Jefferson",
            "George Washington",
            "Abraham Lincoln",
            "John Adams"
        ],
        richtigeAntwort: 2,
        schwierigkeit: "leicht",
        thema: "geschichte"
    },
    {
        id: 2,
        frage: "Which ancient civilization built the pyramids?",
        antworten: [
            "Romans",
            "Greeks",
            "Egyptians",
            "Mayans"
        ],
        richtigeAntwort: 3,
        schwierigkeit: "leicht",
        thema: "geschichte"
    },
    {
        id: 3,
        frage: "In which country did the Renaissance begin?",
        antworten: [
            "France",
            "Italy",
            "England",
            "Spain"
        ],
        richtigeAntwort: 2,
        schwierigkeit: "leicht",
        thema: "geschichte"
    },
    {
        id: 4,
        frage: "Which wall divided Berlin for many years?",
        antworten: [
            "The Roman Wall",
            "The Berlin Wall",
            "The Iron Wall",
            "The East Wall"
        ],
        richtigeAntwort: 2,
        schwierigkeit: "leicht",
        thema: "geschichte"
    },
    {
        id: 5,
        frage: "Who discovered America in 1492, according to traditional European history?",
        antworten: [
            "Vasco da Gama",
            "Ferdinand Magellan",
            "Christopher Columbus",
            "Marco Polo"
        ],
        richtigeAntwort: 3,
        schwierigkeit: "leicht",
        thema: "geschichte"
    },
    {
        id: 6,
        frage: "Which ship famously sank in 1912 after hitting an iceberg?",
        antworten: [
            "Britannic",
            "Titanic",
            "Lusitania",
            "Victory"
        ],
        richtigeAntwort: 2,
        schwierigkeit: "leicht",
        thema: "geschichte"
    },
    {
        id: 7,
        frage: "Which war was fought between the North and South regions of the United States?",
        antworten: [
            "World War I",
            "The Civil War",
            "The Cold War",
            "The Crimean War"
        ],
        richtigeAntwort: 2,
        schwierigkeit: "leicht",
        thema: "geschichte"
    },
    {
        id: 8,
        frage: "Who was known as the queen of ancient Egypt and had a famous relationship with Julius Caesar and Mark Antony?",
        antworten: [
            "Nefertiti",
            "Hatshepsut",
            "Cleopatra",
            "Joan of Arc"
        ],
        richtigeAntwort: 3,
        schwierigkeit: "leicht",
        thema: "geschichte"
    },

    {
        id: 9,
        frage: "In which year did World War II end in Europe?",
        antworten: [
            "1943",
            "1944",
            "1945",
            "1946"
        ],
        richtigeAntwort: 3,
        schwierigkeit: "mittel",
        thema: "geschichte"
    },
    {
        id: 10,
        frage: "Which empire was ruled by Julius Caesar?",
        antworten: [
            "Ottoman Empire",
            "Roman Republic",
            "British Empire",
            "Byzantine Empire"
        ],
        richtigeAntwort: 2,
        schwierigkeit: "mittel",
        thema: "geschichte"
    },
    {
        id: 11,
        frage: "What was the name of the trade route connecting Europe and Asia in ancient times?",
        antworten: [
            "Spice Road",
            "Royal Path",
            "Silk Road",
            "Golden Way"
        ],
        richtigeAntwort: 3,
        schwierigkeit: "mittel",
        thema: "geschichte"
    },
    {
        id: 12,
        frage: "Which revolution began in France in 1789?",
        antworten: [
            "Industrial Revolution",
            "French Revolution",
            "Russian Revolution",
            "Glorious Revolution"
        ],
        richtigeAntwort: 2,
        schwierigkeit: "mittel",
        thema: "geschichte"
    },
    {
        id: 13,
        frage: "Who was the Soviet leader during most of World War II?",
        antworten: [
            "Lenin",
            "Stalin",
            "Trotsky",
            "Khrushchev"
        ],
        richtigeAntwort: 2,
        schwierigkeit: "mittel",
        thema: "geschichte"
    },
    {
        id: 14,
        frage: "Which country was ruled by the pharaohs?",
        antworten: [
            "Persia",
            "Greece",
            "Egypt",
            "Rome"
        ],
        richtigeAntwort: 3,
        schwierigkeit: "mittel",
        thema: "geschichte"
    },
    {
        id: 15,
        frage: "Which event is commonly seen as the start of World War I?",
        antworten: [
            "The sinking of the Titanic",
            "The assassination of Archduke Franz Ferdinand",
            "The invasion of Poland",
            "The Russian Revolution"
        ],
        richtigeAntwort: 2,
        schwierigkeit: "mittel",
        thema: "geschichte"
    },
    {
        id: 16,
        frage: "Which document signed in 1215 limited the power of the English king?",
        antworten: [
            "The Bill of Rights",
            "The Magna Carta",
            "The Declaration of Independence",
            "The Treaty of Versailles"
        ],
        richtigeAntwort: 2,
        schwierigkeit: "mittel",
        thema: "geschichte"
    },

    {
        id: 17,
        frage: "Which treaty officially ended World War I?",
        antworten: [
            "Treaty of Paris",
            "Treaty of Vienna",
            "Treaty of Versailles",
            "Treaty of Rome"
        ],
        richtigeAntwort: 3,
        schwierigkeit: "schwer",
        thema: "geschichte"
    },
    {
        id: 18,
        frage: "Who was the first emperor of Rome?",
        antworten: [
            "Nero",
            "Augustus",
            "Julius Caesar",
            "Trajan"
        ],
        richtigeAntwort: 2,
        schwierigkeit: "schwer",
        thema: "geschichte"
    },
    {
        id: 19,
        frage: "Which civilization is known for creating democracy in Athens?",
        antworten: [
            "Romans",
            "Greeks",
            "Phoenicians",
            "Persians"
        ],
        richtigeAntwort: 2,
        schwierigkeit: "schwer",
        thema: "geschichte"
    },
    {
        id: 20,
        frage: "In which year did the Berlin Wall fall?",
        antworten: [
            "1987",
            "1988",
            "1989",
            "1991"
        ],
        richtigeAntwort: 3,
        schwierigkeit: "schwer",
        thema: "geschichte"
    },
    {
        id: 21,
        frage: "Which ancient city was destroyed by Mount Vesuvius in 79 AD?",
        antworten: [
            "Athens",
            "Carthage",
            "Pompeii",
            "Sparta"
        ],
        richtigeAntwort: 3,
        schwierigkeit: "schwer",
        thema: "geschichte"
    },
    {
        id: 22,
        frage: "Who led the Mongol Empire to become the largest contiguous land empire in history?",
        antworten: [
            "Attila",
            "Genghis Khan",
            "Kublai Khan",
            "Tamerlane"
        ],
        richtigeAntwort: 2,
        schwierigkeit: "schwer",
        thema: "geschichte"
    },
    {
        id: 23,
        frage: "Which war was fought between Athens and Sparta?",
        antworten: [
            "Punic War",
            "Peloponnesian War",
            "Trojan War",
            "Persian War"
        ],
        richtigeAntwort: 2,
        schwierigkeit: "schwer",
        thema: "geschichte"
    },
    {
        id: 24,
        frage: "Which dynasty built much of the Great Wall of China as seen today?",
        antworten: [
            "Han Dynasty",
            "Tang Dynasty",
            "Ming Dynasty",
            "Qing Dynasty"
        ],
        richtigeAntwort: 3,
        schwierigkeit: "schwer",
        thema: "geschichte"
    }
];