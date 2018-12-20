<template lang="html">
  <div class="font-sans-1 leading-normal text-base">
    <v-top-bar></v-top-bar>

    <nuxt class="content"/>

    <footer>
      <section class="pt-5.5">
        <div class="container max-w-xl mx-auto">
          <h2 class="text-center uppercase tracking-wide font-bold text-black text-base">Síguenos en</h2>
          <div class="flex flex-wrap justify-center items-center p-2">
            <template v-for="(network) in networks">
              <div class="p-2">
                <a
                  class="block w-8"
                  target="_blank"
                  :href="network.url"
                >
                  <component :is="`v-${network.icon}-icon`"></component>
                </a>
              </div>
            </template>
          </div>
        </div>
      </section>

      <div class="container max-w-xl mx-auto">
        <div class="uppercase text-xs p-4 text-center tracking-wide text-grey-1">
          2018 &copy; La Tinta Magazine
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import VTopBar from '~/components/TopBar.vue';

export default {
  components: {
    VTopBar
  },

  computed: {
    networks () {
      return [
        {
          icon: 'facebook',
          url: 'https://www.facebook.com/latinta.magazine/'
        },
        {
          icon: 'instagram',
          url: 'https://www.instagram.com/latinta_magazine/'
        },
      ]
    }
  },

  watch: {
    '$route': function (to) {
      const { hash } = to;

      this.$scrollTo(hash, { animated: true });
    }
  }
}
</script>
<style lang="css">
html,
body {
  font-size: 16px;
  min-height: 100%;
}
a,
a:hover {
  text-decoration: none;
  color: inherit;
}
.content {
  padding-top: 5.5rem;
}
</style>
