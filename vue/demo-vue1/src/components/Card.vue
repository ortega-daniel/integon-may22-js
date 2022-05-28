<template>
  <div>
    <slot name="image" />
    <slot name="title" />
    <slot name="description" />
  </div>
</template>

<script>
export default {
  name: "CardComponent",
};
</script>
