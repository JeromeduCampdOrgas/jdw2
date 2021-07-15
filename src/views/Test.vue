<template>
  <h1>test</h1>
  <button @click="createTest">Click</button>
  <div class="contenu d-flex" id="contenu"></div>
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
          techno: "html5, css3, Sass, MySql",
          complementText:
            "Un site à votre image vous permettant de gérer la mise en ligne de vos produits. Interface sécurisée de mise à jour, création d'une base de données",
          page: "/seo",
        },
      ],
    };
  },
  methods: {
    createTest: function () {
      for (let i = 0; i < this.services.length; i++) {
        let contenu = document.getElementById("contenu");
        let card = document.createElement("div");
        let cardImg = document.createElement("div");
        let imgSrc = document.createElement("img");
        let imgLien = document.createElement("a");
        let mask = document.createElement("div");
        let cardBody = document.createElement("div");
        let cardTitle = document.createElement("h5");
        let cardText = document.createElement("p");
        let cardText2 = document.createElement("p");
        let plus = document.createElement("a");

        //Création de la card
        contenu.appendChild(card);
        card.className = "card";
        //Animation
        card.animate(
          [{ transform: "rotateY(-90deg)" }, { transform: "rotateY(0deg" }],
          {
            duration: 1000,
            delay: i * 250,
          }
        );
        //création de l'image
        card.appendChild(cardImg);
        cardImg.className = "bg-image hover-overlay ripple";
        cardImg.appendChild(imgSrc);
        cardImg.appendChild(imgLien);
        imgSrc.setAttribute("src", "" + this.services[i].icone + "");
        imgSrc.className = "img-fluid";
        imgLien.setAttribute("href", "#");
        //création du mask
        imgLien.appendChild(mask);
        mask.className = "mask";
        //creation contenuCard
        card.appendChild(cardBody);
        cardBody.className = "card-body";
        cardBody.appendChild(cardTitle);
        cardTitle.className = "card-title";
        cardTitle.innerHTML = "" + this.services[i].prestation + "";
        cardBody.appendChild(cardText);
        cardText.className = "card-text";
        cardText.innerHTML = "" + this.services[i].techno + "";
        cardBody.appendChild(cardText2);
        cardText2.className = "card-text";
        cardText2.innerHTML = "" + this.services[i].complementText + "";
        cardBody.appendChild(plus);
        plus.className = "btn btn-primary";
        plus.innerHTML = "En savoir plus";
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
    animation: animCard 2s;
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
  }
}

@keyframes animCard {
  0% {
    transform: rotateY(-90deg);
  }
  100% {
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
      margin: 60px 30px;
      width: 26%;
    }
  }
}
</style>