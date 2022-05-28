<template>
  <div>
    <p>{{ "7 char" | ellipsis }}</p>
    <p>{{ "14 characters" | ellipsis }}</p>
    <p>{{ "More than 14 characters" | ellipsis }}</p>
    <p>{{ null | ellipsis }}</p>
    <p>{{ 55 | ellipsis }}</p>
    <p>props: {{ data }}</p>
  </div>
</template>

<script>
import { ellipsis } from "../utils/filters";

export default {
  name: "EllipsisComponenet",
  filters: {
    ellipsis,
  },
  props: {
    data: String,
  },
};
</script>
