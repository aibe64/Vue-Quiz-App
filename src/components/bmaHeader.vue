<template>
  <header>
    <nav>
      <router-link to="/">
        <img src="../../public/logo.jpeg" alt="BMA logo">
      </router-link>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
  nav {
    width: fit-content;
    padding: 2%;
    margin: 0 auto 3%;

    img {
      border-radius: 100%;
      box-shadow: 0 0 10px;
      width: 120px;
      height: auto;
      display: block;
      transition: all 0.4s;
    }
  }

  // xxs
  @media (max-width: 450px) {
    nav {
      img {
        width: 80px;
      }
    }
  }

  // xs
  @media (min-width: 450px) and (max-width: 576px) {
    nav {
      img {
        width: 90px;
      }
    }
  }
  // sm
  @media (min-width: 576px) and (max-width: 768px) {
    nav {
      img {
        width: 80px;
      }
    }
  }

  // md
  @media (min-width: 768px) and(max-width: 992px) {
    nav {
      img {
        width: 90px;
      }
    }
  }
</style>
