/* ============================================================
   LANGUAGE
============================================================ */
let lang = 'he';

const STRINGS = {
  he: {
    title: 'התפריט',
    allWeek: 'כל השבוע',
    fridayOnly: 'שישי בלבד',
    weekend: 'שישי, שבת וראשון',
    shavuot: 'שישי בלבד',
    footer: 'יש בקשה מיוחדת שאינה בתפריט?',
    footerLink: 'תפנו אלינו בוואטסאפ 📱',
    phoneLabel: 'לפרטים והזמנות',
  },
  en: {
    title: 'Menu',
    allWeek: 'All week',
    fridayOnly: 'Friday only',
    weekend: 'Fri, Sat & Sun',
    shavuot: 'Friday only',
    footer: 'Special request not on the menu?',
    footerLink: 'Contact us on WhatsApp 📱',
    phoneLabel: 'Orders & info',
  },
  es: {
    title: 'Menú',
    allWeek: 'Toda la semana',
    fridayOnly: 'Solo viernes',
    weekend: 'Vie, Sáb y Dom',
    shavuot: 'Solo viernes',
    footer: '¿Pedido especial que no está en el menú?',
    footerLink: 'Contáctanos por WhatsApp 📱',
    phoneLabel: 'Pedidos e info',
  },
};

/* ============================================================
   MENU DATA
============================================================ */
const CATEGORIES = [
  { key: 'challahs',  label: { he: 'חלות',           en: 'Challahs',          es: 'Jalás'              } },
  { key: 'yeast',     label: { he: 'עוגות שמרים',    en: 'Yeast Cakes',       es: 'Bollos de Levadura' } },
  { key: 'rugelach',  label: { he: 'רוגלך',          en: 'Rugelach',          es: 'Rugelaj'            } },
  { key: 'kisses',    label: { he: 'נשיקות',         en: 'Kisses',            es: 'Besitos'            } },
  { key: 'malawach',  label: { he: 'מלוואח',         en: 'Malawach',          es: 'Malauaj'            } },
  { key: 'grapes',    label: { he: 'עלי גפן',        en: 'Grape Leaves',      es: 'Hojas de Parra'     } },
  { key: 'falafel',   label: { he: 'עיסת פלאפל',     en: 'Falafel Dough',     es: 'Masa de Falafel'    } },
  { key: 'blintzes',  label: { he: 'בלינצ׳סים',      en: 'Blintzes',          es: 'Blintzes'           } },
  { key: 'quiches',   label: { he: 'קישים ופשטידות', en: 'Quiches & Pies',    es: 'Quiches y Pasteles' } },
  { key: 'desserts',  label: { he: 'עוגה באסקית',    en: 'Basque Cheesecake', es: 'Tarta Vasca'        } },
  { key: 'chocolate', label: { he: 'עוגת שוקולד',    en: 'Chocolate Cake',    es: 'Tarta de Chocolate' } },
  { key: 'combos',    label: { he: 'מבצעים',         en: 'Deals',             es: 'Combos'             } },
];

const MENU_ITEMS = [

  // ── חלות ──
  {
    id: 1, cat: 'challahs',
    name: 'חלה אחת', desc: 'חלה ביתית טרייה',
    en: { name: 'One Challah', desc: 'Fresh homemade challah' },
    es: { name: 'Una Jalá', desc: 'Jalá casera fresca' },
    price: 4, emoji: '🥖', image: 'images/חלה.jpeg',
  },
  {
    id: 2, cat: 'challahs',
    name: '2 חלות', desc: 'שתי חלות ביתיות טריות',
    en: { name: '2 Challahs', desc: 'Two fresh homemade challahs' },
    es: { name: '2 Jalás', desc: 'Dos jalás caseras frescas' },
    price: 7, emoji: '🥖', image: 'images/חלה.jpeg',
  },
  {
    id: 3, cat: 'challahs',
    name: '3 חלות', desc: 'שלוש חלות ביתיות טריות',
    en: { name: '3 Challahs', desc: 'Three fresh homemade challahs' },
    es: { name: '3 Jalás', desc: 'Tres jalás caseras frescas' },
    price: 10, emoji: '🥖', image: 'images/חלה.jpeg',
  },

  // ── עוגות שמרים ──
  {
    id: 4, cat: 'yeast',
    name: 'עוגת שמרים שוקולד', desc: 'עוגת שמרים ביתית במילוי שוקולד',
    en: { name: 'Chocolate Babka', desc: 'Homemade babka with chocolate filling' },
    es: { name: 'Babka de chocolate', desc: 'Babka casera rellena de chocolate' },
    price: 8, emoji: '🍫', image: 'images/עוגת שמרים שוקולד.jpeg',
  },
  {
    id: 5, cat: 'yeast',
    name: '2 עוגות שמרים שוקולד', desc: 'שתי עוגות שמרים שוקולד',
    en: { name: '2 Chocolate Babkas', desc: 'Two chocolate babkas' },
    es: { name: '2 Babkas de chocolate', desc: 'Dos babkas de chocolate' },
    price: 15, emoji: '🍫', image: 'images/עוגת שמרים שוקולד.jpeg',
  },
  {
    id: 6, cat: 'yeast',
    name: 'עוגת שמרים ריקוטה', desc: 'עוגת שמרים ביתית במילוי ריקוטה',
    en: { name: 'Ricotta Babka', desc: 'Homemade babka with ricotta filling' },
    es: { name: 'Babka de ricota', desc: 'Babka casera rellena de ricota' },
    price: 9, emoji: '🥐', image: 'images/עוגת שמרים ריקוטה.jpeg',
  },
  {
    id: 7, cat: 'yeast',
    name: '2 עוגות שמרים ריקוטה', desc: 'שתי עוגות שמרים ריקוטה',
    en: { name: '2 Ricotta Babkas', desc: 'Two ricotta babkas' },
    es: { name: '2 Babkas de ricota', desc: 'Dos babkas de ricota' },
    price: 17, emoji: '🥐', image: 'images/עוגת שמרים ריקוטה.jpeg',
  },
  {
    id: 8, cat: 'yeast',
    name: 'מעורבב — שוקולד + ריקוטה', desc: 'עוגת שמרים אחת מכל סוג',
    en: { name: 'Mixed — Chocolate + Ricotta Babka', desc: 'One of each type' },
    es: { name: 'Mixto — Babka Chocolate + Ricota', desc: 'Uno de cada tipo' },
    price: 16, emoji: '🎂', image: 'images/עוגת שמרים שוקולד.jpeg',
  },

  // ── רוגלך ──
  {
    id: 9, cat: 'rugelach',
    name: 'רוגלך', desc: 'מארז רוגלך ביתי — 350 גרם',
    en: { name: 'Rugelach', desc: 'Homemade rugelach pack — 350g' },
    es: { name: 'Rugelaj', desc: 'Paquete de rugelaj casero — 350g' },
    price: 6.5, emoji: '🥐', image: 'images/רוגלעך.jpeg',
  },
  {
    id: 10, cat: 'rugelach',
    name: '2 מארזי רוגלך', desc: 'שני מארזי רוגלך — 350 גרם כל אחד',
    en: { name: '2 Rugelach Packs', desc: 'Two rugelach packs — 350g each' },
    es: { name: '2 paquetes de Rugelaj', desc: 'Dos paquetes — 350g cada uno' },
    price: 11, emoji: '🥐', image: 'images/רוגלעך.jpeg',
  },

  // ── נשיקות ──
  {
    id: 11, cat: 'kisses',
    name: 'נשיקות', desc: 'מארז נשיקות — 125 גרם',
    en: { name: 'Meringue Kisses', desc: 'Meringue kisses pack — 125g' },
    es: { name: 'Merengues', desc: 'Paquete de merengues — 125g' },
    price: 6, emoji: '🍬', image: 'images/נשיקות.jpeg', allWeek: true,
  },
  {
    id: 12, cat: 'kisses',
    name: '2 מארזי נשיקות', desc: 'שני מארזים',
    en: { name: '2 Meringue Kisses Packs', desc: 'Two packs' },
    es: { name: '2 paquetes de Merengues', desc: 'Dos paquetes' },
    price: 10, emoji: '🍬', image: 'images/נשיקות.jpeg', allWeek: true,
  },

  // ── מלוואח ──
  {
    id: 13, cat: 'malawach',
    name: 'מלוואח', desc: '5 יחידות',
    en: { name: 'Malawach', desc: '5 units' },
    es: { name: 'Malauaj', desc: '5 unidades' },
    price: 10, emoji: '🫓', image: 'images/מלוואח.jpeg', allWeek: true,
  },

  // ── עלי גפן ──
  {
    id: 14, cat: 'grapes',
    name: 'עלי גפן — מארז 500 גרם', desc: '10–13 יחידות',
    en: { name: 'Grape Leaves — 500g pack', desc: '10–13 units' },
    es: { name: 'Hojas de Parra — paquete 500g', desc: '10–13 unidades' },
    price: 8, emoji: '🍇', image: 'images/עלי גפן.jpeg', allWeek: true,
  },

  // ── עיסת פלאפל ──
  {
    id: 32, cat: 'falafel',
    name: 'עיסת פלאפל — קילו', desc: 'מספיק ל-30 כדורים',
    en: { name: 'Falafel Dough — 1kg', desc: 'Enough for 30 balls' },
    es: { name: 'Masa de falafel — 1kg', desc: 'Suficiente para 30 bolitas' },
    price: 13, emoji: '🧆', image: null, allWeek: true,
  },
  {
    id: 33, cat: 'falafel',
    name: '10 כדורי פלאפל מוכנים', desc: 'מטוגנים ומוכנים · אפשרות להוסיף קופסה קטנה של טחינה ב-€1',
    en: { name: '10 Ready Falafel Balls', desc: 'Fried and ready · Add a small tahini box for €1' },
    es: { name: '10 bolitas de falafel listas', desc: 'Fritas y listas · Añade una cajita de tahini por €1' },
    price: 6, emoji: '🧆', image: 'images/כדורי פלאפל.jpeg', allWeek: true,
  },

  // ── בלינצ'סים ──
  {
    id: 30, cat: 'blintzes',
    name: "בלינצ'סים פטריות ובצל", desc: '5 יחידות',
    en: { name: 'Mushroom & Onion Blintzes', desc: '5 units' },
    es: { name: 'Blintzes de champiñones y cebolla', desc: '5 unidades' },
    price: 10, emoji: '🥞', image: "images/בלינצ'ס פטריות ובצל.jpeg",
  },
  {
    id: 31, cat: 'blintzes',
    name: "בלינצ'סים גבינה מתוקה", desc: '5 יחידות',
    en: { name: 'Sweet Cheese Blintzes', desc: '5 units' },
    es: { name: 'Blintzes de queso dulce', desc: '5 unidades' },
    price: 10, emoji: '🥞', image: "images/בלינצ'ס גבינה מתוקה.jpeg",
  },

  // ── קישים ופשטידות ──
  {
    id: 15, cat: 'quiches',
    name: 'פשטידת בצל/בטטה משפחתית', desc: 'פשטידה משפחתית עשירה ומשביעה',
    en: { name: 'Onion/Sweet Potato Pie — Family', desc: 'Rich and filling family pie' },
    es: { name: 'Pastel familiar cebolla/batata', desc: 'Pastel familiar rico y nutritivo' },
    price: 22, emoji: '🥧', image: 'images/קיש בצל.jpeg',
  },
  {
    id: 16, cat: 'quiches',
    name: '9 מנות אישיות (בצל/בטטה)', desc: '9 מנות אישיות, מושלם לאירועים',
    en: { name: '9 Individual Portions (Onion/Sweet Potato)', desc: '9 individual portions, perfect for events' },
    es: { name: '9 Porciones individuales (cebolla/batata)', desc: '9 porciones, perfecto para eventos' },
    price: 26, emoji: '🥧', image: 'images/קיש בצל.jpeg',
  },
  {
    id: 17, cat: 'quiches',
    name: 'פשטידת פטריות', desc: 'קיש פטריות עשיר ומשובח',
    en: { name: 'Mushroom Quiche', desc: 'Rich and exquisite mushroom quiche' },
    es: { name: 'Quiche de champiñones', desc: 'Quiche de champiñones rico y exquisito' },
    price: 28, emoji: '🍄', image: 'images/קיש פטריות.jpeg',
  },
  {
    id: 18, cat: 'quiches',
    name: '9 יח׳ אישיות (פטריות)', desc: '9 יחידות אישיות של קיש פטריות',
    en: { name: '9 Individual Pieces (Mushroom)', desc: '9 individual mushroom quiche pieces' },
    es: { name: '9 Piezas individuales (champiñones)', desc: '9 piezas individuales de quiche' },
    price: 32, emoji: '🍄', image: 'images/קיש פטריות.jpeg',
  },
  {
    id: 19, cat: 'quiches',
    name: 'פשטידת תירס', desc: 'פשטידת תירס מתוקה וקלילה',
    en: { name: 'Corn Pie', desc: 'Sweet and light corn pie' },
    es: { name: 'Pastel de maíz', desc: 'Pastel de maíz dulce y ligero' },
    price: 14, emoji: '🌽', image: null,
  },
  {
    id: 21, cat: 'quiches',
    name: 'שבלול פילו גבינות משפחתי', desc: 'פילו פריך מלא בגבינות',
    en: { name: 'Cheese Phyllo Snail', desc: 'Crispy phyllo filled with cheeses' },
    es: { name: 'Caracol de filo con quesos', desc: 'Filo crujiente relleno de quesos' },
    price: 27, emoji: '🥮', image: 'images/שבלול פילו.jpeg',
  },

  // ── עוגה באסקית ──
  {
    id: 20, cat: 'desserts',
    name: 'עוגת גבינה באסקית', desc: 'קרמית, עשירה, פירמה — קוטר 18',
    en: { name: 'Basque Cheesecake', desc: 'Creamy, rich, firm — ⌀18' },
    es: { name: 'Tarta de queso vasca', desc: 'Cremosa, rica, firme — ⌀18' },
    price: 19, emoji: '🍰', image: 'images/עוגה באסקית.jpeg',
  },

  // ── עוגת שוקולד ──
  {
    id: 28, cat: 'chocolate',
    name: 'עוגת שוקולד פאדג׳ עשירה קוטר 26', desc: '',
    en: { name: 'Rich Fudge Chocolate Cake ⌀26', desc: '' },
    es: { name: 'Tarta de chocolate fudge ⌀26', desc: '' },
    price: 40, emoji: '🍫', image: 'images/עוגת שוקולד.jpeg',
  },
  {
    id: 29, cat: 'chocolate',
    name: 'עוגת שוקולד פאדג׳ עשירה קוטר 20', desc: '',
    en: { name: 'Rich Fudge Chocolate Cake ⌀20', desc: '' },
    es: { name: 'Tarta de chocolate fudge ⌀20', desc: '' },
    price: 30, emoji: '🍫', image: 'images/עוגת שוקולד.jpeg',
  },

  // ── מבצעים ──
  {
    id: 22, cat: 'combos',
    name: 'קיש בטטה/בצל + פשטידת תירס', desc: 'חסכו €3',
    en: { name: 'Onion/Sweet Potato Quiche + Corn Pie', desc: 'Save €3' },
    es: { name: 'Quiche cebolla/batata + Pastel de maíz', desc: 'Ahorra €3' },
    price: 33, emoji: '🎁', image: null,
  },
  {
    id: 23, cat: 'combos',
    name: 'קיש פטריות + שבלול גבינות', desc: 'חסכו €3',
    en: { name: 'Mushroom Quiche + Cheese Phyllo Snail', desc: 'Save €3' },
    es: { name: 'Quiche champiñones + Caracol de quesos', desc: 'Ahorra €3' },
    price: 52, emoji: '🎁', image: null,
  },
  {
    id: 24, cat: 'combos',
    name: 'עוגת גבינה + קיש בטטה/בצל', desc: 'מתוק ומלוח — חסכו €3',
    en: { name: 'Cheesecake + Onion/Sweet Potato Quiche', desc: 'Sweet & savory — Save €3' },
    es: { name: 'Tarta de queso + Quiche cebolla/batata', desc: 'Dulce y salado — Ahorra €3' },
    price: 38, emoji: '🎁', image: null,
  },
  {
    id: 25, cat: 'combos',
    name: 'קיש פטריות + קיש בטטה/בצל + שבלול', desc: 'הכי שלם — חסכו €7',
    en: { name: 'Mushroom Quiche + Sweet Potato Quiche + Phyllo Snail', desc: 'Best value — Save €7' },
    es: { name: 'Quiche champiñones + Quiche batata + Caracol', desc: 'Mejor oferta — Ahorra €7' },
    price: 72, emoji: '🎁', image: null,
  },
  {
    id: 26, cat: 'combos',
    name: '2 עוגות גבינה', desc: 'חסכו €3',
    en: { name: '2 Cheesecakes', desc: 'Save €3' },
    es: { name: '2 Tartas de queso', desc: 'Ahorra €3' },
    price: 35, emoji: '🎁', image: null,
  },
  {
    id: 27, cat: 'combos',
    name: 'קיש פטריות + פשטידת תירס + עוגת גבינה', desc: 'חבילה מלאה — חסכו €3',
    en: { name: 'Mushroom Quiche + Corn Pie + Cheesecake', desc: 'Full package — Save €3' },
    es: { name: 'Quiche champiñones + Pastel de maíz + Tarta de queso', desc: 'Paquete completo — Ahorra €3' },
    price: 58, emoji: '🎁', image: null,
  },
];

/* ============================================================
   RENDER
============================================================ */
function tr(item) {
  if (lang === 'he') return { name: item.name, desc: item.desc };
  return { name: (item[lang] && item[lang].name) || item.name,
           desc: (item[lang] && item[lang].desc) || item.desc };
}

function renderMenu() {
  const s = STRINGS[lang];
  document.getElementById('header-title').textContent = s.title;
  document.getElementById('header-phone-label').textContent = s.phoneLabel;

  document.getElementById('menu-content').innerHTML =
    CATEGORIES.map(cat => {
      const items = MENU_ITEMS.filter(i => i.cat === cat.key);
      if (!items.length) return '';
      return `
        <div class="menu-section">
          <div class="section-heading">${cat.label[lang] || cat.label.he}</div>
          <div class="cards-list">${items.map(menuCardHTML).join('')}</div>
        </div>`;
    }).join('') +
    `<div class="menu-footer">
       ${s.footer}
       <a href="https://wa.me/972544657263" target="_blank">${s.footerLink}</a>
     </div>`;
}

function menuCardHTML(item) {
  const s = STRINGS[lang];
  const t = tr(item);
  let availTag;
  if (item.allWeek) {
    availTag = `<span class="avail-tag all-week">${s.allWeek}</span>`;
  } else if (['quiches','desserts','chocolate','blintzes'].includes(item.cat)) {
    availTag = `<span class="avail-tag fri-shavuot">${s.weekend}</span>`;
  } else if (item.cat === 'combos') {
    availTag = `<span class="avail-tag fri-shavuot">${s.shavuot}</span>`;
  } else {
    availTag = `<span class="avail-tag fri-only">${s.fridayOnly}</span>`;
  }
  const imgHTML = item.image
    ? `<img class="card-thumb" src="${item.image}" alt="${t.name}" onerror="this.style.display='none'">`
    : '';
  return `
    <div class="menu-card">
      ${imgHTML}
      <div class="card-info">
        <div class="card-row">
          <span class="card-name">${item.emoji} ${t.name}</span>
          <span class="card-price">€${item.price}</span>
        </div>
        ${t.desc ? `<div class="card-desc">${t.desc}</div>` : ''}
        <div class="card-avail">${availTag}</div>
      </div>
    </div>`;
}

/* ============================================================
   LANGUAGE SWITCH
============================================================ */
function setLang(newLang) {
  lang = newLang;
  const dir = lang === 'he' ? 'rtl' : 'ltr';
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', dir);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  renderMenu();
}

/* ============================================================
   INIT
============================================================ */
document.addEventListener('DOMContentLoaded', () => renderMenu());
