export default defineEventHandler(async (event) => {
  return {
    num: Math.random(),
  };
});
