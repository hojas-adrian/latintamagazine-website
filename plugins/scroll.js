import Vue from 'vue';

const scrollTo = (target, options = {}) => {
  const position = { top: 0 };

  target = document.querySelector(target);
  position.top = target.offsetTop;

  const { offsetTop, animated } = options;

  position.top = position.top + (offsetTop || 0);
  position.behavior = animated ? 'smooth' : 'auto';
  
  window.scrollTo(position);
}

Vue.prototype.$scrollTo = scrollTo;