<template>
  <div>
    <section class="projects" onclick="" :class="{ darkMode: this.isDark }">
      <h2 :class="{ 'color-change': this.isDark }">Projects.</h2>
      <div class="projects-wrap">
        <div class="project-item" data-aos="fade-up">
          <img :src="Resgen" alt="Resgen" />
          <p>Resgen</p>
          <h5>
            An opinionated CLI tool to generate GraphQL resolver starter files
            and folders.
          </h5>
          <div class="project-span">
            <span>
              <a href="https://github.com/Segun98/resgen#readme">README</a>
            </span>
            <span>
              <a
                href="https://www.npmjs.com/package/resgen"
                target="_blank"
                rel="noopener noreferrer"
                >NPM</a
              >
            </span>
            <span>
              <a
                href="https://github.com/Segun98/resgen"
                target="_blank"
                rel="noopener noreferrer"
                >Github Repo</a
              >
            </span>
          </div>
        </div>

        <div class="project-item" data-aos="fade-up">
          <img :src="Tadlace" alt="Tadlace" />
          <p>Ecommerce</p>
          <h5>A multi vendor e-commerce website.</h5>
          <div class="project-span">
            <span>
              <a href="https://app.tadlace.io">Read More...</a>
            </span>
            <span>
              <a
                href="https://app.tadlace.io"
                target="_blank"
                rel="noopener noreferrer"
                >Live Preview</a
              >
            </span>
            <span>
              <a
                href="https://github.com/Segun98/e-commerce"
                target="_blank"
                rel="noopener noreferrer"
                >Github Repo</a
              >
            </span>
          </div>
        </div>
        <div class="project-item" data-aos="fade-up">
          <img :src="Employeez" alt="the image of an app named Employeez" />
          <p>Employeez</p>
          <h5>An Employee and Customer Management SAAS.</h5>
          <div class="project-span">
            <span>
              <a
                href="https://employeez.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                >Live Preview</a
              >
            </span>
            <span>
              <a
                href="https://github.com/Segun98/employeez"
                target="_blank"
                rel="noopener noreferrer"
                >Github Repo</a
              >
            </span>
          </div>
        </div>
      </div>
      <aside class="project-btn" role="link" @click="toTop">
        <a>All Projects</a>
      </aside>
    </section>
  </div>
</template>

<script>
import Employeez from "../assets/employeezapp.png";
import Tadlace from "../assets/tadlace/p10.png";
import Resgen from "../assets/resgen.png";

export default {
  data() {
    return {
      Employeez,
      Tadlace,
      Resgen,
    };
  },
  computed: {
    isDark() {
      return this.$store.getters.darkState;
    },
  },
  methods: {
    toTop() {
      this.$router.push("/projects").then(() => window.scrollTo(0, 0));
    },
  },
};
</script>

<style>
.projects {
  /* background: #d8eefe; */
  background: white; /* now white after taking out skills components */
  padding: 40px 0;
  transition: 0.5s ease-in-out;
}
.darkMode {
  background: rgb(21, 32, 43);
  background: black;
  transition: 0.5s ease-in-out;
  border-top: 1px solid #d8eefe;
  border-bottom: 1px solid #d8eefe;
}
.projects h2 {
  text-align: center;
  margin-bottom: 20px;
  margin-top: -10px;
  color: #094067;
  font-weight: bold;
  transition: 0.5s ease-in-out;
}
.projects h2:hover {
  transition: 0.5s ease-in-out;
  color: #ef4565;
}

.projects-wrap {
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 90%;
}

.projects-wrap img {
  width: 100%;
  height: auto;
}

.project-item {
  background: #fffffe;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
}

.project-item h5 {
  margin: 8px 0;
  color: #5f6c7b;
}

.project-item p {
  margin-top: 5px;
  color: #094067;
  text-align: center;
}

.project-span span {
  margin-left: 8px;
  font-size: 0.9rem;
}

.project-span span:first-child {
  margin-left: 0px;
}

.project-span span a {
  color: #ef4565;
}
.project-btn {
  margin: 30px auto 20px auto;
  width: 50%;
  text-align: center;
  cursor: pointer;
}
.project-btn a {
  background: #ef4565;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
}

.project-btn a {
  color: #fffffe;
  font-weight: bold;
}

@media only screen and (min-width: 700px) {
  .projects-wrap {
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .project-btn a {
    padding: 15px 30px;
  }
}

@media only screen and (min-width: 1000px) {
  .projects-wrap {
    width: 80%;
    gap: 30px;
  }
}

@media only screen and (min-width: 1200px) {
  .projects-wrap {
    width: 70%;
  }
  .projects button {
    padding: 15px 40px;
  }

  .projects aside.project-btn {
    margin-top: 40px;
  }
}

@media only screen and (min-width: 2000px) {
  .projects-wrap {
    width: 60%;
  }
  .project-btn a {
    font-size: 1rem;
    padding: 15px 50px;
  }
  .project-item h5 {
    font-size: 1.2rem;
  }
  .project-item p {
    font-size: 1.4rem;
  }
}
</style>
