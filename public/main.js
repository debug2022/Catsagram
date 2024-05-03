// Your code here
import { resetScore } from "./score.js";
import { resetComment } from "./comment.js";

//first add heading and image elements to the HTML body
export const createMainContent = () => {

    const h1 = document.createElement('h1');
    h1.innerText = "Kitten Pic";
    h1.style.textAlign = 'center';

    const div = document.createElement('div');
    div.setAttribute('class', 'cat-container');
    div.style.textAlign = 'center';

    const img = document.createElement('img');
    img.setAttribute('id','cat-img');
    img.setAttribute('alt',"kitten");

    div.appendChild(img);

    const container = document.querySelector('.container');
    container.appendChild(h1);
    container.appendChild(div);

    //day 2 added elements
    const div2 = document.createElement('div');
    div2.setAttribute('id','newCatImg');
    const newImg = newCat();
    div2.appendChild(newImg);
    div2.style.textAlign = 'center';
    container.appendChild(div2);

    fetchImg();

}

//window.addEventListener('DOMContentLoaded',initUI);

//seond fetch from Cat API
const fetchImg  = async () => {

    const url = 'https://api.thecatapi.com/v1/images/search'

    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error("Network is not responding");
        }
        const catImg = document.getElementById('cat-img');
        const data = await response.json();
        catImg.src = data[0].url;

    } catch (error) {
        console.error("Failed to fetch a cat picture", error);
    }
}
//window.onload = init;

//Day 2 TASKS ONE
//add a button that requests and displays a new cat image
const newCat = () => {
    const newCatButton = document.createElement('button');
    newCatButton.innerText = "New Cat";

    newCatButton.addEventListener('click', () =>{
        fetchImg();
        resetScore();
        resetComment();
    });

    return newCatButton;
}
