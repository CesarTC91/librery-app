import isElectron from 'is-electron'
import { getCookie } from 'cookies-next'

const libraryService = {
  uri: process.env.NEXT_PUBLIC_BACKEND_URL
}



export const apolloSettings = {
  services: [
    libraryService,
  ], 
  memoryCacheSettings: {
    addTypename: false
  }
}