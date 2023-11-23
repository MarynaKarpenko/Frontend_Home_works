/* Burger menu */
let burger_menu = document.querySelector('.burger_menu')
let navigation = document.querySelector('nav')
let setBurgerMenu = false

burger_menu.onclick = () => {
    burgerManuHandler()
}
function burgerManuHandler(){
    if(!setBurgerMenu){
        burger_menu.classList.add('active')
        navigation.classList.add('active')
    } else{
        burger_menu.classList.remove('active')
        navigation.classList.remove('active')
    }
    setBurgerMenu = !setBurgerMenu
}

window.onresize = (e) => {
    if(e.target.outerWidth > 850){
        navigation.classList.remove('active')
    } else{
        navigation.classList.add('active')
    }
}

/* Бухгалтерские услуги в вашем городе */
const presentation_section = [
    {
        id: 1,
        title: "Бухгалтерские услуги в вашем городе 1"
    },
    {
        id: 2,
        title: "Бухгалтерские услуги в вашем городе 2"
    },
    {
        id: 3,
        title: "Бухгалтерские услуги в вашем городе 3"
    },
    {
        id: 4,
        title: "Бухгалтерские услуги в вашем городе 4"
    },
    {
        id: 5,
        title: "Бухгалтерские услуги в вашем городе 5"
    },
]

const presentationSection = document.querySelector('.content_p');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function updateText(index) {
    const currentCard = presentation_section[index];
    const titleElem = document.createElement('p');
    titleElem.innerText = currentCard.title;

    const existingTitle = presentationSection.querySelector('p');
    if (existingTitle) {
        existingTitle.remove();
    }

    presentationSection.append(titleElem);
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + presentation_section.length) % presentation_section.length;
    updateText(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % presentation_section.length;
    updateText(currentIndex);
});

// Добавляем вызов при загрузке страницы
updateText(currentIndex);

/* Наши услуги */
const sessions_info = [
  {
    id: 1,
    title: 'Бухгалтерское обслуживание',
    img_URL: './IMG/sessions_img.png'
  },
  {
    id: 2,
    title: 'Бухгалтерское обслуживание',
    img_URL: './IMG/sessions_img.png'
  },
  {
    id: 3,
    title: 'Бухгалтерское обслуживание',
    img_URL: './IMG/sessions_img.png'
  },
  {
    id: 4,
    title: 'Бухгалтерское обслуживание',
    img_URL: './IMG/sessions_img.png'
  },
  {
    id: 5,
    title: 'Бухгалтерское обслуживание',
    img_URL: './IMG/sessions_img.png'
  },
  {
    id: 6,
    title: 'Бухгалтерское обслуживание',
    img_URL: './IMG/sessions_img.png'
  }
]

const sessionsContainer = document.querySelector('.sessions_container');

sessions_info.forEach(el => {
  const cardElem = document.createElement('div');
  const titleElem = document.createElement('p');

  titleElem.innerText = el.title;
  
  cardElem.style.backgroundImage = `url('${el.img_URL}')`;

  cardElem.append(titleElem);
  sessionsContainer.append(cardElem);
});


/* О нас */
const about_section_img = [
  {
    id: 1,
    quantity: '90',
    title: 'Завершено крупных сделок',
    button: 'Все кейсы'
  },
  {
    id: 2,
    quantity: '90',
    title: 'Завершено крупных сделок',
    button: 'Все кейсы'
  },
  {
    id: 3,
    quantity: '90',
    title: 'Завершено крупных сделок',
    button: 'Все кейсы'
  },
  {
    id: 4,
    quantity: '90',
    title: 'Завершено крупных сделок',
    button: 'Все кейсы'
  }
]
const aboutContainer = document.querySelector('.about_img');

about_section_img.forEach(el => {
  const cardElem = document.createElement('div');
  const quantityElem = document.createElement('p');
  const titleElem = document.createElement('h3');
  const buttonElem = document.createElement('a');

  quantityElem.innerText = el.quantity;
  titleElem.innerText = el.title;
  buttonElem.innerText = el.button;

  quantityElem.style.fontFamily = 'Lato';
  quantityElem.style.fontSize = '55px';
  quantityElem.style.fontWeight = '900';
  quantityElem.style.paddingBottom = '30px';

  titleElem.style.fontFamily = 'Lato';
  titleElem.style.fontSize = '14px';
  titleElem.style.fontWeight = '700';
  titleElem.style.paddingBottom = '47px';

  buttonElem.style.fontFamily = 'Lato';
  buttonElem.style.fontSize = '14px';
  buttonElem.style.fontWeight = '700';
  buttonElem.style.color = '#005FA3';
  buttonElem.style.textDecorationLine = 'underline';
  buttonElem.style.cursor = 'pointer';

  cardElem.append(quantityElem, titleElem, buttonElem);
  aboutContainer.append(cardElem);
});

/* Наши клиенты */
const sectionClients = [
  {
    id: 1,
    img_URL: './IMG/Microsoft.png'
  },
  {
    id: 2,
    img_URL: './IMG/Microsoft.png'
  },
  {
    id: 3,
    img_URL: './IMG/Microsoft.png'
  },
  {
    id: 4,
    img_URL: './IMG/Microsoft.png'
  },
  {
    id: 5,
    img_URL: './IMG/Microsoft.png'
  },
  {
    id: 6,
    img_URL: './IMG/Microsoft.png'
  }
]
const clientsSection = document.querySelector('.microsoft');

const prevBtn2 = document.getElementById('prevBtn2');
const nextBtn2 = document.getElementById('nextBtn2');

let currentIndex2 = 0;

function updateImages() {
  clientsSection.innerHTML = ''; // Очистка содержимого контейнера

  for (let i = 0; i < 4; i++) {
    const img_URLElem = document.createElement('img');
    img_URLElem.src = sectionClients[i].img_URL;
    clientsSection.append(img_URLElem);
  }
}

prevBtn2.addEventListener('click', () => {
  currentIndex2 = (currentIndex2 - 1 + sectionClients.length) % sectionClients.length;
  updateImages();
});

nextBtn2.addEventListener('click', () => {
  currentIndex2 = (currentIndex2 + 1) % sectionClients.length;
  updateImages();
});

// Инициализация при загрузке страницы
updateImages();

/* Отзывы */
const section_reviews_contacts = [
  {
    id: 1,
    name: 'Екатерина Иванова',
    position: 'Директор ООО “Раз-два”',
    img_URL: './IMG/name_face.jpg'
  },
  {
    id: 2,
    name: 'Иван Иванов',
    position: 'Менеджер ООО “Раз-два”',
    img_URL: './IMG/name_face.jpg'
  },
  {
    id: 3,
    name: 'Петр Петров',
    position: 'Менеджер ООО “Раз-два”',
    img_URL: './IMG/name_face.jpg'
  },
  {
    id: 4,
    name: 'Татьяна Перова',
    position: 'Менеджер ООО “Раз-два”',
    img_URL: './IMG/name_face.jpg'
  },
  {
    id: 5,
    name: 'Василий Васильев',
    position: 'Менеджер ООО “Раз-два”',
    img_URL: './IMG/name_face.jpg'
  },
  {
    id: 6,
    name: 'Кирилл Кириллов',
    position: 'Менеджер ООО “Раз-два”',
    img_URL: './IMG/name_face.jpg'
  }
]
const reviewsContacts = document.querySelector('.reviews_contacts');
const prevBtn3 = document.getElementById('prevBtn3');
const nextBtn3 = document.getElementById('nextBtn3');
let currentIndex3 = 0;

function updateCard(index) {
  const el = section_reviews_contacts[index];
  const cardElem = document.createElement('div');
  const cardElemH4H5 = document.createElement('div')
  const nameElem = document.createElement('h4');
  const positionElem = document.createElement('h5');
  const imgElem = document.createElement('img');

  cardElem.className = 'name_position'
  cardElemH4H5.className = 'div_name_position'
  imgElem.className = 'img_blok_review'

  nameElem.innerText = el.name;
  positionElem.innerText = el.position;
  imgElem.style.backgroundImage = `url('${el.img_URL}')`;

  cardElem.append(imgElem, cardElemH4H5);
  cardElemH4H5.append(nameElem, positionElem);
  reviewsContacts.innerHTML = '';
  reviewsContacts.append(cardElem);
}

updateCard(currentIndex3);

prevBtn3.addEventListener('click', () => {
  currentIndex3 = (currentIndex3 - 1 + section_reviews_contacts.length) % section_reviews_contacts.length;
  updateCard(currentIndex3);
});

nextBtn3.addEventListener('click', () => {
  currentIndex3 = (currentIndex3 + 1) % section_reviews_contacts.length;
  updateCard(currentIndex3);
});