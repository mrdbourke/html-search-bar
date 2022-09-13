// https://jsonplaceholder.typicode.com/users 
import { supabase } from './supabaseClient.js'
import { get_all_food_data_from_supabase } from './get_data.js'

// Time how long the following code takes to run and log it to console  
console.time('get_all_food_data_from_supabase()');
var start_time = performance.now();
let food_data = await get_all_food_data_from_supabase()
var end_time = performance.now();
console.log(end_time - start_time)
// Update the DOM with the time it took rounded to 2 decimal places
document.getElementById("time-for-data").textContent = `Time to load data: ${(end_time - start_time).toFixed(2)} ms`;
console.timeEnd('get_all_food_data_from_supabase()');
console.log(food_data)

const foodCardTemplate = document.querySelector('[data-food-template]');
const foodCardContainer = document.querySelector('[data-food-cards-container]');
const searchInput = document.querySelector('[data-search]');

// Loop through food_data and create a card for each item
let food_list = [];
food_list = food_data.map((food) => {
    const foodCard = foodCardTemplate.content.cloneNode(true).children[0];
    const number = foodCard.querySelector('[data-food-additive-number]')
    const additive_name = foodCard.querySelector('[data-food-additive-name]')
    const description = foodCard.querySelector('[data-food-additive-description]')
    number.textContent = food.number;
    additive_name.textContent = food.additive_name;
    description.textContent = food.description;
    foodCardContainer.append(foodCard);
    console.log(food)
    console.log(food.number)
    return {
        number: food.number,
        additive_name: food.additive_name,
        description: food.description,
        element: foodCard // add which element the card is to the food_list (so we can hide it later)
    }
});

console.log(food_list)

// Add listener to search input
searchInput.addEventListener('input', (e) => {
    // Get the search term and convert it to string/lower case
    const searchValue = e.target.value.toString().toLowerCase();
    food_list.forEach((food) => {
        const isVisible =
            food.number.toString().toLowerCase().includes(searchValue) ||
            food.additive_name.toString().toLowerCase().includes(searchValue) ||
            food.description.toString().toLowerCase().includes(searchValue);
        food.element.classList.toggle('hide', !isVisible);
    });
});

// data.map(user => {
//     const card = userCardTemplate.content.cloneNode(true).children[0];
//     const header = card.querySelector('[data-user-header]');
//     const body = card.querySelector('[data-user-body]');
//     header.textContent = user.name;
//     body.textContent = user.email;
//     userCardContainer.append(card);
//     console.log(user)
//     return { name: user.name, email: user.email, element: card }
// })


// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then(data => {
//         users = data.map(user => {
//             const card = userCardTemplate.content.cloneNode(true).children[0];
//             const header = card.querySelector('[data-user-header]');
//             const body = card.querySelector('[data-user-body]');
//             header.textContent = user.name;
//             body.textContent = user.email;
//             userCardContainer.append(card);
//             console.log(user)
//             return { name: user.name, email: user.email, element: card }
//         })
//     });