<template lang="html">
  <nav class="fixed pin-t w-full bg-white z-50" style="backface-visibility: hidden;">
    <div class="top-bar__content container max-w-xl mx-auto">
      <div class="flex items-start p-4">
        <a class="block" href="/">
          <img src="~assets/img/logo.svg" alt="Logo La Tinta" class="logo block">
        </a>
        <div class="flex-1 text-center uppercase tracking-wide text-sm font-bold">
          {{ title }}
        </div>
        <button
          type="button"
          class="menu-toggler"
          :class="{'menu-toggler--active': showMenu}"
          @click="showMenu=!showMenu"
        >
          <div class="menu-toggler__content flex flex-col justify-around">
            <div class="menu-toggler__bar"></div>
            <div class="menu-toggler__bar"></div>
          </div>
        </button>
      </div>
    </div>
    <div v-if="showMenu" class="fixed w-full h-full bg-white">
      <div class="container max-w-xl mx-auto pl-4 pr-4">
        <ul class="list-reset">
          <template v-for="(item, i) in menuItems">
            <li :key="i" :class="{'mt-2': i > 0}">
              <nuxt-link
                class="menu__link"
                exact-active-class="menu__link--active"
                active-class="menu__link--active"
                :to="item.url"
                @click.native="showMenu=false"
              >
                {{ item.text }}
              </nuxt-link>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    title () {
      return 'Arte corporal';
    },
    showMenu: {
      get () {
        return this.$store.state.showMenu;
      },
      set (value) {
        this.$store.commit('setShowMenu', value);
      }
    },
    menuItems () {
      return [
        {
          text: 'Ediciones',
          url: '#issues'
        },
        {
          text: 'Nosotros',
          url: '#about'
        },
        {
          text: 'Anúnciate',
          url: '#mediakit'
        }
      ]
    }
  },
}
</script>

<style lang="css">
.top-bar {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  z-index: 100;
}
.top-bar__content {
  height: 5.5rem;
}
.logo {
  width: 3.4rem;
}
.menu-toggler {
  display: block;
}
.menu-toggler__content {
  width: 2rem;
  height: 2rem;
}
.menu-toggler__bar {
  height: 0.25rem;
  background-color: #000;
  transition: all 0.25s ease;
  transform-origin: center;
}
.menu-toggler--active .menu-toggler__bar:first-child {
  transform: translate(0, 0.5rem) rotate(45deg);
}
.menu-toggler--active .menu-toggler__bar:last-child {
  transform: translate(0, -0.5rem) rotate(-45deg);
}
.menu__link {
  display: block;
  padding: 1rem;
  background-color: #000;
  color: #fff;
  text-align: center;
  border: 0.1875rem solid black;
  text-transform: uppercase;
  font-weight: 700;
  transition: all 0.25s ease;
}
.menu__link:hover,
.menu__link--active {
  background-color: white;
  color: #000;
}
</style>
