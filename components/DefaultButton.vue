<template>
  <NuxtLink class="btn-default">
    <slot />
  </NuxtLink>
</template>

<style scoped lang="scss">
.btn-default {
  align-items: center;
  background-image: var(--text-gradient);
  border: none;
  border-radius: 2px;
  color: var(--white-primary);
  cursor: pointer;
  display: inline-flex;
  margin-top: 32px;
  justify-content: center;
  padding: 12px 20px;
  text-decoration: none;
  gap: 10px;
  transition: 0.4s, background-position 0s;

  &:hover {
    background-image: var(--gradient-primary);
  }
}
</style>
