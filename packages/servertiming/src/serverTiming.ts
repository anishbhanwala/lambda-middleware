import { PromiseHandler } from "@lambda-middleware/utils";
import { APIGatewayProxyResult, Context } from "aws-lambda";
import { logger } from "./logger";

export const serverTiming = <Event>() => (
  handler: PromiseHandler<Event, APIGatewayProxyResult>
) => async (event: Event, context: Context): Promise<APIGatewayProxyResult> => {
  logger("Running handler");
  const response = await handler(event, context);

  return {
    ...response,
    headers: { ...response.headers, "Server-Timing": "missedCache" },
  };
};
