<template>
  <div>
    <section class="contact" id="contact">
      <h2>Contact</h2>
      <form data-aos="fade-up">
        <aside>
          <label for="name">Your Name</label>
          <input type="text" name="name" id="name" placeholder="Your Name" required />
        </aside>
        <aside>
          <label for="name">Your Email</label>
          <input type="email" name="email" id="email" placeholder="example@hey.com" required />
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
          ></textarea>
        </aside>
      </form>
    </section>
  </div>
</template>

<script>
export default {};
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

@media only screen and (min-width: 700px) {
  form {
    width: 50%;
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