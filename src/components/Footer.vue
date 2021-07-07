<template>
  <!-- Footer -->
  <footer class="bg-dark text-center text-white">
    <!-- Grid container -->
    <div class="container p-4 pb-0">
      <!-- Section: Social media -->
      <section class="mb-4">
        <!-- Linkedin -->
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="https://www.linkedin.com/in/jerome-du-camp-d-orgas-63830689"
          role="button"
          ><i class="fab fa-linkedin-in"></i
        ></a>

        <!-- Github -->
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
          ><i class="fab fa-github"></i
        ></a>
      </section>
      <!-- Section: Social media -->
    </div>
    <!-- Grid container -->
    <div class="footer" id="footerContact">
      <button
        id="btn"
        class="btn"
        v-on:mouseover="buttonHover()"
        v-on:mouseleave="buttonLeave()"
        @click="btnClick()"
      >
        Contactez-moi
      </button>
    </div>
    <div class="mentions">
      <ul>
        <li>
          <a href="">Mentions légales</a>
        </li>
        <li>
          <a href="">CGV / CGU</a>
        </li>
        <li>
          <a href="">Politique de confidentialité</a>
        </li>
      </ul>
    </div>

    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
      © 2021 Copyright:
      <a class="text-white" href="#">JdW</a>
    </div>
    <!-- Copyright -->
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.mentions {
  margin-top: 30px;
  & ul {
    list-style-type: none;
  }
}

@media (min-width: 667px) {
  .mentions {
    & ul {
      display: flex;
      justify-content: space-around;
    }
  }
}
</style>