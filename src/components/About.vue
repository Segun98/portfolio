<template>
  <div>
    <section class="about" :class="{ darkMode: this.isDark }" id="about">
      <h2 :class="{ 'color-change': this.isDark }" onclick="">About Me.</h2>
      <div class="about-wrap">
        <img src="undraw_profile_6l1l.svg" alt="about me image" />
        <div class="about-content">
          <p
            data-aos="fade-up"
            :style="[
              this.isDark ? { color: 'white', background: '#0c0c0c' } : {},
            ]"
          >
            I am a software engineer with ~4 years of experience working at
            fast-paced startups in Nigeria and the US.
          </p>

          <p
            data-aos="fade-up"
            :style="[
              this.isDark ? { color: 'white', background: '#0c0c0c' } : {},
            ]"
          >
            I am interested in building web applications that solve real world
            problems, showing concern for UX, DX, performance and scalability.
            <br />
            <strong>
              I write occasionally on
              <a
                href="https://dev.to/segun98"
                target="_blank"
                rel="noopener noreferrer"
              >
                dev.to
              </a>
            </strong>
          </p>

          <p
            data-aos="fade-up"
            :style="[
              this.isDark ? { color: 'white', background: '#0c0c0c' } : {},
            ]"
          >
            I currently work full-time as a full-stack engineer at Dock. In my
            spare time, I practice Algorithms and Data Structures and
            EpicReact.dev.
          </p>

          <p
            data-aos="fade-up"
            :style="[
              this.isDark ? { color: 'white', background: '#0c0c0c' } : {},
            ]"
          >
            'Fun' facts: I studied Business in Uni (B.Sc), I am 6'3 tall, I love
            Lionel Messi and Barça! 🔴🔵
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
  padding: 20px 0;
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
  margin: 5px 0;
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
  border-radius: 8px;
}

.about-content p:hover {
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  transition: all 250ms;
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
    margin-top: 10px;
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
    margin: 30px 0;
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