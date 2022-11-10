<template>
  <header>
    <div class="container">
      <div class="header-wrapper">
        <NuxtLink to="/" class="logo">
          <img src="/chy-icon.svg" alt="Cahyadi Krishna" />
        </NuxtLink>

        <nav class="default-nav">
          <NuxtLink to="/" class="text-heading-6 text-medium nav-item">
            Home
          </NuxtLink>
          <NuxtLink to="/project" class="text-heading-6 text-medium nav-item">
            Project
          </NuxtLink>
          <NuxtLink to="/about" class="text-heading-6 text-medium nav-item">
            About
          </NuxtLink>
          <NuxtLink to="/contact" class="text-heading-6 text-medium nav-item">
            Contact
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.logo {
  img {
    width: 40px;
    height: 40px;
  }
}

.header-wrapper {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
}

.default-nav {
  display: flex;
  gap: 36px;
}

.nav-item {
  color: var(--white-primary);
  text-decoration: none;

  &:hover,
  &.router-link-exact-active {
    color: var(--purple-primary);
  }
}
</style>
