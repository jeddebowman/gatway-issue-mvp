/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "test-api",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: {
          region: (process.env.AWS_REGION as aws.Region) || "us-west-2",
        },
      },
    };
  },
  async run() {
    const { testApi } = await import("./infra/api");

    return {
      api: testApi.url,
    };
  },
});
