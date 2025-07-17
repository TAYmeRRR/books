// Массив с книгами: для каждой - мини-изображение (cover) и большое (modalCover)
const books = [
  {
    title: "Zoom. Карантинная история",
    author: "Борода Елена",
    year: "2024",
    info: "Уникальная книга с автографом автора, рассказывающая необычные истории карантинного периода.",
    cover: "1.1.jpg.jpg",
    modalCover: "1.jpg.jpg",
  },
  {
    title: "Zoom. Карантинная история",
    author: "Борода Елена",
    year: "2024",
    info: "Уникальная книга с автографом автора, рассказывающая необычные истории карантинного периода.",
    cover: "2.1.jpg.jpg",
    modalCover: "2.jpg.jpg",
  },
  {
    title: "Zoom. Карантинная история",
    author: "Борода Елена",
    year: "2024",
    info: "Уникальная книга с автографом автора, рассказывающая необычные истории карантинного периода.",
    cover: "3.1.jpg.jpg",
    modalCover: "3.jpg.jpg",
  },
  {
    title: "Zoom. Карантинная история",
    author: "Борода Елена",
    year: "2024",
    info: "Уникальная книга с автографом автора, рассказывающая необычные истории карантинного периода.",
    cover: "4.1.jpg.jpg",
    modalCover: "4.jpg.jpg",
  },
  {
    title: "Zoom. Карантинная история",
    author: "Борода Елена",
    year: "2024",
    info: "Уникальная книга с автографом автора, рассказывающая необычные истории карантинного периода.",
    cover: "5.1.jpg.jpg",
    modalCover: "5.jpg.jpg",
  },
  {
    title: "Zoom. Карантинная история",
    author: "Борода Елена",
    year: "2024",
    info: "Уникальная книга с автографом автора, рассказывающая необычные истории карантинного периода.",
    cover: "6.1.jpg.jpg",
    modalCover: "6.jpg.jpg",
  },
  {
    title: "Zoom. Карантинная история",
    author: "Борода Елена",
    year: "2024",
    info: "Уникальная книга с автографом автора, рассказывающая необычные истории карантинного периода.",
    cover: "7.1.jpg.jpg",
    modalCover: "7.jpg.jpg",
  },
  {
    title: "Zoom. Карантинная история",
    author: "Борода Елена",
    year: "2024",
    info: "Уникальная книга с автографом автора, рассказывающая необычные истории карантинного периода.",
    cover: "8.1.jpg.jpg",
    modalCover: "8.jpg.jpg",
  },
  {
    title: "Zoom. Карантинная история",
    author: "Борода Елена",
    year: "2024",
    info: "Уникальная книга с автографом автора, рассказывающая необычные истории карантинного периода.",
    cover: "9.1.jpg.jpg",
    modalCover: "9.jpg.jpg",
  },
  {
    title: "Zoom. Карантинная история",
    author: "Борода Елена",
    year: "2024",
    info: "Уникальная книга с автографом автора, рассказывающая необычные истории карантинного периода.",
    cover: "10.1.jpg.jpg",
    modalCover: "10.jpg.jpg",
  },
  {
    title: "Zoom. Карантинная история",
    author: "Борода Елена",
    year: "2024",
    info: "Уникальная книга с автографом автора, рассказывающая необычные истории карантинного периода.",
    cover: "11.1.jpg.jpg",
    modalCover: "11.jpg.jpg",
  },
  // Добавьте другие книги при необходимости
];

// Рендерим карточки книг (используем маленькое изображение cover)
const container = document.getElementById('books-container');
function renderBooks(bookArr) {
  container.innerHTML = '';
  bookArr.forEach((book, i) => {
    const card = document.createElement('article');
    card.className = 'book-card';
    card.tabIndex = 0;
    card.dataset.title = book.title;
    card.dataset.author = book.author;
    card.dataset.year = book.year;
    card.dataset.info = book.info;
    card.dataset.cover = book.cover;
    card.dataset.modalCover = book.modalCover;
    card.dataset.publisher = book.publisher || '';
    card.dataset.subtitle = book.subtitle || '';
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

// Управление модальным окном: при открытии используется modalCover
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
