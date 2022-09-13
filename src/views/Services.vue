<template>
  <h1>Propositions de services</h1>
  <transition name="slide-fade">
    <div class="contenu d-flex" id="contenu">
      <div class="card" v-for="service in services" v-bind:key="service.index">
        <div
          class="bg-image hover-overlay ripple"
          data-mdb-ripple-color="light"
        >
          <img
            v-bind:src="service.icone"
            class="img-fluid"
            alt="service.prestation"
          />
          <a v-bind:href="service.page" aria-hidden="true">
            <div
              class="mask"
              style="background-color: rgba(251, 251, 251, 0.15)"
            ></div>
            <span class="sr-only">Search</span>
          </a>
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ service.prestation }}</h5>
          <p class="card-text">
            {{ service.techno }}
          </p>
          <p class="card-text">
            {{ service.complementText }}
          </p>
          <a v-bind:href="service.page" class="btn btn-primary"
            >En savoir plus</a
          ><!--@click="detailService"-->
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          prestation: "Site personnalisé monopage",
          icone: require("../assets/realisations/reserviamobile2.png"),
          techno: "HTML5, CSS3",
          complementText:
            "Un site à votre image ne nécessitant pas de mises à jour fréquentes, pas de menu de navigation ou de base de données",
          page: "/monopage",
        },
        {
          prestation: "Site personnalisé multipages",
          icone: require("../assets/realisations/Ohmyfoodmobile2.png"),
          techno: "html5, css3,Sass",
          complementText:
            "Un site à votre image ne nécessitant pas de mises à jour fréquentes, avec un menu de navigation, sans base de données",
          page: "/multipage",
        },
        {
          prestation: "Site e-commerce",
          icone: require("../assets/realisations/orinocomobile2.png"),
          techno: "html5, css3, Sass, MongoDb",
          complementText:
            "Un site à votre image vous permettant de gérer la mise en ligne de vos produits. Interface sécurisée de mise à jour, création d'une base de données",
          page: "/ecommerce",
        },
        {
          prestation: "Application Web",
          icone: require("../assets/realisations/groupomaniamobile.png"),
          techno: "html5, css3, Sass, MySql",
          complementText:
            "Un site à votre image vous permettant de gérer la mise en ligne de vos produits. Interface sécurisée de mise à jour, création d'une base de données",
          page: "/api",
        },
        {
          prestation: "Optimisation / Référencement",
          icone: require("../assets/realisations/seo.png"),
          complementText:
            "Après un audit des performances de votre site, j'apporte les corrections pour améliorer votre référencement naturel.",
          page: "/seo",
        },
      ],
    };
  },
  methods: {
    detailService: function() {
      var parent = document.getElementById("contenu");
      let serviceArray = this.services;
      for (var i = 0, len = parent.children.length; i < len; i++) {
        (function(index) {
          parent.children[i].onclick = function() {
            location.replace(serviceArray[index].page);
          };
        })(i);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.contenu {
  justify-content: space-around;
  flex-wrap: wrap;
  width: 95%;
  margin: auto;
  & .card {
    height: 550px;
    width: 100%;
    margin: 60px auto;
    border: none;
    animation: animCard 2s 0ms;
    & .bg-image {
      border-radius: 25px;
      border: none;
      & .img-fluid {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
          rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
          rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        border-radius: 25px;
      }
    }
    & .btn-primary {
      background-color: #0057a3;
    }
  }
}

@keyframes animCard {
  0% {
    opacity: 1;
    transform: rotateY(-90deg);
  }
  100% {
    opacity: 1;
    transform: rotateY(0deg);
  }
}

/**Media queries */

@media (min-width: 667px) {
  .d-flex {
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    & .card {
      margin: 100px auto;
      width: 35%;
    }
  }
}
</style>
