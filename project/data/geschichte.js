const geschichteFragen = [
    {
        "id": 1,
        "frage": "In welchem Jahr begann der Erste Weltkrieg?",
        "antworten": [
            "1916",
            "1914",
            "1918",
            "1912"
        ],
        "richtigeAntwort": 2,
        "schwierigkeit": "leicht",
        "thema": "geschichte"
    },
    {
        "id": 2,
        "frage": "Wer war der erste Kaiser des Römischen Reiches?",
        "antworten": [
            "Augustus",
            "Nero",
            "Caesar",
            "Trajan"
        ],
        "richtigeAntwort": 1,
        "schwierigkeit": "leicht",
        "thema": "geschichte"
    },
    {
        "id": 3,
        "frage": "Welche Mauer fiel im Jahr 1989?",
        "antworten": [
            "Hadrianswall",
            "Berliner Mauer",
            "Chinesische Mauer",
            "Westwall"
        ],
        "richtigeAntwort": 2,
        "schwierigkeit": "leicht",
        "thema": "geschichte"
    },
    {
        "id": 4,
        "frage": "In welchem Land begann die Französische Revolution?",
        "antworten": [
            "Frankreich",
            "Italien",
            "Deutschland",
            "Spanien"
        ],
        "richtigeAntwort": 1,
        "schwierigkeit": "leicht",
        "thema": "geschichte"
    },
    {
        "id": 5,
        "frage": "Wer entdeckte Amerika im Jahr 1492 aus europäischer Sicht?",
        "antworten": [
            "Ferdinand Magellan",
            "Vasco da Gama",
            "Christoph Kolumbus",
            "James Cook"
        ],
        "richtigeAntwort": 3,
        "schwierigkeit": "leicht",
        "thema": "geschichte"
    },
    {
        "id": 6,
        "frage": "Wie hieß der Konflikt zwischen Nord- und Südstaaten in den USA?",
        "antworten": [
            "Unabhängigkeitskrieg",
            "Bürgerkrieg",
            "Siebenjähriger Krieg",
            "Kalter Krieg"
        ],
        "richtigeAntwort": 2,
        "schwierigkeit": "leicht",
        "thema": "geschichte"
    },


    {
        "id": 7,
        "frage": "Welche Stadt wurde im Altertum durch ein hölzernes Pferd erobert?",
        "antworten": [
            "Athen",
            "Sparta",
            "Troja",
            "Rom"
        ],
        "richtigeAntwort": 3,
        "schwierigkeit": "mittel",
        "thema": "geschichte"
    },
    {
        "id": 8,
        "frage": "Welcher österreichische Thronfolger wurde 1914 in Sarajevo ermordet?",
        "antworten": [
            "Franz Joseph",
            "Franz Ferdinand",
            "Karl I.",
            "Maximilian I."
        ],
        "richtigeAntwort": 2,
        "schwierigkeit": "mittel",
        "thema": "geschichte"
    },
    {
        "id": 9,
        "frage": "Wie hieß die Epoche, die direkt auf das Mittelalter folgte?",
        "antworten": [
            "Antike",
            "Aufklärung",
            "Renaissance",
            "Barock"
        ],
        "richtigeAntwort": 3,
        "schwierigkeit": "mittel",
        "thema": "geschichte"
    },
    {
        "id": 10,
        "frage": "Wer war Königin von Ägypten und ist besonders durch ihre Verbindung zu Rom bekannt?",
        "antworten": [
            "Nofretete",
            "Hatchepsut",
            "Kleopatra",
            "Semiramis"
        ],
        "richtigeAntwort": 3,
        "schwierigkeit": "mittel",
        "thema": "geschichte"
    },
    {
        "id": 11,
        "frage": "Welches Reich bestand in Konstantinopel noch lange nach dem Untergang Westroms weiter?",
        "antworten": [
            "Heiliges Römisches Reich",
            "Osmanisches Reich",
            "Byzantinisches Reich",
            "Persisches Reich"
        ],
        "richtigeAntwort": 3,
        "schwierigkeit": "mittel",
        "thema": "geschichte"
    },
    {
        "id": 12,
        "frage": "Welcher Vertrag beendete 1919 offiziell den Ersten Weltkrieg für Deutschland?",
        "antworten": [
            "Vertrag von Wien",
            "Vertrag von Paris",
            "Vertrag von Versailles",
            "Vertrag von Rom"
        ],
        "richtigeAntwort": 3,
        "schwierigkeit": "mittel",
        "thema": "geschichte"
    },
    

    {
        "id": 13,
        "frage": "Welche beiden Supermächte standen sich im Kalten Krieg hauptsächlich gegenüber?",
        "antworten": [
            "USA und Sowjetunion",
            "Deutschland und Frankreich",
            "China und Japan",
            "England und Spanien"
        ],
        "richtigeAntwort": 1,
        "schwierigkeit": "schwer",
        "thema": "geschichte"
    },
    {
        "id": 14,
        "frage": "Welche Schlacht im Jahr 1815 beendete endgültig Napoleons Herrschaft?",
        "antworten": [
            "Leipzig",
            "Austerlitz",
            "Waterloo",
            "Sedan"
        ],
        "richtigeAntwort": 3,
        "schwierigkeit": "schwer",
        "thema": "geschichte"
    },
    {
        "id": 15,
        "frage": "Welche Reformbewegung im 16. Jahrhundert ist eng mit Martin Luther verbunden?",
        "antworten": [
            "Gegenreformation",
            "Humanismus",
            "Reformation",
            "Aufklärung"
        ],
        "richtigeAntwort": 3,
        "schwierigkeit": "schwer",
        "thema": "geschichte"
    },
    {
        "id": 16,
        "frage": "Wie hieß der Seeweg, über den europäische Mächte im 15. und 16. Jahrhundert Handelsrouten nach Indien suchten?",
        "antworten": [
            "Nordwestpassage",
            "Seidenstraße",
            "Kaproute",
            "Bernsteinstraße"
        ],
        "richtigeAntwort": 3,
        "schwierigkeit": "schwer",
        "thema": "geschichte"
    },
    {
        "id": 17,
        "frage": "Welche Revolution begann 1917 in Russland und führte zur Machtübernahme der Bolschewiki?",
        "antworten": [
            "Februarrevolution",
            "Oktoberrevolution",
            "Julirevolution",
            "Dezemberrevolution"
        ],
        "richtigeAntwort": 2,
        "schwierigkeit": "schwer",
        "thema": "geschichte"
    },
    {
        "id": 18,
        "frage": "Wie nennt man die Wiedergeburt der Künste und Wissenschaften in Europa zwischen Mittelalter und Neuzeit?",
        "antworten": [
            "Barock",
            "Gotik",
            "Renaissance",
            "Romantik"
        ],
        "richtigeAntwort": 3,
        "schwierigkeit": "schwer",
        "thema": "geschichte"
    }
]