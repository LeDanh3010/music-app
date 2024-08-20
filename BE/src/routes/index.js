import userRoute from "./userRoute";

const route = (app) => {
  // Define routes
  app.use("/user", userRoute);
};

export default route;
