const BOT_TOKEN = "7158887428:AAH7j-uUFJKV2xqGci6hUaMm3ycznVQ6Q1I";
const CHAT_ID = "";

function openForm(name, price) {
    document.getElementById('productTitle').innerText = `Замовлення: ${name}`;
    document.getElementById('product').value = name;
    document.getElementById('price').value = price;
    document.getElementById('orderForm').style.display = 'block';
}

function closeForm() {
    document.getElementById('orderForm').style.display = 'none';
    document.getElementById('status').innerText = '';
}

async function sendOrder(event) {
    event.preventDefault();

    const fullname = document.getElementById('fullname').value;
    const phone = document.getElementById('phone').value;
    const novaPoshta = document.getElementById('novaPoshta').value;
    const product = document.getElementById('product').value;
    const price = document.getElementById('price').value;

    const message = `
Нове замовлення!
Товар: ${product}
Ціна: ${price} грн
ПІБ: ${fullname}
Телефон: ${phone}
Нова Пошта: ${novaPoshta}
    `;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: CHAT_ID || undefined,
            text: message,
            parse_mode: "HTML"
        })
    });

    document.getElementById('status').innerText = "Замовлення надіслано!";
    setTimeout(closeForm, 2000);
}
