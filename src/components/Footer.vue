<template>
  <!-- Footer -->
  <footer class="bg-dark text-center text-white" id="footer">
    <!-- Grid container -->
    <div class="container p-4 pb-0">
      <!-- Section: Social media -->
      <section class="mb-4">
        <!-- Linkedin -->
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="https://www.linkedin.com/in/jerome-du-camp-d-orgas-63830689"
          role="button"
          alt="linkedin"
          ><i class="fab fa-linkedin-in" aria-hidden="true"></i
          ><span class="sr-only">Linkedin</span></a
        >

        <!-- Github -->
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="https://github.com/JeromeduCampdOrgas"
          role="button"
          alt="github"
          ><i class="fab fa-github" aria-hidden="true"></i
          ><span class="sr-only">Github</span></a
        >
        <!-- Facebook -->
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="https://www.facebook.com/jdw37"
          role="button"
          alt="facebook"
          ><i class="fab fa-facebook" aria-hidden="true"></i
          ><span class="sr-only">Facebook</span></a
        >
      </section>

      <!-- Section: Social media -->
    </div>
    <!-- Grid container -->
    <div class="footer" id="footerContact">
      <!--<input
        type="button"
        id="btn"
        class="btn"
        value="Contactez-moi"

      />-->
      <router-link to="/contact" type="button" id="btn" class="btn"
        >Contactez-moi</router-link
      >
    </div>
    <div class="mentions">
      <ul>
        <router-link to="/mentions">Mentions légales</router-link>
        <li>
          <router-link to="/cgv">CGV / CGU</router-link>
        </li>
        <li>
          <router-link to="/confidentialite"
            >Politique de confidentialité</router-link
          >
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
export default {
  methods: {
    btnClick: function() {
      location.replace("/contact");
    },
    /*buttonHover: function () {
      let el = document.getElementById("btn");
      el.style.background = "linear-gradient(to right,#bbb,#fff)";
    },
    buttonLeave: function () {
      let el = document.getElementById("btn");
      el.style.background = "#fff";
    },*/
  },
};
</script>

<style lang="scss" scoped>
.mentions {
  margin-top: 30px;
  & ul {
    list-style-type: none;
    & a {
      color: #fff;
    }
  }
}
#btn {
  color: #334c7a;
  background: #fff;
}
#btn:hover {
  background: linear-gradient(to right, #bbb, rgb(124, 122, 122));
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
