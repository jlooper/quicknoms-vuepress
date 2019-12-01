<template>
  <div class="markdown-body flex flex-col">
    <div class="flex content-start flex-wrap bg-orange-600">
      <div class="w-1/3 p-2"></div>

      <div class="w-1/3 p-10">
        <img class="h-full w-full" src="/images/logo.png" />
      </div>

      <div class="w-1/3 p-2"></div>
    </div>

    <div class="text-center bg-orange-600 p-10">
      <h1 class="text-3xl text-white uppercase">QuickNoms</h1>

      <h2 class="text-white">5 ingredients. 15 minutes. Minimal setup. Recipes for all!</h2>
    </div>

    <div class="flex content-start flex-wrap">
      <div
        class="w-full p-2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 cursor-pointer"
        @click="goTo('/yum/meat.html')"
      >
        <div class="mb-10 text-gray-700 text-center p-2">
          <img src="/images/portfolio/meat.png" />
          <h2 class="-m-10 text-white">Meat</h2>
        </div>
      </div>
      <div
        class="mb-10 w-full p-2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 cursor-pointer"
        @click="goTo('/yum/soupssalads.html')"
      >
        <div class="text-gray-700 text-center p-2">
          <img src="/images/portfolio/soupssalads.png" />
          <h2 class="-m-10 text-white">Soups and Salads</h2>
        </div>
      </div>
      <div
        class="mb-10 w-full p-2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 cursor-pointer"
        @click="goTo('/yum/vegetarian.html')"
      >
        <div class="text-gray-700 text-center p-2">
          <img src="/images/portfolio/vegetarian.png" />
          <h2 class="-m-10 text-white">Vegetarian Dishes</h2>
        </div>
      </div>
      <div
        class="mb-10 w-full p-2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 cursor-pointer"
        @click="goTo('/yum/snacks.html')"
      >
        <div class="text-gray-700 text-center p-2">
          <img src="/images/portfolio/snacks.png" />
          <h2 class="-m-10 text-white">Snacks</h2>
        </div>
      </div>
      <div
        class="mb-10 w-full p-2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 cursor-pointer"
        @click="goTo('/yum/desserts.html')"
      >
        <div class="text-gray-700 text-center p-2">
          <img src="/images/portfolio/desserts.png" />
          <h2 class="-m-10 text-white">Desserts</h2>
        </div>
      </div>
      <div
        class="mb-10 w-full p-2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 cursor-pointer"
        @click="goTo('/yum/extras.html')"
      >
        <div class="text-gray-700 text-center p-2">
          <img src="/images/portfolio/extras.png" />
          <h2 class="-m-10 text-white">Everything Else</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeLayout",
  methods: {
    goTo(path) {
      window.open(path, "_self");
    }
  }
};
</script>
