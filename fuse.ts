import {CSSPlugin, FuseBox, SVGPlugin, WebIndexPlugin} from "fuse-box";

let fuse = new FuseBox({
  homeDir: "src/",
  output: "build/$name.js",
  tsConfig: './tsConfig.json',
  plugins: [
    SVGPlugin(),
    CSSPlugin(),
    WebIndexPlugin({template: './src/index.html'})
  ]
});

fuse.dev();
fuse.bundle("vendor")
  .watch()
  .hmr()
  .sourceMaps(false)
  .instructions(" ~ index.tsx");

fuse.bundle("app")
  .watch()
  .hmr()
  .sourceMaps(true)
  .instructions(" !> [index.tsx]");

fuse.run();
