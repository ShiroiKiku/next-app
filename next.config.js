/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
};
module.exports = {
    serverRuntimeConfig: {
        secret: "4f1efcda-1644-4759-ac6c-59e510b6d530",
    },
    publicRuntimeConfig: {
        apiUrl:
            process.env.NODE_ENV === "development"
                ? "http://localhost:3000/api" // development api
                : "http://localhost:3000/api", // production api
    },
};

module.exports = nextConfig;
