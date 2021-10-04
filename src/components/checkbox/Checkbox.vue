<template>
  <div class="checkbox-container" :class="classStatus">
    <label class="checkbox-label" :class="classStatus">
      <div>
        <div class="checkbox-box">
          <input
            :checked="checked"
            :class="classStatus"
            :disabled="disabled"
            :value="value"
            class="checkbox-input"
            type="checkbox"
            @blur="handleBlur"
            @change="handleChange($event.target.checked)"
            @focus="handleFocus"
          />
          <div class="checkbox-checkmark" />
          <div class="checkbox-focused" />
        </div>
      </div>

      <div>
        <div v-if="label" class="checkbox-box">
          <div class="checkbox-text">{{ label }}</div>
        </div>
        <div v-if="error" class="checkbox-box">
          <div class="checkbox-text error">{{ errorMessage }}</div>
        </div>
        <div v-else-if="helpText" class="checkbox-box">
          <div class="checkbox-text help">{{ helpText }}</div>
        </div>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: "TCheckbox",
  model: {
    prop: "modelValue",
    event: "input",
  },
  props: {
    modelValue: [Boolean, Array],
    disabled: { type: Boolean, default: false },
    error: { type: Boolean, default: false },
    errorMessage: { type: String, default: "" },
    helpText: { type: String, default: "" },
    indeterminate: { type: Boolean, default: false },
    label: { type: String, default: "" },
    value: { type: String, default: "" },
  },
  data() {
    return {
      focused: false,
      checked: false,
    };
  },
  computed: {
    classStatus() {
      return {
        checked: this.checked,
        disabled: this.disabled,
        error: this.error || this.errorMessage,
        focused: this.focused,
        indeterminate: this.indeterminate,
      };
    },
  },
  watch: {
    modelValue(modelValue) {
      this.updateCheckboxStatus(this.value, modelValue);
    },
  },
  mounted() {
    this.updateCheckboxStatus(this.value, this.modelValue);
  },
  methods: {
    handleBlur() {
      this.focused = false;
    },
    handleChange(checked) {
      if (this.disabled) return;

      if (Array.isArray(this.modelValue)) {
        this.updateArrayModelValue(checked);
      } else {
        this.$emit("input", checked);
      }
    },
    handleFocus() {
      this.focused = true;
    },
    updateArrayModelValue(checked) {
      if (checked) {
        this.modelValue.push(this.value); // eslint-disable-line
      } else {
        this.modelValue.splice(this.modelValue.indexOf(this.value), 1); // eslint-disable-line
      }
    },
    updateCheckboxStatus(inputValue, modelValue) {
      if (Array.isArray(modelValue)) {
        this.checked = modelValue.includes(inputValue);
      } else {
        this.checked = !!modelValue;
      }
    },
  },
};
</script>

<style scoped>
.checkbox-container {
  position: relative;
}
</style>
