const products = [
    {
        id: 1,
        description: "Delicadeza y sencillez. Confeccionado con hilo natural con diferentes nudos que hacen del mismo un bellísimo diseño que se adapta a cualquier parte de tu hogar. Sus medidas son aproximadas 50cm de ancho por 65cm largo.",
        name: "Tapiz Carola",
        img: "https://i.imgur.com/Dr4VJQi.jpg",
        category: "tapices"
    },
    {
        id: 2,
        description: "Confeccionado con hilo de algodón natural de 27 hebras, integrando diferentes técnicas ancestrales para hacer de este tapiz una pieza única. Sus medidas son aproximadas: 40cm. de ancho por 45 cm. de largo.",
        name: "Tapiz Grecia",
        img: "https://i.imgur.com/UlhnhLU.jpg",
        category: "tapices"
    },
    {
        id: 3,
        description: "Tejido artesanal, hecho con manos que crean y expresan a través de los nudos. La energía fluye, explorando nuevos caminos y disfrutando del resultado. Sus medidas aproximadas: 55 cm. De ancho por 70cm de largo.",
        name: "Tapiz Mar",
        img: "https://i.imgur.com/zKbmzrJ.jpg",
        category: "tapices"
    },
    {
        id: 4,
        description: "Para los que disfrutan de la uniformidad. Belleza simple, ideal para un living o recibidor. Tejida a mano con hilo de algodón de 4 mm. Sus medidas aproximadas son: 50cm de ancho por 50 cm de largo.",
        name: "Tapiz Río",
        img: "/images/productos/",
        category: "tapices"
    },
    {
        id: 5,
        description: "Espejo confeccionado con nudo festón que logran un diseño cálido para tu hogar.",
        name: "Espejo Hanna",
        img: "/images/productos/",
        category: "espejo"
    },
    {
        id: 6,
        description: "Espejo confeccionado con nudo Alondra, su diseño desflecado le brinda un toque de pasión y alegría.",
        name: "Espejo Mila",
        img: "/images/productos/",
        category: "espejo"
    },
    {
        id: 7,
        description: "Confeccionado con nudo feston que por su forma logran formar pétalos que constituyen una hermosa flor.",
        name: "Espejo Flor",
        img: "/images/productos/",
        category: "espejo"
    },
    {
        id: 8,
        description: "Confeccionado con nudos cuadrados combinados con nudos festón. Brindan calidez al hogar con su diseño de triángulos.",
        name: "Espejo estrella",
        img: "/images/productos/",
        category: "espejo"
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductById = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.find(prod => {
                return prod.id === parseInt(id)
            }))
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}