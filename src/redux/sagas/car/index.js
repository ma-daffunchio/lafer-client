import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import http from "../../../axios/sura";
import showNotification from '../../showNotification';

const PASSWORD_ASESOR = "29528";
const API_KEY = "UK3ncSKYBD3dxMHSCLNVe4QYh6ZHEwbZ4dlc1dSp";
const QUOTATION_ENDPOINT = "https://stg-api-conecta.segurosbolivar.com/stage/seguro-autos/cotizacion";
const HEADERS = {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "x-api-key": API_KEY,
};

const createLead = async (dataFormValues) => {
  const { 
    name,
    lastName,
    identification,
    email,
    city,
    address,
  } = dataFormValues;
  
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Access-Control-Allow-Origin", "*");

  var raw = JSON.stringify(
    {
      "method": "createLeads",
      "params":
      {
        "objects":[
          {
            firstName: name,
            lastName,
            id: identification,
            emailAddress: email,
            city,
            street: address
          }
        ]
      },
      "id": `123${identification}`
    }
  );

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
  };

  const url = "https://api.sharpspring.com/pubapi/v1/?accountID=76FD61825495DAC83BD6A631F10B3E91&secretKey=08F1969173F67ABD5FB267D6E2547FB5"
  fetch("https://cors-anywhere.herokuapp.com/" + url, requestOptions)
    .then(response => response.text())
    .then(result => result)
    .catch(error => console.log('error', error));
}

function* secureCar (formValues) {
  const {
    vehicle,
    model,
    name,
    lastName,
    identificationType,
    identification,
    birthDate,
    genre,
    email,
    city,
    address,
    zeroKm = false,
    cityCode = 14000,
  } = formValues.payload;
  
  let dataFormValues = {
    "placaVehiculo": vehicle ? vehicle : 'QWQ654',
    "tipoDocumentoTomador": identificationType,
    "numeroDocumentoTomador": Number.parseInt(identification),
    "nombresTomador": name,
    "apellidosTomador": lastName,
    "fechaNacimientoTomador": birthDate,
    "generoConductor": genre,
    "claveAsesor": Number.parseInt(PASSWORD_ASESOR),
    "sumaAccesorios": 0,
    "ciudadMovilizacion": Number.parseInt(cityCode),
    "ceroKm": `${zeroKm}`,
    "periodoFact": 12,
    "marcaVehiculo": "4601258",
    "modeloVehiculo": Number.parseInt(model),  
  };

  createLead({
    name,
    lastName,
    identificationType,
    identification,
    birthDate,
    genre,
    email,
    city,
    address,
  });

  try {
    const url = "https://stg-api-conecta.segurosbolivar.com/stage/seguro-autos/liquidacion";
    const response =  yield http.post(
      "https://cors-anywhere.herokuapp.com/" + url,
      dataFormValues,
    );
    const data = response.data;

    if (response.status === 200) {
      yield call(showNotification, { type: 'success', message: 'Visualiza la lista de productos' });
      yield put({ type: "SECURE_CAR_SUCCESS", response: { ...data.data }, });
    
    } else if (response.status === 400) {
      if (data.dataHeader.errores[0].idError === 1000) {
        yield call(showNotification, { type: 'warning', message: 'La placa y el modelo no concuerdan' });
      
      } else {
        yield call(showNotification, { type: 'warning', message: data.dataHeader.errores[0].descError });
      
      }
      yield put({ type: "SECURE_CAR_FAILURE", response: { ...data.dataHeader.errores[0] }, });
    
    } else if (response.status === 500 || response.status === 504) {
      yield call(showNotification, { type: 'warning', message: 'Error en la liquidación, por favor inténtelo nuevamente.' });
      yield put({ type: "SECURE_CAR_FAILURE", response: { ...data.dataHeader }, });
    
    } else {
      yield call(showNotification, { type: 'warning', message: 'Error en la liquidación' });
      yield put({ type: "SECURE_CAR_FAILURE", response: { ...data.dataHeader }, });
    
    }
  } catch(err) {
    yield call(showNotification, { type: 'warning', message: 'Error en la liquidación' });
    yield put({ type: "SECURE_CAR_FAILURE", response: { }, });
  }
}

function* getQuotation(formValues) {
  const {
    vehicle,
    brand,
    model,
    name,
    lastName,
    identificationType,
    identification,
    email,
    address,
    birthDate,
    genre,
    zeroKm = false,
    cityCode = 14000,
    phone,
    settlementNumber,
  } = formValues.payload;

  const quotationDataOne = {
    "mailTomador": email,
    "celTomador": phone,
    "dirTomador": address,
    "ciuTomador": cityCode,
    "nomConductor": `${name} ${lastName}`,
    "sexoConductor": genre,
    "fecNacConductor": birthDate,
    "placaVeh": vehicle,
    "numLiquidacion": settlementNumber,
  };
  const dataOne = yield axios.post(QUOTATION_ENDPOINT, quotationDataOne, HEADERS);
  
  const resOne = yield dataOne.json();

  yield put({ type: "SECURE_CAR_SUCCESS", response: { ...resOne.data } });
}

function* getCities() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept", "application/json");
  myHeaders.append("x-api-key", API_KEY);

  var raw = JSON.stringify({"claveAsesor": PASSWORD_ASESOR});

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  const response = yield fetch("https://stg-api-conecta.segurosbolivar.com/stage/listaCiudades?x-api-key=UK3ncSKYBD3dxMHSCLNVe4QYh6ZHEwbZ4dlc1dSp&claveAsesor=29528&Content-Type=application/json", requestOptions);
  const data = yield response.json();

  if (data.dataHeader.codRespuesta === 200) {
    yield put({ type: "GET_CITIES_SUCCESS", response: [...data.data.catalogoDato] , });  
  } else {
    yield call(showNotification, { type: 'warning', message: 'Error en la obtención de ciudades' });
    yield put({ type: "GET_CITIES_FAILURE", response: { ...data }, });
  }
}

export function* secureCarWatcher() {
  yield takeLatest('SECURE_CAR', secureCar)
  yield takeLatest('GET_CITIES', getCities)
}
