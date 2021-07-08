<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="logo">
        <img id="logo" src="../assets/logo/Logo1_retouche.png" alt="" />
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
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <router-link to="/"><i class="fas fa-home"></i>Accueil</router-link>
          <router-link to="/services"
            ><i class="fas fa-tasks"></i>Services</router-link
          ><!---->
          <router-link to=""
            ><i class="fab fa-buffer"></i>Réalisations</router-link
          ><!--/realisations-->
          <router-link to=""><i class="fas fa-barcode"></i>Tarifs</router-link
          ><!--/tarifs-->
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
.collapse {
  & a {
    color: #4c74b4;
    margin: 10px;
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