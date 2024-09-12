import userRoute from "./userRoute.js";

const route = (app) => {
  // Define routes
  app.use("/user", userRoute);
};

export default route;
