import { serverTiming } from "./serverTiming";
import { createEvent, createContext } from "@lambda-middleware/utils";

describe("serverTiming", () => {
  it("returns the handler's response", async () => {
    const response = {
      statusCode: 200,
      body: "",
    };
    const handler = jest.fn().mockResolvedValue(response);
    expect(
      await serverTiming()(handler)(createEvent({}), createContext())
    ).toMatchObject(response);
  });

  it("returns the handler's response", async () => {
    const response = {
      statusCode: 200,
      body: "",
    };
    const handler = jest.fn().mockResolvedValue(response);
    expect(
      await serverTiming()(handler)(createEvent({}), createContext())
    ).toMatchObject(response);

    const handlerResponse = await serverTiming()(handler)(
      createEvent({}),
      createContext()
    );
    expect(handlerResponse).toMatchObject({
      headers: {
        "Server-Timing": "missedCache",
      },
    });
  });
});
