// Глобальная переменная для текущего аудио
let currentAudio = null;

function playTrack(trackName) {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    currentAudio = new Audio('music/' + trackName);
    currentAudio.play();
}


// Функция для покупки товара
function buyItem(itemName) {
    // Получаем текущие покупки из локального хранилища
    let purchasedItems = JSON.parse(localStorage.getItem('purchasedItems')) || [];
    
    // Проверяем, если товар уже куплен
    if (purchasedItems.includes(itemName)) {
        alert(`Вы уже купили: ${itemName}`);
    } else {
        purchasedItems.push(itemName); // Добавляем товар в покупки
        localStorage.setItem('purchasedItems', JSON.stringify(purchasedItems));
        alert(`Вы купили: ${itemName}`);
    }
}

// Функция для проверки видимости секций
function checkVisibility() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

// Проверяем видимость при прокрутке и загрузке
window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);
