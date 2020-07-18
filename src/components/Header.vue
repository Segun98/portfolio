<template>
  <div>
    <header :class="{ darkMode: this.isDark }">
      <div class="header-wrap">
        <div class="logo">
          <router-link to="/">
            <span>_</span>
            <a>Segun</a>
          </router-link>
        </div>
        <div class="darky" @click="toggleDarkMode">
          <img :src="DarkImage" alt="dark mode switcher" />
        </div>
        <nav>
          <img
            :src="Menu"
            alt="menu"
            @click="toggleHamburger"
            :class="{ 'open-hamburger': this.isClicked }"
          />
          <aside :class="{ 'open-menu': this.isClicked }">
            <ul class="close">
              <li>
                <router-link to="/">home</router-link>
              </li>
              <li>
                <a href="/#about">about</a>
              </li>
              <li>
                <a href="/#skills">skills</a>
              </li>
              <li>
                <router-link to="/projects">projects</router-link>
              </li>
              <li>
                <a href="/#contact">contact</a>
              </li>
              <span>
                <li>
                  <a
                    href="https://github.com/segun98"
                    target="_blank"
                    rel="noopener noreferrer"
                    >GH</a
                  >
                </li>
                <li>
                  <a
                    href="https://twitter.com/segun_os"
                    target="_blank"
                    rel="noopener noreferrer"
                    >TW</a
                  >
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/segun-olanitori-b76275162"
                    target="_blank"
                    rel="noopener noreferrer"
                    >LN</a
                  >
                </li>
              </span>
            </ul>
          </aside>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
import Menu from "../assets/icons8-menu.svg";
import DarkImage from "../assets/30466.svg";
export default {
  data() {
    return {
      isClicked: false,
      Menu,
      DarkImage,
    };
  },
  computed: {
    isDark() {
      return this.$store.getters.darkState;
    },
  },
  methods: {
    toggleHamburger() {
      this.isClicked = !this.isClicked;
    },
    toggleDarkMode() {
      this.$store.commit("toggleDarkMode");
    },
  },
};
</script>

<style scoped>
.darkMode {
  background: rgb(21, 32, 43);
  background: black;
  transition: 0.5s ease-in-out;
}

.header-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 85%;
  padding: 20px 0;
  position: relative;
}

.darky img {
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 13px;
  margin-right: 60px;
  color: #ef4565;
  width: 35px;
  height: 35px;
  cursor: pointer;
}

.logo {
  font-size: 1.6rem;
  font-weight: bold;
}
.logo a {
  color: var(--blue);
}
.logo a span {
  animation: underscore ease 0.9s infinite;
}
@keyframes underscore {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
/* bnded classes  */
.open-menu {
  transform: scale(1);
  transition: ease 0.8s;
}
.open-hamburger {
  transition: ease 0.6s;
  transform: skew(25deg);
}

nav {
  position: relative;
}

nav img {
  width: 60px;
  height: 35px;
  cursor: pointer;
  transition: ease 0.8s;
}

nav aside {
  position: absolute;
  margin-top: 1rem;
  margin-left: -130px;
  background: #fffffe;
  transform: scale(0);
  transition: ease 0.8s;
  z-index: 1;
}

nav aside ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 250px;
}

nav ul li {
  margin: 10px 0;
  transition: border-bottom ease-in 0.5s;
}

nav ul li:hover {
  border-bottom: 1px solid var(--blue);
  transition: border-bottom ease-in 0.5s;
}

nav ul li a {
  color: var(--blue);
}

nav ul span {
  display: flex;
}
nav ul span li a {
  margin: 0 5px;
  color: #094067;
}

@media only screen and (min-width: 1200px) {
  .darky img {
    margin-top: 20px;
    margin-right: 70px;
  }
}

@media only screen and (min-width: 1400px) {
  .header-wrap {
    width: 80%;
    padding-top: 30px;
  }
  .darky img {
    margin-top: 30px;
    margin-right: 80px;
  }
}

@media only screen and (min-width: 2000px) {
  .header-wrap {
    width: 60%;
  }
  nav img {
    width: 68px;
    height: 40px;
  }
  .logo {
    font-size: 1.8rem;
  }
}
</style>
