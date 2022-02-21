<template>
  <div id="form-post">
    <form
      enctype="multipart/form-data"
      @submit.prevent="createOrModifyPost()"
      @input="submitValidation()"
    >
      <div>
        <input
          type="file"
          @change="handleFileUpload($event)"
          :value="oldPicture"
        />
        <span v-if="validator.file"
          >Fichiers autorisés : .jpg, .jpeg, .png, 5Mo maximum.</span
        >
      </div>
      <div>
        <label for="title">{{ label.title }}</label>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="La Menace Fantôme"
          v-model="form.title"
          @change="titleValidation()"
        />
        <span v-if="validator.title"
          >Le titre ne doit pas faire plus de 50 caractères.</span
        >
      </div>
      <div>
        <label for="type">{{ label.type }}</label>
        <select name="type" id="type" v-model="form.type">
          <option v-for="type in types" :key="type" :value="type">
            {{ type }}
          </option>
        </select>
        <span v-if="validator.type"></span>
      </div>
      <div>
        <label for="text">{{ label.text }}</label>
        <textarea
          id="text"
          name="text"
          type="textarea"
          placeholder="Écrivez ici ..."
          v-model="form.text"
          @change="textValidation()"
        >
        </textarea>
        <span v-if="validator.text"></span>
      </div>
      <CancelButton :label="label.cancel" @cancel="cancel()"></CancelButton>
      <SubmitButton
        v-if="this.$route.name === 'create-post'"
        :label="label.submit"
        :disabled="disableSubmit"
      ></SubmitButton>
      <SubmitButton
        v-if="this.$route.name === 'modify-post'"
        :label="label.modify"
      ></SubmitButton>
    </form>
  </div>
</template>

<script>
import SubmitButton from "../buttons/SubmitButton.vue";
import CancelButton from "../buttons/CancelButton.vue";
// import trimAll from "../../scripts/triming";
import { mapActions } from "vuex";
import {
  validateImage,
  validateDescription,
  validatePostForm,
} from "../../scripts/validate";
export default {
  name: "FormPost",
  el: "#form-post",
  components: {
    SubmitButton,
    CancelButton,
  },
  data() {
    return {
      label: {
        title: "Titre",
        content: "Contenu",
        type: "Catégorie",
        submit: "Publier",
        modify: "Modifier",
        cancel: "Annuler",
      },
      form: {
        image: this.oldPicture,
        title: this.oldTitle,
        type: this.oldType,
        text: this.oldText,
        isImportant: false,
      },
      validator: {
        file: false,
        title: false,
        type: false,
        text: false,
      },
      types: {
        default: "",
        general: "général",
      },
      disableSubmit: true,
    };
  },
  computed: {},
  methods: {
    handleFileUpload(event) {
      this.form.image = event.target.files[0];
      this.validator.file = validateImage(this.form.image);
    },
    titleValidation() {
      this.validator.title = validateDescription(this.form.title);
    },
    submitValidation() {
      this.disableSubmit = validatePostForm(this.validator, this.form);
    },
    textValidation() {
      this.validator.text = false;
    },
    ...mapActions(["create_modify_post"]),
    createOrModifyPost() {
      this.create_modify_post({ form: this.form, route: this.$route });
    },
    cancel() {
      if (this.$route.name === "create-post") {
        this.$router.push({ name: "home" });
      } else {
        this.$router.push({
          name: "my-profile",
          params: { userId: this.$store.getters.get_user_id },
        });
      }
    },
  },
  props: {
    oldTitle: {
      type: String,
      default: "",
    },
    oldPicture: {
      type: File,
      default: null,
    },
    oldText: {
      type: String,
      default: "",
    },
    oldType: {
      type: String,
      default: "",
    },
  },
};
</script>
