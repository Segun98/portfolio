<template>
  <div>
    <footer>
      <ul>
        <li>
          <a href="https://github.com/segun98" target="_blank" rel="noopener noreferrer">Github</a>
        </li>
        <li>
          <a href="https://twitter.com/segun_os" target="_blank" rel="noopener noreferrer">Twitter</a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/segun-olanitori-b76275162"
            target="_blank"
            rel="noopener noreferrer"
          >LinkedIn</a>
        </li>
      </ul>
      <p>
        Created with Vuejs
        <span>&hearts;</span>
        <span>
          <a :href="top">Go To Top</a>
        </span>
      </p>
      <h3>
        I got my Color Inspiration from
        <a href="https://www.happyhues.co/">Happy Hues</a>
      </h3>
    </footer>
  </div>
</template>

<script>
export default {
  props: ["top"]
};
</script>

<style>
footer {
  padding: 30px;
  background: #fffffe;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

footer h3 {
  text-align: center;
  font-size: 12px;
  margin-top: 5px;
}

footer p span {
  color: red;
  font-size: 2rem;
}
footer p span:last-child a {
  font-size: 0.9rem;
  text-decoration: underline;
  margin-left: 5px;
}

footer ul {
  display: flex;
}
footer ul li a {
  color: var(--blue);
  margin: 0 10px;
}
</style>