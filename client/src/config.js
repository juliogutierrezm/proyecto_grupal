const environments = {
    development: "http://localhost:8080",
    production: "/api",
  };

  const baseUrl = environments[process.env.NODE_ENV] || "";

  console.log(process.env.NODE_ENV)
  console.log(baseUrl)

  export { baseUrl };