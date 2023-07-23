<template>
  <button :class="`${type} ${size}`">
    <router-link :to="goTo ? goTo : ''">
      <div class="button-div">
        <slot name="icon"></slot>
        <slot></slot>
      </div>
    </router-link>
  </button>
</template>

<script setup>
defineProps({
  goTo: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'default'
  },
  size: {
    type: String,
    default: 'default'
  }
})
</script>

<style scoped>
.button-div {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--r15);
}

button {
  display: inline-block;
  border: none;
  border-radius: var(--r10);
  background-color: transparent;
  color: var(--element-color-backgroun2);
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
}
button.default {
  background-color: transparent;
}

button.primary {
  background-color: var(--element-color-primary);
}

button.secondary {
  background-color: var(--element-color-secondary);
}

button.tertiary {
  background-color: var(--element-color-tertiary);
}

button.large {
  padding: var(--r15) var(--r20);
  font-size: var(--r18);
}

button.small {
  padding: var(--r10) var(--r15);
  font-size: var(--r12);
}

a:link,
a:visited {
  color: inherit;
}
</style>
