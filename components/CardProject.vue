<template>
  <div class="project-card">
    <NuxtLink class="project-link" to="#">
      <h3 class="text-heading-4 text-semibold">Lokerian Dashboard Admin</h3>
    </NuxtLink>
    <p class="text-body-1">
      Seorang Mahasiswa Jurusan Sistem Informasi yang menyukai tentang User
      Interface Design. Saat ini bertempat tinggal di Bali - Gianyar.
    </p>
    <div class="hastags">
      <span>#VueJS</span>
      <span>#Sass</span>
      <span>#Nuxt</span>
      <span>#Quasar</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project {
  &-wrapper {
    display: flex;
    flex-wrap: wrap;
    margin-top: 32px;
  }

  &-card {
    width: 540px;

    p {
      margin-top: 12px;
      color: var(--gray-primary);
    }
  }

  &-link {
    color: var(--white-primary);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
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
