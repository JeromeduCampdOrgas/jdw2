<template>
  <div class="contenu">
    <div class="d-flex p-2" id="homePage">
      <div
        id="presentation"
        v-on:mouseover="mouseover"
        v-on:mouseleave="mouseleave"
      >
        <h1>Jérôme du Camp d'Orgas</h1>
        <p>Développeur Web Freelance / Full Stack</p>
      </div>
      <div id="accueilImg" class="accueilImg">
        <img
          id="accueil-image"
          src="../assets/images/ordi-calepin_retouche2.jpg"
          alt="développement web,Html5,CSS3,Vuejs,JavaScript"
        />
      </div>
    </div>
    <div id="about">
      <p id="apropos" @click="affichePres()">Qui suis-je?</p>
    </div>
    <div class="" id="maPresentation" v-if="visible" @click="affichePres()">
      <p>
        Après 22 ans dans le suivi de production, de modélisation, de
        dimensionnement d'activités diverses, de planification de création
        d'outils de suivi, de pilotage d'activité et d'analyse, j'ai décidé de
        mettre à votre disposition mon expérience et mes compétences à votre
        service.
      </p>
      <p>
        Mon quotidien, écouter, comprendre, analyser les besoins, chercher et
        trouver les solutions...en proposer.
      </p>
      <p>
        Dans mon ADN, toute demande s'étudie, s'analyse afin de fournir ce qui
        correspond à l'attente et toute production doit respecter le délai
        défini.
      </p>
      <p id = "proposition">Ce que je vous propose aujourd'hui: <br><br>
          <ul>
            <li>Comprendre votre activité</li>
            <li>Analyser votre besoin</li>
            <li>Adapter avec vous les solutions</li>
            <li>En partenaire, vous accompagner</li>
          </ul>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    affichePres: function () {
      this.visible = !this.visible;
    },
  },
};
</script>

<style lang="scss" scoped>
.d-flex {
  flex-direction: column;
  width: 100%;
  background: #fff;
  & #accueil-image {
    width: 100%;
    object-fit: cover;
  }

  & #presentation {
    margin: auto;
    animation: presentation;
    animation-duration: 2s;
  }
}
#accueilImg {
  animation: accueilImg;
  animation-duration: 2s;
}

#about {
  margin: 20px auto;
}
#apropos:hover {
  cursor: pointer;
  background: #4c74b4;
  color: #fff;
}

#maPresentation {
  width: 60%;
  margin: auto auto 20px auto;
  padding: 15px;
  text-align: left;
  text-indent: 5%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  animation: maPresentation 2s;
}

/**Media queries */

@media (min-width: 900px) {
  .d-flex {
    flex-direction: row;
  }
}
/**keyframes */
@keyframes presentation {
  0% {
    transform: translateX(-500px);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes accueilImg {
  0% {
    transform: translateX(500px);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes maPresentation {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>