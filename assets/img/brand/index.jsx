import HBimg from "./banner-image.png";
import logo from "./Vakna_Kônekta-logox6.png";
import logoAlt from "./logo_alt.svg"

const getBrandPaths = () => ({
  HBimg,
  logo,
  logoAlt
});

export const getBrandPathsByName = (name) => {
  const images = getBrandPaths();
  return images[name] || null;
};
