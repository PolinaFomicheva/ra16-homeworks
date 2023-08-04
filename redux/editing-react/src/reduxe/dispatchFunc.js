import {
    ADD_SERVICE,
    REMOVE_SERVICE,
    CHANGE_SERVICE_FIELD,
    ID_ACTIVE,
  } from "./action";
  
  const changeForm = (name, value = null) => {
    return {
      type: CHANGE_SERVICE_FIELD,
      payload: { name, value },
    };
  };
  
  const addService = (name, price) => {
    return {
      type: ADD_SERVICE,
      payload: { name, price },
    };
  };
  
  const removeService = (id) => {
    return {
      type: REMOVE_SERVICE,
      payload: { id },
    };
  };
  
  const addIdActive = (id) => {
    return {
      type: ID_ACTIVE,
      payload: { id },
    };
  };
  export { changeForm, addService, removeService, addIdActive };