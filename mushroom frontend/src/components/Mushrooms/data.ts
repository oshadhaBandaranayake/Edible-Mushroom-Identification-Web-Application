import img1 from "../../assets/img1.jpeg";
import img2 from "../../assets/img2.webp";
import { MushroomInfo } from "../../types";

const data: MushroomInfo[] = [
  {
    image: img1,
    title: "Oyster Mushrooms",
    description:
      "Oyster mushrooms, scientifically known as Pleurotus ostreatus, are a popular edible mushroom species known for their delicate flavor and versatility in cooking. They are often used in various cuisines worldwide and are recognized for their nutritional value.",
    recipesDescription:
      "Oyster mushrooms can be used in a variety of delicious recipes. Here are a few popular ones:",
    recipes: [
      {
        title: "Stir-Fried Oyster Mushrooms",
        description:
          "In a hot pan, sauté oyster mushrooms with garlic, ginger, and soy sauce for a quick and flavorful dish.",
      },
      {
        title: "Creamy Mushroom Risotto",
        description:
          " Incorporate oyster mushrooms into a creamy risotto for a rich and satisfying meal.",
      },
      {
        title: "Mushroom Soup",
        description:
          "Oyster mushrooms add a wonderful earthy flavor to soups and can be used in cream-based or broth-based mushroom soups.",
      },
      {
        title: "Mushroom Tacos",
        description:
          "Create a vegetarian taco filling by sautéing oyster mushrooms with spices and serving them in tortillas with toppings.",
      },
    ],
    nutritionDescription:
      "Oyster mushrooms are not only valued for their culinary uses but also for their health benefits. Here's why they are important:",
    nutritionList: [
      {
        title: "Nutrient-Rich",
        description:
          "Oyster mushrooms are a good source of vitamins (B vitamins, vitamin D), minerals (iron, potassium), and dietary fiber.",
      },
      {
        title: "Low in Calories",
        description:
          "They are low in calories and fat, making them a healthy addition to a balanced diet.",
      },
      {
        title: "Antioxidant Properties",
        description:
          "Oyster mushrooms contain antioxidants that help protect the body against free radicals.",
      },
      {
        title: "Immune Support",
        description:
          "Some studies suggest that oyster mushrooms may have immune-boosting properties.",
      },
    ],
  },
  {
    image: img2,
    title: "Abalone Mushrooms",
    description:
      "Abalone mushrooms, also known as Pleurotus cystidiosus, have a unique flavor and texture. They are often used in gourmet dishes and can be sautéed or grilled.",
    recipesDescription:
      "Abalone mushrooms can be incorporated into various culinary creations. Here are some delectable recipes:",
    recipes: [
      {
        title: "Abalone Mushroom Risotto",
        description:
          "Create a luxurious mushroom risotto by adding abalone mushrooms for a gourmet touch.",
      },
      {
        title: "Grilled Abalone Mushrooms",
        description:
          "Grill abalone mushrooms with olive oil, garlic, and herbs for a savory side dish or appetizer.",
      },
      {
        title: "Mushroom Medley Pasta",
        description:
          "Combine abalone mushrooms with other mushroom varieties in a creamy pasta sauce for a rich and satisfying meal.",
      },
      {
        title: "Abalone Mushroom Stir-Fry",
        description:
          "Incorporate abalone mushrooms into a vegetable stir-fry for a unique and flavorful dish.",
      },
    ],
    nutritionDescription:
      "Abalone mushrooms offer not only culinary delights but also health benefits:",
    nutritionList: [
      {
        title: "Rich in Nutrients",
        description:
          "Abalone mushrooms provide essential vitamins, minerals, and antioxidants, making them a nutritious choice.",
      },
      {
        title: "Flavor and Texture",
        description:
          "Their unique flavor and meaty texture make them a sought-after ingredient in gourmet cuisine.",
      },
      {
        title: "Versatile",
        description:
          "Abalone mushrooms can be used in various dishes, adding depth and flavor to your cooking.",
      },
    ],
  },
];

export default data;
