import img1 from "../../assets/img3.jpg";
import img2 from "../../assets/img4.jpg";
import img3 from "../../assets/img5.jpg";
import img4 from "../../assets/img6.jpg";
import { Recepie } from "../../types";

const recepies: Recepie[] = [
  {
    image: img1,
    title: "Stir-Fried Oyster Mushrooms",
    description:
      "Stir-fried oyster mushrooms are a quick and flavorful dish with the unique taste of oyster mushrooms.",
    ingredients: [
      "400g Oyster Mushroom, ends removed and split into small pieces",
      "1 and ½ tbsp. Oyster Sauce",
      "1 teaspoon Dark Soy Sauce",
      "1 thumb Ginger, shredded",
      "6 Green Onions, white and green parts separated, cut into 1-inch sections",
      "2 tbsp. Cooking Oil",
      "¼ tsp. Ground Szechuan Peppercorn or Black Pepper",
      "Coriander Stems for decoration",
    ],
    steps: [
      "Remove the tough ends of oyster mushrooms and split them into small pieces. Quickly wash and squeeze out excess water or skip washing if the mushrooms are clean enough.",
      "Heat up oil in a wok over medium heat. Fry the white parts of green onions and shredded ginger until aromatic.",
      "Add the oyster mushrooms to the wok. Add oyster sauce and dark soy sauce. Allow the mushrooms to cook without moving them too frequently. The goal is to remove excess water and concentrate the flavors from the oyster sauce. Move them when they become sticky to the wok. This process should last for 1 to 2 minutes until the mushrooms are well darkened.",
      "Sprinkle Szechuan peppercorn powder or ground black pepper over the mushrooms.",
      "Serve hot, garnished with green parts of green onions and coriander stems if desired.",
    ],
  },
  {
    image: img2,
    title: "Creamy Mushroom Risotto",
    description:
      "Creamy mushroom risotto is a rich and satisfying dish that combines the delicate flavor of oyster mushrooms with Arborio rice. It's perfect for a comforting meal.",
    ingredients: [
      "1 tablespoon Olive Oil",
      "12 ounces Mushrooms (any variety, thinly sliced)",
      "¼ cup Yellow Onion (chopped)",
      "2 tablespoons Salted Butter",
      "1 cup Arborio Rice",
      "½ cup White Wine (or extra broth)",
      "3 cups Chicken Broth (divided, or mushroom broth)",
      "⅓ cup Parmesan Cheese (freshly grated)",
      "Fresh Parsley (for garnish, optional)",
    ],
    steps: [
      "Warm the broth in the microwave or bring to a low simmer in a saucepan.",
      "Add olive oil and mushrooms to a pan over medium-high heat. Cook until mushrooms are softened, about 5 minutes. Set aside.",
      "Add butter and onions to a saucepan, cook until tender, about 2 minutes.",
      "Stir in Arborio rice and cook for 1-2 minutes until lightly toasted.",
      "Pour in white wine (or extra broth) and cook until mostly absorbed, stirring constantly.",
      "Begin adding warm chicken broth, one ladle at a time, stirring constantly and allowing the liquid to absorb before adding more. Continue until the rice is creamy and cooked to your desired doneness (about 18-20 minutes).",
      "Stir in the cooked mushrooms and Parmesan cheese until well combined.",
      "Serve hot, garnished with fresh parsley if desired.",
    ],
  },
  {
    image: img3,
    title: "Grilled Abalone Mushrooms",
    description:
      "Grilled Abalone mushrooms are a delightful and healthy option for a barbecue or outdoor gathering.",
    ingredients: [
      "400g Abalone Mushrooms",
      "2 tbsp. Olive Oil",
      "2 cloves Garlic, minced",
      "1 Lemon, juiced",
      "Salt and Pepper to taste",
      "Fresh Parsley for garnish (optional)",
    ],
    steps: [
      "Preheat your grill to medium-high heat.",
      "Clean the abalone mushrooms and remove any tough ends. If they are large, you can cut them into smaller pieces for even grilling.",
      "In a bowl, combine olive oil, minced garlic, lemon juice, salt, and pepper. Mix well to make the marinade.",
      "Brush the mushroom pieces with the marinade, ensuring they are well coated.",
      "Place the mushrooms on the grill and cook for about 5-7 minutes on each side or until they have grill marks and are tender.",
      "Remove the grilled mushrooms from the grill and garnish with fresh parsley if desired.",
      "Serve hot and enjoy your grilled oyster mushrooms!",
    ],
  },
  {
    image: img4,
    title: "Abalone Mushroom Risotto",
    description:
      "Abalone mushroom risotto is a creamy and flavorful dish that showcases the unique taste and texture of abalone mushrooms.",
    ingredients: [
      "1 tablespoon Olive Oil",
      "12 ounces Abalone Mushrooms (thinly sliced)",
      "¼ cup Yellow Onion (chopped)",
      "2 tablespoons Salted Butter",
      "1 cup Arborio Rice",
      "½ cup White Wine (or extra broth)",
      "3 cups Chicken Broth (divided, or mushroom broth)",
      "⅓ cup Parmesan Cheese (freshly grated)",
      "Fresh Parsley for garnish (optional)",
    ],
    steps: [
      "Warm the broth in the microwave or bring it to a low simmer in a saucepan.",
      "Add olive oil and sliced abalone mushrooms to a pan over medium-high heat. Cook until mushrooms are softened, about 5 minutes. Set aside.",
      "In a separate saucepan, add salted butter and chopped yellow onions. Cook until the onions are tender.",
      "Stir in Arborio rice and cook for a couple of minutes until the rice becomes translucent around the edges.",
      "Pour in the white wine (or extra broth) and cook until it is mostly absorbed by the rice.",
      "Begin adding the warm chicken broth (or mushroom broth) one ladle at a time. Stir continuously and allow the liquid to be absorbed before adding more. Continue this process until the rice is creamy and cooked to your desired consistency.",
      "Stir in the cooked abalone mushrooms and freshly grated Parmesan cheese. Cook for an additional 2-3 minutes until everything is well combined and creamy.",
      "Serve hot, garnished with fresh parsley if desired. Enjoy your delicious Abalone Mushroom Risotto!",
    ],
  },
];

export default recepies;
