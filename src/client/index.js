import { OpenAPIClientAxios } from 'openapi-client-axios'

const api = new OpenAPIClientAxios({
  definition: 'http://localhost:8000/openapi.json',
  axiosConfigDefaults: {
    withCredentials: true
  }
})
api.withServer({ url: 'http://localhost:8000/' })

export default api
