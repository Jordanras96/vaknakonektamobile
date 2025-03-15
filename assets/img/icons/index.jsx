// assets/index.js

import medal from "./medal-sherif-badge-2-svgrepo-com.svg";
import piggy from "./piggy-bank-svgrepo-com.svg";
import leaf from "./leaf-fluttering-in-wind-svgrepo-com.svg";
import diet from "./diet-svgrepo-com.svg";
import facebook from "./facebook-boxed-svgrepo-com.svg";
import instagram from "./instagram-svgrepo-com.svg";
import twitter from "./twitter-svgrepo-com.svg";
import tiktok from "./tiktok-outline-svgrepo-com.svg";
import search from "./search-alt-2-svgrepo-com.svg";
import cart from "./cart-large-2-svgrepo-com.svg"

const getIconsPaths = () => ({
  medal,
  piggy,
  leaf,
  diet,
  facebook,
  instagram,
  twitter,
  tiktok,
  search,
  cart
});

export const getIconsPathsByName = (name) => {
  const images = getIconsPaths();
  return images[name] || null;
};
