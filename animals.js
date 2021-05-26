const animals = [{
        name: 'Joey',
        type: 'Dog',
        breed: 'Golden Retriever',
        age: 8,
        photo: 'img/dog.jpeg'
    },
    {
        name: 'Patches',
        type: 'Cat',
        breed: 'Domestic Shorthair',
        age: 1,
        photo: 'img/cat.jpg'
    },
    {
        name: 'Kangsley',
        type: 'Kangaroo',
        breed: 'Australian Kangaroo',
        age: 5,
        photo: 'img/kangaroo.jpg'
    },
    {
        name: 'Simba',
        type: 'Elephant',
        breed: 'Asiatic Elephant',
        age: 10,
        photo: 'img/elephant.jpg'
    },
];

let pets = document.querySelector('.cards')


function displayAnimals() {
    let text = ``;
    for (let i = 0; i < animals.length; i++) {
        text += `
        <div class="card">
        <h2>${animals[i].name}</h2>
            <h3>${animals[i].type} | ${animals[i].breed}</h3>
            <p>Age: ${animals[i].age}</p>
            <img src="${animals[i].photo}">
            <hr>
            </div>
        `;

    }
    return text;
}
pets.innerHTML = displayAnimals();