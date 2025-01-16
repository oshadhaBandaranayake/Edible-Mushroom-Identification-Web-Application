export type ClassificationResponse = {
  class: string;
  message: string;
  confidence: number;
};

export type MushroomInfo = {
  image: string;
  title: string;
  description: string;
  recipesDescription: string;
  recipes: Array<{
    title: string;
    description: string;
  }>;
  nutritionDescription: string;
  nutritionList: Array<{
    title: string;
    description: string;
  }>;
};

export type Recepie = {
  title: string;
  image?: string;
  description: string;
  ingredients: string[];
  steps: string[];
};

export type EdibleResponse = {
  error: boolean;
  message: string;
  prediction: string;
  status: number;
};
