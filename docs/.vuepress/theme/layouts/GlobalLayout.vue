<template>
  <div class="markdown-body flex-grow font-serif text-lg rounded-lg shadow-lg">
    <Nav />
    <component :is="layout"></component>
    <Footer />
  </div>
</template>
<script>
import Nav from "@theme/components/Nav.vue";
import Footer from "@theme/components/Footer.vue";
import HomeLayout from "@theme/layouts/HomeLayout.vue";
import RecipeLayout from "@theme/layouts/RecipeLayout.vue";

export default {
  components: {
    Nav,
    Footer,
    HomeLayout,
    RecipeLayout
  },
  computed: {
    layout() {
      return this.$page.frontmatter.layout || "HomeLayout";
    }
  }
};
</script>

<style lang="stylus">
@import '../styles/style.styl';
</style>