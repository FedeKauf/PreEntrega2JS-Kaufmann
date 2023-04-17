let carrito = [];

nombreCliente = prompt(
  "Bienvenido a INDUMENTARIA online!. Por favor, ingrese su nombre"
);
nombreCliente = alert(
  "Hola " +
    nombreCliente +
    "! Ahora elegirás los productos que estás buscando!"
);

function cargarProducto() {
  const nuevoProducto = new Producto();
  nuevoProducto.nombre = prompt(`Ingrese el NOMBRE que corresponda al producto:
    1. Remera   4.Pantalon   7.Zapatillas
    2. Chomba   5.Shorts     8.Zapatos
    3. Camisa   6.Maya/s     9.Crocks
    `);
  nuevoProducto.marca =
    prompt(`Ingrese el MARCA que desee para el producto ${nuevoProducto.nombre}:
  1. Adidas       4.Reebook    7.DC
  2. Nike         5.Asics      8.Gucci
  3. Under Armor  6.Olimpus    9.Zara
  `);
  nuevoProducto.talle = prompt(
    `Ingrese el TALLE que desee para el producto ${nuevoProducto.nombre}`
  );
  nuevoProducto.color =
    prompt(`Ingrese el COLOR que desee para el producto ${nuevoProducto.nombre}
  1. Blanco  4.Azul       7.Dorado
  2. Negro   5.Verde      8.Violeta
  3. Rojo    6.Naranja    9.Celeste
  `);
  nuevoProducto.precio = Number(
    prompt(`Ingrese el PRECIO que correspone a ${nuevoProducto.nombre}
1. Remera: $100   4.Pantalon: $500   7.Zapatillas: $300
2. Chomba: $200   5.Shorts:   $200   8.Zapatos:    $400
3. Camisa: $500   6.Maya:     $200   9.Crocks:     $100
`)
  );
  nuevoProducto.cantidad = Number(prompt("Ingrese cantidad"));
  return nuevoProducto;
}

const cargarProductos = () => {
  let continuarCompra;
  let nuevoProducto;
  do {
    nuevoProducto = cargarProducto();
    carrito.push(nuevoProducto);
    continuarCompra = prompt("Desea agregar otro PRODUCTO al carrito si/no");
  } while (continuarCompra == "si");
};

function mostrarCarrito() {
  let compra = "";
  let totalCompra = 0;
  carrito.forEach((producto) => {
    compra =
      compra +
      `nombre: ${producto.nombre} \n precio: ${producto.precio} \n cantidad: ${
        producto.cantidad
      } \n marca: ${producto.marca} \n talle: ${producto.talle} \n color: ${
        producto.color
      } \n subtotal: ${producto.subTotal()} \n\n`;
  });

  totalCompra = carrito.reduce((total, producto) => {
    return total + producto.subTotal();
  }, 0);

  alert(compra + `Total: ${totalCompra} \n Muchas gracias por su compra, vuelva pronto!`);
}

cargarProductos();
mostrarCarrito();
