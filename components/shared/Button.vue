<template>
  <button
    :class="['_btn', variant]"
    :role="role"
    :type="type"
    :disabled="disabled || isLoading"
    @click="(e) => $emit('click', e)"
  >
    <div  :class="['flex', 'flex-row', 'items-center', 'justify-center', {'hide': isLoading}]">
      <m-icon v-if="iconLeft" size="18" class="mr-2 text-white">{{
        iconLeft
      }}</m-icon
      >{{ text }}<m-icon v-if="iconRight" class="ml-2">{{ iconRight }}</m-icon>
    </div>
    <div v-if="isLoading" class="loading-dots">
      <loading-dots width="40" height="10"/>
    </div>
  </button>
</template>

<script>
import MIcon from './m-icon.vue'
import LoadingDots from './LoadingDots'
export default {
  components: {
    MIcon,
    LoadingDots,
  },
  props: {
    text: {
      type: String,
      default: 'Button',
    },
    role: {
      type: String,
      default: 'button',
    },
    type: {
      type: String,
    },
    variant: {
      type: String,
      default: 'default',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    iconLeft: {
      type: String,
    },
    iconRight: {
      type: String,
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style lang="scss">
._btn {
  @apply bg-blue-500;
  @apply py-3;
  @apply px-4;
  @apply rounded;
  @apply text-white;
  @apply flex;
  @apply flex-row;
  @apply items-center;
  @apply relative;

  &:hover {
    @apply bg-blue-400;
  }

  &:disabled {
    @apply bg-blue-300;
    @apply cursor-not-allowed;
  }

  &.secondary {
    @apply bg-secondary;

    &:hover {
      @apply bg-secondary;
      opacity: 0.9;
    }

    &:disabled {
      @apply bg-secondaryLight;
    }
  }

  .hide {
    opacity: 0;
  }

  .loading-dots {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    top: 0;
  }

}
</style>
