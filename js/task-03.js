const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listEl = document.querySelector('.gallery');
listEl.style.display = "flex";
listEl.style.flexDirection = "column";
listEl.style.alignItems = "center";
listEl.style.gap = "50px";


const item = images.map(img =>
  `<li class="gallery__item" style="list-style: none;">
    <img class="gallery__img" src="${img.url}" alt="${img.alt}"
    width="800px" style="box-shadow: -20px 25px 30px black"></img>
    </li>`).join("");

listEl.insertAdjacentHTML('afterbegin', item);
console.log(listEl);

