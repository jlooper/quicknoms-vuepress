<template>
  <div class="p-5 min-h-screen">
    <h1 class="text-center text-3xl pb-5 pt-5 ml-5 text-sans uppercase">{{ $page.title }}</h1>
    <div class="flex content-between flex-wrap">
      <div
        v-for="(item, index) in filteredList"
        class="w-full p-2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3"
        @click="goTo(item.frontmatter.path)"
      >
        <div class="rounded h-full overflow-hidden shadow-lg">
          <img
            class="h-48 rounded-tr rounded-tl w-full object-cover"
            :src="item.frontmatter.imagepath"
            :alt="item.frontmatter.title"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 uppercase">{{ item.frontmatter.title }}</div>
            <p class="text-gray-700 text-base">{{ item.frontmatter.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "RecipesList",
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
            const isRecipe = item.frontmatter.type == "recipe";
            const category = this.$page.frontmatter.category;
            console.log(category);
            if (
              isRecipe &&
              (category == "all" || category == item.frontmatter.category)
            ) {
              return item;
            }
          });
        }
      }
    }
  },
  methods: {
    goTo(path) {
      window.open("/yum/recipes/" + path + ".html", "_self");
    }
  }
};
</script>
