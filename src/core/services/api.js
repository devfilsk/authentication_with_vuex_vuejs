import axios from 'axios'

const api = axios.create({
  baseURL: 'https://validacao.api.validacao.appfacilita.com/api/v1/',
  headers: {
    'goscore-token': '22a3803365a55b197a3b43bc64aacc11',
    'goscore-token-user': 'eyJpdiI6IkkrZ3kzYUkrdklJWkJDTm1BN3FYTlE9PSIsInZhbHVlIjoiWkdqaG5GNVlpUHQrUjBsUHp3ZDM1ZFU1aFo0WWVKY045TlduNWt6cEhBM1ZTTjdDMGlRWEZORTEwV1JTbExFRCIsIm1hYyI6Ijg4NjJiYjk0NmQ4MTAzZjNlZWNiNjcwZjQ5ZGI0YTc1NjVhM2YyYzQyZDRjMzc1NjhmNjJiNjVjZjk3MTg4NTkifQ=='
  },
  auth: {
    username: '',
    password: ''
  }
})

export default api
