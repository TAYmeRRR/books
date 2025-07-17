// Массив с книгами
const books = [
  {
    title: "От Путивля до Новочеркасска",
    author: "Рыжков.В.А",
    year: "2012",
    info: "Рыжков.В.А От Путивля до Новочеркасска [Текст] / Рыжков.В.А — 978-5-91951-064-2. — Ростов-на-Дону: Альтаир, 2012 — 128 c.",
    cover: "1.1.jpg.jpg",
    modalCover: "1.jpg.jpg",
  },
  {
    title: "Сталь перекаленная",
    author: "Шкиря В. Д.",
    year: "2005",
    info: "Шкиря, В. Д. Сталь перекаленная [Текст] / В. Д. Шкиря — 5-86236-155-3. — Ростов-на-Дону: Приазовский Край, 2005 — 176 c.",
    cover: "2.1.jpg.jpg",
    modalCover: "2.jpg.jpg",
  },
  {
    title: "Краски осени",
    author: "Донской Е. П.",
    year: "2012",
    info: "Донской, Е. П. Краски осени [Текст] / Е. П. Донской — 978-966-427-280-0. — Донецк: Каштан, 2012 — 288 c.",
    cover: "3.1.jpg.jpg",
    modalCover: "3.jpg.jpg",
  },
  {
    title: "Биюк-Онларский, Тельманский, Красногвардейский...",
    author: "Готовчиков Н. А.",
    year: "2017",
    info: "Готовчиков, Н. А. Биюк-Онларский, Тельманский, Красногвардейский... [Текст] / Н. А. Готовчиков — 978-617-7128-10-5. — Симферополь: Крымполиграф, 2017 — 372 c.",
    cover: "4.1.jpg.jpg",
    modalCover: "4.jpg.jpg",
  },
  {
    title: "Наше Слово",
    author: "Литературно-художественный альманах №8",
    year: "2023",
    info: "Литературно-художественный альманах №8 Наше Слово [Текст] / Литературно-художественный альманах №8 — 978-5-91951-748-1. — Ростов-на-Дону: Альтаир, 2023 — 256 c.",
    cover: "5.1.jpg.jpg",
    modalCover: "5.jpg.jpg",
  },
  {
    title: "Любви Прекрасные Мгновенья",
    author: "Бурцева Н. К.",
    year: "2012",
    info: "Бурцева, Н. К. Любви Прекрасные Мгновенья [Текст] / Н. К. Бурцева — 978-5-98517-173-0. — Таганрог: Нюанс, 2012 — 110 c.",
    cover: "6.1.jpg.jpg",
    modalCover: "6.jpg.jpg",
  },
  {
    title: "Гамаюн",
    author: "Петров В. С.",
    year: "1994",
    info: "Петров, В. С. Гамаюн [Текст] / В. С. Петров — 5-88558-008-1. — Ростов-на-Дону: Азов-Приз, 1994 — 256 c.",
    cover: "7.1.jpg.jpg",
    modalCover: "7.jpg.jpg",
  },
  {
    title: "Повести о Любви",
    author: "Шкиря В. Д.",
    year: "1966",
    info: "Шкиря, В. Д. Повести о Любви [Текст] / В. Д. Шкиря — 5-88098-241-6. — Ростов-на-Дону: Литера-Д, 1966 — 216 c.",
    cover: "8.1.jpg.jpg",
    modalCover: "8.jpg.jpg",
  },
  {
    title: "А навошта?",
    author: "Яськова Л. А",
    year: "2022",
    info: "Яськова, Л. А. А навошта? [Текст] / Л. А. Яськова — . — Гомель: , 2022 — 15 c.",
    cover: "9.1.jpg.jpg",
    modalCover: "9.jpg.jpg",
  },
  {
    title: "Традиция",
    author: "Литвинов В.",
    year: "2014",
    info: "Литвинов В. Традиция [Текст] / Литвинов В. — 978-5-600-00123-7. — Таганрог: Частная типография на Мечниковском, 2014 — 56 c.",
    cover: "10.1.jpg.jpg",
    modalCover: "10.jpg.jpg",
  },
  {
    title: "Святой Иерусалим",
    author: "Ордынская И. Н.",
    year: "2017",
    info: "Ордынская, И. Н. Святой Иерусалим [Текст] / И. Н. Ордынская — 978-5-4483-9254-2. — : Эхо Бога, 2017 — 98 c.",
    cover: "11.1.jpg.jpg",
    modalCover: "11.jpg.jpg",
  },
  // Можно добавить остальные книги по аналогии
];

// Рендеринг карточек книг
const container = document.getElementById('books-container');

function renderBooks(bookArr) {
  container.innerHTML = '';
  bookArr.forEach((book, i) => {
    const card = document.createElement('article');
    card.className = 'book-card';
    card.tabIndex = 0;
    Object.entries(book).forEach(([key, value]) => {
      card.dataset[key] = value;
    });
    card.innerHTML = `
      <span class="shine"></span>
      <img class="book-image" src="${book.cover}" alt="Обложка книги ${book.title}" loading="lazy" decoding="async" />
      <div class="book-info">
        <h3 class="book-title">${book.title}</h3>
        <p class="book-author">${book.author}</p>
      </div>`;
    container.appendChild(card);
    setTimeout(() => card.classList.add('anim-in'), 80 * i);
  });
}

renderBooks(books);

// Модальное окно
const modalBg = document.getElementById('modalBg');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalAuthor = document.getElementById('modalAuthor');
const modalPublisher = document.getElementById('modalPublisher');
const modalYear = document.getElementById('modalYear');
const modalSubtitle = document.getElementById('modalSubtitle');
const modalInfo = document.getElementById('modalInfo');
const closeModalBtn = document.getElementById('closeModal');

function openModal(card) {
  const d = card.dataset;
  modalImg.src = d.modalCover || d.cover;
  modalImg.alt = d.title || '';
  modalTitle.textContent = d.title || '';
  modalAuthor.textContent = d.author ? `Автор: ${d.author}` : '';
  modalPublisher.textContent = d.publisher ? `Издательство: ${d.publisher}` : '';
  modalYear.textContent = d.year ? `Год издания: ${d.year}` : '';
  modalSubtitle.textContent = d.subtitle || '';
  modalInfo.textContent = d.info || '';
  modalBg.classList.add('active');
  closeModalBtn.focus();
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalBg.classList.remove('active');
  modalImg.src = '';
  document.body.style.overflow = '';
}

container.addEventListener('click', e => {
  const card = e.target.closest('.book-card');
  if (card) openModal(card);
});
container.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const card = e.target.closest('.book-card');
    if (card) openModal(card);
  }
});
closeModalBtn.addEventListener('click', closeModal);
modalBg.addEventListener('click', e => {
  if (e.target === modalBg) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modalBg.classList.contains('active')) closeModal();
});

// Анимация фоновых книг
const floatContainer = document.getElementById('floating-books');
const floatBookSrc = 'https://cdn-icons-png.flaticon.com/512/29/29302.png';
const floatBooks = [];
const floatCount = 35;

for (let i = 0; i < floatCount; i++) {
  const img = document.createElement('img');
  img.className = 'float-book slow-blink';
  img.src = floatBookSrc;
  img.style.left = `${Math.random() * 100}vw`;
  img.style.top = `${Math.random() * 100}vh`;
  img.style.width = `${60 + Math.random() * 50}px`;
  img.style.opacity = 0.1 + Math.random() * 0.12;
  img.dataset.vx = (Math.random() * 0.005) - 0.0025;
  img.dataset.vy = (Math.random() * 0.003) - 0.0015;
  floatContainer.appendChild(img);
  floatBooks.push(img);
}

function animateFloatingBooks() {
  floatBooks.forEach(b => {
    let x = parseFloat(b.style.left);
    let y = parseFloat(b.style.top);
    x += parseFloat(b.dataset.vx);
    y += parseFloat(b.dataset.vy);
    if (x < -15) x = 115;
    else if (x > 115) x = -15;
    if (y < -15) y = 115;
    else if (y > 115) y = -15;
    b.style.left = `${x}vw`;
    b.style.top = `${y}vh`;
    const scale = 0.8 + 0.3 * Math.sin(Date.now() / 1000 + x);
    b.style.transform = `scale(${scale}) rotate(${5 * Math.sin(Date.now() / 1200 + y)}deg)`;
  });
  requestAnimationFrame(animateFloatingBooks);
}
animateFloatingBooks();
