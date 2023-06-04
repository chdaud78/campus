let myName = "PCM";
let email = 'thesecon@naver.com'
let hello = `Hello ${myName}?!`;
let user = {
  name : "PCM",
  age: 25,
  isCheck: true,
}

console.log(myName);
console.log(email);
console.log(hello);
console.log(user.name);

let boxEl = document.querySelector('.box');

console.log(boxEl);

boxEl.addEventListener('click', function () {
  console.log('Click');
  boxEl.classList.add('active');
  console.log(
      boxEl.classList.contains('active')
  );
  boxEl.classList.remove('active');
  console.log(
      boxEl.classList.contains('active')
  );
});

const boxEls = document.querySelectorAll('.boxes');

boxEls.forEach(function (boxEl, index) {
  boxEl.classList.add(`order-${index + 1}`);
  console.log(index,boxEl);
});

console.log(boxEl.textContent);

boxEl.textContent = 'PCM';

console.log(boxEl.textContent)