# Game Page - Rings of Frosting

## URL
`/game/` или `/game/index.html`

## Структура страницы

### 1. Header (стандартный)
- Навигация: **Game** (активна) | About | Contact
- 21+ badge в header

### 2. Game Hero Section
**Заголовок в стиле сказки:**
```
🍩 Featured Game
Rings of Frosting
Journey Through the Enchanted Donut Kingdom
```

**Описание:**
Сказочный текст о мистической пекарне в сердце Zovirella, где frosted rings вращаются с магией, а sprinkles предсказывают судьбу. Легенда о древнем Donut Prophecy и приглашение к приключению.

**Meta информация:**
- ⏰ Free to Play
- 💻 Browser-Based
- 💵 No Real Money

### 3. Game Container

**Основной блок игры:**
- HTML5 iframe с игрой (Sweet Bonanza demo)
- Responsive размер: 80vh (min 600px, max 800px)
- Border с candy-градиентом
- Loading screen с анимацией

**21+ Badge Overlay:**
- ✅ Расположен в правом верхнем углу iframe
- ✅ Opacity: 0.7 (увеличивается до 0.9 при hover)
- ✅ Фиксированный, поверх игры
- ✅ Z-index: 100
- ✅ Не блокирует игровое взаимодействие (pointer-events: none)

**Game Controls (под игрой):**
3 информационные карточки:
- 🎮 How to Play
- 💰 Virtual Credits
- 🎯 Match & Win

### 4. The Tale of the Frosted Rings
Сказочное описание игры с двумя параграфами:
- Приветствие в enchanting slot experience
- Легенда о master baker и donut divination

### 5. How the Magic Works

**6 детальных карточек механики:**

**01 - The Spinning Ritual**
- Как работают спины
- Описание символов donuts
- Механика остановки reels

**02 - Winning Combinations**
- Объяснение paylines
- 3+ matching symbols
- Cascade effects
- Редкие символы (Golden Glaze)

**03 - Special Symbols & Wild Frosting**
- Wild Symbols (замена любых символов)
- Scatter Symbol (sugar crystal)
- Как триггерить бонусы

**04 - Bonus Rounds & Free Spins**
- Bonus Round механика
- Free Spins
- Multipliers (2x, 3x и выше)
- Mini-games (pick boxes, Wheel of Fortune)

**05 - Bet Adjustments & Autoplay**
- Virtual bet levels
- Autoplay функция
- Напоминание о fun credits only

**06 - Paytable & Game Info**
- Info button
- Paytable объяснение
- Значения символов
- Bonus features guide

**Important Notice:**
⚠️ Entertainment Only - подробный disclaimer о том, что все виртуально, нет реальных денег, только для развлечения.

### 6. Game Features

4 карточки с особенностями:
- ✨ Stunning Visuals
- 🎵 Enchanting Soundtrack
- 📱 Mobile Optimized
- ⚡ Instant Play

### 7. Call to Action

**Ready for More Adventures?**
- CTA: "Discover More Games" → `/`
- Secondary: "Learn About Zovirella" → `/about.html`

### 8. Footer (стандартный)
Полный footer с disclaimer и badges

## Технические детали

### 21+ Badge Overlay
```css
.age-overlay {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 100;
    pointer-events: none;
}

.age-overlay__badge {
    opacity: 0.7;
}

.game-wrapper:hover .age-overlay__badge {
    opacity: 0.9;
}
```

### iFrame
- **Источник**: Demo игра Pragmatic Play (Sweet Bonanza)
- **Размер**: Responsive, 80vh
- **Загрузка**: Loading screen исчезает после загрузки
- **Fullscreen**: Доступно по двойному клику

### JavaScript функциональность
- Скрытие loading screen при загрузке iframe
- Fallback timeout 5 секунд
- Fullscreen toggle по двойному клику
- Console logs для отладки

## Контент

### Сказочный стиль
✅ Enchanted Donut Kingdom
✅ Mystical bakery
✅ Frosted rings spin with magic
✅ Sprinkles tell fortunes
✅ Ancient Donut Prophecy
✅ Sugared winds
✅ Candy-coated spectacle

### Геймплей описание
✅ Spinning ritual
✅ Paylines paths of destiny
✅ Wild & Scatter symbols
✅ Bonus rounds & Free spins
✅ Cascade effects
✅ Multipliers
✅ Mini-games
✅ Bet adjustments
✅ Autoplay
✅ Paytable info

### Disclaimers
✅ Entertainment only
✅ Virtual credits
✅ No real money
✅ 21+ only
✅ No cash-out
✅ Risk-free gaming

## Адаптивность

- **Desktop**: Полная ширина iframe, 80vh
- **Tablet**: Адаптивный размер, все карточки в grid
- **Mobile**: 
  - iframe 60vh, min 500px
  - 21+ badge меньше (50px)
  - Карточки в одну колонку
  - CTA кнопки вертикально

## Файлы

```
/app/static-site/game/
├── index.html          # Главная страница игры
├── game-styles.css     # Стили для игровой страницы
└── game-script.js      # JavaScript для игры
```

---

**Примечание:** Все тексты написаны в сказочном стиле candy-tale мира Zovirella, с детальными объяснениями механики slot-game в увлекательной форме.
