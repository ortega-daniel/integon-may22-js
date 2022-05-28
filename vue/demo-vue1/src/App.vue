<template>
  <div id="app">
    <MessageEditor @send="onSend($event)" />
    <MessageFeed :messages="messages" />
    <hr />
    <DemoEventos @ButtonClick="respuestaEvento" />
    <hr />
    <TextEditorWithCount />
    <hr />
    <Ellipsis />
    <hr />
    <Ellipsis :data="lorem | ellipsis" />
    <hr />
    <HelloWorld />
    <hr />
    <SlottedComponent>
      <h1>Esto va en el slot</h1>
    </SlottedComponent>
    <BindingDemo dato1="Dato 1">
      <h1>This is a slot!</h1>
    </BindingDemo>
    <!-- <RepeatComponent :config="{ times: 3, content: 'Repeat me.' }" /> -->
    <!-- <GreetingsExample :greeting="greeting" :who="who" /> -->
    <!-- <GreetingsExample /> -->
    <!-- <button @click="newGreeting()">New Greeting</button> -->
    <!-- <DemoAxios /> -->
    <!-- <BindingDemo :dato1="input1" :dato2="input2" :dato3="input3" /> -->
    <!-- <SearchComponent /> -->
    <!-- <DemoWatcher /> -->
    <!-- <EjemplosData /> -->
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Matematico v-bind:x="6" v-bind:y="6" op="*" />
    <PugTest />
    <CuentaCaracteres />
    <EjemploDirectivas /> -->
    <!--     <CarritoDeCompras />
    <CuentaCaracteres /> -->
  </div>
</template>

<script>
//import GreetingsExample from "./components/GreetingsExample.vue";
//import RepeatComponent from "./components/RepeatComponent.vue";
/* import DemoAxios from "./components/DemoAxios.vue"; */
import BindingDemo from "./components/BindingDemo.vue";
import HelloWorld from "./components/HelloWorld.vue";
/* import Matematico from "./components/Matematico.vue"; */
/* import PugTest from "./components/PugTest.vue"; */
/* import CuentaCaracteres from "./components/CuentaCaracteres.vue"; */
/* import EjemploDirectivas from "./components/EjemploDirectivas.vue"; */
/* import CarritoDeCompras from "./components/CarritoDeCompras.vue";
import CuentaCaracteres from "./components/CuentaCaracteres.vue"; */
//import EjemplosData from "./components/EjemplosData.vue";
//import DemoWatcher from "./components/DemoWatcher.vue";
//import SearchComponent from "./components/SearchComponent.vue";
import SlottedComponent from "./components/SlottedComponent.vue";
import Ellipsis from "./components/Ellipsis.vue";
import TextEditorWithCount from "./components/TextEditorWithCount.vue";
import DemoEventos from "./components/DemoEventos.vue";
import MessageEditor from "./components/MessageEditor.vue";
import MessageFeed from "./components/MessageFeed.vue";

import { ellipsis } from "./utils/filters";

const possibleGreetings = [
  { greeting: "Hello", who: "Vue.js" },
  { greeting: "Hey", who: "Everyone" },
  { greeting: "Hi", who: "JavaScript" },
];

export default {
  name: "App",
  data() {
    return {
      input1: "123",
      input2: "456",
      input3: "789",
      currentIndex: 0,
      lorem:
        "loremloremloremloremloremloremloremloremloremloremloremloremloremlorem",
      messages: [],
    };
  },
  filters: {
    ellipsis,
  },
  computed: {
    currentGreeting() {
      return possibleGreetings[this.currentIndex];
    },
    possibleGreetingsLength() {
      return possibleGreetings.length - 1;
    },
    greeting() {
      return this.currentGreeting.greeting;
    },
    who() {
      return this.currentGreeting.who;
    },
  },
  methods: {
    newGreeting() {
      this.currentIndex =
        this.currentIndex === this.possibleGreetingsLength
          ? 0
          : this.currentIndex + 1;
    },
    respuestaEvento($event) {
      console.log($event);
      console.log("click");
    },
    onSend(message) {
      this.messages = [...this.messages, message];
    },
  },
  components: {
    //GreetingsExample,
    //RepeatComponent,
    //DemoAxios,
    MessageFeed,
    MessageEditor,
    DemoEventos,
    TextEditorWithCount,
    Ellipsis,
    BindingDemo,
    SlottedComponent,
    HelloWorld,
    /* PugTest,
    HelloWorld,
    Matematico,
    CuentaCaracteres,
    EjemploDirectivas, */
    /*     CarritoDeCompras,
    CuentaCaracteres, */
    //EjemplosData,
    //DemoWatcher,
    //SearchComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
