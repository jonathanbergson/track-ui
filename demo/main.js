import { createApp } from "vue";
import Demo from "./Demo.vue";
import TrackUI, { Checkbox } from "../src";
import "../src/css/commons.css";

createApp(Demo).use(TrackUI).use(Checkbox).mount("#app");
