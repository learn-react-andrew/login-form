const cities = [
    'Berlin',
    'London',
    'Los Angeles',
    'Moscow',
    'New-York',
    'Paris',
    'Rome',
    'Saint Petersburg',
    'Tokio',
    'Washington'
];

const names = [
    'Alex',
    'Alexandr',
    'Andrew',
    'Abigale',
    'Annie',
    'Bob',
    'Benny',
    'Claudia',
    'Clementine',
    'Cristine',
    'Lucy',
    'Lance',
    'Max',
    'Martin',
    'Tim',
    'Tommy',
    'Tamara',
    'Susanna',
    'Samantha',
    'William',
    'Zane'
];

const lastnames = [
    'Atkins',
    'Billigan',
    'Bobber',
    'Clawance',
    'Jones',
    'Milligan',
    'Nikolas',
    'Smith',
    'Tim',
    'William',
    'Wilson'
];

function getName() {
    return names[Math.floor(Math.random() * names.length)] + " " + lastnames[Math.floor(Math.random() * lastnames.length)]
}

function getCity() {
    return cities[Math.floor(Math.random() * cities.length)]
}

function getPhone() {
    let x = '+79';
    for (let i = 0; i < 9; i++) {
        x += Math.floor(Math.random() * 10)
    }

    return x;
}

export function getList() {
    const list = [];
    for (let i = 0; i < 10; i++) {
        list[i] = {
            city: getCity(),
            name: getName(),
            phone: getPhone()
        }
    }

    return list;
}
