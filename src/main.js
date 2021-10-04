import { createApp } from "vue";
import Demo from "./Demo.vue";
// import Counter from "./components/counter";
// import Hello from "./components/hello";
import TrackUI from ".";

createApp(Demo).use(TrackUI).mount("#app");
// createApp(App).use(Counter).use(Hello).mount("#app");
