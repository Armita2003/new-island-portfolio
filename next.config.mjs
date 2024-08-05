// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     assetsInclude: ["**/*.glb"],
// };

// export default nextConfig;
import path from "path";

const nextConfig = {
    reactStrictMode: true,
    assetsInclude: ["**/*.glb"],
    webpack(config, options) {
        config.module.rules.push({
            test: /\.glb$/,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        publicPath:
                            "/_next/static/assets/models/",
                        outputPath:
                            "static/assets/models/",
                        name: "[name].[ext]",
                    },
                },
            ],
        });

        return config;
    },
};

export default nextConfig;
