<template>
  <div class="container mx-auto flex items-center p-4">
    <div class="flex flex-row flex-grow items-center">
      <a href="https://locale.ai"><img :src="require(`~/assets/logo-text.svg`)" class="header-logo" /></a>
      <nuxt-link to="/" class="text-lg text-gray-400">Changelog 🚀 </nuxt-link>
    </div>
    <div class="flex flex-row items-center hidden md:flex">
      <a class="py-2 px-3 text-secondary" href="https://blog.locale.ai">Blog</a>
      <a class="py-2 px-3 text-secondary" href="https://app.locale.ai">Login</a>
      <a class="py-2 px-3 bg-blue-500 text-white rounded shadow-md" href="https://demo.locale.ai?utm_source=changelog">Explore Demo</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header-logo {
  width: 150px;
  height: auto;
}
</style>
