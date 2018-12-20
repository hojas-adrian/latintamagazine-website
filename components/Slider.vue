<template> 
  <div class="slider">
    <ul class="slider__items">
      <template v-for="(item, i) in items">
        <transition name="slider__item" :key="i">
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
      <div class="slider__item__text">
        <span 
          v-for="(text, i) in activeTextFragments"
          class="slider__item__text_fragment" 
          :key="text"
        >
          {{ (i == 0 ? '_ ' : '') + text + (i == activeTextFragments.length - 1 ? ' ˙' : '') }}
        </span>
      </div>
      <div class="slider__issue">
        <div class="slider__issue_number">
          Nº<br>{{ issue.number.toString().padStart(2, '0') }}
        </div>
        <a class="slider__issue_link" target="_blank" :href="issue.links[1].url">
          <v-download-inverted-icon></v-download-inverted-icon>
        </a>
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
    activeText () {
      return this.activeItem ? this.activeItem.text : null;
    },
    activeTextFragments () {
      return this.activeText ? this.activeText.split('\n') : [];
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
  height: 35.75rem;
  background-color: #000;
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
.slider__item-enter-active,
.slider__item-active-leave {
  transition: all 1s ease;
}
.slider__item-enter,
.slider__item-active-leave {
  opacity: 0;
  transform: scale(0.95);
}
.slider__item__text_fragment-enter-active,
.slider__item__text_fragment_active-leave {
  transition: all 1s ease;
}
.slider__item__text_fragment-enter,
.slider__item__text_fragment_active-leave {
  opacity: 0;
}
.slider__item__text {
  text-shadow: 1px 1px 3px rgba(0,0,0,.3);
  color: #fff;
  text-transform: uppercase;
  text-align: right;
  font-size: 1.4rem;
  padding: 0.8rem;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.slider__item__text_fragment {
  white-space: nowrap;
}
.slider__issue {
  position: relative;
  background-color: #fff;
}
.slider__issue_number {
  padding: 1.94rem 0.825rem 0.84rem;
  font-weight: bold;
  font-size: 1.7rem;
  font-family: 'BlinkMacSystemFont', 'Segoe UI', 'Oxygen', 'Roboto', 'Ubuntu', 'Droid Sans', 'Hevetica Neue';
  color: #000;
  word-spacing: 2.22rem;
  text-align: center;
}
.slider__issue_link {
  margin: 0 0.825rem 0;
  font-size: 1.93rem;
  width: 1.93rem;
  height: 1.93rem;
  display: block;
}
</style>
