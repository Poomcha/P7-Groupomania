<template>
  <div id="formProfile">
    <form enctype="multipart/form-data" @submit.prevent="updateProfile()">
      <div>
        <input type="file" @change="handleFileUpload($event)" />
      </div>
      <div>
        <input type="text" placeholder="Prénom" v-model="firstName" />
      </div>
      <div>
        <input type="text" placeholder="Nom" v-model="lastName" />
      </div>
      <div>
        <input type="text" placeholder="Poste" v-model="position" />
      </div>
      <div>
        <input type="text" placeholder="Description" v-model="description" />
      </div>
      <SubmitButton></SubmitButton>
    </form>
  </div>
</template>

<script>
// import axios from "axios";
import SubmitButton from "../buttons/SubmitButton.vue";

export default {
  name: "FormProfile",
  el: "#formProfile",
  data() {
    return {
      file: "",
      firstName: "",
      lastName: "",
      position: "",
      description: "",
    };
  },
  components: {
    SubmitButton,
  },
  methods: {
    handleFileUpload(event) {
      this.file = event.target.files[0];
    },
    updateProfile() {
      const formData = new FormData();
      if (this.file) {
        formData.append("image", this.file);
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
