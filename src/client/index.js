import { OpenAPIClientAxios } from 'openapi-client-axios'
import { BACKEND_URL } from '@/constants'

const api = new OpenAPIClientAxios({
  definition: BACKEND_URL + '/openapi.json',
  axiosConfigDefaults: {
    withCredentials: true
  }
})
api.withServer({ url: BACKEND_URL })

export default api
