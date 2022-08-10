//Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings

//write your code here
const lemonade = {
    Lemonade: "",
    Serves: 2,
    Ingredients: ["1 cup sugar", "1 cup water","1 cup freshly squeezed lemon juice", "2 to 3 cups cold water, to dilute"],
}

    for(const lines in lemonade){
        delete lemonade.Ingredients
        console.log(lines, lemonade[lines])
    }
lemonade.Ingredients = ["1 cup sugar", "1 cup water","1 cup freshly squeezed lemon juice", "2 to 3 cups cold water, to dilute"]
    console.log("Ingredients:")
    for(const ingredientsLines in lemonade.Ingredients){
        console.log(lemonade.Ingredients[ingredientsLines])
    }

//or
console.log("----------")
console.log(Object.keys(lemonade)[0])
console.log(Object.keys(lemonade)[1]+":",lemonade.Serves)
console.log(Object.keys(lemonade)[2]+":")
for(const ingredientsLines of lemonade.Ingredients){
    console.log(ingredientsLines)
}

//or 

console.log("----------")
console.log(Object.keys(lemonade)[0])
console.log(Object.keys(lemonade)[1]+":",lemonade.Serves)
console.log(Object.keys(lemonade)[2]+":")
console.log(lemonade.Ingredients[0])
console.log(lemonade.Ingredients[1])
console.log(lemonade.Ingredients[2])
console.log(lemonade.Ingredients[3])


//Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
//Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
//Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.

//write your code here
console.log("----------")
const bookList = [
    {title: "John Barleycorn", author: "Jack London", alreadyRead: true},
    {title: "Moby Dick", author: "Herman Melville", alreadyRead: false},
    {title: "Hamlet", author: "Shakespeare", alreadyRead: false},
    {title: "The Lord of the Rings", author: "J.R.R. Tolkien", alreadyRead: true},
]

for(const book of bookList){
    console.log(`${book.title} by ${book.author}`)
}

for(const book of bookList){
if(book.alreadyRead === true){
    console.log(`You have already read ${book.title} by ${book.author}`);
    } else {
    console.log(`You still need to read ${book.title} by ${book.author}`);
}
}
