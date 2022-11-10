<template>
  <div id="layout-default">
    <DefaultHeader />
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss">
.text-gradient {
  background-image: var(--text-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>
