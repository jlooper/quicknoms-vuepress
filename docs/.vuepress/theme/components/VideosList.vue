<template>
  <div class="p-5 min-h-screen">
    <h1 class="text-center text-3xl pb-5 pt-5 ml-5 text-sans">{{ $page.title }}</h1>
    <div class="flex content-between flex-wrap">
      <div
        v-for="(item, index) in filteredList"
        class="w-full p-2 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2"
      >
        <div class="rounded h-full overflow-hidden shadow-lg">
          <iframe
            id="video"
            class="video"
            :src="item.frontmatter.embedurl"
            frameborder="0"
            allowfullscreen
          ></iframe>

          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ item.frontmatter.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "VideosList",
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    filteredList() {
      const props = this.$options.propsData;
      if (props) {
        if (props.list && props.list.length > 0) {
          return props.list.filter(item => {
            const isVideo = item.frontmatter.type == "video";
            if (isVideo) {
              return item;
            }
          });
        }
      }
    }
  }
};
</script>
