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
          <ul class="navbar-nav mb-2">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"
                >Accueil</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Tarifs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Réalisations</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
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
</style>