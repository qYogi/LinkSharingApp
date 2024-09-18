/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "LinkSharingApp",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    // await import("./infra/storage");
    await import("./infra/web");
    await import("./infra/api");

    // const api = await import("./infra/api");

    return {
      Region: aws.getRegionOutput().name,
    };
  },
});
