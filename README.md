# 🍩 Zovirella - A Sweet Web-Games Realm

Современный landing page для платформы браузерных игр для взрослых 21+

## ✨ Что создано

Полнофункциональный сайт в стиле candy-tale со сказочным дизайном:
- 🎨 Яркая candy палитра (розовый, оранжевый, фиолетовый)
- 🍩 Donut паттерн на фоне hero секции
- ✨ Множество анимаций и микровзаимодействий
- 📱 Полностью адаптивный (mobile-first)
- ♿ Accessibility-ready

## 🎨 Цветовая палитра

```css
Primary Pink:   #FF7BA3
Secondary:      #FFB86C  
Accent Purple:  #9C6BFF
Mint:           #6EE7B7
Cream:          #FFF4E6
Background:     #FFF8EE
```

## 📱 Секции сайта

1. **Header** - фиксированная навигация с 21+ badge
2. **Hero** - анимированный фон, gradient текст, sparkle emoji
3. **About** - 3 feature карточки (Browser-First, No Money, 21+)
4. **Games** - карточки игр с emoji превью
5. **Why** - 4 причины с gradient номерами
6. **FAQ** - аккордеон с 6 вопросами
7. **Contact** - email контакт
8. **Footer** - полный disclaimer, badges, адрес

## 🚀 Используемые технологии

- HTML5 (семантическая разметка)
- CSS3 (Grid, Flexbox, CSS Variables, Animations)
- Vanilla JavaScript (ES6+)
- Google Fonts (Baloo 2 + Poppins)

## 📂 Файлы

```
/app/static-site/
├── index.html    # Главная страница
├── styles.css    # Все стили
├── script.js     # JavaScript
└── README.md     # Документация
```

## ✨ Интерактивность

- ✅ Мобильное меню
- ✅ Smooth scroll
- ✅ FAQ аккордеон
- ✅ Parallax эффект (hero)
- ✅ Scroll animations (Intersection Observer)
- ✅ Ripple эффект на кнопках
- ✅ Header shadow при скролле
- ✅ Hover эффекты на карточках

## 🎯 Адаптивность

- Desktop: 3 колонки grid
- Tablet: 2 колонки
- Mobile: 1 колонка, вертикальный стек кнопок
- Min tap target: 44px
- Контраст: ≥4.5:1

## 🔧 Кастомизация

### Изменить цвета
Откройте `styles.css` и измените переменные в `:root`:

```css
:root {
    --clr-primary: #FF7BA3;
    --clr-secondary: #FFB86C;
    /* ... */
}
```

### Добавить игру
В `index.html` добавьте карточку в `.game-grid`

### Изменить шрифты
Обновите Google Fonts и переменные:
```css
--font-display: 'Your Font', 'Baloo 2', system-ui;
```

## 📋 Соответствие гайдлайнам

✅ Candy-tale дизайн  
✅ Градиенты на кнопках  
✅ Pill-shaped buttons  
✅ 21+ badge всегда виден  
✅ Полный disclaimer в footer  
✅ "Fun only" философия  
✅ Нет слов "casino"/"gambling"  
✅ Сказочный стиль  

## 🌐 Просмотр

Сайт запущен на: **http://localhost:3000**

## 📞 Контакты

- Email: hello@zovirella.com
- Адрес: 123 Candyfloss Lane, Brighton BN1 4GQ, UK

---

**Made with 🍩 and ❤️**  
*A sweet web-games realm for grown-ups (21+)*
