import { userTable } from "./storage";

export const api = new sst.aws.ApiGatewayV2("Api", {
  transform: {
    route: {
      handler: {
        link: [userTable],
      },
      args: {
        auth: { iam: true },
      },
    },
  },
});

api.route("POST /seedPlatforms", "packages/functions/src/seedPlatforms.main");
api.route("GET /getUserTable", "packages/functions/src/getUserTable.main");
