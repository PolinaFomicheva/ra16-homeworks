export const request = async (param) => {
    const response = await fetch(`http://localhost:7070/api/services${param}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  };
  