<template>
  <div>
    <section
      class="skills"
      onclick=""
      :class="{ darkMode: this.isDark }"
      id="skills"
    >
      <h2 :class="{ 'color-change': this.isDark }">Skills.</h2>
      <div class="skills-wrap">
        <div class="skills-card" data-aos="fade-up">
          <h3>Front End</h3>
          <aside>
            <p>HTML</p>
            <p>CSS/SASS</p>
            <p>TypeScript/JavaScript</p>
            <p>Reactjs</p>
            <p>ChakraUI/MaterialUI/BootStrap</p>
            <p>Nextjs</p>
            <p>Redux Toolkit</p>
            <p class="new-skill">Vuejs/VueX</p>
          </aside>
        </div>
        <div class="skills-card" data-aos="fade-up">
          <h3>Back End</h3>
          <aside>
            <p>Nodejs</p>
            <p>Expressjs/Fastify</p>
            <p>NestJS</p>
            <p>PostgreSQL</p>
            <p>Knex/TypeORM</p>
            <p>TypeGraphQL</p>
            <p>MongoDB</p>
          </aside>
        </div>
        <div class="skills-card" data-aos="fade-up">
          <h3>API Design</h3>
          <aside>
            <p>GraphQL</p>
            <p>REST</p>
          </aside>
        </div>
        <div class="skills-card" data-aos="fade-up">
          <h3>Tools</h3>
          <aside>
            <p>Git</p>
            <p>Github</p>
            <p>VSCode</p>
            <p>Jira</p>
            <p>Linear</p>
            <p>Slack</p>
            <p>Notion</p>
          </aside>
        </div>
        <div class="skills-card" data-aos="fade-up">
          <h3>Taking Lessons</h3>
          <aside>
            <p>epicreact.dev</p>
            <!-- <p>Vuejs</p> -->
            <p>Web Animation</p>
            <p>Golang</p>
            <!-- <p>Kotlin</p> -->
            <!-- <p>Laravel</p> -->
          </aside>
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
.skills {
  background: #fffffe;
  padding-bottom: 20px;
  transition: 0.5s ease-in-out;
}
.darkMode {
  background: rgb(21, 32, 43);
  background: black;
  transition: 0.5s ease-in-out;
}
.skills h2 {
  text-align: center;
  color: #094067;
  font-weight: bold;
  transition: 0.5s ease-in-out;
  padding: 10px 0;
}
.skills h2:hover {
  transition: 0.5s ease-in-out;
  color: #ef4565;
}

.skills-wrap {
  display: grid;
  grid-template-columns: 1fr;
  margin: auto;
  width: 90%;
}

.skills-card {
  background: #094067;
  padding: 20px;
  border-radius: 5px;
  margin-top: 10px;
}
.skills-card:hover {
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
}
.skills-card h3 {
  color: #fffffe;
  margin-bottom: 15px;
}

.skills-card p {
  display: inline-block;
  background: #3da9fc;
  padding: 10px;
  color: #fffffe;
  border: 1px solid #fffffe;
  margin: 3px;
}

.skills-card .new-skill {
  position: relative;
}
.skills-card .new-skill:after {
  position: absolute;
  content: "new";
  color: #ef4565;
  font-size: 12px;
  font-weight: bolder;
  top: 0;
  margin-left: -15px;
}

@media only screen and (min-width: 700px) {
  .skills-wrap {
    grid-template-columns: 1fr 1fr;
    width: 90%;
    gap: 20px;
  }
}
@media only screen and (min-width: 1000px) {
  .skills {
    padding-bottom: 40px;
  }
  .skills h2 {
    font-size: 2rem;
  }
  .skills-wrap {
    width: 80%;
  }
}

@media only screen and (min-width: 1200px) {
  .skills h2 {
    padding: 50px 0;
  }
  .skills-wrap {
    width: 70%;
  }
}

@media only screen and (min-width: 2000px) {
  .skills-wrap {
    width: 60%;
  }
}
</style>