<template>
  <div id="header">
    <div class="container">
      <div class="logo">
        <img id="logo" src="../assets/logo/Logo1_retouche.png" alt="" />
      </div>
      <div id="menu" class="menu">
        <button id="menu-mobile" class="menu-mobile" @mouseover="menuMobile()">
          <i class="fa fa-bars"></i>
        </button>
        <ul id="bloc-menu">
          <li><a href="/">Accueil</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/realisations">Réalisations</a></li>
          <li><a href="/tarifs">Tarifs</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
</style>