<template>
  <div class="service">
    <div class="col-12"><h1>Site personnalisé multipages</h1></div>
    <div class="d-flex">
      <div class="img-container d-flex">
        <img
          class="imgcommerce"
          src="../assets/realisations/capture_orinoco.png"
          frameborder="0"
        />
      </div>
      <div class="detail">
        <h2>Le commerce en ligne</h2>
        <p>
          Le commerce en ligne a connu ces dernières années une forte évolution.
          Exposez ces produits, laissez le visiteur faire son choix.
        </p>
        <p>
          Une fois le produit choisi et customisé, le visiteur le dépose dans
          son panier, et au travers d'un formulaire valide ses coordonnées et
          son achat.
        </p>
        <p>
          Nous décidons ensemble de ce que vous souhaitez; le suivi de stocks,
          le réassort, le suivi des commandes...
        </p>
        .
        <p>
          Une fois les décisions ergonomiques et technologiques arrêtées...à moi
          de "jouer".
        </p>
      </div>
    </div>
    <div id="tarif">
      <p>A partir de 2 500€</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Ecommerce",
};
</script>
<style lang="scss" scoped>
.d-flex {
  flex-direction: column;
  justify-content: space-between;
  margin: 30px auto;
  flex-wrap: wrap;
}
.service {
  margin: 30px auto;
}
.img-container {
  width: 100%;
  & .imgcommerce {
    width: 95%;
    object-fit: cover;
  }
}
</style>
