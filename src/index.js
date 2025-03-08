import './styles.css';
import aeris from './assets/images/aeris.png';
import teaseflix from './assets/images/teaseflix.png';
import kanbanBoard from './assets/images/kanban.png';
import restaurantPage from './assets/images/restaurant.png';
import bookLibrary from './assets/images/booklib.png';
import ticTacToe from './assets/images/tictactoe.png';

import github from './assets/icons/github-original.svg';
import openInNew from './assets/icons/open-in-new.svg';

const renderCards = () => {
    const cardContainer = document.querySelector('.card-container');
    cardContainer.innerHTML = '';

    const cards = [
        {
            src: aeris,
            alt: 'Screenshot of Aeris Weather App',
            name: 'Aeris',
            text: 'Aeris is a modern weather app designed as part of The Odin Project, combining sleek aesthetics with functional simplicity.',
            code: 'https://github.com/FranVlahovic/Aeris',
            live: 'https://franvlahovic.github.io/Aeris/',
        },
        {
            src: teaseflix,
            alt: 'Screenshot of Teaseflix Carousel App',
            name: 'Teaseflix',
            text: 'Teaseflix is a modern web-based movie discovery app that allows users to browse and explore movie recommendations.',
            code: 'https://github.com/FranVlahovic/Teaseflix',
            live: 'https://franvlahovic.github.io/Teaseflix/',
        },
        {
            src: kanbanBoard,
            alt: 'Screenshot of Kanban Board App',
            name: 'Kanban Board',
            text: ' Kanban Board project is a web-based application for managing tasks and workflows using the Kanban methodology.',
            code: 'https://github.com/FranVlahovic/test-kanban-board',
            live: 'https://franvlahovic.github.io/test-kanban-board/',
        },
        {
            src: restaurantPage,
            alt: 'Screenshot of Dieci Piatti Restaurant Page ',
            name: 'Dieci Piatti Restaurant Page',
            text: 'Dieci Piatti Restaurant Page project is a single-page application designed to emulate a restaurant website.',
            code: 'https://github.com/FranVlahovic/odin-restaurant-page',
            live: 'https://franvlahovic.github.io/odin-restaurant-page/',
        },
        {
            src: bookLibrary,
            alt: 'Screenshot of Book Library Page',
            name: 'FLib Book Library',
            text: 'FLib Book Library project allows users to create a collection of books with details such as title, author, pages, and reading status',
            code: 'https://github.com/FranVlahovic/odin-book-library',
            live: 'https://franvlahovic.github.io/odin-book-library/',
        },
        {
            src: ticTacToe,
            alt: 'Screenshot of Tic Tac Toe Game',
            name: 'Tic Tac Toe Game',
            text: 'Tic Tac Toe project allows players to take turns placing their marks (X or O) in a 3x3 grid.',
            code: 'https://github.com/FranVlahovic/odin-tic-tac-toe',
            live: 'https://franvlahovic.github.io/odin-tic-tac-toe/',
        },
    ];

    cards.forEach(({ src, alt, name, code, live, text }) => {
        cardContainer.innerHTML += `
        <div class="card">
                <img class="main-image" src="${src}" alt="${alt}">
                <div class="card-info">
                    <div class="card-name-links">
                        <h2>${name}</h2>
                        <div class="card-links">
                            <a href="${code}" target="_blank"><img src="${github}" alt="GitHub Icon"></a>
                            <a href="${live}" target="_blank"><img src="${openInNew}" alt="Open in new Icon"></a>
                        </div>
                    </div>
                    <p>${text}</p>
                </div>
            </div>
        `;
    });
};
renderCards();
