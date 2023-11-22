const presentation_section = [
    {
        id: 1,
        title: "Бухгалтерские услуги в вашем городе"
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