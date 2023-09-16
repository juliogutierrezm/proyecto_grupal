const environments = {
    development: "http://localhost:8080",
    production: "/api",
  };

  const baseUrl = environments[import.meta.env.MODE] || "";

  console.log(import.meta.env.MODE)
  console.log(baseUrl)

  export { baseUrl };