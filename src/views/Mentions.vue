<template>
  <div class="content" id="mentions">
    <div class="mentions">
      <h1>Mentions Légales</h1>

      <p>
        Conformément aux dispositions des articles 6-III et 19 de la Loi n°
        2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique,
        dite L.C.E.N., nous portons à la connaissance des utilisateurs et
        visiteurs du site lbwebsite.fr, les informations suivantes :
      </p>

      <h2>EDITEUR</h2>
      <p>
        Le site jdw.fr est la propriété exclusive de Jérôme du Camp d'Orgas, qui
        l'édite.
      </p>
      <div class="adresse">
        <p><strong>Jérôme du Camp d'Orgas Développeur Freelance</strong></p>
        <p>Tél : 0638391732</p>
        <p>5 rue des près Michau</p>
        <p>37240 LIGUEIL</p>
      </div>
      <p>Siret:900 339 607 00013</p>

      <p>
        Adresse de courrier électronique :
        <strong>ducampdorgasjerome@gmail.com</strong>
      </p>
      <p>
        Directeur de la publication : <strong>Jérôme du Camp d'Orgas</strong>
      </p>
      <p>
        Contactez le responsable de la publication :
        <strong>ducampdorgasjerome@gmail.com</strong>
      </p>

      <h2>HEBERGEMENT</h2>
      <p>Le site est hébergé par ""</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang ="scss" scoped>
#mentions {
  display: flex;
  width: 100%;
}
.mentions {
  width: 50%;
  margin-top: 150px;
  margin-bottom: 120px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  & p {
    font-size: 1.3em;
  }
  & .adresse {
    margin: auto;
    width: 30%;
    border: 1px black solid;
    & p {
      line-height: 1;
    }
  }
}
@media (max-width: 568px) {
  #mentions {
    width: 95%;

    & .mentions {
      width: 100%;
      margin: auto;
      padding: 10px;
      line-height: 1;

      & .adresse {
        width: 100%;
        border: none;
        background: linear-gradient(to right, #bbb, #fff);
      }
    }
  }
}
</style>