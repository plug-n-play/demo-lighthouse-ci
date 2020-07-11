module.exports = {
  ci: {
    collect: {
      url: ["http://localhost:3000/"],
      startServerCommand: "npm install && npm start",
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
  assert: {
    preset: "lighthouse:recommended",
  },
};
