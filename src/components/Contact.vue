<template>
  <div>
    <section class="contact" id="contact">
      <h2>Contact</h2>
      <form data-aos="fade-up" @submit="handleForm">
        <aside>
          <label for="name">Your Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            v-model.trim="name"
            required
          />
        </aside>
        <aside>
          <label for="name">Your Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@hey.com"
            required
            v-model.trim="email"
          />
        </aside>
        <aside>
          <label for="name">Message Body</label>
          <textarea
            name="body"
            id="body"
            cols="30"
            rows="10"
            placeholder="Start typing..."
            required
            v-model.trim="body"
          ></textarea>
        </aside>
        <p class="loading" :class="{ 'loading-true': loading }">
          {{ message }}
        </p>
        <div class="contact-btn">
          <button type="submit">Send</button>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      loading: false,
      message: "",
      name: "",
      email: "",
      body: "",
    };
  },
  methods: {
    async handleForm(e) {
      e.preventDefault();
      const payload = {
        email: this.email,
        text: `${this.name},


        ${this.body}`,
      };
      try {
        this.loading = true;
        this.message = "Sending...";
        const res = await axios.post(
          "https://apiportfolio.vercel.app/api/mail",
          payload
        );
        const data = await res.data;
        if (data.message) {
          this.name = "";
          this.email = "";
          this.body = "";
          setTimeout(() => {
            this.message = "Message Recieved!";
          }, 5000);
        }
      } catch (err) {
        console.log(err);
        if (err) {
          setTimeout(() => {
            this.message = "an error occurred, check your internet connection";
          }, 5000);
        }
      }
    },
  },
};
</script>

<style>
.contact {
  background: #232946;
  padding: 20px 0;
}

.contact h2 {
  text-align: center;
  color: #fffffe;
  margin: 20px 0;
  font-weight: bold;
  transition: 0.5s ease-in-out;
}
.contact h2:hover {
  transition: 0.5s ease-in-out;
  color: #ef4565;
}

form {
  margin: auto;
  width: 80%;
}

form aside label {
  color: #fffffe;
  margin: 10px 0;
}
form aside {
  display: flex;
  flex-direction: column;
}

form aside input {
  background: #fffffe;
  border: none;
  padding: 10px;
}

form aside textarea {
  padding: 10px;
}

.contact-btn {
  margin: 20px auto;
  width: 50%;
  text-align: center;
}
.contact-btn button {
  background: #ef4565;
  border: none;
  padding: 10px 20px;
}

.contact-btn button {
  color: #fffffe;
  font-weight: bold;
}

.loading {
  text-align: center;
  display: none;
  color: whitesmoke;
  padding-top: 10px;
}
.loading-true {
  display: block;
}

@media only screen and (min-width: 700px) {
  form {
    width: 50%;
  }

  .contact-btn button {
    padding: 15px 30px;
  }
}

@media only screen and (min-width: 1200px) {
  form {
    width: 40%;
  }
}

@media only screen and (min-width: 2000px) {
  form {
    width: 30%;
  }
}
</style>
