export interface Recipe {
  name: string;
  artist: string;
  cover: string;
}

export type NavItems =
  | "cookNow"
  | "browse"
  | "random"
  | "cookbooks"
  | "recipes"
  | "madeForYou"
  | "chefs";
