<template>
  <div class="service">
    <div class="col-12"><h1>Site personnalisé monopage</h1></div>
    <div class="d-flex">
      <div class="iframe-container d-flex">
        <iframe
          class="iframe"
          src="https://jeromeducampdorgas.github.io/Reservia/"
          frameborder="0"
        ></iframe>
      </div>
      <div class="detail">
        <h2>Pourquoi un site monopage?</h2>
        <p>
          Vous voulez faire connaître, attirer des regards sur votre activité.
          Un peu à la manière d'une devanture de commerce, vous exposez vos
          propositions et donner la chance à une population élargie ou même en
          local, de vous situer, de vous contacter.
        </p>

        <p>
          Vous bénéficiez d'un menu simple qui ne vous renvoie pas vers d'autres
          pages, mais vous redirige vers des rubriques, sur la même page.
        </p>
        <p>
          Un peu à la manière de l'exemple, les visiteurs ont la possibilité
          d'utiliser le menu simplifié qui les emmène sur chaque rubrique de
          votre page, ou de faire défiler et ainsi prendre connaissance de tout
          ce que vous proposez.
        </p>
        <p>
          Tout en bas de votre page, vous pouvez y positionner votre adresse,
          les moyens de contact, les conditions de prestations, des liens ves
          vos partenaires.
        </p>
        <p>
          Avant de vous lancer, nous échangeons sur vos besoins, vos idées et
          une fois le cahier des charges établis...c'est à moi de "jouer".
        </p>
      </div>
    </div>
    <div id="tarif">
      <p>A partir de 600€</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Monopage",
};
</script>

<style lang="scss">
.d-flex {
  flex-direction: column;
  justify-content: space-between;
  margin: 30px auto;
  flex-wrap: wrap;
}
.service {
  margin: 30px auto;
}
.iframe-container {
  position: relative;
  margin: 20px auto;
  overflow: hidden;
  width: 95%;
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
.detail {
  position: relative;

  margin: auto;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  border-radius: 25px;

  & h2 {
    margin-bottom: 20px;
  }
  & p {
    text-align: left;
    text-indent: 5%;
  }
}
#tarif {
  /*position: relative;*/
  color: #fff;
  font-weight: bold;
  font-size: 1.5em;
  width: 90%;
  height: 50px;
  line-height: 50px;
  margin: auto;
  background: grey;
}
/**Media queries */

@media (min-width: 667px) {
  .iframe-container {
    width: 30%;
  }
  .detail {
    width: 45%;
  }
}
.d-flex {
  flex-direction: row;
}
/*.iframe-container {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 300px;
    padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625);*/
/* }*/

/*iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
}*/
</style>