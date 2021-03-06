import Counter from "./Counter";

import { use, registerComponent } from "../../utils/plugins";

const Plugin = {
  install(Vue) {
    registerComponent(Vue, Counter);
  },
};

use(Plugin);

export default Plugin;

export { Counter as TCounter };
