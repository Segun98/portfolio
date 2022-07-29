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
          <button>
            <img :src="DarkImage" alt="dark mode switcher" />
          </button>
        </div>
        <nav>
          <button class="menu-btn">
            <img
              :src="Menu"
              alt="menu"
              @click="toggleHamburger"
              :class="{ 'open-hamburger': this.isClicked }"
            />
          </button>
          <aside :class="{ 'open-menu': this.isClicked }">
            <ul class="close">
              <li>
                <router-link to="/">home</router-link>
              </li>
              <li>
                <a href="/#about">about</a>
              </li>
              <!-- <li>
                <a href="/#skills">skills</a>
              </li> -->
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
                    ><img :src="Github" alt="my Github profile"
                  /></a>
                  <!-- <a href="https://github.com/segun98" target="_blank" rel="noopener noreferrer">GH</a> -->
                </li>
                <li>
                  <a
                    href="https://dev.to/segun98"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img :src="Dev" alt="Dev To Profile" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://twitter.com/segunnn_"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img :src="Twitter" alt="my Twitter profile" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/segun-olanitori-b76275162"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img :src="Linkedin" alt="my Linkedin profile" />
                  </a>
                  <!-- <a
                    href="https://linkedin.com/in/segun-olanitori-b76275162"
                    target="_blank"
                    rel="noopener noreferrer"
                  >LN</a> -->
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
import Github from "../assets/icons8-github.svg";
import Twitter from "../assets/twitter.svg";
import Linkedin from "../assets/icons8-linkedin.svg";
import Dev from "../assets/devto.svg";

export default {
  data() {
    return {
      isClicked: false,
      Menu,
      DarkImage,
      Github,
      Twitter,
      Linkedin,
      Dev,
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
header {
  border-bottom: 1px solid #d8eefe;
}
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

.darky button {
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 13px;
  margin-right: 70px;
  /* color: #ef4565; */
  width: 35px;
  height: 35px;
  cursor: pointer;
  background: none;
  border: none;
}

.darky button:hover {
  background: none !important;
}

.darky img {
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
nav aside.open-menu {
  max-height: 300px;
  transition: ease 0.8s;
  /* background: #d8eefe; */
}

nav aside.open-menu ul {
  transition: ease 0.1s;
  transition-delay: 0.5s;
  transform: scale(1);
}

.open-hamburger {
  transition: ease 0.6s;
  transform: skew(25deg);
}

nav {
  position: relative;
  z-index: 9999;
}

nav img {
  width: 60px;
  height: 35px;
  cursor: pointer;
  transition: ease 0.8s;
}
.menu-btn {
  border: none;
  background: none;
}

.menu-btn:hover {
  background: none !important;
}

nav aside {
  position: absolute;
  margin-top: 1rem;
  margin-left: -130px;
  background: #fffffe;
  max-height: 0;
  transition: ease 0.3s;
  z-index: 1;
}

nav aside ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  transform: scale(0);
  transition: ease 0.2s;
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
  justify-content: space-around;
}

nav ul span img {
  height: 20px;
  width: 50px;
}
nav ul span li a {
  /* margin: 0 5px; */
  color: #094067;
}

@media only screen and (min-width: 1200px) {
  .darky button {
    margin-top: 20px;
    margin-right: 80px;
  }

  nav ul span img {
    height: 25px;
    width: 40px;
  }
}

@media only screen and (min-width: 1400px) {
  .header-wrap {
    width: 80%;
    padding-top: 30px;
  }
  .darky button {
    margin-top: 30px;
    margin-right: 90px;
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
