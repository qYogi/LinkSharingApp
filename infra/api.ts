import { userTable, linksTable } from "./storage";

export const api = new sst.aws.ApiGatewayV2("Api", {
  transform: {
    route: {
      handler: {
        link: [userTable, linksTable],
      },
      args: {
        auth: { iam: true },
      },
    },
  },
});

api.route("POST /seedPlatforms", "packages/functions/src/seedPlatforms.main");
