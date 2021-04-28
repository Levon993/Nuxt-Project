import axios from '@nuxtjs/axios'

export default function({isServer, req}) {
  console.log(req.headers.cookie);
  if (isServer) {
    console.log('dsdsdsd');
    axios.defaults.headers.common.cookie = req.headers.cookie
  }
}