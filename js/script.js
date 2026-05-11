const translations = {
  he: {
    dir: 'rtl',
    navMenu: 'תפריט',
    navOrder: 'הזמנה',
    navContact: 'צור קשר',
    langBtn: 'Español',
    heroBadge: 'מאפייה ביתית · סנט קוגט',
    heroTitle: "Tom's Bakery",
    heroTagline: 'מאפים ביתיים, אפויים טרי, כל שבוע בסנט קוגט',
    heroCta1: 'לתפריט',
    heroCta2: 'להזמנה',
    menuTitle: 'התפריט שלנו',
    menuSub: 'הכל עשוי ביד עם אהבה',
    cat1Title: 'חלות',
    cat1Sub: 'Jalás',
    cat2Title: 'קישים ופשטידות',
    cat2Sub: 'Quiches y Pasteles',
    cat3Title: 'קינוחים',
    cat3Sub: 'Postres',
    cat4Title: 'מבצעי קומבו',
    cat4Sub: 'Combos',
    orderTitle: 'הזמינו עכשיו',
    orderSub: 'מלאו את הטופס ונחזור אליכם דרך וואטסאפ לאישור',
    orderInfo1: 'איסוף עצמי בסנט קוגט',
    orderInfo2: 'משלוח זמין באזור',
    orderInfo3: 'הזמינו עד יום חמישי לסוף שבוע',
    labelName: 'שם מלא',
    labelPhone: 'טלפון',
    labelType: 'סוג הזמנה',
    optPickup: 'איסוף עצמי',
    optDelivery: 'משלוח',
    labelAddress: 'כתובת למשלוח',
    labelProducts: 'מה תרצו להזמין?',
    labelNotes: 'הערות מיוחדות',
    notesPlaceholder: 'אלרגיות, בקשות מיוחדות...',
    submitBtn: 'שלחו הזמנה בוואטסאפ',
    footerDesc: 'מאפייה ביתית בסנט קוגט, ברצלונה. מאפים ביתיים טריים בכל שבוע.',
    footerContactTitle: 'יצירת קשר',
    footerPhone1: '054-465-7263 (ישראל)',
    footerPhone2: '+34 697 40 66 87 (ספרד)',
    footerLocation: 'Sant Cugat del Vallès, Barcelona',
    footerBottom: '© 2025 Tom\'s Bakery Sant Cugat · כל הזכויות שמורות',
    addressPlaceholder: 'רחוב, מספר, עיר',
    namePlaceholder: 'הכניסו שם',
    phonePlaceholder: 'מספר טלפון',
  },
  es: {
    dir: 'ltr',
    navMenu: 'Menú',
    navOrder: 'Pedido',
    navContact: 'Contacto',
    langBtn: 'עברית',
    heroBadge: 'Panadería artesanal · Sant Cugat',
    heroTitle: "Tom's Bakery",
    heroTagline: 'Pan y repostería artesanal, recién horneado, cada semana en Sant Cugat',
    heroCta1: 'Ver Menú',
    heroCta2: 'Hacer Pedido',
    menuTitle: 'Nuestro Menú',
    menuSub: 'Todo hecho a mano con amor',
    cat1Title: 'Jalás',
    cat1Sub: 'חלות',
    cat2Title: 'Quiches y Pasteles',
    cat2Sub: 'קישים ופשטידות',
    cat3Title: 'Postres',
    cat3Sub: 'קינוחים',
    cat4Title: 'Combos',
    cat4Sub: 'מבצעים',
    orderTitle: 'Haz tu Pedido',
    orderSub: 'Rellena el formulario y te contactamos por WhatsApp para confirmar',
    orderInfo1: 'Recogida en Sant Cugat',
    orderInfo2: 'Entrega disponible en la zona',
    orderInfo3: 'Pedidos hasta el jueves para el fin de semana',
    labelName: 'Nombre completo',
    labelPhone: 'Teléfono',
    labelType: 'Tipo de pedido',
    optPickup: 'Recogida',
    optDelivery: 'Entrega a domicilio',
    labelAddress: 'Dirección de entrega',
    labelProducts: '¿Qué quieres pedir?',
    labelNotes: 'Notas especiales',
    notesPlaceholder: 'Alergias, peticiones especiales...',
    submitBtn: 'Enviar pedido por WhatsApp',
    footerDesc: 'Panadería artesanal en Sant Cugat, Barcelona. Pan y dulces frescos cada semana.',
    footerContactTitle: 'Contacto',
    footerPhone1: '+34 697 40 66 87 (España)',
    footerPhone2: '054-465-7263 (Israel)',
    footerLocation: 'Sant Cugat del Vallès, Barcelona',
    footerBottom: '© 2025 Tom\'s Bakery Sant Cugat · Todos los derechos reservados',
    addressPlaceholder: 'Calle, número, ciudad',
    namePlaceholder: 'Tu nombre',
    phonePlaceholder: 'Número de teléfono',
  }
};

const menuItems = [
  { he: 'חלה אחת', es: '1 Jalá', price: 4, cat: 'challa' },
  { he: '2 חלות', es: '2 Jalás', price: 7, cat: 'challa' },
  { he: '3 חלות', es: '3 Jalás', price: 10, cat: 'challa' },
  { he: 'עוגת שמרים', es: 'Bollo de levadura', price: 8, cat: 'challa' },
  { he: '2 עוגות שמרים', es: '2 bollos de levadura', price: 15, cat: 'challa' },
  { he: 'פשטידת בצל/בטטה משפחתית', es: 'Pastel familiar cebolla/batata', price: 22, cat: 'quiche' },
  { he: '9 מנות אישיות (בצל/בטטה)', es: '9 porciones individuales (cebolla/batata)', price: 26, cat: 'quiche' },
  { he: 'פשטידת פטריות', es: 'Quiche de champiñones', price: 28, cat: 'quiche' },
  { he: '9 יח׳ אישיות (פטריות)', es: '9 piezas individuales (champiñones)', price: 32, cat: 'quiche' },
  { he: 'פשטידת תירס', es: 'Pastel de maíz', price: 14, cat: 'quiche' },
  { he: 'עוגת גבינה באסקית', es: 'Tarta de queso vasca', price: 19, cat: 'dessert' },
  { he: 'שבלול פילו גבינות משפחתי', es: 'Caracol de filo con quesos', price: 27, cat: 'dessert' },
  { he: 'קיש בטטה/בצל + פשטידת תירס', es: 'Quiche batata/cebolla + pastel de maíz', price: 33, cat: 'combo' },
  { he: 'קיש פטריות + שבלול גבינות', es: 'Quiche champiñones + caracol de quesos', price: 52, cat: 'combo' },
  { he: 'עוגת גבינה + קיש בטטה/בצל', es: 'Tarta queso + quiche batata/cebolla', price: 38, cat: 'combo' },
  { he: 'קיש פטריות + קיש בטטה/בצל + שבלול גבינות', es: 'Quiche champiñones + quiche batata + caracol', price: 72, cat: 'combo' },
  { he: '2 עוגות גבינה', es: '2 tartas de queso vasco', price: 35, cat: 'combo' },
  { he: 'קיש פטריות + פשטידת תירס + עוגת גבינה', es: 'Quiche champiñones + maíz + tarta queso', price: 58, cat: 'combo' },
];

let currentLang = 'he';

function applyLang(lang) {
  const t = translations[lang];
  document.documentElement.dir = t.dir;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });
  // Update product checkboxes
  document.querySelectorAll('.checkbox-item .item-label').forEach((el, i) => {
    if (menuItems[i]) el.textContent = menuItems[i][lang];
  });
  currentLang = lang;
}

function buildCheckboxes() {
  const grid = document.getElementById('product-checkboxes');
  grid.innerHTML = '';
  menuItems.forEach((item, i) => {
    const label = document.createElement('label');
    label.className = 'checkbox-item';
    label.innerHTML = `
      <input type="checkbox" value="${item.he}|${item.es}|${item.price}">
      <span class="item-label">${item[currentLang]}</span>
      <span class="item-price-tag">€${item.price}</span>
    `;
    grid.appendChild(label);
  });
}

function buildWhatsAppMessage() {
  const t = translations[currentLang];
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const type = document.querySelector('input[name="orderType"]:checked')?.value;
  const address = document.getElementById('address').value.trim();
  const notes = document.getElementById('notes').value.trim();

  const selected = [...document.querySelectorAll('#product-checkboxes input:checked')].map(cb => {
    const [he, es, price] = cb.value.split('|');
    return `• ${currentLang === 'he' ? he : es} — €${price}`;
  });

  if (!name || !phone || selected.length === 0) {
    alert(currentLang === 'he' ? 'נא למלא שם, טלפון ולבחור לפחות מוצר אחד' : 'Por favor completa nombre, teléfono y selecciona al menos un producto');
    return null;
  }

  const total = [...document.querySelectorAll('#product-checkboxes input:checked')].reduce((sum, cb) => {
    return sum + parseInt(cb.value.split('|')[2]);
  }, 0);

  const lines = currentLang === 'he' ? [
    `*הזמנה חדשה - Tom's Bakery*`,
    `שם: ${name}`,
    `טלפון: ${phone}`,
    `סוג: ${type === 'delivery' ? 'משלוח' : 'איסוף עצמי'}`,
    address ? `כתובת: ${address}` : null,
    ``,
    `*מוצרים:*`,
    ...selected,
    ``,
    `*סה״כ: €${total}*`,
    notes ? `הערות: ${notes}` : null,
  ] : [
    `*Nuevo pedido - Tom's Bakery*`,
    `Nombre: ${name}`,
    `Teléfono: ${phone}`,
    `Tipo: ${type === 'delivery' ? 'Entrega a domicilio' : 'Recogida'}`,
    address ? `Dirección: ${address}` : null,
    ``,
    `*Productos:*`,
    ...selected,
    ``,
    `*Total: €${total}*`,
    notes ? `Notas: ${notes}` : null,
  ];

  return lines.filter(Boolean).join('\n');
}

document.addEventListener('DOMContentLoaded', () => {
  buildCheckboxes();

  document.getElementById('lang-toggle').addEventListener('click', () => {
    applyLang(currentLang === 'he' ? 'es' : 'he');
  });

  document.querySelectorAll('input[name="orderType"]').forEach(radio => {
    radio.addEventListener('change', () => {
      const addressGroup = document.getElementById('address-group');
      addressGroup.classList.toggle('visible', radio.value === 'delivery' && radio.checked);
    });
  });

  document.getElementById('order-form').addEventListener('submit', e => {
    e.preventDefault();
    const msg = buildWhatsAppMessage();
    if (msg) {
      const encoded = encodeURIComponent(msg);
      window.open(`https://wa.me/34697406687?text=${encoded}`, '_blank');
    }
  });
});
