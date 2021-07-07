<template>
  <div class="service">
    <div class="col-12"><h1>Application Web</h1></div>
    <div class="d-flex">
      <div class="iframe-container d-flex">
        <img
          class="iframe"
          src="../assets/realisations/groupomaniamobile.png"
          frameborder="0"
        />
      </div>
      <div class="detail">
        <h2>Application Web (API)</h2>
        <p>
          Les applications web ouvrent des perspectives d'utilisation du web.
        </p>
        <p>
          Appelée API REST (ou interface de programmation d'application), c'est
          une solution informatique qui permet à des applications de communiquer
          entre elles et de s'échanger mutuellement des services ou des données.
          Il s'agit d'un ensemble de fonctions qui facilitent l'accès aux
          services d'une application.
        </p>
        <p>
          Ici, un réseau social, dans lequel les personnes inscrites peuvent
          s'échanger des commenrtaires, des photos...
        </p>
        <p>
          Mais on peut imaginer, créer une application e-commerce, ou un outil
          spécifique répondant à un besoin précis dans une entreprise.
        </p>
        <p>
          Avant de vous lancer, nous échangeons sur vos besoins, vos idées et
          une fois le cahier des charges établis...c'est à moi de "jouer".
        </p>
      </div>
    </div>
    <div id="tarif">
      <p>A partir de 3 000€</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Application",
};
</script>
<style lang="scss" scoped>
.iframe-container {
  position: relative;
  margin: 20px auto;
  overflow: hidden;
  width: 85%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  border-radius: 25px;
  /*padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625);*/
}
.iframe {
  margin: 10px;
  width: 95%;
  height: 600px;
}

@media (min-width: 667px) {
  .iframe-container {
    width: 20%;
  }
  .detail {
    width: 55%;
  }
}
.d-flex {
  flex-direction: row;
}
</style>
