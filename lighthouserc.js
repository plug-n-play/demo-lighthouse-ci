module.exports = {
  ci: {
    collect: {
      staticDistDir: "./",
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
  assert: {
    preset: "lighthouse:recommended",
  },
};
