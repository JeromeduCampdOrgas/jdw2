🧠
<template>
  <h1>Tarifs</h1>
  <table class="table__spec">
    <thead>
      <tr id="entete">
        <td></td>
        <td>Site monopage</td>
        <td>Site multipages</td>
        <td>Site e-commerce</td>
        <td>Application web</td>
      </tr>
      <!--<i class="fas fa-check" aria-hidden="true"></i>-->
      <!--<i class="fas fa-times" aria-hidden="true"></i>-->
      <tr>
        <td>Création ou récupération de votre nom de domaine</td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
      </tr>
      <tr>
        <td>Aide à la création ou application de votre charte graphique</td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
      </tr>
      <tr>
        <td>Création d'une maquette avant validation</td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
      </tr>
      <tr>
        <td>Animations à la demande</td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
      </tr>
      <tr>
        <td>Site responsive (mobile, tablette, desktop)</td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
      </tr>
      <tr>
        <td>Rédaction de contenu</td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
      </tr>
      <tr>
        <td>Optimisation SEO</td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
      </tr>
      <tr>
        <td>Session de prise en main</td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
      </tr>
      <tr>
        <td>Mentions légales, politique de confidentialité</td>
        <td><i class="fas fa-times" aria-hidden="true"></i></td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
      </tr>
      <tr>
        <td>Validation client et retouches</td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
      </tr>
      <tr>
        <td>Sur devis: création du contenu des pages (photos, vidéos...)</td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
      </tr>
      <tr>
        <td>Application monopage et transitions dynamiques</td>
        <td><i class="fas fa-times" aria-hidden="true"></i></td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
        <td><i class="fas fa-times" aria-hidden="true"></i></td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
      </tr>
      <tr>
        <td>Back office pour gérer votre blog</td>
        <td><i class="fas fa-times" aria-hidden="true"></i></td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
        <td><i class="fas fa-times" aria-hidden="true"></i></td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
      </tr>
      <tr>
        <td>Rédaction des fiches produit</td>
        <td><i class="fas fa-times" aria-hidden="true"></i></td>
        <td><i class="fas fa-times" aria-hidden="true"></i></td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
        <td><i class="fas fa-times" aria-hidden="true"></i></td>
      </tr>
      <tr>
        <td>
          Back office de gestion de vos ventes en ligne (base client, catalogue,
          produits, stocks, livraison)
        </td>
        <td><i class="fas fa-times" aria-hidden="true"></i></td>
        <td><i class="fas fa-times" aria-hidden="true"></i></td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
        <td><i class="fas fa-check" aria-hidden="true"></i></td>
      </tr>
      <tr id="tarifs">
        <td>TARIFS</td>
        <td>à partir de 900 € HT</td>
        <td>à partir de 1 500€ HT</td>
        <td>à partir de 2 500€ HT</td>
        <td>à partir de 3 000€ HT</td>
      </tr>
    </thead>
  </table>
  <p>Tarif Journalier Moyen: 250€ HT</p>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.table__spec {
  width: 100%;
  margin: 30px 0;
  font-size: 0.9em;

  & thead {
    & #entete {
      background: #4c74b4;
      color: #fff;
    }
    & td {
      min-width: 45px;
      max-width: 45px;
      padding: 5px;
      border-bottom: 1px #4c74b4 solid;
    }
  }
}
#tarifs {
  background: #4c74b4;
  color: #fff;
}
.fa-check {
  color: greenyellow;
}
.fa-times {
  color: blue;
}

@media (min-width: 900px) {
  .table__spec {
    width: 70%;
    margin: 30px auto;
    font-size: 0.9em;
  }
}
</style>
