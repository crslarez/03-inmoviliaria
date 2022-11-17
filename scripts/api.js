const URL_API = "http://localhost:3000/propiedades";
const will = 2;
export const getProperties = async () => {
  try {
    const peticion = await fetch(URL_API);
    const parsear = await peticion.json();
    return parsear;
  } catch (error) {
    console.error(error);
  }
};

export const getPropertiesById = async (id) => {
  try {
    const peticion = await fetch(URL_API + "/" + id);
    const parsear = await peticion.json();
    return parsear;
  } catch (error) {
    console.error(error);
  }
};

export const getPropietiesFilter = async (search) => {
  try {
    let response = await fetch(URL_API + search);
    let data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
