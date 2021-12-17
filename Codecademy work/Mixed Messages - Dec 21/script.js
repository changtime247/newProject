const arr_ani = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'];
const arr_eat = [
    'Aussie Barbied Steak + BlooOmion',
    'Vegan: mash, dip, scoop',
    'Non-GMO fresh giant garden variety freeze-dried and bagged',
    'Hella-jala-spam \'n Pineapple Pizza',
    'Giant bowl o\' curry',
    'Unlimited buffalo wings + craft beer',
    'Whole tuna gutted',
    'Should\'ve not bought SQUID',
    'Rabbit Stew',
    'Whole Pig Spit Roasted',
    'NY Pizza',
    'Jamacain Oxtail Stew'
    ];
const arr_loc = ['NYC', 'LA', 'Las Vegas', 'Sunny Philly', 'Somewhere in Africa', 'Somewhere in Russia', 'Macau', 'Rat\'s mansion', 'Trump Towers', 'Pig\'s sty', 'HK', 'North Pole'];

var ani = arr_ani[Math.floor(Math.random() * 12)];
var eat = arr_eat[Math.floor(Math.random() * 12)];
var loc = arr_loc[Math.floor(Math.random() * 12)];

const select3 = () => {
    return `On ` + Date() + `${ani} ate ${eat} at ${loc}`
};

console.log(select3());