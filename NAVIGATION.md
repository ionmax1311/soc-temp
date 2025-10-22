# Навигация Zovirella

## Header Navigation (обновлена)

### Главное меню:
1. **Game** → `/game/` - ссылка на игру Rings of Frosting
2. **About** → `/about.html` - страница О нас
3. **Contact** → `/contact.html` - страница Контактов

### Структура файлов:
```
/app/static-site/
├── index.html         # Главная страница
├── about.html         # Страница About Us
├── contact.html       # Страница Contact
├── styles.css         # Общие стили для всех страниц
└── script.js          # Общий JavaScript
```

## Страницы

### 1. Главная (index.html)
- **URL**: `/` или `https://zovirella.com`
- **Навигация**: Game | About | Contact
- **Секции**: Hero, About, Games, Why, FAQ, Contact CTA, Footer

### 2. About Us (about.html)
- **URL**: `/about.html`
- **Навигация**: Game | **About** | Contact (About активна)
- **Секции**:
  - About Hero
  - Our Mission (3 карточки)
  - How Zovirella Was Born (история + timeline)
  - Business Model (highlight box)
  - Safety & Fairness (3 карточки безопасности)
  - Core Values (4 ценности)
  - Join CTA
  - Footer

### 3. Contact (contact.html)
- **URL**: `/contact.html`
- **Навигация**: Game | About | **Contact** (Contact активна)
- **Секции**:
  - Contact Hero
  - Contact Content:
    - Contact Info (Email, Address, Response Time)
    - Contact Form (Name, Email, Subject, Message)
  - FAQ Quick Links
  - Footer

## Contact Form

### Поля формы:
- **Your Name** (text, required)
- **Email Address** (email, required)
- **Subject** (select, required):
  - General Inquiry
  - Technical Support
  - Feedback
  - Partnership
  - Other
- **Message** (textarea, required)

### Функциональность:
- ✅ Валидация HTML5
- ✅ Success message при отправке
- ✅ Автоматический reset через 5 секунд
- ✅ Логирование в console
- ✅ Адаптивный дизайн

## FAQ Quick Links на Contact

Три карточки с ссылками на FAQ:
1. ❓ General Questions
2. 🎮 Game Questions  
3. 🔒 Safety & Privacy

Все ведут на `/#faq` (якорь FAQ на главной странице)

## Footer Links (на всех страницах)

### Games:
- Rings of Frosting → `/game/`
- Zephyr Burst → `/#games`
- All Games → `/#games`

### Company:
- About Us → `/about.html`
- Contact → `/contact.html`
- Terms of Use → `/terms`
- Privacy Policy → `/privacy`

### Support:
- FAQ → `/#faq`
- Email Us → `mailto:hello@zovirella.com`

## Активные состояния

Класс `.active` добавляется к текущей странице в навигации:
- На главной: нет активного пункта (или можно добавить для Home)
- На About: `<a href="/about.html" class="nav__link active">About</a>`
- На Contact: `<a href="/contact.html" class="nav__link active">Contact</a>`

## Мобильная навигация

- Гамбургер меню на экранах ≤768px
- Выдвижное меню сверху
- Закрывается при клике на ссылку или вне меню
- Анимация toggle иконки (X при открытии)

---

**Примечание:** Все страницы используют общий темный дизайн с candy-градиентами и единый footer с disclaimer.
