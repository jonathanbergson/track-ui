import Tab from "./Tab";
import Tabs from "./Tabs";

import { registerComponent } from "../../utils/plugins";

const Plugin = {
  install(Vue) {
    registerComponent(Vue, Tab);
    registerComponent(Vue, Tabs);
  },
};

export default Plugin;

export { Tab as TTab };
export { Tabs as TTabs };
