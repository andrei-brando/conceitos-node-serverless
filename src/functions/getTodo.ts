import { APIGatewayProxyHandler } from "aws-lambda";
import { document } from "../utils/dynamodbClient";

export const handle: APIGatewayProxyHandler = async (event) => {
  const { user_id } = event.pathParameters;

  const response = await document
    .query({
      TableName: "todos",
      KeyConditionExpression: "user_id = :user_id",
      ExpressionAttributeValues: {
        ":user_id": "f61b24c1-0cd6-4bbd-94cb-61471f5a05fb",
      },
    })
    .promise();

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: response.Items[0],
    }),
    headers: {
      "Content-type": "application/json",
    },
  };
};
