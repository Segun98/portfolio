<template>
  <div>
    <header>
      <div class="header-wrap">
        <div class="logo">
          <router-link to="/">
            <span>_</span>
            <a>Segun</a>
          </router-link>
        </div>
        <nav>
          <img
            src="icons8-menu.svg"
            alt="menu"
            @click="toggleHamburger"
            :class="{'open-hamburger':this.isClicked}"
          />
          <aside :class="{'open-menu':this.isClicked}">
            <ul class="close">
              <li>
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <a href="/#about">about</a>
              </li>
              <li>
                <router-link to="/#skills">Skills</router-link>
              </li>
              <li>
                <router-link to="/projects">Projects</router-link>
              </li>
              <li>
                <router-link to="/contact">Contact</router-link>
              </li>
            </ul>
          </aside>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isClicked: false
    };
  },
  methods: {
    toggleHamburger() {
      this.isClicked = !this.isClicked;
    }
  }
};
</script>

<style scoped>
.header-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 85%;
  padding: 20px 0;
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
  height: 200px;
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

@media only screen and (min-width: 1400px) {
  .header-wrap {
    width: 80%;
    padding-top: 30px;
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