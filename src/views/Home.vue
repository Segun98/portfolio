<template>
  <div>
    <main>
      <Header />
      <div class="intro-wrap">
        <div class="main-intro" data-aos="fade-up" data-aos-duration="1000">
          <h1>Frontend Developer.</h1>
          <p>I am an internet taught web developer who loves to build useful solutions on the web</p>
          <button>Reach Out</button>
          <div class="main-intro_bottom">
            <small>I build modern responsive web applications for optimum user experience.</small>
            <small>Accessibility, performance, scalability, seo... are my watchwords</small>
          </div>
        </div>

        <aside>
          <img
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
            src="/favicon.jpg"
            alt="Segun's Picture"
          />
        </aside>
      </div>
    </main>

    <section>
      <About />
    </section>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import About from "@/components/About.vue";
export default {
  components: {
    Header,
    About
  }
};
</script>
<style scoped>
main {
  background: #fffffe;
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
  width: 70%;
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
}

@media only screen and (min-width: 700px) {
  .intro-wrap {
    width: 70%;
    height: 90vh;
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
  }
}

@media only screen and (min-width: 1200px) {
  .intro-wrap {
    margin-top: 0px;
    grid-template-columns: 2fr 1fr;
  }

  aside {
    margin-top: -100px;
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
  }

  aside img {
    height: 300px;
    width: 300px;
    padding: 15px;
  }
}
</style>

