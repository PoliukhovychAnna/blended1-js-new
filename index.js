//TODO:==============================================
/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/

// const btnEl = document.querySelector("#alertButton");
// const inputEl = document.querySelector("#alertInput");

// btnEl.addEventListener("click", () => alert(inputEl.value))

//TODO:==============================================
/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

// const btnEl = document.querySelector("#swapButton")
// const inputLeftEl = document.querySelector("#leftSwapInput");
// const inputRightEl = document.querySelector("#rightSwapInput");

// ====
// btnEl.addEventListener("click", handleClick);
// function handleClick() {
//     const left = inputLeftEl.value;
//     const right = inputRightEl.value;

//     inputLeftEl.value = right;
//     inputRightEl.value = left;
// }

// ====
// const test = "sdfsdfsdf"
// btnEl.addEventListener("click", handleClick(test));
// function handleClick(a) {
//     return function () {
//         const left = inputLeftEl.value;
//         const right = inputRightEl.value;

//         inputLeftEl.value = right;
//         inputRightEl.value = left;
//         console.log(a)
//     }
// }

//TODO:==============================================
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/
// const passwordInputEl = document.querySelector("#passwordInput");
// const passwordButtonEl = document.querySelector("#passwordButton");

// passwordButtonEl.addEventListener("click", onPasswordButtonClick);
// function onPasswordButtonClick() {
//   if (passwordButtonEl.textContent === "Розкрити") {
//     passwordInputEl.type = "text";
//     passwordButtonEl.textContent = "Скрыть";
//     return;
//   }
//   passwordButtonEl.textContent = "Розкрити";
//   passwordInputEl.type = "password";
// }

//TODO:==============================================
/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів,  "Збільшити" - більше на 10 пікселів.
*/

// const boxEl = document.querySelector("#box");
// const btnDecreaseEl = document.querySelector("#decrease");
// const btnIncreaseEl = document.querySelector("#increase");
// let size = parseInt(getComputedStyle(boxEl).width)

// btnDecreaseEl.addEventListener("click", decrease);
// btnIncreaseEl.addEventListener("click", increase);

// function decrease() {
//     size -= 10;
//     console.log(size);
//     boxEl.style.width = size + "px";
//     boxEl.style.height = size + "px";
    
// }

// function increase() {
//       size += 10;
//       console.log(size);
//       boxEl.style.width = size + "px";
//       boxEl.style.height = size + "px";
//  }




//TODO:==============================================
/*
Завдання 5
Додайте слухач кліку на window і визначте чи клікнув користувач у дів з id="place".
*/

// const placeRef = document.querySelector("#place");
// addEventListener("click", (e) => {
//   console.log(e.target === placeRef ? true : false);
// });

//TODO:==============================================
/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/

// const itemEl = document.querySelectorAll(".listItem");
// const multplBtnEl = document.querySelector("#double");

// multplBtnEl.addEventListener("click", double)

// function double() {
//   itemEl.forEach(item => {
//     item.textContent = Number(item.textContent) * 2;
//   })
// }


//TODO:==============================================
/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/
