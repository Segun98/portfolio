<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  mounted() {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      this.$store.commit("setToDarkMode");
    } else {
      this.$store.commit("setToLightMode");
    }
  },
};
</script>

<style>
/* @import url("https://fonts.googleapis.com/css?family=Bai+Jamjuree&display=swap"); */
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;600&display=swap");

:root {
  --blue: #3da9fc;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
body {
  /* font-family: "Bai Jamjuree", sans-serif; */
  font-family: "Quicksand", sans-serif !important;
  overflow-x: hidden;
}
/* headings color change in dark mode  */
.color-change {
  color: var(--blue) !important;
}
button,
li {
  cursor: pointer;
}
textarea {
  font-family: "Bai Jamjuree", sans-serif;
}
button:hover {
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
}

a {
  text-decoration: none;
}
li {
  list-style: none;
}
</style>
