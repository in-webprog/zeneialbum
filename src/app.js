/*
* File: app.js
* Author: Dóra Boglárka
* Copyright: 2026, Dóra Boglárka
* Group: I N
* Date: 2026-05-06
* Github: https://github.com/kalae1337/
* Licenc: MIT
*/

const albumok = [
  { eloado: 'Pink Floyd', cim: 'The Dark Side of the Moon', ev: 1973, mufaj: 'Progressive Rock', hossz: 43 },
  { eloado: 'Michael Jackson', cim: 'Thriller', ev: 1982, mufaj: 'Pop', hossz: 42 },
  { eloado: 'Miles Davis', cim: 'Kind of Blue', ev: 1959, mufaj: 'Jazz', hossz: 45 },
  { eloado: 'The Beatles', cim: 'Abbey Road', ev: 1969, mufaj: 'Rock', hossz: 47 },
  { eloado: 'Queen', cim: 'A Night at the Opera', ev: 1975, mufaj: 'Rock', hossz: 43 },
  { eloado: 'Adele', cim: '21', ev: 2011, mufaj: 'Pop', hossz: 48 },
  { eloado: 'Kendrick Lamar', cim: 'To Pimp a Butterfly', ev: 2015, mufaj: 'Hip Hop', hossz: 79 },
  { eloado: 'Led Zeppelin', cim: 'Led Zeppelin IV', ev: 1971, mufaj: 'Hard Rock', hossz: 42 }
];


const doc = {
    tbody: document.querySelector('#tbody'),
    aboutbtn : document.querySelector("#aboutbtn"),
    osszhossz : document.querySelector("#osszhossz")
};

var rows = '';

albumok.forEach(album => {

    const dupla = album.hossz > 50 ? ' (Dupla album)' : '';

    var row = `
    <tr>
        <td>${album.eloado}</td>
        <td>${album.cim}${dupla}</td>
        <td>${album.ev}</td>
        <td>${album.mufaj}</td>
        <td>${album.hossz}</td>

    </tr>
    `
    rows += row;

});

doc.tbody.innerHTML = rows;



doc.aboutbtn.addEventListener('click', () => {
    Swal.fire({
        title: 'Zenei albumok',
        text: 'Kala, IN, 2026-05-06'
    })
})
