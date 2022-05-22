export const state = () => ({
  title: "test",
  counter: 0,
});

export const mutations = {
  increment(state) {
    state.counter++;
  }
}