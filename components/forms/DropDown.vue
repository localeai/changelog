<template>
  <div class="flex flex-col">
    <label v-if="label" class="text-sm mb-2 text-secondaryLight">{{
      label
    }}</label>
    <div class="flex flex-col relative" v-click-outside="hideDropDown">
      <div
        class="_input flex flex-row bg-lightBlue p-2 rounded border-2 border-gray-50 cursor-pointer focus:border-black"
        role="input" :tabindex="tabindex"
        @click="toggleDropDown"
      >
        <span v-if="value && value.name" class="flex-grow">{{
          value.name
        }}</span>
        <span v-else class="text-secondaryLight flex-grow">{{
          placeholder || 'Choose One'
        }}</span>
        <m-icon class="text-secondary">keyboard_arrow_down</m-icon>
      </div>
      <SlideYUpTransition>
        <div
          v-if="isDropdownVisible && options && options.length > 0"
          class="drop-down-options shadow-md border-2 border-gray-50"
        >
          <div
            v-for="option in options"
            :key="option.id"
            class="option-item p-2"
            @click="selectItem(option)"
          >
            {{ option.name }}
          </div>
        </div>
      </SlideYUpTransition>
    </div>
  </div>
</template>

<script>
import mIcon from '../shared/m-icon.vue'
import { SlideYUpTransition } from 'vue2-transitions'
export default {
  components: { mIcon, SlideYUpTransition },
  props: {
    label: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
    },
    value: {
      type: [Object, String, Number, null],
      defalt: null,
    },
    options: {
      type: Array[Object],
    },
    required: {
      type: Boolean,
      default: false,
    },
    tabindex: {
      type: [Number, String],
      default: 1
    }
  },
  data() {
    return {
      isDropdownVisible: false,
    }
  },
  computed: {
    inputValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
  methods: {
    toggleDropDown() {
      this.isDropdownVisible = !this.isDropdownVisible
    },
    showDropDown() {
      if (!this.isDropdownVisible) {
        this.isDropdownVisible = true
      }
    },
    hideDropDown() {
      if (this.isDropdownVisible) {
        this.isDropdownVisible = false
      }
    },
    selectItem(item) {
        this.$emit('input', item);
        this.isDropdownVisible = false;
    }
  },
}
</script>

<style scoped lang="scss">
._input {
  @apply border;
  @apply border-gray-200;
  outline: none;
  filter: none;

  &:focus {
    @apply border-blue-500;
  }
}

.drop-down-options {
  @apply bg-background;
  position: absolute;
  top: 50px;
  width: 100%;
  max-height: 250px;
  overflow-y: auto;

  .option-item {
    @apply border-b-2;
    @apply border-gray-50;
    @apply cursor-pointer;
    @apply text-secondary;
    z-index: 10;
    &:hover {
      @apply bg-gray-100;
    }
  }
}
</style>
