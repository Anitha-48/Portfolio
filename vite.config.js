import { cpSync } from "node:fs";
import { resolve } from "node:path";

export default {
  base: "/Portfolio/",
  plugins: [
    {
      name: "copy-portfolio-images",
      closeBundle() {
        cpSync(resolve(process.cwd(), "images"), resolve(process.cwd(), "dist/images"), {
          recursive: true,
        });
      },
    },
  ],
};
