// write your code here
const gifts = [
    {name: 'Teddy Bear', price: 10, id: 1},
    {name: 'Big Red Ball', price: 5, id: 2},
    {name: 'Huge Bear', price: 50, id: 3},
    {name: 'Candy', price: 8, id: 4},
    {name: 'Stuffed Tiger', price: 15, id: 5},
    {name: 'Stuffed Dragon', price: 30, id: 6},
    {name: 'Skateboard', price: 100, id: 7},
    {name: 'Toy Car', price: 25, id: 8},
    {name: "Basketball", price: 20, id: 9},
    {name: "Scary Mask", price: 75, id: 10}]

console.log("WELCOME TO THE CARNIVAL GIFT SHOP!")
console.log("Hello friend! Thank you for visiting the carnival!")
console.log("Here's the list of gifts:")
console.log()
gifts.forEach(item => console.log(`${item.id}- ${item.name}, Cost: ${item.price} tickets`))