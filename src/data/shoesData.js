// src/data/shoesData.js
export const ALL_SHOES = [
  {
    id: "salomon-xt-6-skyline",
    name: "XT-6 EXPANSE / SKYLINE",
    subtitle: "Calzado de trail running legendario y moda técnica urbana",
    badge: "EDICIÓN LIMITADA",
    price: 195.00,
    currency: "EUR",
    rating: 4.85,
    reviewsCount: 142,
    description: "Lanzada originalmente en 2013, la XT-6 es la zapatilla preferida por atletas de ultra-distancia en las condiciones más duras. Hoy vuelve con colores y materiales actualizados, manteniendo el mismo nivel legendario de amortiguación, durabilidad y control cuesta abajo gracias al sistema Agile Chassis™.",
    technologies: [
      { title: "Agile Chassis™ System (ACS)", desc: "Proporciona estabilidad y amortiguación en conjunto con la entresuela EnergyCell+." },
      { title: "Mud Contagrip®", desc: "Diseñado para un agarre máximo en superficies resbaladizas, blandas y accidentadas." },
      { title: "Quicklace™", desc: "Cordones resistentes y minimalistas para atar de un tirón. Fácil de poner, fácil de quitar." },
      { title: "Malla anti-partículas", desc: "Malla ceñida que evita que quede polvo o gravilla atrapada entre el pie y la plantilla." }
    ],
    specs: {
      weight: "365 g",
      drop: "10 mm",
      cushioning: "Máxima",
      footProtection: "Alta",
      terrain: "Terreno mixto / Senderos rocosos"
    },
    variants: [
      {
        id: "v-phantom",
        colorName: "Black / Phantom / Vanilla",
        thumbnail: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=300&q=80",
        images: [
          "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=85"
        ]
      },
      {
        id: "v-white",
        colorName: "Vanilla Ice / Almond Milk / Silver",
        thumbnail: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=300&q=80",
        images: [
          "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=1200&q=85"
        ]
      },
      {
        id: "v-trail",
        colorName: "Copen Blue / Fiery Red / Sulphur",
        thumbnail: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=300&q=80",
        images: [
          "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=85"
        ]
      }
    ],
    sizes: [
      { eur: "40", uk: "6.5", us: "7", stock: 4 },
      { eur: "40 2/3", uk: "7", us: "7.5", stock: 12 },
      { eur: "41 1/3", uk: "7.5", us: "8", stock: 8 },
      { eur: "42", uk: "8", us: "8.5", stock: 15 },
      { eur: "42 2/3", uk: "8.5", us: "9", stock: 0 },
      { eur: "43 1/3", uk: "9", us: "9.5", stock: 6 },
      { eur: "44", uk: "9.5", us: "10", stock: 10 },
      { eur: "44 2/3", uk: "10", us: "10.5", stock: 3 },
      { eur: "45 1/3", uk: "10.5", us: "11", stock: 0 },
      { eur: "46", uk: "11", us: "11.5", stock: 5 }
    ]
  }
];