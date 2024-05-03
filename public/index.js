import { createMainContent } from './main.js';
import { createVoteSection } from './score.js';
import { createCommentSection } from './comment.js';

const initializePage = () => {
    // Create container
    const container = document.createElement("section");
    container.className = "container";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.marginTop = "20px";
    document.body.appendChild(container);
};

//window.addEventListener('DOMContentLoaded',initUI);

window.onload = () => {
    initializePage();
    createMainContent();
    createVoteSection();
    createCommentSection();
};
