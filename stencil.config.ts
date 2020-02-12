import { Config } from "@stencil/core";

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: "src/global/app.css",
  globalScript: "src/global/app.ts",
  outputTargets: [
    {
      type: "www",
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: "https://myapp.local/"
    }
  ],
  copy: [
    {
      src: "../node_modules/material-design-lite/dist/material.min.css",
      dest: "mdl/material.min.css"
    },
    {
      src: "../node_modules/material-design-lite/dist/material.min.js",
      dest: "mdl/material.min.js"
    }
    // { src: '../node_modules/jquery/dist/jquery.slim.min.js', dest: 'assets/js/jquery.slim.min.js'},
    // { src: '../node_modules/popper.js/dist/popper.min.js', dest: 'assets/js/popper.min.js'}
  ]
};
