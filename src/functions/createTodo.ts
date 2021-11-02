import { APIGatewayProxyHandler } from "aws-lambda";
import { document } from "../utils/dynamodbClient";
import { v4 as uuidv4 } from "uuid";

export const handle: APIGatewayProxyHandler = async (event) => {
  const { user_id } = event.pathParameters;
  const { title, deadline } = JSON.parse(event.body);

  const response = await document
    .put({
      TableName: "todos",
      Item: {
        id: uuidv4(),
        user_id,
        title,
        done: false,
        deadline: new Date(deadline),
      },
    })
    .promise();

  console.log(response);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Todo criado com sucesso",
    }),
    headers: {
      "Content-type": "application/json",
    },
  };
};
