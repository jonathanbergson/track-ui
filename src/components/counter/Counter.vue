<template>
  <div id="counter">Counter: {{ counter }}</div>
</template>

<script>
export default {
  name: "TCounter",
  data() {
    return {
      counter: 0,
    };
  },
};
</script>
