
const config = {
  zIndex: 99999
}
export default {
  get (key) {
    return config[key]
  },
  set (key, val) {
    config[key] = val
  }
}