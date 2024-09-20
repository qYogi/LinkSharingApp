export const api = new sst.aws.ApiGatewayV2("Api", {
  transform: {
    route: {
      handler: {
        link: [],
      },
      args: {
        auth: { iam: true },
      },
    },
  },
});
