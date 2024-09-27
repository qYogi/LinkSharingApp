import { Resource } from "sst";
import { APIGatewayProxyEvent } from "aws-lambda";
import {
  DynamoDBDocumentClient,
  PutCommand,
  ScanCommand,
} from "@aws-sdk/lib-dynamodb";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

const dynamoDb = DynamoDBDocumentClient.from(new DynamoDBClient({}));

export async function main(event: APIGatewayProxyEvent) {
  const seededPlatforms = await seedPlatforms();

  return JSON.stringify({ seededPlatforms });
}

async function seedPlatforms() {
  const platforms = [
    { id: "1", name: "GitHub", icon: "GitHub.svg" },
    { id: "2", name: "LinkedIn", icon: "LinkedIn.svg" },
    { id: "3", name: "FrontendMentor", icon: "FrontendMentor.svg" },
    { id: "4", name: "Twitter", icon: "Twitter.svg" },
    { id: "5", name: "YouTube", icon: "YouTube.svg" },
    { id: "6", name: "Facebook", icon: "Facebook.svg" },
    { id: "7", name: "Twitch", icon: "Twitch.svg" },
    { id: "8", name: "DevTo", icon: "DevTo.svg" },
    { id: "9", name: "Codewars", icon: "Codewars.svg" },
    { id: "10", name: "Codepen", icon: "Codepen.svg" },
    { id: "11", name: "FreeCodeCamp", icon: "FreeCodeCamp.svg" },
    { id: "12", name: "GitLab", icon: "GitLab.svg" },
    { id: "13", name: "Hashnode", icon: "Hashnode.svg" },
    { id: "14", name: "StackOverflow", icon: "StackOverflow.svg" },
  ];

  const existingPlatforms = await dynamoDb.send(
    new ScanCommand({ TableName: Resource.LinksTable.name }),
  );

  if (existingPlatforms.Items?.length) {
    return false;
  }

  const createPlatformPromises = platforms.map((platform) => {
    return new Promise((resolve) => {
      dynamoDb
        .send(
          new PutCommand({
            TableName: Resource.LinksTable.name,
            Item: platform,
          }),
        )
        .then(() => resolve(true))
        .catch(() => resolve(false));
    });
  });

  await Promise.all(createPlatformPromises);

  return true;
}
