<template>
  <section class="about">
    <div class="container">
      <div class="about-wrapper">
        <div class="about-content-image">
          <img src="@/assets/foto-cahyadi-krishna.png" alt="" />
        </div>

        <div class="about-content-text">
          <h2 class="text-heading-2 text-bold headline">
            I love to do Web Dev and Create Meaningfull Design.
          </h2>

          <div class="desc">
            <p class="text-body-1">
              Seorang Mahasiswa Jurusan Sistem Informasi yang menyukai tentang
              User Interface Design. Saat ini bertempat tinggal di Bali -
              Gianyar.
            </p>
            <p class="text-body-1">
              Mulai menyukai tentang UI Design sejak SMK dan telah mengikuti
              beberapa lomba web design. Hingga kini masih sangat senang
              mengeksplorasi layout dan sedang menyukai Dark UI.
            </p>
          </div>

          <DefaultButton
            to="mailto:cahyadikrishna.ck@gmail.com"
            placeholder="Email Me"
          >
            <img alt="" class="btn-icon" src="@/assets/icons/email.svg" />
            <span class="text-body-3 text-medium">Email Me</span>
          </DefaultButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about {
  padding: 80px 0;
  position: relative;

  &-wrapper {
    display: flex;
    gap: 50px;
    padding: 0 50px;
  }
}

.about-content {
  &-image {
    flex-shrink: 0;
    overflow: hidden;
    width: 250px;
    height: 250px;

    img {
      border-radius: 50%;
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
  }

  &-text {
    flex-grow: 1;
  }
}

.desc {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
  color: var(--gray-primary);
}
</style>
