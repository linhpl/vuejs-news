import { query, editBlog, deleteBlog  } from '~/apollo/queries/blog.js';

export const state = () => ({
  list: [],
  loading: false,
  error: {},
});

export const mutations = {
  fetchRequest(state) {
    state.loading = true;
    state.error = {};
  },
  editSuccess(state) {
    state.loading = false;
  },
  deleteSuccess(state) {
    state.loading = false;
  },
  fetchError(state, error) {
    state.loading = false;
    state.error = error;
  }
};

export const actions =  {
  fetch({ commit }) {
    let client = this.app.apolloProvider.defaultClient;
    commit('fetchRequest');
    client.query({ query: query })
      .then((res) => {
      console.log(res);
    return res.data;
  })
  .then(data => {
      console.log(data);
    commit('fetchSuccess', data.categories);
  })
  .catch(error => commit('fetchError', error));
  },
  editBlog(context, data) {
    let client = this.app.apolloProvider.defaultClient;
    context.commit('fetchRequest');
    client.mutate({ mutation: editBlog, variables: {input : data} })
      .then((res) => {
        console.log(res);
        return res.data;
      })
      .then(data => {
        console.log(data);
        context.commit('editSuccess');
        this.app.context.redirect('/blog');
      })
      .catch(error => context.commit('fetchError', error));
  },
  deleteBlog({ commit }, id) {
    let client = this.app.apolloProvider.defaultClient;
    commit('fetchRequest');
    client.mutate({
      mutation: deleteBlog,
      variables: {input : { blogId : id}} ,
      refetchQueries: [{
        query: query,
      }]
    })
      .then((res) => {
        console.log(res);
        return res.data;
      })
      .then(data => {
        console.log(data);
        commit('deleteSuccess');
      })
      .catch(error => {
        commit('fetchError', error);
        alert(error.message);
      });
  }
};
