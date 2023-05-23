import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    vite: {
      resolve: {
        alias: {
          $routes: path.resolve("./src/routes"),
        },
      },
    },
  },
};

export default config;
