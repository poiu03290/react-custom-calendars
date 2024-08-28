import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { patchCssModules } from "vite-css-modules";
import libCss from "vite-plugin-libcss";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.tsx"),
      name: "index",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
    commonjsOptions: {
      esmExternals: ["react"],
    },
  },
  plugins: [
    react(),
    patchCssModules(),
    libCss(),
    dts({
      insertTypesEntry: true,
      tsconfigPath: "tsconfig.node.json",
    }),
  ],
});
