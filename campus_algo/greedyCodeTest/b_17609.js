let char = [
  "abba",
  "summuus",
  "xabba",
  "xabbay",
  "comcom",
  "comwwmoc",
  "comwwtmoc"
]

for(let x of char) {
  if(x == x.split('').reverse().join('')) console.log(0);
  else {
    for(let i =0 ; i<x.length ;i ++) {
      // if(x.split('').slice(i,i+1).join('') == x.split('').reverse().join('')) console.log(1);
      x.split('').splice(i,1)
      console.log(x);
    }
  }
}
