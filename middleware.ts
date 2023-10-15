export { default } from "next-auth/middleware";

// Author: EHSANSAFARI
// Define the routes that we want to be protected:
export const config = {
  // *: zero or more
  // +: one or more
  // ?: zero or one
  matcher: ["/users/:id*"],
};
