const e=document.querySelector(".gallery"),l=[{url:"https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",alt:"White and Black Long Fur Cat"},{url:"https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",alt:"Orange and White Koi Fish Near Yellow Koi Fish"},{url:"https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",alt:"Group of Horses Running"}].map((e=>`\n <li class="gallery-item">\n   <img src="${e.url}" alt="${e.alt}" class="gallery-image">\n </li>\n`)).join("");e.insertAdjacentHTML("beforeend",l);
//# sourceMappingURL=task-03.5acc9799.js.map