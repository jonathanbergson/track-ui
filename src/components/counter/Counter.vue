<template>
  <div id="counter">Counter: {{ counter }}</div>
</template>

<script>
export default {
  name: "t-counter",
  data() {
    return {
      counter: 0,
    };
  },
};
</script>
