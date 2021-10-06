<template>
  <div class="t-tab" :class="classes" @click="handleClickTab">
    <div class="t-tab-content">
      <div class="t-tab-label t-tab-label--regular">{{ label }}</div>
      <div class="t-tab-label t-tab-label--semibold">{{ label }}</div>
    </div>
    <div class="t-tab-highlight" />
  </div>
</template>

<script>
export default {
  model: {
    prop: "activeTab",
    event: "change",
  },
  props: {
    activeTab: { type: String, default: "" },
    disabled: { type: Boolean, default: false },
    index: { type: String, required: true },
    label: { type: String, default: "Label" },
    type: {
      type: [String], // disabled error selected
      default: "",
    },
  },
  emits: ["change"],
  computed: {
    classes() {
      return {
        "is-disabled": this.type === "disabled" || this.disabled,
        "is-error": this.type === "error",
        "is-selected": this.type === "selected",
      };
    },
  },
  methods: {
    handleClickTab() {
      if (this.disabled === false) {
        this.$emit("change", this.index);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.t-tab {
  align-items: center;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  cursor: pointer;
  display: inline-flex;
  position: relative;

  --t-tab-label-color: var(--track-color-bluegray-70);
  --t-tab-label-hovered-color: var(--track-color-bluegray-80);
  --t-tab-highlight-color: transparent;
  --t-tab-highlight-hovered-color: var(--track-color-bluegray-40);

  &[disabled],
  &.is-disabled {
    --t-tab-label-color: var(--track-color-bluegray-50);
    --t-tab-label-hovered-color: var(--track-color-bluegray-50);
    --t-tab-highlight-hovered-color: transparent;
    cursor: not-allowed;
  }

  &.is-error,
  &.is-error.is-selected {
    --t-tab-label-color: var(--track-color-negative-darkest);
    --t-tab-label-hovered-color: var(--track-color-negative-darkest);
    --t-tab-highlight-hovered-color: var(--track-color-negative-lightest);
  }

  &.is-error.is-selected {
    --t-tab-highlight-color: var(--track-color-negative-lightest);
  }

  &.is-selected {
    --t-tab-label-color: var(--track-color-bluegray-80);
    --t-tab-highlight-color: var(--track-color-brand-primary);
    --t-tab-highlight-hovered-color: var(--track-color-brand-primary);
  }
}

.t-tab-content {
  padding: 0 24px;
  position: relative;
}

.t-tab-label {
  color: var(--t-tab-label-color);
  font-size: 16px;
  text-align: center;
  transition: all 0.1s;
  user-select: none;
  line-height: 48px;

  .t-tab:hover & {
    color: var(--t-tab-label-hovered-color);
  }

  &.t-tab-label--regular {
    font-weight: var(--track-font-weight-regular);
    position: absolute;
    top: 0;

    .t-tab.is-selected & {
      opacity: 0;
    }
  }

  &.t-tab-label--semibold {
    font-weight: var(--track-font-weight-semibold);
    opacity: 0;

    .t-tab.is-selected & {
      opacity: 1;
    }
  }
}

.t-tab-highlight {
  background-color: var(--t-tab-highlight-color);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  bottom: 0;
  height: 2px;
  left: 0;
  position: absolute;
  transition: all 0.5s;
  width: 100%;

  .t-tab:hover & {
    background-color: var(--t-tab-highlight-hovered-color);
  }
}
</style>
