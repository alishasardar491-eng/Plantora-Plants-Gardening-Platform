import monstera from "../assets/plants/monstera.jpg"
import snakePlant from "../assets/plants/snake-plant.jpg"
import peaceLily from "../assets/plants/peace-lily.jpg"
import aloeVera from "../assets/plants/aloe-vera.jpg"

const plants = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    category: "Indoor Plants",
    price: 2800,
    rating: 4.9,
    environment: "Bright Indoor",
    light: "Bright, indirect light",
    watering: "Once a week",
    image: monstera,
    description:
      "A beautiful tropical houseplant known for its large split leaves. Monstera adds a fresh and elegant touch to any indoor space.",
  },

  {
    id: 2,
    name: "Snake Plant",
    category: "Indoor Plants",
    price: 1800,
    rating: 4.8,
    environment: "Low Light",
    light: "Low to bright light",
    watering: "Every 2–3 weeks",
    image: snakePlant,
    description:
      "A hardy and elegant indoor plant that is perfect for beginners. Snake plants are easy to care for and adapt well to different spaces.",
  },

  {
    id: 3,
    name: "Peace Lily",
    category: "Flowering Plants",
    price: 2200,
    rating: 4.7,
    environment: "Indoor",
    light: "Medium, indirect light",
    watering: "Once a week",
    image: peaceLily,
    description:
      "A graceful flowering plant with lush green leaves and beautiful white blooms. Peace lilies bring a calm and refreshing feeling to your home.",
  },

  {
    id: 4,
    name: "Aloe Vera",
    category: "Succulents",
    price: 1500,
    rating: 4.6,
    environment: "Bright Indoor",
    light: "Bright, indirect light",
    watering: "Every 2–3 weeks",
    image: aloeVera,
    description:
      "A low-maintenance succulent with thick green leaves. Aloe Vera is an excellent choice for sunny spaces and beginner plant lovers.",
  },
]

export default plants