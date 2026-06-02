const literaturFragen = [
    {
        id: 1,
        frage: "Who wrote 'Romeo and Juliet'?",
        antworten: [
            "Charles Dickens",
            "William Shakespeare",
            "Franz Kafka",
            "Jane Austen"
        ],
        richtigeAntwort: 2,
        schwierigkeit: "leicht",
        thema: "literatur"
    },
    {
        id: 2,
        frage: "Which book tells the story of a boy attending a school of magic?",
        antworten: [
            "The Hobbit",
            "Harry Potter",
            "The Little Prince",
            "Dracula"
        ],
        richtigeAntwort: 2,
        schwierigkeit: "leicht",
        thema: "literatur"
    },
    {
        id: 3,
        frage: "Who wrote 'The Metamorphosis'?",
        antworten: [
            "Franz Kafka",
            "Fyodor Dostoevsky",
            "Osamu Dazai",
            "Johann Wolfgang von Goethe"
        ],
        richtigeAntwort: 1,
        schwierigkeit: "leicht",
        thema: "literatur"
    },
    {
        id: 4,
        frage: "What is the name of the famous detective created by Arthur Conan Doyle?",
        antworten: [
            "Hercule Poirot",
            "Sherlock Holmes",
            "Tom Sawyer",
            "Hamlet"
        ],
        richtigeAntwort: 2,
        schwierigkeit: "leicht",
        thema: "literatur"
    },
    {
        id: 5,
        frage: "Who wrote 'Animal Farm'?",
        antworten: [
            "George Orwell",
            "Ernest Hemingway",
            "Leo Tolstoy",
            "Victor Hugo"
        ],
        richtigeAntwort: 1,
        schwierigkeit: "leicht",
        thema: "literatur"
    },
    {
        id: 6,
        frage: "Which writer created the character Dracula?",
        antworten: [
            "Mary Shelley",
            "Edgar Allan Poe",
            "Bram Stoker",
            "Jules Verne"
        ],
        richtigeAntwort: 3,
        schwierigkeit: "leicht",
        thema: "literatur"
    },
    {
        id: 7,
        frage: "Who wrote 'The Little Prince'?",
        antworten: [
            "Antoine de Saint-Exupéry",
            "Franz Kafka",
            "Oscar Wilde",
            "Mark Twain"
        ],
        richtigeAntwort: 1,
        schwierigkeit: "leicht",
        thema: "literatur"
    },
    {
        id: 8,
        frage: "Which author wrote 'Pride and Prejudice'?",
        antworten: [
            "Emily Brontë",
            "Virginia Woolf",
            "Jane Austen",
            "Louisa May Alcott"
        ],
        richtigeAntwort: 3,
        schwierigkeit: "leicht",
        thema: "literatur"
    },

    {
        id: 9,
        frage: "Who wrote 'Crime and Punishment'?",
        antworten: [
            "Leo Tolstoy",
            "Fyodor Dostoevsky",
            "Franz Kafka",
            "Albert Camus"
        ],
        richtigeAntwort: 2,
        schwierigkeit: "mittel",
        thema: "literatur"
    },
    {
        id: 10,
        frage: "Which author wrote 'No Longer Human'?",
        antworten: [
            "Yukio Mishima",
            "Haruki Murakami",
            "Osamu Dazai",
            "Kenzaburō Ōe"
        ],
        richtigeAntwort: 3,
        schwierigkeit: "mittel",
        thema: "literatur"
    },
    {
        id: 11,
        frage: "Who wrote 'Faust'?",
        antworten: [
            "Friedrich Schiller",
            "Johann Wolfgang von Goethe",
            "Thomas Mann",
            "Hermann Hesse"
        ],
        richtigeAntwort: 2,
        schwierigkeit: "mittel",
        thema: "literatur"
    },
    {
        id: 12,
        frage: "Which novel begins with Gregor Samsa waking up transformed into an insect?",
        antworten: [
            "The Trial",
            "The Castle",
            "The Metamorphosis",
            "Notes from Underground"
        ],
        richtigeAntwort: 3,
        schwierigkeit: "mittel",
        thema: "literatur"
    },
    {
        id: 13,
        frage: "Who wrote 'The Picture of Dorian Gray'?",
        antworten: [
            "Oscar Wilde",
            "Edgar Allan Poe",
            "Victor Hugo",
            "Thomas Hardy"
        ],
        richtigeAntwort: 1,
        schwierigkeit: "mittel",
        thema: "literatur"
    },
    {
        id: 14,
        frage: "Which Russian author wrote 'The Brothers Karamazov'?",
        antworten: [
            "Anton Chekhov",
            "Fyodor Dostoevsky",
            "Ivan Turgenev",
            "Nikolai Gogol"
        ],
        richtigeAntwort: 2,
        schwierigkeit: "mittel",
        thema: "literatur"
    },
    {
        id: 15,
        frage: "Who wrote 'Thus Spoke Zarathustra'?",
        antworten: [
            "Arthur Schopenhauer",
            "Friedrich Nietzsche",
            "Søren Kierkegaard",
            "Martin Heidegger"
        ],
        richtigeAntwort: 2,
        schwierigkeit: "mittel",
        thema: "literatur"
    },
    {
        id: 16,
        frage: "Which author wrote '1984'?",
        antworten: [
            "George Orwell",
            "Aldous Huxley",
            "Ray Bradbury",
            "J. D. Salinger"
        ],
        richtigeAntwort: 1,
        schwierigkeit: "mittel",
        thema: "literatur"
    },

    {
        id: 17,
        frage: "Which Kafka novel centers on Josef K. being arrested without knowing his crime?",
        antworten: [
            "The Castle",
            "The Trial",
            "Amerika",
            "The Metamorphosis"
        ],
        richtigeAntwort: 2,
        schwierigkeit: "schwer",
        thema: "literatur"
    },
    {
        id: 18,
        frage: "In 'Crime and Punishment', what is the first name of Raskolnikov?",
        antworten: [
            "Ivan",
            "Rodion",
            "Alyosha",
            "Dmitri"
        ],
        richtigeAntwort: 2,
        schwierigkeit: "schwer",
        thema: "literatur"
    },
    {
        id: 19,
        frage: "Which philosopher wrote 'Beyond Good and Evil'?",
        antworten: [
            "Immanuel Kant",
            "Friedrich Nietzsche",
            "Jean-Paul Sartre",
            "Georg Hegel"
        ],
        richtigeAntwort: 2,
        schwierigkeit: "schwer",
        thema: "literatur"
    },
    {
        id: 20,
        frage: "Which country was Osamu Dazai from?",
        antworten: [
            "China",
            "Korea",
            "Japan",
            "Vietnam"
        ],
        richtigeAntwort: 3,
        schwierigkeit: "schwer",
        thema: "literatur"
    },
    {
        id: 21,
        frage: "Which Dostoevsky novel features the character Ivan Karamazov?",
        antworten: [
            "The Idiot",
            "Demons",
            "The Brothers Karamazov",
            "Notes from Underground"
        ],
        richtigeAntwort: 3,
        schwierigkeit: "schwer",
        thema: "literatur"
    },
    {
        id: 22,
        frage: "Which work by Nietzsche includes the idea of the Übermensch?",
        antworten: [
            "The Birth of Tragedy",
            "Thus Spoke Zarathustra",
            "Ecce Homo",
            "The Gay Science"
        ],
        richtigeAntwort: 2,
        schwierigkeit: "schwer",
        thema: "literatur"
    },
    {
        id: 23,
        frage: "In Kafka's 'The Metamorphosis', into what creature does Gregor Samsa transform?",
        antworten: [
            "A spider",
            "A beetle-like insect",
            "A moth",
            "A rat"
        ],
        richtigeAntwort: 2,
        schwierigkeit: "schwer",
        thema: "literatur"
    },
    {
        id: 24,
        frage: "Which literary movement is Franz Kafka most commonly associated with?",
        antworten: [
            "Romanticism",
            "Realism",
            "Modernism",
            "Classicism"
        ],
        richtigeAntwort: 3,
        schwierigkeit: "schwer",
        thema: "literatur"
    }
];