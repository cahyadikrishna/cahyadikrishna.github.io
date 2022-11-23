<template>
  <section class="project">
    <div class="container">
      <h2 class="text-heading-2 text-bold">My Project</h2>

      <div class="project-wrapper">
        <div class="project-item">
          <h3 class="text-heading-4 text-semibold">Lokerian Dashboard Admin</h3>
          <p class="text-body-1">
            Seorang Mahasiswa Jurusan Sistem Informasi yang menyukai tentang
            User Interface Design. Saat ini bertempat tinggal di Bali - Gianyar.
          </p>
          <div class="hastags">
            <span>#VueJS</span>
            <span>#Sass</span>
            <span>#Nuxt</span>
            <span>#Quasar</span>
          </div>
        </div>
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

.project {
  &-wrapper {
    display: flex;
    flex-wrap: wrap;
    margin-top: 32px;
  }

  &-item {
    width: 540px;

    p {
      margin-top: 12px;
      color: var(--gray-primary);
    }
  }
}

.hastags {
  display: flex;
  gap: 40px;
  margin-top: 12px;

  span {
    font-weight: 500;
  }
}
</style>
