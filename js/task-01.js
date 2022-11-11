const itemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemEl.length}`);

for (const item of itemEl) {

    const title = item.firstElementChild;
    console.log(`Category: ${title.textContent}`);

    const itemsList = item.lastElementChild;
    console.log(`Elements: ${itemsList.children.length}`);
}


