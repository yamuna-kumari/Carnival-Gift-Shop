// write your code here
const input = require("sync-input");

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
    {name: "Scary Mask", price: 75, id: 10}
]

let totalTickets = 100

console.log("WELCOME TO THE CARNIVAL GIFT SHOP!")
console.log("Hello friend! Thank you for visiting the carnival!")

showGifts()

console.log()

console.log("What do you want to do?")

let choice = +input("1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts")

function showGifts() {
    console.log("Here's the list of gifts:")
    console.log()
    gifts.forEach(item => console.log(`${item.id}- ${item.name}, Cost: ${item.price} tickets`))
}

function addTicket() {
    let ticketAmt = +input("Enter the ticket amount:")
    console.log(`Total tickets: ${totalTickets + ticketAmt}`)
}

function buyAGift() {
    let idOfGift = +input("Enter the number of the gift you want to get:")
    let gift = gifts.find(function (gift) {
        return gift.id === idOfGift
    })
    console.log(`Here you go, one ${gift.name}!`)
    console.log("Total tickets: " + (totalTickets - gift.price))
}

switch (choice) {
    case 1:
        buyAGift();
        break;

    case 2:
        addTicket();
        break;

    case 3:
        console.log(`Total tickets: ${totalTickets}`)
        break;

    case 4:
        showGifts();
        break;
}

console.log("Have a nice day!")
