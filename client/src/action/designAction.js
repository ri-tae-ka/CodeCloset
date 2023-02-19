import {
  ALL_DESIGN_FAIL,
  ALL_DESIGN_REQUEST,
  ALL_DESIGN_SUCCESS,
  CLEAR_ERRORS,
  CREATE_DESIGN_FAIl,
  CREATE_DESIGN_REQUEST,
  CREATE_DESIGN_SUCCESS,
  SINGLE_DESIGN_FAIl,
  SINGLE_DESIGN_REQUEST,
  SINGLE_DESIGN_SUCCESS,
} from "../constants/DesignConstants";
import axios from "axios";

export const getAllDesigns = () => async (dispatch) => {
  try {
    dispatch({
      type: ALL_DESIGN_REQUEST,
    });
    const { data } = await axios.get("/api/v1/designs");
    //console.log(data);
    dispatch({
      type: ALL_DESIGN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_DESIGN_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getSingleDesign = (id) => async (dispatch) => {
  try {
    dispatch({
      type: SINGLE_DESIGN_REQUEST,
    });
    const { data } = await axios.get(`/api/v1/design/${id}`);
    //console.log(data);
    dispatch({
      type: SINGLE_DESIGN_SUCCESS,
      payload: data.css,
    });
  } catch (error) {
    dispatch({
      type: SINGLE_DESIGN_FAIl,
      payload: error.response.data.message,
    });
  }
};

export const createDesign = (newDesign) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_DESIGN_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post("/api/v1/design/new", newDesign, config);

    dispatch({
      type: CREATE_DESIGN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_DESIGN_FAIl,
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
