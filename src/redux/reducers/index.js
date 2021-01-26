import {
  SIGN_UP,
  SIGN_IN,
  BUY_SOAT,
  SECURE_CAR,
  CLIENT_INFO,
  VEHICLE_INFO,
  BUY_SOAT_FORM,
  MAIN_INFO,
  GET_CITIES,
  SIGN_IN_FAILURE,
  SIGN_UP_FAILURE,
  BUY_SOAT_FORM_FAILURE,
  SIGN_IN_SUCCESS,
  GET_CITIES_SUCCESS,
  BUY_SOAT_SUCCESS,
  BUY_SOAT_FORM_SUCCESS,
  SECURE_CAR_FAILURE,
  SECURE_CAR_SUCCESS,
  CLIENT_INFO_FAILURE,
  CLIENT_INFO_SUCCESS,
  VEHICLE_INFO_FAILURE,
  VEHICLE_INFO_SUCCESS,
  BUY_SOAT_FAILURE,
  GET_CITIES_FAILURE,
  MAIN_INFO_FAILURE,
  MAIN_INFO_SUCCESS,
  SIGN_UP_SUCCESS,
  CREATE_COUNTRY,
  CREATE_COUNTRY_FAILURE,
  CREATE_COUNTRY_SUCCESS,
  DELETE_COUNTRY,
  DELETE_COUNTRY_FAILURE,
  DELETE_COUNTRY_SUCCESS,
  GET_COUNTRIES,
  GET_COUNTRIES_FAILURE,
  GET_COUNTRIES_SUCCESS,
  UPDATE_COUNTRY,
  UPDATE_COUNTRY_FAILURE,
  UPDATE_COUNTRY_SUCCESS,
  GET_COUNTRY_BY_ID,
  GET_COUNTRY_BY_ID_SUCCESS,
  GET_COUNTRY_BY_ID_FAILURE,
  CREATE_MAINACTIVITY,
  CREATE_MAINACTIVITY_FAILURE,
  CREATE_MAINACTIVITY_SUCCESS,
  DELETE_MAINACTIVITY,
  DELETE_MAINACTIVITY_FAILURE,
  DELETE_MAINACTIVITY_SUCCESS,
  GET_MAINACTIVITIES,
  GET_MAINACTIVITIES_FAILURE,
  GET_MAINACTIVITIES_SUCCESS,
  UPDATE_MAINACTIVITY,
  UPDATE_MAINACTIVITY_FAILURE,
  UPDATE_MAINACTIVITY_SUCCESS,
  GET_MAINACTIVITY_BY_ID,
  GET_MAINACTIVITY_BY_ID_SUCCESS,
  GET_MAINACTIVITY_BY_ID_FAILURE,
  CREATE_MEDIUMRESPONSES,
  CREATE_MEDIUMRESPONSES_FAILURE,
  CREATE_MEDIUMRESPONSES_SUCCESS,
  DELETE_MEDIUMRESPONSES,
  DELETE_MEDIUMRESPONSES_FAILURE,
  DELETE_MEDIUMRESPONSES_SUCCESS,
  GET_MEDIUMRESPONSES,
  GET_MEDIUMRESPONSES_FAILURE,
  GET_MEDIUMRESPONSES_SUCCESS,
  UPDATE_MEDIUMRESPONSES,
  UPDATE_MEDIUMRESPONSES_FAILURE,
  UPDATE_MEDIUMRESPONSES_SUCCESS,
  GET_MEDIUMRESPONSES_BY_ID,
  GET_MEDIUMRESPONSES_BY_ID_SUCCESS,
  GET_MEDIUMRESPONSES_BY_ID_FAILURE,
  CREATE_LINKCLASSES,
  CREATE_LINKCLASSES_FAILURE,
  CREATE_LINKCLASSES_SUCCESS,
  DELETE_LINKCLASSES,
  DELETE_LINKCLASSES_FAILURE,
  DELETE_LINKCLASSES_SUCCESS,
  GET_LINKCLASSES,
  GET_LINKCLASSES_FAILURE,
  GET_LINKCLASSES_SUCCESS,
  UPDATE_LINKCLASSES,
  UPDATE_LINKCLASSES_FAILURE,
  UPDATE_LINKCLASSES_SUCCESS,
  GET_LINKCLASSES_BY_ID,
  GET_LINKCLASSES_BY_ID_SUCCESS,
  GET_LINKCLASSES_BY_ID_FAILURE,
  CREATE_PQRCONTACTS,
  CREATE_PQRCONTACTS_FAILURE,
  CREATE_PQRCONTACTS_SUCCESS,
  DELETE_PQRCONTACTS,
  DELETE_PQRCONTACTS_FAILURE,
  DELETE_PQRCONTACTS_SUCCESS,
  GET_PQRCONTACTS,
  GET_PQRCONTACTS_FAILURE,
  GET_PQRCONTACTS_SUCCESS,
  UPDATE_PQRCONTACTS,
  UPDATE_PQRCONTACTS_FAILURE,
  UPDATE_PQRCONTACTS_SUCCESS,
  GET_PQRCONTACTS_BY_ID,
  GET_PQRCONTACTS_BY_ID_SUCCESS,
  GET_PQRCONTACTS_BY_ID_FAILURE,
  CREATE_TYPEACTIVITY,
  CREATE_TYPEACTIVITY_FAILURE,
  CREATE_TYPEACTIVITY_SUCCESS,
  DELETE_TYPEACTIVITY,
  DELETE_TYPEACTIVITY_FAILURE,
  DELETE_TYPEACTIVITY_SUCCESS,
  GET_TYPEACTIVITIES,
  GET_TYPEACTIVITIES_FAILURE,
  GET_TYPEACTIVITIES_SUCCESS,
  UPDATE_TYPEACTIVITY,
  UPDATE_TYPEACTIVITY_FAILURE,
  UPDATE_TYPEACTIVITY_SUCCESS,
  GET_TYPEACTIVITY_BY_ID,
  GET_TYPEACTIVITY_BY_ID_SUCCESS,
  GET_TYPEACTIVITY_BY_ID_FAILURE,
} from '../constants';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case CLIENT_INFO:
    case VEHICLE_INFO:
    case BUY_SOAT:
    case SIGN_IN:
    case SIGN_UP:
    case BUY_SOAT_FORM:
    case SECURE_CAR:
    case GET_CITIES:
    case MAIN_INFO:
    /* COUNTRIES */
    case GET_COUNTRIES:
    case DELETE_COUNTRY:
    case GET_COUNTRY_BY_ID:
    case UPDATE_COUNTRY:
    case CREATE_COUNTRY:
    /* END COUNTRIES */
    /* MAINACTIVITIES */
    case GET_MAINACTIVITIES:
    case DELETE_MAINACTIVITY:
    case GET_MAINACTIVITY_BY_ID:
    case UPDATE_MAINACTIVITY:
    case CREATE_MAINACTIVITY:
      /* END MAINACTIVITIES */
      /* MEDIUMRESPONSES */
    case GET_MEDIUMRESPONSES:
      case DELETE_MEDIUMRESPONSES:
      case GET_MEDIUMRESPONSES_BY_ID:
      case UPDATE_MEDIUMRESPONSES:
      case CREATE_MEDIUMRESPONSES:
        /* END MEDIUMRESPONSES */
        /* LINKCLASSES */
    case GET_LINKCLASSES:
      case DELETE_LINKCLASSES:
      case GET_LINKCLASSES_BY_ID:
      case UPDATE_LINKCLASSES:
      case CREATE_LINKCLASSES:
      /* END LINKCLASSES */
      /* PQRCONTACTS */
    case GET_PQRCONTACTS:
      case DELETE_PQRCONTACTS:
      case GET_PQRCONTACTS_BY_ID:
      case UPDATE_PQRCONTACTS:
      case CREATE_PQRCONTACTS:
      /* END PQRCONTACTS */
      /* TYPEACTIVITIES */
    case GET_TYPEACTIVITIES:
      case DELETE_TYPEACTIVITY:
      case GET_TYPEACTIVITY_BY_ID:
      case UPDATE_TYPEACTIVITY:
      case CREATE_TYPEACTIVITY:
        /* END TYPEACTIVITIES */
      return { ...state, loading: true };
    case SECURE_CAR_FAILURE:
    case SIGN_IN_FAILURE:
    case SIGN_UP_FAILURE:
    case CLIENT_INFO_FAILURE:
    case VEHICLE_INFO_FAILURE:
    case BUY_SOAT_FAILURE:
    case BUY_SOAT_FORM_FAILURE:
    case GET_CITIES_FAILURE:
    case MAIN_INFO_FAILURE:
    /* COUNTRIES */
    case CREATE_COUNTRY_FAILURE:
    case UPDATE_COUNTRY_FAILURE:
    case DELETE_COUNTRY_FAILURE:
    case GET_COUNTRIES_FAILURE:
    case CREATE_COUNTRY_SUCCESS:
    case UPDATE_COUNTRY_SUCCESS:
    case DELETE_COUNTRY_SUCCESS:
    case GET_COUNTRY_BY_ID_FAILURE:
    /* END COUNTRIES */
    /* MAINACTIVITIES */
    case CREATE_MAINACTIVITY_FAILURE:
    case UPDATE_MAINACTIVITY_FAILURE:
    case DELETE_MAINACTIVITY_FAILURE:
    case GET_MAINACTIVITIES_FAILURE:
    case CREATE_MAINACTIVITY_SUCCESS:
    case UPDATE_MAINACTIVITY_SUCCESS:
    case DELETE_MAINACTIVITY_SUCCESS:
    case GET_MAINACTIVITY_BY_ID_FAILURE:
      /* END MAINACTIVITIES */
      /* MEDIUMRESPONSES */
     case CREATE_MEDIUMRESPONSES_FAILURE:
      case UPDATE_MEDIUMRESPONSES_FAILURE:
      case DELETE_MEDIUMRESPONSES_FAILURE:
      case GET_MEDIUMRESPONSES_FAILURE:
      case CREATE_MEDIUMRESPONSES_SUCCESS:
      case UPDATE_MEDIUMRESPONSES_SUCCESS:
      case DELETE_MEDIUMRESPONSES_SUCCESS:
      case GET_MEDIUMRESPONSES_BY_ID_FAILURE:
      /* END MEDIUMRESPONSES */
      /* LINKCLASSES */
    case CREATE_LINKCLASSES_FAILURE:
      case UPDATE_LINKCLASSES_FAILURE:
      case DELETE_LINKCLASSES_FAILURE:
      case GET_LINKCLASSES_FAILURE:
      case CREATE_LINKCLASSES_SUCCESS:
      case UPDATE_LINKCLASSES_SUCCESS:
      case DELETE_LINKCLASSES_SUCCESS:
      case GET_LINKCLASSES_BY_ID_FAILURE:
      /* END LINKCLASSES */
       /* PQRCONTACTS */
    case CREATE_PQRCONTACTS_FAILURE:
      case UPDATE_PQRCONTACTS_FAILURE:
      case DELETE_PQRCONTACTS_FAILURE:
      case GET_PQRCONTACTS_FAILURE:
      case CREATE_PQRCONTACTS_SUCCESS:
      case UPDATE_PQRCONTACTS_SUCCESS:
      case DELETE_PQRCONTACTS_SUCCESS:
      case GET_PQRCONTACTS_BY_ID_FAILURE:
      /* END PQRCONTACTS */
      /* TYPEACTIVITIES */
    case CREATE_TYPEACTIVITY_FAILURE:
      case UPDATE_TYPEACTIVITY_FAILURE:
      case DELETE_TYPEACTIVITY_FAILURE:
      case GET_TYPEACTIVITIES_FAILURE:
      case CREATE_TYPEACTIVITY_SUCCESS:
      case UPDATE_TYPEACTIVITY_SUCCESS:
      case DELETE_TYPEACTIVITY_SUCCESS:
      case GET_TYPEACTIVITY_BY_ID_FAILURE:
        /* END TYPEACTIVITIES */
      return {
        ...state,
        response: action.response,
        loading: false,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        auth: action.response,
        loading: false,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        auth: action.response,
        loading: false,
      };
    case MAIN_INFO_SUCCESS:
      return {
        ...state,
        response: action.response,
        loading: false,
      };
    case SECURE_CAR_SUCCESS:
      return {
        ...state,
        secure_car: action.response,
      };
    case GET_CITIES_SUCCESS:
      return { ...state, cities_secure_car: action.response, loading: false }
    case CLIENT_INFO_SUCCESS:
      return {
        ...state,
        client_info_soat: action.client_info,
        loading: false
      };
    case VEHICLE_INFO_SUCCESS:
      return {
        ...state,
        vehicle_info_soat: action.vehicle_info,
        loading: false
      };
    case BUY_SOAT_SUCCESS:
      return {
        ...state,
        buy_soat: action.buy_soat,
        loading: false
      };
    /* COUNTRIES */
    case GET_COUNTRY_BY_ID_SUCCESS:
      return {
        ...state,
        get_country: action.response,
        loading: false,
      };
    case GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        get_countries_list: action.response,
        loading: false,
      };
    /* END COUNTRIES */
    /* MAINACTIVITIES */
    case GET_MAINACTIVITY_BY_ID_SUCCESS:
      return {
        ...state,
        get_mainactivity: action.response,
        loading: false,
      };
    case GET_MAINACTIVITIES_SUCCESS:
      return {
        ...state,
        get_mainactivities_list: action.response,
        loading: false,
      };
    /* END MAINACTIVITIES */
    /* MEDIUMRESPONSES */
    case GET_MEDIUMRESPONSES_BY_ID_SUCCESS:
      return {
        ...state,
        get_mediumresponses: action.respon,
        loading: false,
      };
    case GET_MEDIUMRESPONSES_SUCCESS:
      return {
        ...state,
        get_mediumresponses_list: action.respon,
        loading: false,
      };
    /* END MAINACTIVITIES */
    /* LINKCLASSES */
    case GET_LINKCLASSES_BY_ID_SUCCESS:
      return {
        ...state,
        get_linkclasses: action.response,
        loading: false,
      };
    case GET_LINKCLASSES_SUCCESS:
      return {
        ...state,
        get_linkclasses_list: action.response,
        loading: false,
      };
    /* END LINKCLASSES */
    /* PQRCONTACTS */
    case GET_PQRCONTACTS_BY_ID_SUCCESS:
      return {
        ...state,
        get_pqrcontacts: action.response,
        loading: false,
      };
    case GET_PQRCONTACTS_SUCCESS:
      return {
        ...state,
        get_pqrcontacts_list: action.response,
        loading: false,
      };
    /* END PQRCONTACTS */
     /* TYPEACTIVITIES */
     case GET_TYPEACTIVITY_BY_ID_SUCCESS:
      return {
        ...state,
        get_typeactivity: action.response,
        loading: false,
      };
    case GET_TYPEACTIVITIES_SUCCESS:
      return {
        ...state,
        get_typeactivities_list: action.response,
        loading: false,
      };
    /* END TYPEACTIVITIES */
    case BUY_SOAT_FORM_SUCCESS:
    default:
      return state;
  }
};

export default reducer;
