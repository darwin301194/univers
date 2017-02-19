// Warning! This function mutates the object!
export const camelizeKeys = json => {
  Object.keys(json).forEach(key => {
    var newKey = key.replace(/^[_.\- ]+/, '')
                  .toLowerCase()
                  .replace(/[_.\- ]+(\w|$)/g, (m, p1) => p1.toUpperCase())

    if (key !== newKey) {
      json[newKey] = json[key]
      delete json[key]
    }
  })
}
