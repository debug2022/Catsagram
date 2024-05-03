//DAY 2 TASK TWO

//allow the user to upvote/downvote the image
//and display the score (upvotes - downvotes).
export const createVoteSection = () => {
    const voteSection = document.createElement('div');
    voteSection.id = 'vote-section';

    const scoreSection = createScoreSection();
    const buttonSection = createButtonSection();

    voteSection.appendChild(scoreSection);
    voteSection.appendChild(buttonSection);

    const container = document.querySelector('.container');
    container.appendChild(voteSection);
}

const createScoreSection = () => {
    //popularity score
    const scoreSection = document.createElement('div');
    scoreSection.id = 'score-section';

    const scoreText = document.createElement('span');
    scoreText.id = 'score-text';
    scoreText.innerText = "Popularity Score: ";

    const score = document.createElement('span');
    score.id = 'score';
    score.innerText = "0";

    scoreSection.appendChild(scoreText);
    scoreSection.appendChild(score);
    scoreSection.style.textAlign = 'center';

    return scoreSection;

}

const createButtonSection = () => {
    //upvote and downvote buttons
    const buttonSection = document.createElement('div');
    buttonSection.setAttribute('id','button-group');

    const upvote = document.createElement('button');
    upvote.innerText = 'Upvote';
    upvote.setAttribute('id','upvote');

    const downvote = document.createElement('button');
    downvote.innerText = 'Downvote';
    downvote.setAttribute('id','downvote');

    buttonSection.appendChild(upvote);
    buttonSection.appendChild(downvote);
    buttonSection.style.textAlign = 'center';

    //event handling
    upvote.addEventListener('click', changeScore);
    downvote.addEventListener('click', changeScore);

    return buttonSection;
}

const changeScore = (event) => {
    const score = document.getElementById('score');
    let currentScore = score.innerText;

    const upvoteBtn = document.getElementById('upvote');
    const downvoteBtn = document.getElementById('downvote');

    if(event.target === upvoteBtn) {
        currentScore = Number(currentScore) + 1;
    } else if(event.target === downvoteBtn) {
        currentScore = Number(currentScore) - 1;
    }

    setNewScore(currentScore);
}

const setNewScore = (score) => {
    const scoreNum = document.getElementById('score');
    scoreNum.innerText = score;

    localStorage.setItem("picScore", score);
}

// const saveScoreStorage = (score) => {
//     localStorage.setItem("picScore", score);
// };

export const resetScore = () => {
    setNewScore(0);
};
