import tamarin from "./tamarin.png";
import pasteque from "./pasteque.png";
import choux_Rouge from "./choux-rouge.png";
import mandarine from "./mandarine.png";
import raisin from "./raisin.png";
import fraise from "./fraise.png";
import carotte from "./carotte.png";
import banane from "./banane.png";
import betterave from "./betterave.png";
import orange from "./orange.png"
import patate_douce from "./patateDouce.png"
import radis from "./radis.png"
import poivron_jaune from "./poivron_jaune.png"
import citron from "./citron.png"
import litchii from "./litchii.png"
import patate from "./patate.png"
import choux_fleur from "./choux_fleur.png"
import oignon from "./oignon.png"

export const getImagePaths = () => ({
  tamarin,
  pasteque,
  choux_Rouge,
  mandarine,
  raisin,
  fraise,
  carotte,
  banane,
  betterave,
  orange,
  patate_douce,
  radis,
  poivron_jaune,
  citron,
  litchii,
  patate,
  oignon,
  choux_fleur,
});

export const getImagePathByName = (name) => {
  const images = getImagePaths();
  return images[name] || null;
};
