function config() {
    const SERVER_URL =
      import.meta.env.VITE_APP_SERVER_URL ?? "http://localhost:5173";
    return { SERVER_URL };
  }
  
  export default config;