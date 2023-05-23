console.log('HELLO WORLD!')

const els = document.querySelectorAll('.fruitList')
els.forEach(el => {
  console.log(el.dataset.fruitName)
})