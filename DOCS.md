# CSS

``` scss
/* PARENT */
.t-checkbox {}

  /* CHILDREN */
  .t-checkbox-label {}
  .t-checkbox-input {}
  .t-checkbox-checkmark {}

  /* PSEUDO CLASS */
  &.is-actived, &:active {}
  &.is-hovered, &:hover {}
  &.is-focused, &:focus {}
  &.is-visited, &:visited {}

  /* STATUS */
  &.is-checked, &:checked {}
  &.is-disabled, &[disabled] {}
  &.is-loading {}
  &.is-selected {}

  /* COLORS */
  &.is-error {}
  &.is-success {}
  &.is-warn {}

  /* SIZES */
  &.is-xsmall {}
  &.is-small {}
  &.is-medium {}
  &.is-large {}
  &.is-xlarge {}

  /* EXTRA STYLES */
  .is-expanded {}
  .is-inverted {}
  .is-outlined {}
```

# Vue.js Props

``` html
<div>
  <t-checkbox checked>Checked</t-checkbox>
  <t-checkbox disabled>Disabled</t-checkbox>
  <t-checkbox loading>Loading</t-checkbox>
  <t-checkbox selected>Selected</t-checkbox>

  <!-- COLORS -->
    <t-checkbox color="error">Error</t-checkbox>
    <t-checkbox color="success">Success</t-checkbox>
    <t-checkbox color="warn">Warn</t-checkbox>
    <!-- Ou -->
    <t-checkbox type="error">Error</t-checkbox>
    <t-checkbox type="success">Success</t-checkbox>
    <t-checkbox type="warn">Warn</t-checkbox>
    <!-- Ou -->
    <t-checkbox status="error">Error</t-checkbox>
    <t-checkbox status="success">Success</t-checkbox>
    <t-checkbox status="warn">Warn</t-checkbox>
    <!-- Ou -->
    <t-checkbox error>Error</t-checkbox>
    <t-checkbox success>Success</t-checkbox>
    <t-checkbox warn>Warn</t-checkbox>

  <!-- SIZES -->
    <t-checkbox size="sm">Error</t-checkbox>
    <t-checkbox size="lg">Success</t-checkbox>
    <t-checkbox size="xl">Success</t-checkbox>
    <!-- Ou -->
    <t-checkbox size="small">Error</t-checkbox>
    <t-checkbox size="large">Success</t-checkbox>
    <t-checkbox size="xlarge">Success</t-checkbox>
    <!-- Ou -->
    <t-checkbox sm>Error</t-checkbox>
    <t-checkbox lg>Success</t-checkbox>
    <t-checkbox xl>Success</t-checkbox>
</div>
```
