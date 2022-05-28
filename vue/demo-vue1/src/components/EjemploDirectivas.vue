<template>
  <div>
    <div>
      <h1 v-if="false" v-once v-text="text">Loading...</h1>
      <h2 v-else-if="!true" v-html="html" />
      <a
        v-else
        :href="link.url"
        :target="link.target"
        :tabindex="link.tabindex"
        v-text="link.title"
      />
    </div>
    <br />
    <section>
      <div class="form">
        <label>
          Name
          <input type="text" v-model="name" />
        </label>
        <label>
          Preferred javascript style
          <select name="language" v-model="language">
            <option value="Javascript">JavaScript</option>
            <option value="TypeScript">TypeScript</option>
            <option value="CoffeeScript">CoffeeScript</option>
            <option value="Dart">Dart</option>
          </select>
        </label>
      </div>
      <ul class="overview">
        <li><strong>Overview</strong></li>
        <li>Name: {{ name }}</li>
        <li>Preference: {{ language }}</li>
      </ul>
    </section>
    <section>
      <h1>Looping through arrays</h1>
      <ul>
        <li v-for="n in 5" :key="`loop-1-${n}`">{{ n }}</li>
        <li v-for="n in 5" :key="`loop-2-${n}`">{{ n }}</li>
      </ul>
    </section>
    <section>
      <ul>
        <li v-for="(item, i) in pasatiempos" :key="i">{{ item }}</li>
      </ul>
    </section>
    <section>
      <ul>
        <li v-for="persona in personas" :key="persona.id">
          {{ persona.id }}: {{ persona.nombre }}, {{ persona.ciudad }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // v-text
      text: "Directive text",
      // v-html
      html: "Stylise</br>HTML in<br/><b>your data</b>",
      link: {
        url: "https://www.google.com/",
        target: "_blank",
        title: "Go to Google",
      },
      name: "",
      language: "",
      pasatiempos: ["Netflix", "Correr"],
      personas: [
        { id: 1, nombre: "Sergio", ciudad: "Tijuana" },
        { id: 2, nombre: "Daniel", ciudad: "Tijuana" },
        { id: 3, nombre: "Ana", ciudad: "Tijuana" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
h2 {
  margin: 40px 0 0;
  font-weight: normal;
}

.form {
  display: flex;
  justify-content: space-evenly;
  max-width: 800px;
  padding: 40px 20px;
  border-radius: 10px;
  margin: 0 auto;
  background: #ececec;
}

.overview {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 300px;
  margin: 40px auto;
  padding: 40px 20px;
  border-radius: 10px;
  border: 1px solid #ececec;

  > li {
    list-style: none;
    + li {
      margin-top: 20px;
    }
  }
}
</style>
