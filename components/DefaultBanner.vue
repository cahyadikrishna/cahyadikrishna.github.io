<template>
  <section class="banner">
    <div class="decoration">
      <img src="@/assets/decorations/big-spiral.svg" alt="" />
    </div>

    <div class="container">
      <h2 class="text-heading-1 text-bold headline">
        Cahyadi Krishna, <span class="text-gradient">Front-End</span> Web
        Developer
      </h2>

      <div class="banner-img-wrapper">
        <div class="banner-img-left">
          <div class="img-item-left">
            <img src="@/assets/banner-1.jpg" alt="" />
          </div>

          <div class="img-item-left">
            <img src="@/assets/banner-2.png" alt="" />
          </div>
        </div>
        <div class="img-item-right">
          <img src="@/assets/banner-3.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.decoration {
  position: absolute;
  top: 0;
  right: 0;
}

.banner {
  padding: 80px 0;
  position: relative;
}

.headline {
  width: 636px;
}

.banner-img {
  &-wrapper {
    margin-top: 48px;
    display: flex;
    height: 714px;
    gap: 16px;
  }

  &-left {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 16px;
  }
}

.img-item {
  &-left {
    overflow: hidden;
    height: 350px;
    width: 350px;

    img {
      border-radius: 8px;
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
  }

  &-right {
    border-radius: 8px;
    height: 100%;
    overflow: hidden;
    width: 744px;

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
}

.text-gradient {
  background-image: var(--text-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>
