export const api = new sst.aws.ApiGatewayV2("Api", {
  transform: {
    route: {
      handler: {
        link: "./packages/functions/src/api.handler",
      },
    },
  },
});
