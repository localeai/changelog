<template>
  <div class="flex flex-col">
    <label v-if="label" class="text-sm mb-2 text-secondaryLight">{{
      label
    }}</label>
    <textarea
      :type="type"
      class="_input bg-lightBlue p-2 rounded border-2 border-gray-50 focus:border-black"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :name="name"
      :tabindex="tabindex"
      @click="(e) => $emit('click', e)"
      @hover="(e) => $emit('hover', e)"
      @blur="(e) => $emit('blur', e)"
      v-model="inputValue"
    ></textarea>
    <span v-if="isEdited && pattern && !matchesPattern" class="text-red-400 text-sm">{{ hint }}</span>
  </div>
</template>

<script>
export default {
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
      type: [String, Number, null],
      defalt: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    pattern: {
      type: String,
    },
    hint: {
      type: String,
      default: 'Invalid input',
    },
    tabindex: {
      type: [String, Number],
      default: 1,
    },
    isNumeric: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    inputValue: {
      get() {
        return this.value
      },
      set(val) {
        if (this.isNumeric) {
          this.$emit('input', val? val.replace(/\D/g, ""): "")
        } else {
          this.$emit('input', val)
        }
      },
    },
    matchesPattern() {
      if (!(this.pattern && this.pattern.length > 0) || !this.value) return true
      const regex = new RegExp(this.pattern)
      return regex.test(this.value)
    },
  },
  data() {
    return {
      isEdited: false,
    }
  },
  watch: {
    value(val) {
      if (val) {
        this.isEdited = true
      }
    },
  },
}
</script>

<style scoped lang="scss">
._input {
  @apply border;
  @apply border-gray-200;
  outline: none;
  filter: none;
//   min-height: 200px;

  &:focus {
    @apply border-blue-500;
  }
}
</style>
