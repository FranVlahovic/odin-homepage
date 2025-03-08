import './styles.css';
import aeris from './assets/images/aeris.png';
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
        },
    ];

    cards.forEach((card) => {
        cardContainer.innerHTML += `
        <div class="card">
                <img src="${card.src}" alt="${card.alt}">
                <div>
                    <div class="card-name-links">
                        <h2>${card.name}</h2>
                        <div class="card-links">
                            <img src="${github}" alt="GitHub Icon">
                            <img src="${openInNew}" alt="Open in new Icon">
                        </div>
                    </div>
                    <p>${card.text}</p>
                </div>
            </div>
        `;
    });
};
renderCards();
