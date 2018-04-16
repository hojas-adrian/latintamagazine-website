<template lang="html">
  <div class="container mx-auto flex flex-col min-h-screen">
    <div class="p-4 flex">
      <div class="text-center flex flex-col items-center w-12">
        <img src="~/assets/img/logo.svg" alt="La Tinta Magazine" class="flex-none">
      </div>

      <div class="flex-1 flex justify-center text-center font-sans-1 uppercase text-xs -ml-10 md:text-sm">
        Primera revista cubana<br>de arte corporal<br>(en construcción)
      </div>
    </div>

    <div class="flex-1 flex justify-center">
      <div class="max-w-sm pl-4 pr-4">
        <div class="uppercase text-center pb-2 font-sans-1 font-medium">
          marzo - abril
        </div>

        <div class="">
          <img src="~/assets/img/n00-cover.jpg" alt="Nº 00 MARZO-ABRIL" class="max-w-full h-auto">
        </div>

        <div class="mt-4">
          <a class="flex items-center" target="_blank" href="https://drive.google.com/file/d/1oVsYBnQvM5PaEeG5ukx633hkVQabg1d4/view?usp=sharing">
            <div class="flex-1">
              <div class="flex items-center flex-1">
                <div class="flex-1 truncate">
                  <div class="uppercase font-sans-1 font-medium truncate">
                    Descargar #00s
                  </div>
                </div>

                <div class="pr-4">
                  14.3Mb
                </div>
              </div>
              <div class="text-sm font-sans-1 font-medium">
                (92ppi)
              </div>
            </div>
            <svg class="fill-current text-black w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.3 32.46"><defs><style>.cls-2{clip-path:url(#clip-path)}</style><clipPath id="clip-path"><path fill="none" d="M0 0h32.3v32.47H0z"/></clipPath></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M32.3 32.47H0V0h32.3zm-30.3-2h28.3V2H2z"/><path d="M16.15 21.72l-7.16-6.84 1.39-1.45 5.77 5.52 5.77-5.52 1.39 1.45-7.16 6.84z"/><path d="M15.15.73h2v19.5h-2z"/></g></g></svg>
          </a>

          <a class="flex items-center mt-4" target="_blank" href="https://drive.google.com/file/d/1g-UDphj1jfslpZX9kMqE34_xjjRrk04E/view?usp=sharing">
            <div class="flex-1">
              <div class="flex items-center flex-1">
                <div class="flex-1 truncate">
                  <div class="uppercase font-sans-1 font-medium truncate">
                    Descargar #00s
                  </div>
                </div>

                <div class="pr-4">
                  29.4Mb
                </div>
              </div>
              <div class="text-sm font-sans-1 font-medium">
                (144ppi)
              </div>
            </div>
            <svg class="fill-current text-black w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.3 32.46"><defs><style>.cls-2{clip-path:url(#clip-path)}</style><clipPath id="clip-path"><path fill="none" d="M0 0h32.3v32.47H0z"/></clipPath></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M32.3 32.47H0V0h32.3zm-30.3-2h28.3V2H2z"/><path d="M16.15 21.72l-7.16-6.84 1.39-1.45 5.77 5.52 5.77-5.52 1.39 1.45-7.16 6.84z"/><path d="M15.15.73h2v19.5h-2z"/></g></g></svg>
          </a>
        </div>
      </div>
    </div>

    <footer>
      <div class="container mx-auto">
        <div class="uppercase text-xs p-4 text-center tracking-wide text-grey-1">
          2018 &copy; La Tinta Magazine
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'La Tinta Magazine',
      meta: [
        { property: 'og:title', content: 'La Tinta Magazine' },
        { name: 'description', content: 'Primera revista cubana de arte corporal' },
        { name: 'keywords', content: 'revista, arte corporal, tatuajes, cuba' },
        // Open graph
        { property: 'og:title', content: 'La Tinta Magazine' },
        { property: 'og:type', content: 'website' },
        { property: 'og:description', content: 'Primera revista cubana de arte corporal' },
        { property: 'og:image', content: 'https://latintamagazine.com/img/logo-300.png' },
        // Twitter
        { name: 'twitter:card', content: 'https://latintamagazine.com/img/logo-300.png' }
      ]
    }
  }
}
</script>
