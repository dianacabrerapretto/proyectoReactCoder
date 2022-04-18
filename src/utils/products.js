const products = [
  {
    id: 1,
    name: "BRASIL 250 grs",
    stock: 10,
    cost: 1530,
    description: "El origen del grano es cultivado en la región de Minas Gerais, Brasil. La variedad de la planta de café se llama “CATUAI” y el beneficio del proceso es Natural. Presenta como características en su sabor una acidez baja y aromas a frutos secos tostados predominando los sabores dulces. De un cuerpo alto por su beneficio.",
    image: [
      "https://http2.mlstatic.com/D_NQ_NP_600817-MLA43594116976_092020-O.webp"
    ],
    sales: 0,
    categoryId: 1,
    brandId: 10,
    packingId: null,
    category: {
      name: "BRASIL",
      id: 1
    },
    brand: {
      id: 10,
      name: "La Fazenda"
    },
  },
  {
    id: 2,
    name: "COLOMBIA 250 gs",
    stock: 50,
    cost: 1500,
    description: "El origen del grano es cultivado en la región de Antioquia, Colombia. La variedad de la planta de café se llama “CATURRA” y el beneficio del proceso es Lavado. Presenta como características en su sabor una acidez limpia, frutal y vivaz. Con aroma floral y de cuerpo liviano, característico de los café de beneficio lavado.",
    image: [
      "https://http2.mlstatic.com/D_NQ_NP_975813-MLA45671981687_042021-O.webp"
    ],
    sales: 0,
    categoryId: 2,
    brandId: 10,
    packingId: null,
    category: {
      name: "COLOMBIA",
      id: 2
    },
    brand: {
      id: 10,
      name: "La Fazenda"
    },
  },
  {
    id: 3,
    name: "AFRICA 500 gs",
    stock: 40,
    cost: 2890,
    description: "Grano cultivado en Etiopía. La mayoria son plantaciones en microlotes y cooperativas que mantienen viejas practicas de produccion con un minimo de agroquimicos y tecnificacion. Esto produce un grano estacional de fuerte personalidad, con un perfil aromatico y gustativo sofisticado y exquisito a la vez. El tueste es lento y artesanal, el resultado una bebida intensa con notas achocolatadas y un potente, perdurable retrogusto.",
    image: [
      "https://http2.mlstatic.com/D_NQ_NP_782845-MLA48707962871_122021-O.webp"
    ],
    sales: 0,
    categoryId: 3,
    brandId: 10,
    packingId: null,
    category: {
      name: "AFRICA",
      id: 3
    },
    brand: {
      id: 10,
      name: "La Fazenda"
    },
  },
  {
    id: 4,
    name: "PRENSA FRANCESA",
    stock: 100,
    cost: 7800,
    description: "Cafetera con embolo fabricada en vidrio borosilicato de alta calidad, resistente a altas temperaturas. Además se puede utilizar para otras infusiones como te o mate cocido. - Hecha en Argentina",
    image: [
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/858/872/products/3009_-prenda-francesa-8pc-volturno-glasse1-8230f65acf2a1cfd0c16352584454644-1024-1024.jpg"
    ],
    sales: 0,
    categoryId: 4,
    brandId: 20,
    packingId: null,
    category: {
      name: "ACCESORIOS",
      id: 4
    },
    brand: {
      id: 20,
      name: "Volturno"
    },
  },
  {
    id: 5,
    name: "ITALIANA",
    stock: 150,
    cost: 6780,
    description: "La cafetera italiana o cafetera moka es una cafetera que, de manera similar a la cafetera espresso, elabora el café haciendo pasar agua hervida presurizada por vapor, a través de una pastilla de café molido. La marca Volturno tiene un diseño iconico que se mantiene vigente en la mesa de los argentinos. Revestida en anti adherente, combina diseño, elegancia y practicidad. Aluminio de primera calidad, de muy fácil limpieza y apto para uso alimentario.",
    image: [
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/858/872/products/3004-cafetera-italiana-volturno-36912-posillos1-ee1fe826bc1191654516349089567863-640-0.jpg"
    ],
    sales: 0,
    categoryId: 4,
    brandId: 20,
    packingId: null,
    category: {
      name: "ACCESORIOS",
      id: 4
    },
    brand: {
      id: 20,
      name: "Volturno"
    },
  },
  {
    id: 6,
    name: "ESPRESSO Prima Latte",
    stock: 50,
    cost: 60560,
    description: "Cafetera 15 bares de presión. Automática / Manual. Para Cappuccino, Latte y Espresso. Para café molido o cápsulas Dolce Gusto Depósito de agua removible. Depósito de leche extraíble. Perilla control de espuma de leche.",
    image: [
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/858/872/products/16340702307651-43d1cde4ed2568896a16352597735354-640-0.png"
    ],
    sales: 0,
    categoryId: 4,
    brandId: 21,
    packingId: null,
    category: {
      name: "ACCESORIOS",
      id: 4
    },
    brand: {
      id: 21,
      name: "Oster"
    },
  },

];

module.exports = {
  products,
}