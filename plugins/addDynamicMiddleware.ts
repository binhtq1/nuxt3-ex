export default defineNuxtPlugin(() => {
  addRouteMiddleware("global", () => {}, { global: true });
});
