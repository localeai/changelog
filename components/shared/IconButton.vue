<template>
  <i :class="['material-icons', 'icon-button', `m-${size}`]" @click="$emit('click')"><slot/></i>
</template>

<script>
export default {
    props: {
        size: {
            type: [String, Number],
            default: "18"
        }
    }
}
</script>

<style lang="scss" scoped>
.icon-button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    @apply rounded;
    @apply text-secondary;

    &:hover {
        cursor: pointer;
        @apply bg-gray-100;
        @apply text-primary;
    }
}
</style>