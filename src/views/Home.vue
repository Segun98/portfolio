<template>
  <div>
    <main :class="{ darkMode: this.isDark }">
      <Header />
      <div class="particles">
        <small class="particles-item">accessibility</small>
        <small class="particles-item">seo</small>
        <small class="particles-item">user experience</small>
        <small class="particles-item">responsive design</small>
        <small class="particles-item">performance</small>
        <!-- <small class="particles-item">&#8226; react </small> -->
        <!-- <small class="particles-item">&#8226; vue</small> -->
        <!-- <small class="particles-item">&#8226; graphql</small> -->
        <small class="particles-item">best practices</small>
      </div>
      <div class="intro-wrap" id="intro">
        <div class="main-intro" data-aos="fade-up" data-aos-duration="1000">
          <h1 :class="{ 'color-change': this.isDark }">UI Engineer.</h1>
          <p :style="[this.isDark ? { color: 'white' } : {}]">
            I am interested in building user friendly solutions on the web and I
            love to learn new stuff.
          </p>
          <a href="/#contact">
            <button>Reach Out</button>
          </a>
          <div class="main-intro_bottom">
            <small onclick=""
              >Skilled at enhancing user experience with API integrations and
              web performance metrics</small
            >
            <small onclick="">
              Experienced at crafting accessibile, performant and scalable web
              applications.
            </small>
          </div>
        </div>

        <aside>
          <img
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
            src="/segun.jpg"
            alt="Segun's Picture"
          />
        </aside>
      </div>
    </main>

    <section>
      <About />
    </section>

    <!-- <section>
      <Skills />
    </section> -->

    <section>
      <Projects />
    </section>

    <section>
      <Contact />
    </section>

    <section>
      <Footer top="/#intro" />
    </section>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import About from "@/components/About.vue";
import Skills from "@/components/Skills.vue";
import Projects from "@/components/Projects.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    About,
    Skills,
    Projects,
    Contact,
    Footer,
  },
  computed: {
    isDark() {
      return this.$store.getters.darkState;
    },
  },
};
</script>
<style scoped>
main {
  background: #fffffe;
  transition: 0.5s ease-in-out;
}

/* particles styles  */

.particles {
  display: none;
}
.particles-item {
  color: #ef4565;
  position: fixed;
  animation: particles infinite ease-in-out 3s;
  font-size: 11px;
}

.particles-item:first-child {
  right: 20%;
  top: 120px;
  transform: rotate(50deg);
}
.particles-item:nth-child(2) {
  left: 10%;
  top: 150px;
  transform: rotate(60deg);
}
.particles-item:nth-child(3) {
  left: 30%;
  top: 100px;
  font-size: 9px;
  transform: rotate(0deg);
}

.particles-item:nth-child(4) {
  right: 10px;
  top: 350px;
  transform: rotate(-10deg);
}

.particles-item:nth-child(5) {
  left: 30%;
  top: 350px;
  transform: rotate(60deg);
}
/* .particles-item:nth-child(6) {
  left: 60%;
  top: 350px;
  transform: rotate(45deg);
}
.particles-item:nth-child(7) {
  left: 75%;
  top: 250px;
  transform: rotate(30deg);
}
.particles-item:nth-child(8) {
  left: 10%;
  top: 350px;
  transform: rotate(-15deg);
} */

.particles-item:last-child {
  left: 100px;
  top: 450px;
  transform: rotate(-70deg);
}

@keyframes particles {
  0% {
    margin-top: 5px;
  }
  50% {
    margin-top: 0;
  }
  100% {
    margin-top: 5px;
  }
}

.darkMode {
  background: rgb(21, 32, 43);
  background: black;
  transition: 0.5s ease-in-out;
}

.intro-wrap {
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  margin: auto;
  width: 90%;
  height: 100vh;
  margin-top: 60px;
}
.main-intro {
  margin: auto;
  width: 80%;
}

.main-intro h1 {
  color: #094067;
  font-size: 3rem;
  line-height: 0.9;
  font-weight: bold;
}

.main-intro p {
  color: #5f6c7b;
  margin: 23px 0;
  font-weight: bold;
}

.main-intro button {
  background: var(--blue);
  color: #fffffe;
  padding: 15px 30px;
  border: none;
  font-weight: bold;
  border-radius: 4px;
}

.main-intro button a {
  color: #fffffe;
}
.main-intro_bottom {
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  color: var(--blue);
  margin-top: 70px;
  font-weight: bold;
  transition: ease-in 0.5s;
}

.main-intro_bottom small:hover {
  color: #5f6c7b;
  transition: ease-in 0.5s;
}

aside {
  margin-top: 50px;
}

aside img {
  height: 270px;
  width: 270px;
  border-right: 3px solid var(--blue);
  border-bottom: 3px solid var(--blue);
  padding: 10px;
  object-fit: cover;
}
@media only screen and (min-width: 400px) {
  .main-intro_bottom {
    font-size: 0.9rem;
  }
  .main-intro_bottom small:last-child {
    margin-left: 5px;
  }
}

@media only screen and (min-width: 700px) {
  .intro-wrap {
    width: 70%;
    height: 500px;
    margin-top: 30px;
  }
  .main-intro {
    width: 80%;
  }
  .main-intro_bottom {
    font-size: 1.1rem;
  }
}

@media only screen and (min-width: 1000px) {
  .intro-wrap {
    margin-top: 30px;
    height: 50vh;
  }
  .main-intro_bottom {
    width: 480px;
  }

  aside img {
    display: none;
  }
}

@media only screen and (min-width: 1200px) {
  .particles-item {
    font-size: 13px;
  }
  .intro-wrap {
    margin-top: 0px;
    grid-template-columns: 2fr 1fr;
    height: 90vh;
    padding-top: 80px;
  }

  aside {
    margin-top: -100px;
  }
  aside img {
    display: block;
    margin-top: 70px;
    height: 380px;
    width: 380px;
  }
  .main-intro p {
    font-size: 1.1rem;
  }

  .main-intro_bottom {
    width: 480px;
  }
}

@media only screen and (min-width: 1400px) {
  .intro-wrap {
    margin-top: -100px;
  }

  .main-intro h1 {
    font-size: 3.5rem;
  }
  aside img {
    margin-top: 100px;
  }
  .main-intro p {
    font-size: 1.3rem;
    margin: 25px 0;
  }

  aside {
    margin-top: -150px;
  }
}

@media only screen and (min-width: 2000px) {
  .intro-wrap {
    margin-top: -200px;
    width: 50%;
    height: 60vh;
  }

  aside img {
    height: 300px;
    width: 300px;
    padding: 15px;
  }
}
</style>
