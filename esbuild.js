const esbuild = require("esbuild");

esbuild.build({
  entryPoints: ["app.jsx"],
  bundle: true,
  outfile: "out.js",
});
