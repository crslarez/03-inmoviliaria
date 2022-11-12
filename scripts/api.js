const URL_API = "http://localhost:3000/propiedades";
const will = 2;
const getProperties = async () => {
  try {
    const peticion = await fetch(URL_API);
    const parsear = peticion.json();
    console.log(parsear);
    return parsear;
  } catch (error) {
    console.log(error);
  }
};
getProperties();
