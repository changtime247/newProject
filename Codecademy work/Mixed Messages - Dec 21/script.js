const arr_ingred = [
    'All purpose flour', 
    'Butter',
    'Chicken',
    'Sugar',
    'Salt',
    'Eggs',
    'Rice',
    'Pork',
    'Beef',
    'Cheese',
    'Garlic',
    'Orange',
    'Turkey',
    'Onion',
    'Corn',
    'Milk',
    'Mayonnaise',
    'Chiles',
    'Almonds',
    'Bacon',
    'Mushrooms',
    'Coconut',
    'Beets',
    'Strawberries',
    'Fennel',
    'Lamb',
    'Apple',
    'Shrimp',
    'Frozen corn',
    'Frozen spinach',
    'Frozen peas',
    'Ground beef',
    'Chicken breasts',
];

const arr_extra = [
    'allspice',
    'cloves', 
    'ginger',
    'nutmeg',
    'coriander',
    'dill',
    'marjoram', 
    'dry mustard',
    'italian seasoning',
    'rosemary', 
    'sage', 
    'tarragon', 
    'thyme',
    'Lemons',
    'Fresh ginger',
    'Shallots',
    'Capers',
    'Canned chiles',
    'Prepared horseradish',
    'Anchovy paste',
    'Almond extract',
    'Vanilla extract',
    'Kosher salt',
    'Cooking spray',
    'Cornstarch',
    'Confectioner\'s sugar',
    'Honey',
    'Brown sugar'
];

const arr_cuisine = [
    'Mexican Cuisine',
    'Italian Cuisine',
    'Spanish Cuisine',
    'American Cuisine',
    'British Cuisine',
    'Thai Cuisine',
    'Japanese Cuisine',
    'Chinese Cuisine',
    'Indian Cuisine',
    'Canadian Cuisine',
    'Russian Cuisine',
    'Jewish Cuisine',
    'Polish Cuisine',
    'German Cuisine',
    'French Cuisine',
    'Hawaiian Cuisine',
    'Brazilian Cuisine',
    'Cuban Cuisine',
    'Tibetan Cuisine',
    'Egyptian Cuisine',
    'Greek Cuisine',
    'Belgian FCuisine',
    'Irish Cuisine',
    'Cajun Cuisine',
    'Portuguese Cuisine',
    'Turkish Cuisine',
    'Haitian Cuisine',
    'Tahitian Cuisine',
    'Kenyan Cuisine',
    'Korean Cuisine',
    'Nigerian Cuisine',
    'Libyan Cuisine'
];

var star = arr_ingred[Math.floor(Math.random() * arr_ingred.length)];
var extra = arr_extra[Math.floor(Math.random() * arr_extra.length)];
var cuisine = arr_cuisine[Math.floor(Math.random() * arr_cuisine.length)];

const mealToday = () => {
    return `Chef, your challenge today is to take ${star} and ${extra} and create ${cuisine}. Good luck!`
};

console.log(mealToday());