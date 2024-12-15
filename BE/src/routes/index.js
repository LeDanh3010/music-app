import userRoute from "./userRoute.js";

const route = (app) => {
  // Define routes
  app.use("/user", userRoute);
  app.use("/admin", userRoute);
};

export default route;
