import axios from 'axios';

const state = {
  posts: null,
  post: null,
  myPosts: null,
};
const getters = {
  get_local_posts(state) {
    return state.posts;
  },
  get_local_post(state) {
    return state.post;
  },
  get_my_posts(state) {
    return state.myPosts;
  },
};
const mutations = {
  set_local_posts(state, posts) {
    state.posts = posts;
  },
  set_local_post(state, post) {
    state.post = post;
  },
  set_my_posts(state, posts) {
    state.myPosts = posts;
  },
  remove_my_post(state, postId) {
    state.myPosts = state.myPosts.filter((post) => post[postId] !== postId);
  },
};
const actions = {
  commit_local_posts({ commit }) {
    axios
      .get('/posts')
      .then((res) => {
        commit('set_local_posts', res.data.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  commit_local_post({ commit }, postId) {
    axios
      .get(`/posts/${postId}`)
      .then((res) => {
        commit('set_local_post', res.data.post);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  commit_my_posts({ commit }, profileId) {
    axios
      .get(`/posts/user/${profileId}`)
      .then((res) => {
        commit('set_my_posts', res.data.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  // create_post(form) {
  //   console.log(form);
  //   const formData = new FormData();
  //   if (form.image) {
  //     formData.append('image', form.image);
  //   }
  //   formData.append('title', form.title);
  //   formData.append('type', form.type);
  //   formData.append('text', form.text);
  //   formData.append('isImportant', form.isImportant);
  //   console.log(formData);
  //   axios
  //     .post('/posts', formData)
  //     .then(() => {
  //       this.$router.push({ name: 'home' });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
  delete_my_post({ commit }, postId) {
    axios
      .delete(`/posts/${postId}`)
      .then(() => {
        commit('remove_my_post', postId);
        console.log(`Post ${postId} supprimé.`);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
