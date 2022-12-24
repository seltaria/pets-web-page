/* Данные питомцев: */
const data = [
  {
    name: "Katrine",
    animal: "cat",
  },
  {
    name: "Jennifer",
    animal: "dog",
  },
  {
    name: "Woody",
    animal: "dog",
  },
  {
    name: "Sophia",
    animal: "dog",
  },
  {
    name: "Timmy",
    animal: "cat",
  },
  {
    name: "Charly",
    animal: "dog",
  },
  {
    name: "Scarlett",
    animal: "dog",
  },
  {
    name: "Freddie",
    animal: "cat",
  },

  {
    name: "Charly",
    animal: "dog",
  },
  {
    name: "Katrine",
    animal: "cat",
  },
  {
    name: "Sophia",
    animal: "dog",
  },
  {
    name: "Woody",
    animal: "dog",
  },
  {
    name: "Freddie",
    animal: "cat",
  },
  {
    name: "Jennifer",
    animal: "dog",
  },
  {
    name: "Timmy",
    animal: "cat",
  },
  {
    name: "Scarlett",
    animal: "dog",
  },

];

/* Контейнер для карточек: */
const container = document.querySelector('.friends__list');

/* Одна карточка питомца: */
function addItem(pet) {
  const item = document.createElement('li');
  const image = document.createElement('img');
  const content = document.createElement('div');
  const petName = document.createElement('h3');
  const more = document.createElement('a');

  item.className = "friends__item";
  image.className = "friends__image";
  image.src = `img/pets-${pet.name.toLowerCase()}.jpg`;
  image.alt = `${pet.name} the ${pet.animal}`;
  content.className = "friends__item-content";
  petName.className = "friends__name";
  petName.textContent = pet.name;
  more.className = "btn friends__btn";
  more.textContent = "Learn more";

  container.append(item);
  item.append(image);
  item.append(content);
  content.append(petName);
  content.append(more);
}

let page = 1;
let onOnePage = 8;

window.addEventListener('resize', () => {
  if (innerWidth > 828) {
    onOnePage = 8;
    fillData();
  }
  if (innerWidth <= 828) {
    onOnePage = 6;
    fillData();
  }
  if (innerWidth <= 650) {
    onOnePage = 3;
    fillData();
  }
})

function fillData() {
  container.innerHTML = '';
  data.slice((page - 1) * onOnePage, (onOnePage + (page - 1) * onOnePage)).forEach(pet => addItem(pet));
}
fillData();

/* Пагинация и кнопки: */
function pages() {
  const pageNumber = document.querySelector('.pages__number');
  const doubleLeft = document.querySelector('.pages__double-left');
  const left = document.querySelector('.pages__left');
  const doubleRight = document.querySelector('.pages__double-right');
  const right = document.querySelector('.pages__right');

  right.addEventListener('click', () => {
    page++;
    pageNumber.textContent = page;
    doubleLeft.disabled = false;
    left.disabled = false;
    if (page === Math.ceil(data.length / onOnePage)) {
      doubleRight.disabled = true;
      right.disabled = true;
    }
    fillData();
  })

  left.addEventListener('click', () => {
    page--;
    pageNumber.textContent = page;
    doubleRight.disabled = false;
    right.disabled = false;
    if (page === 1) {
      doubleLeft.disabled = true;
      left.disabled = true;
    }
    fillData();
  })

  doubleRight.addEventListener('click', () => {
    page = Math.ceil(data.length / onOnePage);
    pageNumber.textContent = page;
    doubleLeft.disabled = false;
    left.disabled = false;
    doubleRight.disabled = true;
    right.disabled = true;
    fillData();
  })

  doubleLeft.addEventListener('click', () => {
    page = 1;
    pageNumber.textContent = page;
    doubleRight.disabled = false;
    right.disabled = false;
    doubleLeft.disabled = true;
    left.disabled = true;
    fillData();
  })

}
pages();
