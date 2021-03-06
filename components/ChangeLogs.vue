<template>
  <div class="change-logs-list">
    <div
      v-for="(release, index) in releases"
      :key="index"
      class="flex flex-col mb-4"
    >
      <div class="flex flex-col my-4">
        <h3 class="text-gray-600">{{ release.releaseDate }}</h3>
        <h2 class="py-2 text-2xl">{{ release.title }}</h2>
        <span class="flex flex-row items-center text-blue-500"
          ><m-icon size="18" class="mr-2">label</m-icon
          >{{ release.version }}</span
        >
      </div>
      <nuxt-content :document="release" />
      <div class="changelogs flex flex-col mt-4 pb-4">
        <h3 class="text-lg my-4">Major Changes</h3>
        <div
          v-for="(change, change_index) in release.changes"
          :key="`change_${change_index}`"
          class="log"
        >
          <div class="flex flex-row">
            <div
              :class="['chit', `bg-${getTagDetails(change.tag).color} text-white self-start text-sm font-semibold p-1 rounded`]"
            >
              {{ getTagDetails(change.tag).name }}
            </div>
          </div>
          <div class="flex flex-col">
            <h4 class="text-lg mb-2">
              {{ change.title }}
            </h4>
            <p class="text-base text-gray-600">
              {{ change.description }}
            </p>
          </div>
        </div>
      </div>
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
          color: "blue-500"
        },
        [tags.BUG_FIX]: {
          name: "FIX",
          color: "purple-500"
        },
        [tags.PERFORMANCE]: {
          name: "PERF",
          color: "green-500"
        },
        [tags.CHORE]: {
          name: "CHORE",
          color: "gray-600"
        },
        [tags.NEW]: {
          name: "NEW",
          color: "yellow-500"
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

<style lang="scss" scoped>
@import "~/assets/global/mixins";

.change-logs-list {
  width: 96%;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px 15px;

  .changelogs {
    border-top: 1px solid #eeeeee;
    border-bottom: 1px solid #eeeeee;

    .log {
      display: grid;
      grid-template-columns: 100px 1fr;
      @apply my-2;
      @include respond-below(sm) {
        grid-template-columns: 1fr;
        .chit {
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
