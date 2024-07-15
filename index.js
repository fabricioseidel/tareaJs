let precio = 400000;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;
let cantidadSpam = document.querySelector(".cantidad");
let mas = document.querySelector(".mas");
let menos = document.querySelector(".menos");
let valorTotalSpam = document.querySelector(".valor-total");
let cantidad = 0;
const cambiaTotal = () => {
  const total = cantidad * precio;
  valorTotalSpam.innerHTML = total;
};
const sumar = () => {
  cantidad++;
  cantidadSpam.innerHTML = cantidad;
  cambiaTotal();
};
const restar = () => {
  cantidad--;
  cantidadSpam.innerHTML = cantidad;
  cambiaTotal();
};
