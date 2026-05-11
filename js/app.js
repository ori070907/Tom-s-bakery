/* ============================================================
   MENU DATA
============================================================ */
const CATEGORIES = [
  { key: 'challahs', label: 'חלות'            },
  { key: 'yeast',    label: 'עוגות שמרים'     },
  { key: 'rugelach', label: 'רוגלך'           },
  { key: 'kisses',   label: 'נשיקות'          },
  { key: 'malawach', label: 'מלוואח'          },
  { key: 'grapes',   label: 'עלי גפן'         },
  { key: 'quiches',  label: 'קישים ופשטידות'  },
  { key: 'desserts', label: 'עוגה באסקית'      },
  { key: 'combos',   label: 'מבצעים'          },
];

const MENU_ITEMS = [

  // ── חלות ──
  {
    id: 1, cat: 'challahs',
    name: 'חלה אחת',
    desc: 'חלה ביתית טרייה',
    price: 4, emoji: '🥖', bg: 'linear-gradient(135deg,#F5E6C8,#D4A853)', image: 'images/חלה.jpeg',
  },
  {
    id: 2, cat: 'challahs',
    name: '2 חלות',
    desc: 'שתי חלות ביתיות טריות',
    price: 7, emoji: '🥖', bg: 'linear-gradient(135deg,#F5E6C8,#D4A853)', image: 'images/חלה.jpeg',
  },
  {
    id: 3, cat: 'challahs',
    name: '3 חלות',
    desc: 'שלוש חלות ביתיות טריות',
    price: 10, emoji: '🥖', bg: 'linear-gradient(135deg,#F5E6C8,#D4A853)', image: 'images/חלה.jpeg',
  },

  // ── עוגות שמרים ──
  {
    id: 4, cat: 'yeast',
    name: 'עוגת שמרים שוקולד',
    desc: 'עוגת שמרים ביתית במילוי שוקולד',
    price: 8, emoji: '🍫', bg: 'linear-gradient(135deg,#E8D0B0,#7A4020)', image: 'images/עוגת שמרים שוקולד.jpeg',
  },
  {
    id: 5, cat: 'yeast',
    name: '2 עוגות שמרים שוקולד',
    desc: 'שתי עוגות שמרים שוקולד',
    price: 15, emoji: '🍫', bg: 'linear-gradient(135deg,#E8D0B0,#7A4020)', image: 'images/עוגת שמרים שוקולד.jpeg',
  },
  {
    id: 6, cat: 'yeast',
    name: 'עוגת שמרים ריקוטה',
    desc: 'עוגת שמרים ביתית במילוי ריקוטה',
    price: 9, emoji: '🥐', bg: 'linear-gradient(135deg,#F0DCC0,#C4956A)', image: 'images/עוגת שמרים ריקוטה.jpeg',
  },
  {
    id: 7, cat: 'yeast',
    name: '2 עוגות שמרים ריקוטה',
    desc: 'שתי עוגות שמרים ריקוטה',
    price: 17, emoji: '🥐', bg: 'linear-gradient(135deg,#F0DCC0,#C4956A)', image: 'images/עוגת שמרים ריקוטה.jpeg',
  },
  {
    id: 8, cat: 'yeast',
    name: 'מעורבב — שוקולד + ריקוטה',
    desc: 'עוגת שמרים אחת מכל סוג',
    price: 16, emoji: '🎂', bg: 'linear-gradient(135deg,#EED8B8,#A06840)', image: 'images/עוגת שמרים שוקולד.jpeg',
  },

  // ── רוגלך ──
  {
    id: 9, cat: 'rugelach',
    name: 'רוגלך',
    desc: 'מארז רוגלך ביתי',
    price: 6, emoji: '🥐', bg: 'linear-gradient(135deg,#F5E0C0,#C8904A)', image: 'images/רוגלעך.jpeg',
  },
  {
    id: 10, cat: 'rugelach',
    name: '2 מארזי רוגלך',
    desc: 'שני מארזי רוגלך',
    price: 10, emoji: '🥐', bg: 'linear-gradient(135deg,#F5E0C0,#C8904A)', image: 'images/רוגלעך.jpeg',
  },

  // ── נשיקות ──
  {
    id: 11, cat: 'kisses',
    name: 'נשיקות',
    desc: 'מארז נשיקות',
    price: 6, emoji: '🍬', bg: 'linear-gradient(135deg,#FDE8F0,#E880A8)', image: 'images/נשיקות.jpeg', allWeek: true,
  },
  {
    id: 12, cat: 'kisses',
    name: '2 מארזי נשיקות',
    desc: 'שני מארזים',
    price: 10, emoji: '🍬', bg: 'linear-gradient(135deg,#FDE8F0,#E880A8)', image: 'images/נשיקות.jpeg', allWeek: true,
  },

  // ── מלוואח ──
  {
    id: 13, cat: 'malawach',
    name: 'מלוואח',
    desc: '5 יחידות',
    price: 10, emoji: '🫓', bg: 'linear-gradient(135deg,#F5ECD8,#C8A878)', image: 'images/מלוואח.jpeg', allWeek: true,
  },

  // ── עלי גפן ──
  {
    id: 14, cat: 'grapes',
    name: 'עלי גפן — מארז 500 גרם',
    desc: '10–13 יחידות',
    price: 8, emoji: '🍇', bg: 'linear-gradient(135deg,#D8ECD0,#6A9848)', image: null, allWeek: true,
  },

  // ── קישים ופשטידות ──
  {
    id: 15, cat: 'quiches',
    name: 'פשטידת בצל/בטטה משפחתית',
    desc: 'פשטידה משפחתית עשירה ומשביעה',
    price: 22, emoji: '🥧', bg: 'linear-gradient(135deg,#E8D5C4,#A06840)', image: 'images/קיש בצל.jpeg',
  },
  {
    id: 16, cat: 'quiches',
    name: '9 מנות אישיות (בצל/בטטה)',
    desc: '9 מנות אישיות, מושלם לאירועים',
    price: 26, emoji: '🥧', bg: 'linear-gradient(135deg,#E8D5C4,#A06840)', image: 'images/קיש בצל.jpeg',
  },
  {
    id: 17, cat: 'quiches',
    name: 'פשטידת פטריות',
    desc: 'קיש פטריות עשיר ומשובח',
    price: 28, emoji: '🍄', bg: 'linear-gradient(135deg,#D4C4B0,#7A5840)', image: 'images/קיש פטריות.jpeg',
  },
  {
    id: 18, cat: 'quiches',
    name: '9 יח׳ אישיות (פטריות)',
    desc: '9 יחידות אישיות של קיש פטריות',
    price: 32, emoji: '🍄', bg: 'linear-gradient(135deg,#D4C4B0,#7A5840)', image: 'images/קיש פטריות.jpeg',
  },
  {
    id: 19, cat: 'quiches',
    name: 'פשטידת תירס',
    desc: 'פשטידת תירס מתוקה וקלילה',
    price: 14, emoji: '🌽', bg: 'linear-gradient(135deg,#F0E8A0,#C8A820)', image: null,
  },

  // ── קינוחים ──
  {
    id: 20, cat: 'desserts',
    name: 'עוגת גבינה באסקית',
    desc: 'קרמית, עשירה, פירמה',
    price: 19, emoji: '🍰', bg: 'linear-gradient(135deg,#F5E8D8,#D4A896)', image: 'images/עוגה באסקית.jpeg',
  },
  {
    id: 21, cat: 'quiches',
    name: 'שבלול פילו גבינות משפחתי',
    desc: 'פילו פריך מלא בגבינות',
    price: 27, emoji: '🥮', bg: 'linear-gradient(135deg,#F0E0C8,#C09060)', image: null,
  },

  // ── מבצעים ──
  {
    id: 22, cat: 'combos',
    name: 'קיש בטטה/בצל + פשטידת תירס',
    desc: 'חסכו €3',
    price: 33, emoji: '🎁', bg: 'linear-gradient(135deg,#E8E0C8,#C9A96E)', image: null,
  },
  {
    id: 23, cat: 'combos',
    name: 'קיש פטריות + שבלול גבינות',
    desc: 'חסכו €3',
    price: 52, emoji: '🎁', bg: 'linear-gradient(135deg,#E8E0C8,#C9A96E)', image: null,
  },
  {
    id: 24, cat: 'combos',
    name: 'עוגת גבינה + קיש בטטה/בצל',
    desc: 'מתוק ומלוח — חסכו €3',
    price: 38, emoji: '🎁', bg: 'linear-gradient(135deg,#E8E0C8,#C9A96E)', image: null,
  },
  {
    id: 25, cat: 'combos',
    name: 'קיש פטריות + קיש בטטה/בצל + שבלול',
    desc: 'הכי שלם — חסכו €7',
    price: 72, emoji: '🎁', bg: 'linear-gradient(135deg,#E8E0C8,#C9A96E)', image: null,
  },
  {
    id: 26, cat: 'combos',
    name: '2 עוגות גבינה',
    desc: 'חסכו €3',
    price: 35, emoji: '🎁', bg: 'linear-gradient(135deg,#E8E0C8,#C9A96E)', image: null,
  },
  {
    id: 27, cat: 'combos',
    name: 'קיש פטריות + פשטידת תירס + עוגת גבינה',
    desc: 'חבילה מלאה — חסכו €3',
    price: 58, emoji: '🎁', bg: 'linear-gradient(135deg,#E8E0C8,#C9A96E)', image: null,
  },
];

/* ============================================================
   RENDER
============================================================ */
function renderMenu() {
  document.getElementById('menu-content').innerHTML =
    CATEGORIES.map(cat => {
      const items = MENU_ITEMS.filter(i => i.cat === cat.key);
      if (!items.length) return '';
      return `
        <div class="menu-section">
          <div class="section-heading">${cat.label}</div>
          <div class="cards-list">${items.map(menuCardHTML).join('')}</div>
        </div>`;
    }).join('');
}

function menuCardHTML(item) {
  let availTag;
  if (item.allWeek) {
    availTag = `<span class="avail-tag all-week">כל השבוע</span>`;
  } else if (['quiches','desserts','combos'].includes(item.cat)) {
    availTag = `<span class="avail-tag fri-shavuot">שישי וערב חג שבועות</span>`;
  } else {
    availTag = `<span class="avail-tag fri-only">שישי בלבד</span>`;
  }
  const imgHTML = item.image
    ? `<img class="card-thumb" src="${item.image}" alt="${item.name}" onerror="this.style.display='none'">`
    : '';
  return `
    <div class="menu-card">
      ${imgHTML}
      <div class="card-info">
        <div class="card-row">
          <span class="card-name">${item.emoji} ${item.name}</span>
          <span class="card-price">€${item.price}</span>
        </div>
        ${item.desc ? `<div class="card-desc">${item.desc}</div>` : ''}
        <div class="card-avail">${availTag}</div>
      </div>
    </div>`;
}

/* ============================================================
   INIT
============================================================ */
document.addEventListener('DOMContentLoaded', renderMenu);
