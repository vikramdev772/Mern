function sum(n) {
  let s = 0;
  for (let i = 0; i <= n; i++) {
    s = s + i;
  }
  return s;
}

function fact(n) {
  let f = 1;
  for (let i = 1; i <= n; i++) {
    f *= i;
  }
  return f;
}
module.export={sum,fact}


