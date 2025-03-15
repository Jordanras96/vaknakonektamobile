import travailleurs_campagne_ensemble_terrain from './travailleurs_campagne_ensemble_terrain.png'
import orange_bienfait from './orange_bienfait.png'
import alimentation_saine_legumes_fruits from './alimentation_saine_legumes_fruits.png'
import salon_agro from './salon_agro.png'
import marche_demande_produits from './marche_demande_produits.png'
import bienfaits_biodiversite_ecosystemes_agricoles from './biodiversite_agricoles.jpg'
import nouvelles_avancees_technologiques_agriculture from './avancees_technologiques_agricultures.jpeg'
import impact_positif_agricultures from './impact_positif_agricultures.jpg'
import revolution_energie_renouvelable from './revolution_energie_renouvelable.jpg'
import permaculture_durable from './permaculture_durable.png'
import biodiversite_agricoles from './biodiversite_agricoles.jpg'
import FID_formation from './FID_formation.png'


const getBlogImagePaths = () => ({
  travailleurs_campagne_ensemble_terrain,
  orange_bienfait,
  alimentation_saine_legumes_fruits,
  salon_agro,
  marche_demande_produits,
  bienfaits_biodiversite_ecosystemes_agricoles,
  nouvelles_avancees_technologiques_agriculture,
  impact_positif_agricultures,
  revolution_energie_renouvelable,
  permaculture_durable,
  biodiversite_agricoles,
  FID_formation
});

export const getBlogImagePathByName = (name) => {
    const images = getBlogImagePaths();
    return images[name] || null;
}