<template>
  <main class="container mx-auto flex flex-col min-h-screen max-w-xl">
    <div class="pl-4 pr-4">
      <v-slider auto loop :issue="sortedIssues[0]" :items="slides"></v-slider>
    </div>

    <section id="issues" class="pt-5.5">
      <div class="container max-w-xl mx-auto">
        <h1 class="uppercase text-base text-center tracking-wide pb-6">Ediciones</h1>

        <div class="flex flex-wrap pl-2 pr-2">
          <template v-for="(issue, i) in sortedIssues">
            <div class="w-full p-2 flex items-end sm:w-1/2 md:w-1/3 lg:w-1/4" :key="i">
              <article>
                <header>
                  <h2 class="uppercase text-sm font-medium text-right leading-none pb-4">{{ issue.title }}</h2>
                  <img :src="issue.cover.url" :alt="issue.title">
                </header>
                <main>
                  <template v-for="(link, j) in issue.links">
                    <a
                      class="flex pt-2 pb-2 items-end"
                      target="_blank"
                      :key="j"
                      :href="link.url"
                    >
                      <div class="text-3xl leading-none font-sans font-bold">
                        #{{ issue.number.toString().padStart(2, '0') }}
                      </div>
                      <div class="leading-none ml-2">
                        {{ link.description }}
                      </div>
                      <div class="flex-1 self-end border-b-4 border-dotted ml-2 mr-2"></div>
                      <v-download-icon class="w-12"></v-download-icon>
                    </a>
                  </template>
                </main>
              </article>
            </div>
          </template>
        </div>
      </div>
    </section>

    <section id="about" class="pt-5.5 pb-5.5">
      <div class="container max-w-sm mx-auto">
        <h1 class="uppercase text-base text-center tracking-wide pb-6">Nosotros</h1>

        <div class="bg-black pt-6 pb-6">
          <h2 class="uppercase text-base text-center text-white tracking-wide pb-6 pl-4 pr-4">LATINTA_Equipo Creativo</h2>

          <div class="pl-4 pr-4 text-white text-left html-raw">
            <p>La Tinta es la primera y única revista sobre Arte Corporal que se hace desde Cuba.
              Somos un equipo de diseñadores, periodistas, fotógrafos y profesionales del
              arte del tatuaje que trabajamos para difundir —dentro y fuera de la isla— la
              cultura artística y el talento de una profesión que en Cuba alcanza hoy niveles
              de calidad impresionantes.</p>
              <p>Nuestras metas de información están enfocadas hacia las artes visuales y
              al arte de carácter estético cuyo eje central sea el cuerpo humano.De modo que
              en nuestras páginas podrás conocer sobre tatuajes y piercings en la misma medida
              que el bodypainting, el performance, etc. todo con el sello cubano.</p>
              <p>Si te interesa colaborar con nuestro proyecto pues escríbenos y si te gusta la temática
              pídenos qué quieres conocer. La Tinta te propone un camino, pero la marca la haces tú.</p>
            </div>

            <div class="text-center pt-6 pl-4 pr-4 text-white">
              <a class="block" href="mailto:contacto.latinta@gmail.com">contacto.latinta@gmail.com</a>
              <a class="block" href="tel:+53 58277251">+53 58277251</a>
            </div>
          </div>
        </div>
    </section>

    <section id="mediakit" class="pt-5.5 pb-5.5">
      <div class="container mx-auto max-w-xl">
        <h1 class="uppercase text-base text-center tracking-wide pb-6">Anúnciate</h1>
        
        <div class="flex flex-col justify-center items-center pl-4 pr-4">
          <a class="mediakit__download__link_img" href="http://bit.ly/LaTinta_MK_dic18">
            <img class="max-w-full md:hidden" src="~/assets/img/mediakit.jpg" alt="Media Kit">
            <img class="max-w-full hidden md:block" src="~/assets/img/mediakit-big.jpg" alt="Media Kit">
          </a>
          
          <a class="mediakit__download__link_btn mt-6" href="http://bit.ly/LaTinta_MK_dic18">
            <v-download-icon></v-download-icon>
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import orderBy from 'lodash/orderBy';

export default {
  async asyncData ({ store }) {
    await store.dispatch('slides/fetchItems');
    await store.dispatch('issues/fetchItems');
  },

  head () {
    return {
      title: 'La Tinta Magazine',
      meta: [
        { name: 'description', content: 'Primera revista cubana de arte corporal' },
        { name: 'keywords', content: 'revista, arte corporal, tatuajes, cuba' },
        // Open graph
        { property: 'og:title', content: 'La Tinta Magazine' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://latintamagazine.com' },
        { property: 'og:description', content: 'Primera revista cubana de arte corporal' },
        { property: 'og:image', content: 'https://latintamagazine.com/img/logo-300.png' },
        // Twitter
        { name: 'twitter:card', content: 'https://latintamagazine.com/img/logo-300.png' }
      ]
    }
  },

  computed: {
    slides () {
      return this.$store.getters['slides/items'];
    },
    issues () {
      return this.$store.getters['issues/items'];
    },
    sortedIssues () {
      return orderBy(this.issues, 'number', 'desc');
    }
  }
}
</script>

<style>
.mediakit__download__link_img {
  display: block;
}
.mediakit__download__link_btn {
  width: 2.5rem;
  height: 2.5rem;
  display: block;
}
</style>
