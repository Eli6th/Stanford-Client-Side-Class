const book_data = [
    ["Thomas Mann", "Death in Venice", 
        "One of the most famous literary works of the twentieth century, this novella embodies themes that preoccupied Thomas Mann in much of his work: the duality of art and life, the presence of death and disintegration in the midst of existence, the connection between love and suffering and the conflict between the artist and his inner self."
    ],
    ["James Joyce", "A portrait of the artist as a young man", 
        "This book is a fictional re-creation of the Irish writer's own life and early environment. The experiences of the novel's young hero, unfold in astonishingly vivid scenes that seem freshly recalled from life and provide a powerful portrait of the coming of age of a young man of unusual intelligence, sensitivity and character."
    ],
    ["E. M. Forster", "A room with a view", 
        "This work displays an unusually perceptive view of British " +
        "society in the early 20th century.It is a social comedy set in Florence, " +
        "Italy, and Surrey, England. Its heroine, Lucy Honeychurch, struggling " +
        "against straitlaced Victorian attitudes of arrogance, narroe mindedness " +
        "and sobbery, falls in love - while on holiday in Italy - with the socially " +
        "unsuitable George Emerson."
    ],
    ["Isabel Allende", "The house of spirits", 
        "Allende describes the life of three generations of a " +
        "prominent family in Chile and skillfully combines with this all the main " +
        "historical events of the time, up until Pinochet's dictatorship."
    ],
    ["Isabel Allende", "Of love and shadows", 
        "The whole world of Irene Beltran, a young reporter in Chile " +
        "at the time of the dictatorship, is destroyed when she discovers a series " +
        "of killings carried out by government soldiers. With the help of a " +
        "photographer, Francisco Leal, and risking her life, she tries to come up " +
        "with evidence against the dictatorship."
    ]
]

function search() {
    var author = document.getElementById("author_name").value;
    var bookTitle = document.getElementById("book_title").value;
    var found = false;
    var row;

    if (author == "" && bookTitle == "") {
        description.innerText = "No input detected, please try again."
    } else if (bookTitle == "") {
        for (let row = 0; row < book_data.length; row++) {
            if (author == book_data[row][0]) {
                addBook(found, row);
                found = true;
            }
        }

        if (found == false)
            description.innerText = "No books by " + author + " were found."
    } else if (author == "") {
        for (let row = 0; row < book_data.length; row++) {
            if (bookTitle == book_data[row][1]) {
                addBook(found, row);
                found = true;
            }
        }

        if (found == false)
            description.innerText = "No book called " + bookTitle + " was found."
    } else {
        for (let row = 0; row < book_data.length; row++) {
            if (author == book_data[row][0] && bookTitle == book_data[row][1]) {
                addBook(found, row);
                found = true;
            }
        }

        if (found == false)
            description.innerText = "No book called " + bookTitle + " by " + author + " was found."
    }
}

function addBook (found, row) {
    var description = document.getElementById("description");
    if (found == false) {
        description.innerText = "Author: " + book_data[row][0] + 
        "\nBook Title: " + book_data[row][1] + 
        "\nDescription: " + book_data[row][2];
    } else {
        description.innerText += "\n\nAuthor: " + book_data[row][0] + 
        "\nBook Title: " + book_data[row][1] + 
        "\nDescription: " + book_data[row][2];
    }
}

document.getElementById("search").addEventListener("click", search);