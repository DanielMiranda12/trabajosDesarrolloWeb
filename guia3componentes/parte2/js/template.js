const template = document.getElementById("card-template");
const contenedor = document.getElementById("contenedor");

const productos = [
    { titulo: "Laptop", desc: "16GB RAM", price: "1´600,000", image: "img/laptop.jpg" },
    { titulo: "Mouse", desc: "Inalámbrico", price: "20,000", image: "img/mouse.jpg" },
    { titulo: "SSD", desc: "Capacidad 1TB", price: "100,000", image: "img/ssd.jpg" },
    { titulo: "teclado", desc: "RGB", price: "180,000", image: "img/teclado.jpg" }
];

productos.forEach(producto => {
    const clon = template.content.cloneNode(true);
    clon.querySelector(".title").textContent = producto.titulo;
    clon.querySelector(".desc").textContent = producto.desc;
    clon.querySelector(".price").textContent = producto.price;
    const img = clon.querySelector(".image");
    img.src = producto.image;
    img.alt = producto.titulo;
    contenedor.appendChild(clon);
});
