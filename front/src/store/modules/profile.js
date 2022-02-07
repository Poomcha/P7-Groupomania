import axios from 'axios';

const actions = {
  update_profile(form, userId) {
    const formData = new FormData();
    if (form.file) {
      formData.append('image', form.image);
    }
    formData.append('firstName', form.firstName);
    formData.append('lastName', form.lastName);
    formData.append('position', form.position);
    formData.append('description', form.description);
    console.log(userId);
    axios
      .put(`/users/${userId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(() => console.log('Profile updated.'))
      .catch((error) => {
        console.log(error.toJSON());
      });
  },
};

export default { actions };
