/** @type {import('next').NextConfig} */
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
   webpack(config) {
      config.module.rules.push({
         test: /\.svg$/i,
         use: ["@svgr/webpack"],
      });

      return config;
   },
   sassOptions: {
      includePaths: [path.join(__dirname, "src")],
      outputStyle: "compressed",
   },
};

export default nextConfig;
