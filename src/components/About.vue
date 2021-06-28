<template>
  <div>
    <section class="about" :class="{ darkMode: this.isDark }" id="about">
      <h2 :class="{ 'color-change': this.isDark }">About Me.</h2>
      <div class="about-wrap">
        <img src="undraw_profile_6l1l.svg" alt="about me image" />
        <div class="about-content">
          <p
            data-aos="fade-up"
            :style="[
              this.isDark ? { color: 'white', background: '#0c0c0c' } : {},
            ]"
          >
            I have spent the last 2yrs learning and improving my skills by
            building different projects on the web. I have 6 months of
            professional experience working for startups in Nigeria and the US.
          </p>

          <p
            data-aos="fade-up"
            :style="[
              this.isDark ? { color: 'white', background: '#0c0c0c' } : {},
            ]"
          >
            I am interested in building web applications that solve real world
            problems, showing concern for UX, DX and performance.
            <!-- I wrote
            <a
              style="color:#ef4565"
              href="https://locallog.now.sh/post/how-i-got-into-tech---segun-olanitori"
              target="_blank"
              rel="noopener noreferrer"
            >How I Got Into Tech</a>-->
          </p>

          <p
            data-aos="fade-up"
            :style="[
              this.isDark ? { color: 'white', background: '#0c0c0c' } : {},
            ]"
          >
            I am currently working on getting better at JavaScript with
            Algorithms and Data Structures and diving deeper into JavaScript
            fullstack development. And oh, I am learning Kotlin.
          </p>

          <p
            data-aos="fade-up"
            :style="[
              this.isDark ? { color: 'white', background: '#0c0c0c' } : {},
            ]"
          >
            I am an ex-intern at HNG6 Internship as a front end developer and a
            Business graduate (B.Sc). I love Lionel Messi and Barça! 🔴🔵
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    isDark() {
      return this.$store.getters.darkState;
    },
  },
};
</script>

<style>
.about {
  transition: 0.5s ease-in-out;
  background: #d8eefe;
  padding: 50px 0;
}
.darkMode {
  background: rgb(21, 32, 43);
  background: black;
  transition: 0.5s ease-in-out;
  border-top: 1px solid #d8eefe;
  border-bottom: 1px solid #d8eefe;
}
.about h2 {
  text-align: center;
  margin: 20px 0;
  color: #094067;
  font-weight: bold;
  transition: 0.5s ease-in-out;
}
@media only screen and (max-width: 374px) {
  .about h2 {
    margin-top: 40px;
  }
}
.about h2:hover {
  transition: 0.5s ease-in-out;
  color: #ef4565;
}

.about-wrap {
  display: flex;
  flex-direction: column-reverse;
  margin: auto;
  width: 90%;
}

.about-wrap img {
  width: 100%;
  display: none;
}

.about-content p {
  background: #fffffe;
  padding: 20px;
  color: #5f6c7b;
  margin: 10px 0;
  line-height: 1.5;
}

.about-content p:hover {
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
}

@media only screen and (min-width: 700px) {
  .about h2 {
    margin-top: 150px;
    font-size: 2rem;
  }

  .about-wrap {
    width: 60%;
  }

  .about-content p {
    line-height: 1.8;
  }
}

@media only screen and (min-width: 1000px) {
  .about h2 {
    margin-top: 100px;
  }

  .about-wrap {
    width: 60%;
  }

  .about-content p {
    line-height: 1.8;
    padding: 40px;
  }
}

@media only screen and (min-width: 1200px) {
  .about {
    padding-bottom: 50px;
  }
  .about h2 {
    margin-top: 10px;
  }

  .about-wrap {
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .about-wrap img {
    display: block;
    width: 80%;
    position: sticky;
    top: 0;
  }

  .about-content p {
    line-height: 1.8;
    padding: 40px;
    font-size: 1.1rem;
  }
}

@media only screen and (min-width: 1400px) {
  .about h2 {
    margin-top: 5px;
  }

  .about-wrap {
    width: 70%;
  }
}
@media only screen and (min-width: 2000px) {
  .about-wrap {
    width: 60%;
  }
}
</style>