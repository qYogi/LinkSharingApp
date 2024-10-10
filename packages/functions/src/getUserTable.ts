import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { DynamoDBDocumentClient, QueryCommand } from "@aws-sdk/lib-dynamodb";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { Resource } from "sst";
import { use } from "@serverless-stack/resources";

const dynamoDb = DynamoDBDocumentClient.from(new DynamoDBClient({}));

export async function main(
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> {
  try {
    console.log("Received event:", JSON.stringify(event, null, 2));

    const userId =
      event.requestContext.authorizer?.iam.cognitoIdentity.identityId;

    if (!userId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing userId" }),
      };
    }

    const userTableQueryResponse = await dynamoDb.send(
      new QueryCommand({
        TableName: Resource.UserTable.name,
        KeyConditionExpression: "userId = :userId",
        ExpressionAttributeValues: {
          ":userId": userId,
        },
      }),
    );

    const userDbRecord = userTableQueryResponse.Items || [];

    const userDetails = userDbRecord[0];

    if (!userDetails) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "User not found" }),
      };
    }
    return {
      statusCode: 200,
      body: JSON.stringify({
        ...userDetails,
      }),
    };
  } catch (error) {
    console.error("Error fetching addOns:", JSON.stringify(error, null, 2)); // Detailed error logging

    return {
      statusCode: 404,
      body: JSON.stringify({ error: (error as Error).message }),
    };
  }
}
