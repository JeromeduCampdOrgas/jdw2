<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="logo">
        <router-link to="/">
          <img id="logo" src="../assets/logo/Logo1_retouche.png" alt=""
        /></router-link>
      </div>
      <div id="menu">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="mobile-menu navbar-collapse" id="navbarSupportedContent">
          <router-link to="/"><i class="fas fa-home"></i>Accueil</router-link>
          <router-link to="/services"
            ><i class="fas fa-tasks"></i>Services</router-link
          >
          <!--/realisations-->
          <router-link to="/realisations"
            ><i class="fab fa-buffer"></i>Réalisations</router-link
          >
          <!--/tarifs-->
          <router-link to="/tarifs"
            ><i class="fas fa-barcode"></i>Tarifs</router-link
          >
          <!--/contact-->
          <router-link to="/contact"
            ><i class="fas fa-id-card"></i>Contact</router-link
          ><!--/contact-->
        </div>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
#logo {
  height: 30px;
  margin: auto;
}
button {
  margin: 26px;
}
.mobile-menu {
  & a {
    color: #334c7a;
    margin: 10px;
    font-weight: bold;
    display: block;
    text-align: left;
    & i {
      margin: 5px;
    }
  }

  & a:hover {
    color: #04a4f4;
    transform: scale(1.2);
  }
}
</style>
