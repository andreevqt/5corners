export default {
  cart: {
    get: () => (
      fetch('https://run.mocky.io/v3/59f47e8e-2a09-48c3-8a1d-0af8e5817f7c')
        .then((res) => res.json()).then((res) => JSON.parse(res))
    )
  }
};
