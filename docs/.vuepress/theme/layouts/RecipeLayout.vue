<template>
  <div class="container mx-auto lg-px-10">
    <div class="markdown-body border-solid rounded-lg border-2 border-gray-300 m-5">
      <img class="h-48 w-full object-cover" :src="$page.frontmatter.imagepath" />
      <h1 class="text-3xl text-center pb-5 pt-5 ml-5 text-sans">{{$page.frontmatter.title}}</h1>
      <hr />
      <div class="text-gray-800 p-5">{{$page.frontmatter.description}}</div>
      <hr />
      <h2 class="text-gray-900 text-2xl p-5 text-orange-600 text-bold uppercase">Ingredients</h2>
      <hr />
      <div class="p-5">
        <div
          class="text-gray-800"
          v-for="ingredient in $page.frontmatter.ingredients"
        >{{ingredient}}</div>
      </div>
      <hr />
      <h2 class="text-gray-900 text-2xl p-5 text-orange-600 text-bold uppercase">Tools</h2>
      <hr />
      <div class="p-5">
        <div class="text-gray-800" v-for="tools in $page.frontmatter.tools">{{tools}}</div>
      </div>
      <hr />
      <h2 class="text-gray-900 text-2xl p-5 text-orange-600 text-bold uppercase">Method</h2>
      <hr />
      <div class="text-gray-800 p-5 method">{{$page.frontmatter.method}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeLayout"
};
</script>

<style scoped>
.method {
  white-space: pre-wrap;
}
</style>
