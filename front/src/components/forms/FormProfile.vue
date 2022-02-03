<template>
  <div id="formProfile">
    <form
      enctype="multipart/form-data"
      @submit.prevent="updateProfile()"
      @input="submitValidation()"
    >
      <div>
        <input type="file" @change="handleFileUpload($event)" />
        <span v-if="validator.file"
          >Fichiers autorisés : .jpg, .jpeg, .png 5Mo maximum.</span
        >
      </div>
      <div>
        <label for="firstName">{{ label.firstName }}</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="Jacques"
          v-model="form.firstName"
          @input="firstNameValidation()"
        />
        <span v-if="validator.fistName">Prénom invalide.</span>
      </div>
      <div>
        <label for="lastName">{{ label.lastName }}</label>
        <input
          id="lastName"
          name="lastname"
          type="text"
          placeholder="Dupont"
          v-model="form.lastName"
          @input="lastNameValidation()"
        />
        <span v-if="validator.lastName">Nom invalide.</span>
      </div>
      <div>
        <label for="position">{{ label.position }}</label>
        <input
          id="position"
          name="position"
          type="text"
          placeholder="Comptable"
          v-model="form.position"
          @input="positionValidation()"
        />
        <span v-if="validator.position">Nom de poste invalide.</span>
      </div>
      <div>
        <label for="description">{{ label.description }}</label>
        <textarea
          id="description"
          name="description"
          type="text"
          placeholder="J'aime bien compter."
          v-model="form.description"
          @input="descriptionValidation()"
        />
        <span v-if="validator.description"
          >50 caractères maximum autorisés.</span
        >
      </div>
      <SubmitButton
        :label="label.submit"
        :disabled="disableSubmit"
      ></SubmitButton>
    </form>
  </div>
</template>

<script>
// import axios from "axios";
import SubmitButton from "../buttons/SubmitButton.vue";
import {
  validateName,
  validateDescription,
  validateProfileForm,
  validateImage,
} from "../../scripts/validate";

export default {
  name: "FormProfile",
  el: "#formProfile",
  data() {
    return {
      label: {
        submit: "Mettre à jour",
        firstName: "Prénom",
        lastName: "Nom",
        position: "Poste",
        description: "Description",
      },
      form: {
        file: "",
        firstName: "",
        lastName: "",
        position: "",
        description: "",
      },
      validator: {
        file: false,
        firstName: false,
        lastName: false,
        position: false,
        description: false,
      },
      disableSubmit: true,
    };
  },
  components: {
    SubmitButton,
  },
  methods: {
    firstNameValidation() {
      this.validator.firstName = validateName(this.form.firstName);
    },
    lastNameValidation() {
      this.validator.lastName = validateName(this.form.lastName);
    },
    positionValidation() {
      this.validator.position = validateName(this.form.position);
    },
    descriptionValidation() {
      this.validator.description = validateDescription(this.form.description);
    },
    submitValidation() {
      this.disableSubmit = validateProfileForm(this.validator, this.form);
    },
    handleFileUpload(event) {
      this.form.file = event.target.files[0];
      this.validator.file = validateImage(this.form.file);
    },
    updateProfile() {
      const formData = new FormData();
      if (this.file) {
        formData.append("image", this.form.file);
      }
      formData.append("firstName", this.firstName);
      formData.append("lastName", this.lastName);
      formData.append("position", this.position);
      formData.append("description", this.description);
      this.axios
        .put(`/users/${this.$route.params.userId}/profile`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => console.log("SUCCESS"))
        .catch((error) => {
          console.log(error.toJSON());
        });
    },
    getAllProfileTest() {
      this.axios
        .get("/users")
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error.toJSON());
        });
    },
  },
};
</script>
