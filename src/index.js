import * as components from "./components";
// import { use } from "./utils/plugins";

const TrackUI = {
  install(Vue) {
    // Set Components
    for (let componentKey in components) {
      Vue.use(components[componentKey]);
    }
  },
};

// use(TrackUI);

export default TrackUI;

export * from "./components";
