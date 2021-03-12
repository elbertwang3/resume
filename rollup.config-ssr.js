import svelte from "rollup-plugin-svelte";
// import sveltePreprocess from "svelte-preprocess";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
// import svg from "rollup-plugin-svg";
import json from "@rollup/plugin-json";
// import dsv from "@rollup/plugin-dsv";
import execute from "rollup-plugin-execute";

// const preprocess = sveltePreprocess({
//   postcss: {
//     plugins: [require("autoprefixer")],
//   },
// });

export default {
  input: "src/App.svelte",
  output: {
    format: "cjs",
    file: ".tmp/ssr.js",
  },
  plugins: [
    svelte({
      compilerOptions: { generate: "ssr" },
      emitCss: false,
      //   preprocess,
    }),
    resolve({
      browser: true,
      dedupe: ["svelte"],
    }),
    commonjs(),
    json(),
    // svg(),
    execute("node scripts/pre-render.js"),
  ],
};
