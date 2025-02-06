https://github.com/ndb796/priorityqueuejs

let pq = new PriorityQue(function(a,b) {
  return a.cash - b.cash;
})

pq.enq({cash:250, name: 'Doohyun Kim'});
pq.enq({cash:300, name: 'Gildong Hong'});
pq.enq({cash:150, name: 'Minchul Han'});
console.log(pq.size()); //3
console.log(pq.deq()); // {cash:300 , name: 'Gildong HOng'}
console.log(pq.peek()); // {cash: 250, name: 'Doohyun Kim'}
console.log(pq.size()); //2