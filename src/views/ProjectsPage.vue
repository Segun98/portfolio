<template>
  <div>
    <section>
      <Header />
    </section>

    <section class="projects-page" :class="{'darkMode': this.isDark}" id="top">
      <h2 :class="{ 'color-change': this.isDark }">Some Of My Projects</h2>
      <div class="projects-page-wrap">
      <div class="project-page-item" data-aos="fade-up">
          <img :src="PartyStore" alt="Partystore" />
          <p>PartyStore</p>
          <h5>An e-commerce website that accepts vendors, customers, admin and "super admin"</h5>
          <aside class="ecom-link">
           <router-link to="/partystore">Click here for more on this project...</router-link>
          </aside>
          <div class="tech-used">
            <p>Typescript</p>
            <p>NextJS</p>
            <p>GraphQL</p>
            <p>SASS / Chakra UI</p>
            <p>Nodejs/Expressjs</p>
            <p>PostgreSQL</p>
            <p>PayStack API</p>
          </div>
          <div class="project-page-span">
            <span>
              <a
                href="https://partystore.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >Live Preview</a>
            </span>
            <span>
              <a
                href="https://github.com/Segun98/e-commerce"
                target="_blank"
                rel="noopener noreferrer"
              >Github Repo</a>
            </span>
          </div>
        </div>

        <div class="project-page-item" data-aos="fade-up">
          <img :src="Employeez" alt="the image of an app named Employeez" />
          <p>Employeez</p>
          <h5>An Employee and Customer Management web application</h5>
          <div class="tech-used">
            <p>Typescript</p>
            <p>Reactjs - Redux</p>
            <p>SASS / Chakra UI</p>
            <p>Nodejs/Expressjs</p>
            <p>JWT Authentication</p>
            <p>MongoDB</p>
            <p>REST API</p>
            <p>Send Bulk Emails</p>
          </div>
          <div class="project-page-span">
            <span>
              <a
                href="https://employeez.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >Live Preview</a>
            </span>
            <span>
              <a
                href="https://github.com/Segun98/employeez"
                target="_blank"
                rel="noopener noreferrer"
              >Github Repo</a>
            </span>
          </div>
        </div>

        <div class="project-page-item" data-aos="fade-up">
          <img :src="Locallog" alt="the image of an app named Employeez" />
          <p>Locallog</p>
          <h5>An online publishing platform</h5>
          <div class="tech-used">
            <p>Nextjs</p>
            <p>GraphQL API</p>
            <p>Nodejs/Expressjs</p>
            <p>MongoDB</p>
            <p>Serverless Functions</p>
          </div>
          <div class="project-page-span">
            <span>
              <a
                href="https://locallog.now.sh"
                target="_blank"
                rel="noopener noreferrer"
              >Live Preview</a>
            </span>
            <span>
              <a
                href="https://github.com/Segun98/locallog"
                target="_blank"
                rel="noopener noreferrer"
              >Github Repo</a>
            </span>
          </div>
        </div>

        <div class="project-page-item" data-aos="fade-up">
          <img :src="Nairatrack" alt="the image of an app named Nairatrack" />
          <p>Nairatrack</p>
          <h5>An Income and Expense Tracker App</h5>
          <div class="tech-used">
            <p>Reactjs</p>
            <p>Context API</p>
            <p>Localstorage</p>
            <p>PWA</p>
          </div>
          <div class="project-page-span">
            <span>
              <a
                href="https://nairatrack.now.sh"
                target="_blank"
                rel="noopener noreferrer"
              >Live Preview</a>
            </span>
            <span>
              <a
                href="https://github.com/Segun98/NairaTrack"
                target="_blank"
                rel="noopener noreferrer"
              >Github Repo</a>
            </span>
          </div>
        </div>

        <div class="project-page-item" data-aos="fade-up">
          <img :src="Averages" alt="the image of an app named Averages" />
          <p>Averages</p>
          <h5>Mean, Mean Deviation, Variance and Standard deviation Calculator</h5>
          <div class="tech-used">
            <p>Reactjs</p>
            <p>Context API</p>
            <p>PWA</p>
          </div>
          <div class="project-page-span">
            <span>
              <a
                href="https://averages.now.sh"
                target="_blank"
                rel="noopener noreferrer"
              >Live Preview</a>
            </span>
            <span>
              <a
                href="https://github.com/Segun98/averages-calculator"
                target="_blank"
                rel="noopener noreferrer"
              >Github Repo</a>
            </span>
          </div>
        </div>

        <div class="project-page-item" data-aos="fade-up">
          <img :src="Quiz" alt="a quiz app" />
          <p>Quiz</p>
          <h5>How well do you know me?</h5>
          <div class="tech-used">
            <p>Vanilla JavaScript</p>
            <p>HTML</p>
            <p>CSS</p>
          </div>
          <div class="project-page-span">
            <span>
              <a
                href="https://segun98.github.io/quiz-app/"
                target="_blank"
                rel="noopener noreferrer"
              >Live Preview</a>
            </span>
            <span>
              <a
                href="https://github.com/Segun98/quiz-app"
                target="_blank"
                rel="noopener noreferrer"
              >Github Repo</a>
            </span>
          </div>
        </div>

        <div class="project-page-item" data-aos="fade-up">
          <img :src="Manage" alt="the image of an app named Manage" />
          <p>Manage Landing Page</p>
          <h5>A challenge by Frontend Mentor</h5>
          <div class="tech-used">
            <p>HTML</p>
            <p>CSS Grid/ Flexbox</p>
            <p>Form Validation</p>
          </div>
          <div class="project-page-span">
            <span>
              <a
                href="https://segun98.github.io/manage-landing-page/"
                target="_blank"
                rel="noopener noreferrer"
              >Live Preview</a>
            </span>
            <span>
              <a
                href="https://github.com/Segun98/manage-landing-page"
                target="_blank"
                rel="noopener noreferrer"
              >Github Repo</a>
            </span>
          </div>
        </div>

        <div class="project-page-item" data-aos="fade-up">
          <img :src="Youtube" alt="the image of an Youtube Clone app" />
          <p>Youtube Clone</p>
          <h5>It was built the morning after Nigeria recorded its first case of Covid-19. This was in February</h5>
          <div class="tech-used">
            <p>Reactjs</p>
            <p>Youtube API</p>
            <p>Axios</p>
          </div>
          <div class="project-page-span">
            <span>
              <a
                href="https://youtube-clone.segunos.now.sh/"
                target="_blank"
                rel="noopener noreferrer"
              >Live Preview</a>
            </span>
            <span>
              <a
                href="https://github.com/Segun98/Youtube-Clone-App"
                target="_blank"
                rel="noopener noreferrer"
              >Github Repo</a>
            </span>
          </div>
        </div>

        <div class="project-page-item" data-aos="fade-up">
          <img :src="Cart" alt="the image of my shopping cart project" />
          <p>Shopping Cart</p>
          <h5>My first introduction to Higher Order Array Methods like map, filter, reduce</h5>
          <div class="tech-used">
            <p>Reactjs</p>
            <p>Context API</p>
            <p>Local Storage</p>
          </div>
          <div class="project-page-span">
            <span>
              <a
                href="https://shoppingcart-project.now.sh"
                target="_blank"
                rel="noopener noreferrer"
              >Live Preview</a>
            </span>
            <span>
              <a
                href="https://github.com/Segun98/shopping-cart-project"
                target="_blank"
                rel="noopener noreferrer"
              >Github Repo</a>
            </span>
          </div>
        </div>
      </div>
    </section>
    <section>
      <Footer top="/projects/#top" />
    </section>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

// images
import Employeez from "../assets/employeezapp.png";
import Locallog from "../assets/locallog.png";
import Nairatrack from "../assets/nairatrack.png";
import Averages from "../assets/averages.png";
import Manage from "../assets/manage-page.png";
import Quiz from "../assets/quiz-app-sc.png";
import Cart from "../assets/cart-project.png";
import Youtube from "../assets/youtube-clone.png";
import PartyStore from "@/assets/partystore/p10.png";

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      Employeez,
      Locallog,
      Nairatrack,
      Averages,
      Manage,
      Quiz,
      Cart,
      Youtube,
      PartyStore
    };
  },
  computed: {
    isDark() {
      return this.$store.getters.darkState;
    }
  }
};
</script>

<style scoped>
.projects-page {
  background: #d8eefe;
  padding: 40px 0;
  transition: 0.5s ease-in-out;
}
.darkMode {
  background: rgb(21, 32, 43);
  background: black;
  transition: 0.5s ease-in-out;
}
.projects-page h2 {
  text-align: center;
  margin-bottom: 20px;
  margin-top: -10px;
  color: #094067;
  font-weight: bold;
  transition: 0.5s ease-in-out;
}
.projects-page h2:hover {
  transition: 0.5s ease-in-out;
  color: #ef4565;
}

.projects-page-wrap {
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 90%;
}

.project-page-item img {
  width: 100%;
  height: auto;
}

.project-page-item {
  background: #fffffe;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
}

.project-page-item h5 {
  margin: 8px 0;
  color: #5f6c7b;
  text-align: center;
}

.project-page-item p {
  margin-top: 5px;
  color: #094067;
  text-align: center;
}

.project-page-span span {
  margin-left: 8px;
  font-size: 0.9rem;
}
.project-page-span span a {
  color: #ef4565;
}

.tech-used {
  margin: 10px 0;
}
.tech-used p {
  display: inline-block;
  background: #3da9fc;
  padding: 10px;
  color: #fffffe;
  border: 1px solid #fffffe;
  margin: 3px;
}

.ecom-link{
  text-align: center;
}

.ecom-link a{
  color:#ef4565;
}
@media only screen and (min-width: 700px) {
  .projects-page-wrap {
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
}

@media only screen and (min-width: 1000px) {
  .projects-page-wrap {
    width: 80%;
    gap: 30px;
  }
}

@media only screen and (min-width: 1200px) {
  .projects-page-wrap {
    width: 70%;
  }
}

@media only screen and (min-width: 2000px) {
  .projects-page-wrap {
    width: 60%;
  }

  .project-page-item h5 {
    font-size: 1.2rem;
  }
  .project-page-item p {
    font-size: 1.4rem;
  }
}
</style>