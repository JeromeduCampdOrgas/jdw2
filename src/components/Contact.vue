<template>
  <div class="main-block" id="contact">
    <div class="left-part">
      <i class="fas fa-envelope"></i>
      <i class="fas fa-at"></i>
      <i class="fas fa-mail-bulk"></i>
      <p class="erreur" v-if="isVisible">
        - Le nom est obligatoire. <br />
        - Le prénom est obligatoire. <br />
        - Une adresse mail valide est requise. <br />
        - Un numéro de téléphone est obligatoire.
      </p>
    </div>
    <Confirmation
      id="confirmation"
      v-if="revele"
      @click="toggleModale"
    ></Confirmation>
    <form action="/" method="POST">
      <h1>Contact</h1>
      <div class="info">
        Civilité:
        <select
          class="genre"
          name="genre"
          id="genre"
          @change="f_genre($event)"
          v-model="genre"
        >
          <option value="mademoiselle">Mle</option>
          <option value="madame">Mme</option>
          <option value="monsieur">Mr</option>
          <div>Confirmation</div>
        </select>
        <div class="client">
          <input
            class="fname"
            type="text"
            name="nom"
            placeholder="Nom"
            id="nom"
            v-model="infoUser.nom"
            @click="disable"
          />
        </div>
        <div class="client">
          <input
            class="fname"
            type="text"
            name="prenom"
            placeholder="Prenom"
            id="prenom"
            v-model="infoUser.prenom"
            @click="disable"
          />
        </div>
        <div class="client">
          <input
            class="fname"
            type="text"
            name="email"
            placeholder="Email"
            id="email"
            v-model="infoUser.email"
            @click="disable"
          />
        </div>
        <input
          class="fname"
          type="text"
          name="tel"
          placeholder="Tel"
          id="tel"
          v-model="infoUser.tel"
          @click="disable"
        />
      </div>
      <div class="choix">
        Service envisagé:
        <select
          class="offre"
          name="offre"
          id="offre"
          @change="f_offre($event)"
          v-model="offre"
        >
          <option value="Site Personnalisé">Site Personnalisé</option>
          <option value="Site e-commerce">Site e-commerce</option>
          <option value="Api">Application Web</option>
          <option value="Maintenance">Optimisation</option>
          <option value="Seo">Référencement</option>
        </select>
      </div>
      <p>Message</p>
      <div>
        <textarea rows="4" v-model="infoUser.message"></textarea>
      </div>
      <div class="buttonClass">
        <button type="button" class="button" @click="sendEmail">Envoyer</button>
      </div>
    </form>
  </div>
</template>

<script>
import Confirmation from "./ContactConfirmation.vue";

export default {
  data() {
    return {
      infoUser: {
        genre: null,
        nom: null,
        prenom: null,
        email: null,
        tel: null,
        message: null,
        offre: null,
      },
      isVisible: false,
      revele: false,
    };
  },
  components: {
    Confirmation,
  },

  methods: {
    test: function () {
      let contenu = document.getElementsByClassName("content");
      console.log(contenu);
      let el = document.getElementById(contenu[0].id);
      console.log(el);
    },
    f_genre(event) {
      this.infoUser.genre = event.target.value;
    },
    disable: function () {
      return (this.isVisible = false);
    },
    f_offre(event) {
      this.infoUser.offre = event.target.value;
    },
    sendEmail: function (/*nom,email,message*/) {
      const genre = this.infoUser.genre;
      const nom = this.infoUser.nom;
      const prenom = this.infoUser.prenom;
      const email = this.infoUser.email;
      const tel = this.infoUser.tel;
      const offre = this.infoUser.offre;
      const message = this.infoUser.message;

      //validation du formulaire
      const regexEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
      if (
        !nom ||
        !prenom ||
        !tel ||
        !email ||
        !regexEmail.test(email) ||
        !message
      ) {
        return (this.isVisible = true);
      }
      //envoi du mail
      window.Email &&
        window.Email.send({
          Host: "smtp.gmail.com",
          Username: "ducampdorgasjerome@gmail.com",
          Password: "wsopfltjgskqxqcp",
          To: "ducampdorgasjerome@gmail.com",
          From: this.infoUser.email,
          Subject: `${genre} ${nom} vous a envoyé un message`,
          Body: `Nom: ${genre} ${nom}  ${prenom} <br/> Tel: ${tel} <br/>Email: ${email} <br/> Service: ${offre} <br/> Message: ${message}`,
        }).then(() => (this.revele = !this.revele));
    },
    toggleModale: function () {
      this.revele = !this.revele;
      location.replace("/");
    },
  },
  computed: {},
};
</script>

<style lang = "scss" scoped>
.main-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  min-height: 90vh;
  width: 100%;
  background: linear-gradient(to right, #bbb, #f1f1f1);
  margin: 10px auto;
}
form {
  width: 100%;
  padding: 25px;
  margin: 25px;
  box-shadow: 0 2px 5px #f5f5f5;
  background: #f5f5f5;

  & #genre {
    width: 20%;
  }
}

.fas,
.fab {
  margin: 25px 10px 0;
  font-size: 72px;
  /*color: #fff;*/
}
.fa-envelope {
  transform: rotate(-20deg);
}
.fa-at,
.fa-mail-bulk {
  transform: rotate(10deg);
}
input,
textarea,
select {
  width: calc(100% - 10px);
  padding: 8px;
  margin-bottom: 20px;
  border: 1px solid #1c87c9;
  outline: none;
}
input::placeholder {
  color: #666;
}
.buttonClass {
  text-align: center;
}
.button {
  width: calc(100% - 135px);
  padding: 10px;
  border: none;
  background: #1c87c9;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
}
.button:hover {
  background: #2371a0;
  cursor: pointer;
}

/*Gestion erreur formulaire*/

.erreur {
  margin: 5px;
  padding: 15px 5px;
  color: red;
  font-weight: bold;
  background: orange;
}
/*Confirmation*/

#confirmation {
  width: 50%;
  margin: auto;
  text-align: center;
  background: white;
  z-index: 5;
}
.btn-modale {
  position: absolute;
  top: 10px;
  right: 10px;
  background: red;
  color: white;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
}
/********** */
@media (min-width: 667px) {
  .main-block {
    flex-direction: row;
    flex-wrap: nowrap;
  }
  form {
    width: 45%;
  }
  input,
  textarea,
  select {
    width: calc(100% - 10px);
    padding: 8px;
    margin-bottom: 20px;
    border: 1px solid #1c87c9;
    outline: none;
  }
  #offre {
    width: 40%;
  }
  .button {
    width: 40%;
  }
}
</style>