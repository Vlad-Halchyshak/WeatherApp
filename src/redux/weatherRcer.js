import { WeatherApi } from '../api/api'

const SET_ERROR = 'SET_ERROR'
const SET_LOADING = 'SET_LOADING'

const initialState = {
  data: null,
  error: '',
  loading: true,
}

export const WeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA': {
      return {
        ...state,
        data: action.payload,
        
      }
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: action.loading,
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
    dispatch(setLoading(true))
    const data = await WeatherApi.getWeather(city)
    dispatch(setLoading(false))
    dispatch(setData(data))
    dispatch(setError(''))
   
  } catch (error) {
    dispatch(setLoading(true))
    dispatch(setError('city does not exist'))
    dispatch(setLoading(false))
    if (!city) {
      dispatch(setError(''))
    }
  }
}
