<!-- <template>
  <div :class="{'darkMode': this.isDark}">
 <Header />
 <section class="tadlace-head" id="top">
     <h1>
     Tadlace
     </h1>
 </section>
 <div class="tadlace-wrap">

 <section class="slider">
<vueper-slides autoplay>
  <vueper-slide
    v-for="(slide, i) in slides"
    :key="i"
    :image="slide.image"
     />
</vueper-slides>

 </section>

 <section class="tadlace-about">
<p :class="{'light': this.isDark}">Tadlace is an e-commerce website I built from scratch from design to front end and back end implementation. I built it mainly to improve my skills and build up my portfolio. This project revealed the importance of design and planning a project's architecture before writing a line of code, my knowledge on user experience, accessibility and performance was also improved upon significantly.
</p>
<br>
<p :class="{'light': this.isDark}">
Some techologies/tools I used on this project:

<ul>
    <li>
ReactJS, NextJS
    </li>
    <li>
      TypeScript  
    </li>
    <li>
        NodeJS, ExpressJS
    </li>
    <li>
        PostgreSQL
    </li>
    <li>
       GraphQL 
    </li>
    <li>
      SASS/ChakraUI 
    </li>
</ul>
</p>
<br>
<p :class="{'light': this.isDark}">
    Tadlace has layout provisions for customers, vendors, admin and super admin, Customers can go all the way to paying with Paystack or Flutterwave test payment, it's exactly what you see in a real world e-commerce website.
</p>

<aside>
    <h3>Vendor</h3>
   
   <p :class="{'light': this.isDark}">
       Vendors have a comprehensive dashboard that highlights the status of their orders. A chart is also provided to view the amount of sales they make per month in a year. Vendors also have a public store page with only their products and an Orders table to take action on incoming orders.
       </p> 
    <figure>
    <img :src="Dashboard" alt="dashboard">
    <figcaption>Dashboard</figcaption>
    <img :src="Store" alt="Store">
    <figcaption>Store</figcaption>
    <img :src="Vorders" alt="Vorders">
    <figcaption>Orders</figcaption>
    </figure>

</aside>
<br>
<aside>
    <h3>Customer</h3>
    <p :class="{'light': this.isDark}">
    Customers can add to cart, save products, login easily with Google, manage their orders, pay with Paystack or Flutterwave and do many more!
    </p>
    <figure>
    <img :src="Login" alt="login">
    <figcaption>Login</figcaption>
    <img :src="Cart" alt="cart">
    <figcaption>Cart</figcaption>
    <img :src="Product" alt="product">
    <figcaption>Product</figcaption>
    <img :src="Orders" alt="orders">
    <figcaption>Orders</figcaption>
    </figure>

</aside>
<br>
<aside>
    <h3>Back-End</h3>
    <p :class="{'light': this.isDark}">
    Tadlace's API is powered by NodeJS, ExpressJS, Apollo Server Express and PostgreSQL. Tons of mutations, queries and type definitions power this simple looking e-commerce website. Most APIs were built with GraphQL while some were with REST API, e.g refresh token route and email services. Graphql made providing all the necessary data easy and concise.
    </p>
    <br>
    <p :class="{'light': this.isDark}">
        Joi is used for validation, SendGrid for emails, Bcrypt for passwords, Compression for compresing data sent over requests, Dataloader for solving GraphQL's n+1 problem, Cloudinary and Multer for image upload and so on... I learned a lot building it!
    </p>
</aside>
<br>
<p :class="{'light': this.isDark}">
    This website is a work-in-progress and it's responsive. The Front end is hosted on Vercel, while the backend and database are hosted on Heroku.
</p>
<br>
<br>
<p :class="{'light': this.isDark}">
    <span>
              <a
                href="https://skincare-project.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                >Live Preview... {{" "}}</a
              >
            </span>
            <span>
              <a
                href="https://github.com/Segun98/e-commerce"
                target="_blank"
                rel="noopener noreferrer"
                >Github Repo...</a
              >
            </span>
</p>
 </section>

 </div>
 <Footer top="/tadlace#top" />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import "vueperslides/dist/vueperslides.css";
import { VueperSlides, VueperSlide } from "vueperslides";

//Images
import Login from "../assets/tadlace/p3.png";
import Cart from "../assets/tadlace/p4.png";
import Orders from "../assets/tadlace/p1.png";
import Product from "../assets/tadlace/p13.png";
import Vorders from "../assets/tadlace/p9.png";
import Store from "../assets/tadlace/p12.png";
import Dashboard from "../assets/tadlace/p7.png";
export default {
  components: {
    Header,
    Footer,
    VueperSlides,
    VueperSlide,
  },
  computed: {
    isDark() {
      return this.$store.getters.darkState;
    },
  },
  data: () => ({
    Login,
    Cart,
    Orders,
    Product,
    Vorders,
    Store,
    Dashboard,
    pauseOnHover: true,
    autoPlaying: true,
    internalAutoPlaying: true,
    slides: [
      {
        image: require("@/assets/tadlace/p10.png"),
      },
      {
        image: require("@/assets/tadlace/p6.png"),
      },
      {
        image: require("@/assets/tadlace/p4.png"),
      },
      {
        image: require("@/assets/tadlace/p5.png"),
      },
      {
        image: require("@/assets/tadlace/p7.png"),
      },
      {
        image: require("@/assets/tadlace/p9.png"),
      },
      {
        image: require("@/assets/tadlace/p12.png"),
      },
    ],
  }),
};
</script>

<style scoped>
.darkMode {
  background: black;
  transition: 0.5s ease-in-out;
}

.light {
  transition: 0.5s ease-in-out;
  color: white;
}
h1 {
  text-align: center;
  color: var(--blue);
  margin: 20px 0;
}
.tadlace-wrap {
  margin: auto;
  width: 90%;
}
.tadlace-about {
  margin: 20px auto;
  width: 90%;
}
.tadlace-about p {
  line-height: 1.5;
  font-size: 0.9rem;
}

ul li {
  list-style: circle;
}
h3 {
  font-size: 0.9rem;
  text-align: center;
  color: var(--blue);
  padding: 5px 0;
}
figure {
  margin: 5px 0;
}
figure img {
  max-width: 100%;
  height: auto;
}
figcaption {
  font-size: 0.8rem;
  text-align: center;
  padding: 5px 0;
}

@media only screen and (min-width: 700px) {
  h1 {
    margin: 50px 0;
  }

  .tadlace-wrap {
    width: 80%;
  }
  .tadlace-about {
    margin: 50px auto;
    width: 90%;
  }
  .tadlace-about p {
    line-height: 1.8;
    font-size: 1.1rem;
  }

  h3 {
    font-size: 1.2rem;
    padding: 9px 0;
  }
  figcaption {
    font-size: 1rem;
  }
}

@media only screen and (min-width: 1000px) {
  .tadlace-about {
    width: 70%;
  }
}
</style> -->
