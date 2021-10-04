import Hello from "./Hello";

import { registerComponent } from "../../utils/plugins";

const Plugin = {
  install(Vue) {
    registerComponent(Vue, Hello);
  },
};

// use(Plugin);

export default Plugin;

export { Hello as THello };
