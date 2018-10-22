<template lang="html">
  <div class="slider">
    <ul class="slider__items">
      <template v-for="(item, i) in items">
        <transition name="slider__item">
          <li v-show="i === activeIndex" class="slider__item" :key="i">
            <div
              class="slider__item__background"
              :style="{ backgroundImage: `url(${item.image.url})`}"
            ></div>
          </li>
        </transition>
      </template>
    </ul>
    <div class="slider__overlay">
      <div
        v-if="activeItem"
        class="slider__title flex-1 text-xl tracking-wide uppercase text-white text-right p-4 relative sm:text-4xl"
      >
        <span>_</span>
        <template v-for="(text, i) in activeItem.text.split('\n')">
          <br v-if="i > 0">
          <span>{{ text }}</span>
        </template>
        <span>˙</span>
      </div>
      <div class="bg-white">
        <div class="text-4xl font-sans font-bold pl-4 pr-4 pt-4 pb-2 text-black">
          Nº<br>{{ issue.number.toString().padStart(2, '0') }}
        </div>
        <div class="pl-4 pr-4">
          <a class="block" target="_blank" :href="issue.links[1].url">
            <v-download-inverted-icon class="w-12"></v-download-inverted-icon>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    issue: Object,
    items: Array,
    delay: { default: 6000 },
    auto: Boolean,
    loop: Boolean,
  },

  data () {
    return {
      activeIndex: -1,
      timeoutId: null
    };
  },

  computed: {
    itemsCount () {
      return this.items.length;
    },
    activeItem () {
      if (this.activeIndex < 0 || this.activeIndex >= this.itemsCount) {
        return null
      }

      return this.items[this.activeIndex];
    },
  },

  watch: {
    auto (value) {
      if (value) {
        this.queueNextItem();
      } else {
        clearTimeout(this.timeoutId);
        this.timeoutId = null;
      }
    },
    activeIndex (value) {
      this.queueNextItem();
    }
  },

  methods: {
    queueNextItem () {
      clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(this.nextItem.bind(this), this.delay);
    },
    nextItem (backwards = false) {
      let nextIndex = this.activeIndex + (backwards ? -1 : 1);

      if (this.loop) {
        if (nextIndex < 0) {
          nextIndex = this.itemsCount - 1;
        } else if (nextIndex >= this.itemsCount) {
          nextIndex = 0;
        }
      }

      this.activeIndex = nextIndex;
    },
  },

  mounted () {
    this.nextItem();
  }
}
</script>

<style lang="css">
.slider {
  position: relative;
  height: 80.6vw;
}
.slider__items {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
}
.slider__item {
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.slider__item__background {
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.slider__overlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
}
.slider__item__text {
  text-transform: uppercase;
  font-size: 2rem;
  color: #fff;
  padding: 1rem;
  letter-spacing: 0.25rem;
  line-height: 2.5rem;
  text-align: right;
}
.slider__title {
  text-shadow: 1px 1px 3px rgba(0,0,0,.3);
}
.slider__item-enter-active,
.slider__item-active-leave {
  transition: all 1s ease;
}
.slider__item-enter,
.slider__item-active-leave {
  opacity: 0;
  transform: scale(0.95);
  filter: blur(4px);
}
@media (min-width: 1280px) {
  .slider {
    height: 34rem;
  }
}
</style>
