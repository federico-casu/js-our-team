/* ----------------------------------------------------------------

Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0: (OK)
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1: (OK)
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2: (OK)
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1: (OK)
Trasformare la stringa foto in una immagine effettiva

BONUS 2: (OK)
Organizzare i singoli membri in card/schede


Dati da usare:

Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg

---------------------------------------------------------------- */

// creo l'array di oggetti
const team = [
    {
        'nome': 'Wayne Barnett', 
        'ruolo': 'Founder & CEO',
        'foto': 'wayne-barnett-founder-ceo.jpg'
    },
    {
        'nome': 'Angela Caroll', 
        'ruolo': 'Chief Editor',
        'foto': 'angela-caroll-chief-editor.jpg'
    },
    {
        'nome': 'Walter Gordon', 
        'ruolo': 'Office Manager',
        'foto': 'walter-gordon-office-manager.jpg'
    },
    {
        'nome': 'Angela Lopez', 
        'ruolo': 'Social Media Manager',
        'foto': 'angela-lopez-social-media-manager.jpg'
    },
    {
        'nome': 'Scott Estrada', 
        'ruolo': 'Developer',
        'foto': 'scott-estrada-developer.jpg'
    },
    {
        'nome': 'Barbara Ramos', 
        'ruolo': 'Graphic Designer',
        'foto': 'barbara-ramos-graphic-designer.jpg'
    },
];

// console.log(team)

// stampo per ogni membro del team le informazioni
for (let i = 0; i < team.length; i++) {
    console.log(`${i+1}° membro del team`)
    for (let key in team[i]) {
        console.log(key, ":", team[i][key])
    }
}

// stampo per ogni membro del team le informazioni sul DOM come stringhe
// for (let i = 0; i < team.length; i++) {
//     //console.log(`${i+1}° membro del team`)
//     document.body.innerHTML += `<br>${i+1}° membro del team<br>`;
//     for (let key in team[i]) {
//         //console.log(key, ":", team[i][key])
//         if (key === 'foto') {
//             document.body.innerHTML += `${key}:<br><img src="./assets/img/${team[i][key]}" alt=""><br>`
//         } else {
//             document.body.innerHTML += `${key}: ${team[i][key]}<br>`;
//         }
//     }
// }

const cards = document.querySelectorAll('div.card');

for (let i = 0; i < cards.length; i++){
    const info = cards[i].querySelector('ul');
    const image = cards[i].querySelector('img');
    
    for (let key in team[i]){
        switch (key) {
            case 'foto':
                //cards[i].innerHTML += `<img src="./assets/img/${team[i]['foto']}" class="card-img-top">`;
                image.setAttribute('src', `./assets/img/${team[i]['foto']}`);
                break;
            case 'nome':
                info.innerHTML += `<li class="list-group-item"><h3>${team[i]['nome']}</h3></li>`;
                break;
            case 'ruolo':
                info.innerHTML += `<li class="list-group-item"><span>${team[i]['ruolo']}</span></li>`;
                break;
        }
    }
}