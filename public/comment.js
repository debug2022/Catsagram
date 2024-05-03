//allow the user to add comments to the image
export const createCommentSection = () => {
    const commentSection = document.createElement('div');
    commentSection.id = 'comment-section';

    const commentInput = createCommentInput();
    const submitBtn = createSubmitBtn();
    const commentView = viewCommentSection();

    const container = document.querySelector('.container');
    container.appendChild(commentInput);
    container.appendChild(submitBtn);
    container.appendChild(commentView);
}

const createCommentInput = () => {
    const commentInput = document.createElement('div');
    commentInput.id = 'comment-input';

    const label = document.createElement('label');
    label.setAttribute('for','comment');
    label.innerText = "Comment: ";

    const comment = document.createElement('input');
    comment.id = 'comment';
    comment.setAttribute('placeholder','Add a comment...');

    commentInput.appendChild(label);
    commentInput.appendChild(comment);

    return commentInput;
}

const createSubmitBtn = () => {
    const submitButton = document.createElement('button');
    submitButton.innerText = 'Submit';
    submitButton.type = 'submit';
    submitButton.setAttribute('id','submit');

    submitButton.addEventListener('click', addComment);

    return submitButton;
}

const viewCommentSection = () => {
    const viewComment = document.createElement('div');
    viewComment.id = 'comment-review';

    return viewComment;
}

const addComment = (event) => {
    event.preventDefault();

    const comment = document.getElementById('comment');
    const newComment = comment.value;

    makeNewComment(newComment);
    comment.value = "";

    saveCommentStorage(newComment);
}

const makeNewComment = (comment) => {
    const newCommentDiv = document.createElement('div');
    newCommentDiv.id = 'new-comment-div';
    newCommentDiv.style.textAlign = 'center';

    const commentText = document.createElement('p');
    commentText.id = 'comment-text';
    commentText.innerText = comment;

    const deleteBtn = document.createElement('button');
    deleteBtn.id = 'delete-comment';
    deleteBtn.innerText= "Delete";

    deleteBtn.addEventListener('click', () => {
        newCommentDiv.remove();
    })



    newCommentDiv.append(commentText);
    newCommentDiv.append(deleteBtn);

    const commentCollection = document.getElementById('comment-review');
    commentCollection.append(newCommentDiv);
}

const saveCommentStorage = (comment) => {
    const savedComment = JSON.parse(localStorage.getItem('picComments'));
    savedComment.push(comment);
    localStorage.setItem('picComments', JSON.stringify(savedComment));
}

export const resetComment = () => {
    const commentView = document.getElementById('comment-review');
    // const comments = commentView.children;
    commentView.remove();

}
