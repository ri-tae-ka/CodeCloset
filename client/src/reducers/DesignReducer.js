import {
  ALL_DESIGN_FAIL,
  ALL_DESIGN_REQUEST,
  ALL_DESIGN_SUCCESS,
  SINGLE_DESIGN_REQUEST,
  SINGLE_DESIGN_SUCCESS,
  SINGLE_DESIGN_FAIl,
  CREATE_DESIGN_REQUEST,
  CREATE_DESIGN_SUCCESS,
  CREATE_DESIGN_RESET,
  CREATE_DESIGN_FAIl,
  CLEAR_ERRORS,
  DELETE_DESIGN_REQUEST,
  DELETE_DESIGN_SUCCESS,
  DELETE_DESIGN_RESET,
  DELETE_DESIGN_FAIL,
} from "../constants/DesignConstants";

export const designReducer = (state = { designs: [] }, action) => {
  switch (action.type) {
    case ALL_DESIGN_REQUEST:
      return {
        loading: true,
        designs: [],
      };
    case ALL_DESIGN_SUCCESS:
      return {
        loading: false,
        designs: action.payload.css,
      };
    case ALL_DESIGN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const singleDesignDetails = (state = { design: {} }, action) => {
  switch (action.type) {
    case SINGLE_DESIGN_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case SINGLE_DESIGN_SUCCESS:
      return {
        loading: false,
        design: action.payload,
      };
    case SINGLE_DESIGN_FAIl:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const createDesign = (state = { newDesign: {} }, action) => {
  switch (action.type) {
    case CREATE_DESIGN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_DESIGN_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        newDesign: action.payload,
      };
    case CREATE_DESIGN_RESET:
      return {
        ...state,
        success: false,
      };
    case CREATE_DESIGN_FAIl:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const deleteDesign = (state = {}, action) => {
  switch (action.type) {
    case DELETE_DESIGN_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case DELETE_DESIGN_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case DELETE_DESIGN_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case DELETE_DESIGN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
