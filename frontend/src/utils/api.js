export const getProducts = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
