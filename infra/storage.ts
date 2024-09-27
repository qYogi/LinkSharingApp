export const bucket = new sst.aws.Bucket("ProfilePictures");

export const userTable = new sst.aws.Dynamo("UserTable", {
  fields: {
    userId: "string",
    links: "string",
    email: "string",
    name: "string",
    isActive: "binary",
  },
  primaryIndex: { hashKey: "userId" },
  globalIndexes: {
    emailIndex: { hashKey: "email" },
    nameIndex: { hashKey: "name" },
    isActiveIndex: { hashKey: "isActive" },
    linksTableIndex: { hashKey: "links" },
  },
});

export const linksTable = new sst.aws.Dynamo("LinksTable", {
  fields: {
    linkId: "string",
    platformName: "string",
    url: "string",
  },
  primaryIndex: { hashKey: "linkId" },
  globalIndexes: {
    platformNameIndex: { hashKey: "platformName" },
    urlIndex: { hashKey: "url" },
  },
});
