import { WeatherApi } from '../api/api'

const SET_ERROR = 'SET_ERROR'
const SET_LOADING = 'SET_LOADING'

const initialState = {
  data: null,
  error: '',
  loading: false,
}

export const WeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA': {
      return {
        ...state,
        data: action.payload,
        loading: false,
      }
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: true,
      }
    }
    case SET_ERROR: {
      return {
        ...state,
        error: action.error,
      }
    }
  }
  return state
}

export const setData = (data) => ({
  type: 'SET_DATA',
  payload: data,
})

export const setError = (error) => ({
  type: SET_ERROR,
  error,
})
export const setLoading = (loading) => ({
  type: SET_LOADING,
  loading,
})

export const getWeather = (city) => async (dispatch) => {
  try {
    const data = await WeatherApi.getWeather(city)
   
    dispatch(setData(data))
    dispatch(setError(''))
  } catch (error) {
    
    dispatch(setError('city does not exist'))
    if (!city) {
      dispatch(setError(''))
    }
    console.log(error)
  }
}
