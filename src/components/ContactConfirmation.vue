<template>
  <div class="bloc-modale">
    <!--v-show="revele"-->
    <div @click="toggleModale" class="overlay"></div>
    <div class="modale card">
      <div @click="toggleModale" class="btn-modale btn btn-danger">X</div>
      <h2>Confirmation d'envoi</h2>

      <p id="confirmation">Votre mail a bien été envoyé.</p>
      <p>
        Je vous remercie de l'intérêt que vous portez à mon travail, je vous
        répondrai <br />
        dans les meilleurs délais, et au plus tard d'ici 48 heures.
      </p>
      <p>Bien cordialement</p>
      <p>Jérôme du Camp d'Orgas</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Confirmation",
  props: ["revele", "toggleModale"],
};
</script>

<style>
.bloc-modale {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.overlay {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.card {
  margin: auto;
  font-weight: bold;
  background: #fff;
}
</style>