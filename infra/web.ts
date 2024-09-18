const region = aws.getRegionOutput().name;

export const frontend = new sst.aws.StaticSite("Frontend", {
  path: "packages/react-app",
  build: {
    output: "dist",
    command: "npm run build",
  },
  environment: {
    VITE_REGION: region,
  },
});
