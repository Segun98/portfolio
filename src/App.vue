<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Bai+Jamjuree&display=swap");

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
  font-family: "Bai Jamjuree", sans-serif;
  overflow-x: hidden;
}
button,
li {
  cursor: pointer;
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
