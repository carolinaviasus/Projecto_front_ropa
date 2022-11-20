const data = {
  status: "success",
  items: [
    {
      id: 1,
      title: "Jean Moderno Dama",
      price: 55000,
      image: require('./images/jm1.png'),
      category: "jean",
      cantidad: 1,
    },
    {
      id: 2,
      title: "Jean Moderno Dama",
      price: 304,
      image: require('./images/jm2.png'),
      category: "jean",
      cantidad: 1
    },
    {
      id: 3,
      title: "Jean Moderno Dama",
      price: 475,
      image: require('./images/jm3.png'),
      category: "jean",
      cantidad: 1
    },
    {
      id: 4,
      title: "Jean Moderno Dama",
      price: 399,
      image: require('./images/jm4.png'),
      category: "jean",
      img1: "https://stockx-360.imgix.net/Nike-LD-Waffle-Sacai-White-Nylon/Images/Nike-LD-Waffle-Sacai-White-Nylon/Lv2/img",
      img2: ".jpg?auto=format,compress&q=90&updated_at=1606325338&w=1000",
      cantidad: 1
    },
    {
      id: 5,
      title: "Jean Moderno Caballero",
      price: 405,
      image: require('./images/jh1.png'),
      category: "jean",
      img1: " https://stockx-360.imgix.net/Nike-Dunk-Low-SP-Kentucky/Images/Nike-Dunk-Low-SP-Kentucky/Lv2/img",
      img2: ".jpg?auto=format,compress&q=90&updated_at=1606322330&w=1000",
      cantidad: 1
    },
    {
      id: 6,
      title: "Jean Moderno Caballero",
      price: 285,
      image: require('./images/jh2.png'),
      category: "jean",
      img1: "https://stockx-360.imgix.net/Nike-Dunk-Low-Off-White-University-Red/Images/Nike-Dunk-Low-Off-White-University-Red/Lv2/img",
      img2: ".jpg?auto=format,compress&q=90&updated_at=1606321824&w=1000",
      cantidad: 1
    },
    {
      id: 7,
      title: "Jean Moderno Caballero",
      price: 360,
      image: require('./images/jh3.png'),
      category: "jean",
      img1: "https://stockx-360.imgix.net/Nike-Air-Max-2-Light-Atmos/Images/Nike-Air-Max-2-Light-Atmos/Lv2/img",
      img2: ".jpg?auto=format,compress&q=90&updated_at=1606320966&w=1000",
      cantidad: 1
    },
    {
      id: 8,
      title: "Camisa Moderna Dama",
      price: 335,
      image: require('./images/cm1.png'),
      category: "camisa",
      img1: "https://stockx-360.imgix.net/Nike-Air-Force-1-Low-Clot-Blue-Silk/Images/Nike-Air-Force-1-Low-Clot-Blue-Silk/Lv2/img",
      img2: ".jpg?auto=format,compress&q=90&updated_at=1606325265&w=1000",
      cantidad: 1
    },
    {
      id: 9,
      title: "Camisa Moderna Dama",
      price: 799,
      image: require('./images/cm2.png'),
      category: "camisa",
      img1: "https://stockx-360.imgix.net/Nike-Air-Max-90-OG-White-Particle-Grey-Volt/Images/Nike-Air-Max-90-OG-White-Particle-Grey-Volt/Lv2/img",
      img2: ".jpg?auto=format,compress&q=90&updated_at=1606323250&w=1000",
      cantidad: 1
    },
    {
      id: 10,
      title: "Camisa Moderna Dama",
      price: 501,
      image: require('./images/cm3.png'),
      category: "camisa",
      img1: "https://stockx-360.imgix.net/Nike-Dunk-High-Black-Varsity-Maize/Images/Nike-Dunk-High-Black-Varsity-Maize/Lv2/img",
      img2: ".jpg?auto=format,compress&q=90&updated_at=1609445259&w=1000",
      cantidad: 1
    },
    {
      id: 11,
      title: "Camisa Moderna Caballero",
      price: 377,
      image: require('./images/ch1.png'),
      category: "camisa",
      img1: "https://stockx-360.imgix.net/Nike-Air-Rubber-Dunk-Off-White-UNC/Images/Nike-Air-Rubber-Dunk-Off-White-UNC/Lv2/img",
      img2: ".jpg?auto=format,compress&q=90&updated_at=1609438911&w=1000",
      cantidad: 1
    },
    {
      id: 12,
      title: "Camisa Moderna Caballero",
      price: 377,
      image: require('./images/ch2.png'),
      category: "camisa",
      img1: "https://stockx-360.imgix.net/Nike-Air-Rubber-Dunk-Off-White-UNC/Images/Nike-Air-Rubber-Dunk-Off-White-UNC/Lv2/img",
      img2: ".jpg?auto=format,compress&q=90&updated_at=1609438911&w=1000",
      cantidad: 1
    },
    {
      id: 13,
      title: "Camisa Moderna Caballero",
      price: 377,
      image: require('./images/ch3.png'),
      category: "camisa",
      img1: "https://stockx-360.imgix.net/Nike-Air-Rubber-Dunk-Off-White-UNC/Images/Nike-Air-Rubber-Dunk-Off-White-UNC/Lv2/img",
      img2: ".jpg?auto=format,compress&q=90&updated_at=1609438911&w=1000",
      cantidad: 1
    },
    {
      id: 14,
      title: "Camiseta Moderna Dama",
      price: 377,
      image: require('./images/ctm1.png'),
      category: "camiseta",
      img1: "https://stockx-360.imgix.net/Nike-Air-Rubber-Dunk-Off-White-UNC/Images/Nike-Air-Rubber-Dunk-Off-White-UNC/Lv2/img",
      img2: ".jpg?auto=format,compress&q=90&updated_at=1609438911&w=1000",
      cantidad: 1
    },
    {
      id: 15,
      title: "Camiseta Moderna Dama",
      price: 377,
      image: require('./images/ctm2.png'),
      category: "camiseta",
      img1: "https://stockx-360.imgix.net/Nike-Air-Rubber-Dunk-Off-White-UNC/Images/Nike-Air-Rubber-Dunk-Off-White-UNC/Lv2/img",
      img2: ".jpg?auto=format,compress&q=90&updated_at=1609438911&w=1000",
      cantidad: 1
    },
    {
      id: 16,
      title: "Camiseta Moderna Dama",
      price: 377,
      image: require('./images/ctm3.png'),
      category: "camiseta",
      img1: "https://stockx-360.imgix.net/Nike-Air-Rubber-Dunk-Off-White-UNC/Images/Nike-Air-Rubber-Dunk-Off-White-UNC/Lv2/img",
      img2: ".jpg?auto=format,compress&q=90&updated_at=1609438911&w=1000",
      cantidad: 1
    },
    {
      id: 17,
      title: "Camiseta Moderna Dama",
      price: 377,
      image: require('./images/ctm4.png'),
      category: "camiseta",
      img1: "https://stockx-360.imgix.net/Nike-Air-Rubber-Dunk-Off-White-UNC/Images/Nike-Air-Rubber-Dunk-Off-White-UNC/Lv2/img",
      img2: ".jpg?auto=format,compress&q=90&updated_at=1609438911&w=1000",
      cantidad: 1
    },
    {
      id: 18,
      title: "Camiseta Moderna Caballero",
      price: 377,
      image: require('./images/cth1.png'),
      category: "camiseta",
      img1: "https://stockx-360.imgix.net/Nike-Air-Rubber-Dunk-Off-White-UNC/Images/Nike-Air-Rubber-Dunk-Off-White-UNC/Lv2/img",
      img2: ".jpg?auto=format,compress&q=90&updated_at=1609438911&w=1000",
      cantidad: 1
    },
    {
      id: 19,
      title: "Camiseta Moderna Caballero",
      price: 377,
      image: require('./images/cth2.png'),
      category: "camiseta",
      img1: "https://stockx-360.imgix.net/Nike-Air-Rubber-Dunk-Off-White-UNC/Images/Nike-Air-Rubber-Dunk-Off-White-UNC/Lv2/img",
      img2: ".jpg?auto=format,compress&q=90&updated_at=1609438911&w=1000",
      cantidad: 1
    },
    {
      id: 20,
      title: "Camiseta Moderna Caballero",
      price: 377,
      image: require('./images/cth3.png'),
      category: "camiseta",
      img1: "https://stockx-360.imgix.net/Nike-Air-Rubber-Dunk-Off-White-UNC/Images/Nike-Air-Rubber-Dunk-Off-White-UNC/Lv2/img",
      img2: ".jpg?auto=format,compress&q=90&updated_at=1609438911&w=1000",
      cantidad: 1
    },
    {
      id: 21,
      title: "Sudadera Deportiva",
      price: 20,
      image: require('./images/sm1.png'),
      category: "sudadera",
      img1: "https://stockx-360.imgix.net/Nike-Air-Rubber-Dunk-Off-White-UNC/Images/Nike-Air-Rubber-Dunk-Off-White-UNC/Lv2/img",
      img2: ".jpg?auto=format,compress&q=90&updated_at=1609438911&w=1000",
      cantidad: 1
    },
    {
      id: 22,
      title: "Sudadera Deportiva",
      price: 20,
      image: require('./images/sm2.png'),
      category: "sudadera",
      img1: "https://stockx-360.imgix.net/Nike-Air-Rubber-Dunk-Off-White-UNC/Images/Nike-Air-Rubber-Dunk-Off-White-UNC/Lv2/img",
      img2: ".jpg?auto=format,compress&q=90&updated_at=1609438911&w=1000",
      cantidad: 1
    },
    {
      id: 23,
      title: "Sudadera Deportiva",
      price: 20,
      image: require('./images/sm3.png'),
      category: "sudadera",
      img1: "https://stockx-360.imgix.net/Nike-Air-Rubber-Dunk-Off-White-UNC/Images/Nike-Air-Rubber-Dunk-Off-White-UNC/Lv2/img",
      img2: ".jpg?auto=format,compress&q=90&updated_at=1609438911&w=1000",
      cantidad: 1
    },
    {
      id: 24,
      title: "Sudadera Deportiva",
      price: 20,
      image: require('./images/sh1.png'),
      category: "sudadera",
      img1: "https://stockx-360.imgix.net/Nike-Air-Rubber-Dunk-Off-White-UNC/Images/Nike-Air-Rubber-Dunk-Off-White-UNC/Lv2/img",
      img2: ".jpg?auto=format,compress&q=90&updated_at=1609438911&w=1000",
      cantidad: 1
    },
    {
      id: 25,
      title: "Sudadera Deportiva",
      price: 20,
      image: require('./images/sh2.png'),
      category: "sudadera",
      img1: "https://stockx-360.imgix.net/Nike-Air-Rubber-Dunk-Off-White-UNC/Images/Nike-Air-Rubber-Dunk-Off-White-UNC/Lv2/img",
      img2: ".jpg?auto=format,compress&q=90&updated_at=1609438911&w=1000",
      cantidad: 1
    },
    {
      id: 26,
      title: "Sudadera Deportiva",
      price: 20,
      image: require('./images/sh3.png'),
      category: "sudadera",
      img1: "https://stockx-360.imgix.net/Nike-Air-Rubber-Dunk-Off-White-UNC/Images/Nike-Air-Rubber-Dunk-Off-White-UNC/Lv2/img",
      img2: ".jpg?auto=format,compress&q=90&updated_at=1609438911&w=1000",
      cantidad: 1
    },

  ],
};

export default data;