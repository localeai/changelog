<template>
  <div class="change-logs-list">
    <div
      v-for="(release, index) in releases"
      :key="index"
      class="flex flex-col mb-4"
    >
      <nuxt-link
        :to="`/release/${release.slug}`"
        class="release-item flex flex-row items-center my-4 pb-2 border-b"
      >
        <div class="flex flex-col flex-grow">
          <h3 class="text-gray-600">{{ release.releaseDate }}</h3>
          <h2 class="title py-2 text-2xl">{{ release.title }}</h2>
          <span class="flex flex-row items-center text-blue-500"
            ><m-icon size="18" class="mr-2">label</m-icon
            >{{ release.version }}</span
          >
        </div>
        <div class="hidden md:flex">
          <m-icon>keyboard_arrow_right</m-icon>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import MIcon from "~/components/shared/m-icon";

const tags = {
  FEATURE: "feature",
  BUG_FIX: "fix",
  PERFORMANCE: "perf",
  CHORE: "chore",
  NEW: "new"
};

export default {
  components: {
    MIcon
  },
  props: {
    releases: {
      type: Array[Object]
    }
  },
  data() {
    return {
      tagDetails: {
        [tags.FEATURE]: {
          name: "FEATURE",
          color: "#3B82F6"
        },
        [tags.BUG_FIX]: {
          name: "FIX",
          color: "#A855F7"
        },
        [tags.PERFORMANCE]: {
          name: "PERF",
          color: "#22C55E"
        },
        [tags.CHORE]: {
          name: "CHORE",
          color: "#6B7280"
        },
        [tags.NEW]: {
          name: "NEW",
          color: "#F59E0B"
        }
      }
    };
  },
  methods: {
    getTagDetails(tag) {
      return this.tagDetails[tag] || { name: tag, color: "gray-500" };
    }
  }
};
</script>

<style lang="scss">
@import "~/assets/global/mixins";

.change-logs-list {
  width: 96%;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px 15px;

  .release-item {
    &:hover {
      .title {
        @apply text-blue-500;
      }
    }
  }
}
</style>
