<template>
  <div
    class="bubble"
    :class="{
      'bubble--green': type === 'green',
      'bubble--yellow': type === 'yellow',
    }"
  >
    <span class="bubble-outer-dot">
      <span class="bubble-inner-dot"></span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.bubble {
  display: block;
  position: relative;
}

.bubble:after {
  content: '';
  background-color: red;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  position: absolute;
  display: block;
  top: 1px;
  left: 1px;
}

.bubble .bubble-outer-dot {
  margin: 1px;
  display: block;
  text-align: center;
  opacity: 1;
  background-color: rgba(255, 0, 0, 0.4);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  -webkit-animation: bubble-pulse 1.5s linear infinite;
  -moz-animation: bubble-pulse 1.5s linear infinite;
  -o-animation: bubble-pulse 1.5s linear infinite;
  animation: bubble-pulse 1.5s linear infinite;
}

.bubble .bubble-inner-dot {
  display: block;
  text-align: center;
  opacity: 1;
  background-color: rgba(255, 0, 0, 0.4);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  -webkit-animation: bubble-pulse 1.5s linear infinite;
  -moz-animation: bubble-pulse 1.5s linear infinite;
  -o-animation: bubble-pulse 1.5s linear infinite;
  animation: bubble-pulse 1.5s linear infinite;
}

.bubble .bubble-inner-dot:after {
  content: '';
  display: block;
  text-align: center;
  opacity: 1;
  background-color: rgba(255, 0, 0, 0.4);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  -webkit-animation: bubble-pulse 1.5s linear infinite;
  -moz-animation: bubble-pulse 1.5s linear infinite;
  -o-animation: bubble-pulse 1.5s linear infinite;
  animation: bubble-pulse 1.5s linear infinite;
}

@keyframes bubble-pulse {
  0% {
    transform: scale(1);
    opacity: 0.75;
  }
  25% {
    transform: scale(1);
    opacity: 0.75;
  }
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
}

.bubble--green {
  &::after {
    background-color: greenyellow;
  }

  .bubble-outer-dot {
    background-color: rgba(172, 255, 47, 0.4);
  }

  .bubble-inner-dot {
    background-color: rgba(172, 255, 47, 0.4);
  }

  .bubble-inner-dot:after {
    background-color: rgba(172, 255, 47, 0.4);
  }
}

.bubble--yellow {
  &::after {
    background-color: yellow;
  }

  .bubble-outer-dot {
    background-color: rgba(255, 255, 0, 0.4);
  }

  .bubble-inner-dot {
    background-color: rgba(255, 255, 0, 0.4);
  }

  .bubble-inner-dot:after {
    background-color: rgba(255, 255, 0, 0.4);
  }
}
</style>
