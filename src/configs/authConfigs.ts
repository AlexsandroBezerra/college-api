export const authConfigs = {
  jwt: {
    secret: process.env.APP_SECRET || "my-secret",
    expiredIn: "10m",
  },
};
