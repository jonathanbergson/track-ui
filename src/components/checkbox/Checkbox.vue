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

<style scoped lang="scss">
.checkbox-container {
  margin-bottom: var(--track-spacing-md);
  position: relative;
}

.checkbox-label {
  align-items: flex-start;
  cursor: pointer;
  display: inline-flex;

  .checkbox-container.disabled > & {
    cursor: not-allowed;
  }
}

// NOTE: Fazer com o elemento input do html não seja exibido na tela
// NOTE: Não foi utilizado (display: none) para que o input ainda possa receber :focus
.checkbox-input {
  position: absolute;
  left: -10000px;
  top: -10000px;
  opacity: 0;
}

.checkbox-checkmark {
  align-items: center;
  background-color: transparent;
  border-radius: var(--track-spacing-xxs);
  border: var(--track-spacing-xxs) solid var(--track-color-bluegray-70);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  // TODO: Criar novos tokens
  height: 18px;
  margin: 3px;
  position: relative;
  transition: all 0.2s;
  width: 18px;
  z-index: 10;

  .checkbox-label:not(.checked):not(.disabled):not(.error):not(.indeterminate):hover
    & {
    background-color: var(--track-color-positive-lightest);
  }

  .checkbox-label:not(.disabled):not(.error):hover & {
    background-color: var(--track-color-brand-primary-darkest);
    border-color: var(--track-color-brand-primary-darkest);
  }

  // NOTE: Estilo para o estado ERROR
  .checkbox-label.error:not(.disabled) & {
    border-color: var(--track-color-negative-medium);
  }

  .checkbox-input.error:checked ~ & {
    background-color: var(--track-color-negative-medium);
  }

  .checkbox-label.error:not(.checked):not(.disabled):not(.indeterminate):hover
    & {
    background-color: var(--track-color-negative-lightest);
  }

  // NOTE: Estilo para o estado CHECKED
  .checkbox-input:checked ~ &,
  .checkbox-input.indeterminate:not(.disabled) ~ & {
    background-color: var(--track-color-brand-primary);
    border-color: var(--track-color-brand-primary);
  }

  // NOTE: Estilo para o estado DISABLED
  .checkbox-input:disabled ~ &,
  .checkbox-input.disabled ~ & {
    border-color: var(--track-color-bluegray-40);
  }

  .checkbox-input:checked:disabled ~ &,
  .checkbox-input:checked.disabled ~ &,
  .checkbox-input:disabled.indeterminate ~ &,
  .checkbox-input.disabled.indeterminate ~ & {
    border-color: var(--track-color-bluegray-40);
    background-color: var(--track-color-bluegray-40);
  }

  // NOTE: ícone do checked e indeterminate do checkbox
  .checkbox-input ~ &:before {
    content: "";
    display: none;
    box-sizing: border-box;
    border-width: 0;
    border-color: var(--track-color-white);
    border-style: solid;
  }

  .checkbox-input:checked ~ &:before,
  .checkbox-input.indeterminate ~ &:before {
    display: block;
  }

  .checkbox-input.indeterminate ~ &:before {
    border-bottom-width: var(--track-spacing-xxs);
    width: 10px;
    height: 0;
  }

  .checkbox-input:checked ~ &:before {
    border-left-width: var(--track-spacing-xxs);
    border-bottom-width: var(--track-spacing-xxs);
    width: 12px;
    height: 6px;
    transform: translateY(-1px) rotate(-45deg);
  }
}

// NOTE: quadrado que aparece quando o input recebe :focus
.checkbox-focused {
  background-color: var(--track-color-bluegray-20);
  border-radius: var(--track-spacing-xs);
  border: 1px solid var(--track-color-bluegray-70);
  height: 0;
  left: 50%;
  opacity: 0;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.2s;
  width: 0;
  z-index: 1;

  .checkbox-input:focus ~ & {
    height: 24px;
    opacity: 1;
    width: 24px;
  }

  .checkbox-input:focus:checked ~ &,
  .checkbox-input.indeterminate ~ &,
  .checkbox-label:not(.disabled):hover & {
    background-color: var(--track-color-positive-lightest);
    border-color: var(--track-color-brand-primary);
  }

  .checkbox-label:not(.disabled):hover & {
    border-color: var(--track-color-brand-primary-darkest);
  }

  .checkbox-input.error:focus ~ & {
    background-color: var(--track-color-negative-lightest);
    border-color: var(--track-color-negative-medium);
  }
}

.checkbox-box {
  align-items: center;
  display: flex;
  min-height: 24px;
  position: relative;
}

.checkbox-text {
  color: var(--track-color-bluegray-70);
  font-size: var(--track-font-size-xs);
  line-height: var(--track-spacing-md);
  margin-left: var(--track-spacing-sm);

  &.disabled {
    color: var(--track-color-bluegray-40);
  }

  &.help {
    color: var(--track-color-bluegray-60);
  }

  &.error {
    color: var(--track-color-negative-medium);
  }
}
</style>
