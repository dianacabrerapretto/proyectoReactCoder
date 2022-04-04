const products = [
    {
        id: 1,
        category: "BRASILl 500 gs",
        stock: 10,
        price: 1530,
        description: "El origen del grano es cultivado en la región de Minas Gerais, Brasil. La variedad de la planta de café se llama “CATUAI” y el beneficio del proceso es Natural. Presenta como características en su sabor una acidez baja y aromas a frutos secos tostados predominando los sabores dulces. De un cuerpo alto por su beneficio.",
        image: [
            "https://http2.mlstatic.com/D_NQ_NP_600817-MLA43594116976_092020-O.webp",
        ]
    },
    {
        id: 2,
        category: "COLOMBIA 500 gs",
        stock: 10,
        price: 1500,
        description: "El origen del grano es cultivado en la región de Antioquia, Colombia. La variedad de la planta de café se llama “CATURRA” y el beneficio del proceso es Lavado. Presenta como características en su sabor una acidez limpia, frutal y vivaz. Con aroma floral y de cuerpo liviano, característico de los café de beneficio lavado.",
        image: [
            "https://http2.mlstatic.com/D_NQ_NP_975813-MLA45671981687_042021-O.webp"
        ],
    },
    {
        id: 3,
        category: "AFRICA 500 gs",
        stock: 10,
        price: 2890,
        description: "Grano cultivado en Etiopía. La mayoria son plantaciones en microlotes y cooperativas que mantienen viejas practicas de produccion con un minimo de agroquimicos y tecnificacion. Esto produce un grano estacional de fuerte personalidad, con un perfil aromatico y gustativo sofisticado y exquisito a la vez. El tueste es lento y artesanal, el resultado una bebida intensa con notas achocolatadas y un potente, perdurable retrogusto.",
        image: [
            "https://http2.mlstatic.com/D_NQ_NP_782845-MLA48707962871_122021-O.webp"
        ],
    },
    {
        id: 4,
        category: "PRENSA FRANCESA Volturno Glasse 1 Litro",
        stock: 15,
        price: 7800,
        description: "Cafetera con embolo fabricada en vidrio borosilicato de alta calidad, resistente a altas temperaturas. Además se puede utilizar para otras infusiones como te o mate cocido. - Hecha en Argentina",
        image: [
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/858/872/products/3009_-prenda-francesa-8pc-volturno-glasse1-8230f65acf2a1cfd0c16352584454644-1024-1024.jpg"
        ],
    },
    {
        id: 5,
        category: "CAFETERA ITALIANA Volturno 3, 6 y 9 pocillos",
        stock: 10,
        price: 6780,
        description: "La cafetera italiana o cafetera moka es una cafetera que, de manera similar a la cafetera espresso, elabora el café haciendo pasar agua hervida presurizada por vapor, a través de una pastilla de café molido. La marca Volturno tiene un diseño iconico que se mantiene vigente en la mesa de los argentinos. Revestida en anti adherente, combina diseño, elegancia y practicidad. Aluminio de primera calidad, de muy fácil limpieza y apto para uso alimentario.",
        image: [
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/858/872/products/3004-cafetera-italiana-volturno-36912-posillos1-ee1fe826bc1191654516349089567863-640-0.jpg"
        ],
    },
    {
        id: 6,
        category: "CAFETERA ESPRESSO Prima Latte Silver Oster",
        stock: 7,
        price: 60560,
        description: "Cafetera 15 bares de presión. Automática / Manual. Para Cappuccino, Latte y Espresso. Para café molido o cápsulas Dolce Gusto Depósito de agua removible. Depósito de leche extraíble. Perilla control de espuma de leche.",
        image: [
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/858/872/products/16340702307651-43d1cde4ed2568896a16352597735354-640-0.png"
        ],
    },
];

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(products);
        }, 3000);
    })
}