<template>
  <div>
    <div>{{ dato1 }} {{ dato2 }} {{ dato3 }}</div>
    <div>
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    dato1: String,
    dato2: String,
    dato3: String,
  },
};
</script>
