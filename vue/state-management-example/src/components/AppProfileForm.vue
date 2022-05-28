<template>
  <section class="md:w-2/3 flex flex-col p-12 items-center">
    <!-- Inputs -->
    <div class="flex flex-col">
      <label class="flex text-gray-800 mb-2" for="name">Name </label>
      <input
        id="name"
        type="text"
        name="name"
        class="border-2 border-solid border-blue-200 rounded px-2 py-1"
        v-model="name"
      />
    </div>
    <div class="flex flex-col mt-2">
      <label class="flex text-gray-800 mb-2" for="occupation">Occupation</label>
      <input
        id="occupation"
        type="text"
        name="occupation"
        class="border-2 border-solid border-blue-200 rounded px-2 py-1"
        v-model="occupation"
      />
    </div>
    <div class="flex align-center mt-12">
      <button type="submit" @click="submitForm()">Submit</button>
    </div>
  </section>
</template>

<script>
import eventBus from "../event-bus";

export default {
  mounted() {
    eventBus.$on("profileUpdate", this.handleProfileUpdate);
  },
  beforeDestroy() {
    eventBus.$off("profileUpdate", this.handleProfileUpdate);
  },
  data() {
    return {
      name: "",
      occupation: "",
    };
  },
  methods: {
    submitForm() {
      eventBus.$emit("profileUpdate", {
        name: this.name,
        occupation: this.occupation,
      });
      /* this.$emit("submit", {
        name: this.name,
        occupation: this.occupation,
      }); */
    },
    clear() {
      this.name = "";
      this.occupation = "";
      eventBus.$emit("profileUpdate", {});
      //this.$emit("submit", {});
    },
    handleProfileUpdate(formData) {
      this.name = formData.name || "";
      this.occupation = formData.occupation || "";
    },
  },
};
</script>
