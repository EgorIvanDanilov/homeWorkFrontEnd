const wishForm = document.getElementById("wishForm");
const wishlist = document.getElementById("wishlist");
const buttonDel = document.getElementById("buttonDel");

const wishes = [];

const clearInputs = function (event) {
  event.target.wish.value = "";
  event.target.amount.value = "";
};

const delLast = function () {
  wishes.pop(); // Удаляем последний элемент из массива желаний
  renderWishlist(); // Перерисовываем список желаний
};

const markAsCompleted = function (index) {
  wishes[index].completed = true;
  renderWishlist(); // Перерисовываем список желаний
};

const renderWishlist = function () {
  wishlist.innerHTML = ""; // Очищаем содержимое списка

  wishes.forEach((wish, index) => {
    const textItem = document.createElement("p");
    textItem.textContent = `Я хочу ${wish.wish} и их ${wish.amount} шт`;

    if (wish.completed) {
      textItem.classList.add("completed");
    }

    textItem.addEventListener("click", () => markAsCompleted(index));

    wishlist.appendChild(textItem);
    wishlist.classList.add("wish");
  });
};

wishForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const wish = {
    wish: event.target.wish.value,
    amount: event.target.amount.value,
    completed: false, // Добавляем свойство completed для отметки выполненных задач
  };
  wishes.push(wish);

  clearInputs(event);

  renderWishlist(); // Перерисовываем список желаний
});

buttonDel.addEventListener("click", delLast);
