<template>
  <button id="counter">Counter: {{ counter }}</button>
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
