import * as components from "./components";

const TrackUI = {
  install(Vue) {
    for (let key in components) {
      Vue.use(components[key]);
    }
  },
};

export default TrackUI;

export * from "./components";
