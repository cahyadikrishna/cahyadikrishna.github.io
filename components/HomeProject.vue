<template>
  <section class="project">
    <div class="container">
      <h2 class="text-heading-2 text-bold">My Project</h2>

      <div class="project-wrapper">
        <CardProject v-for="data in 4" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.container {
  border: 2px solid var(--black-secondary);
  border-width: 2px 0 2px 0;
  padding: 80px 0;
}

.project-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 40px 0;
  justify-content: space-between;
  margin-top: 32px;
}
</style>
