export const testApi = new sst.aws.ApiGatewayV1("TestApi");

const reusedFunction = new sst.aws.Function("ReusedFunction", {
  handler: "src/index.handler",
});

testApi.route("GET /", reusedFunction.arn);

testApi.deploy();
