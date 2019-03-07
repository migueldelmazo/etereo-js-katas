const checkArgObj = (obj) => {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
    throw new Error('"obj" is not valid object')
  }
}

const checkArgPath = (path) => {
  if (!(typeof path === 'string' || path === undefined)) {
    throw new Error('"path" is not a valid string or undefined')
  }
}

const checkArgPathAsString = (path) => {
  if (typeof path !== 'string') {
    throw new Error('"path" is not a valid string')
  }
}

const getProperty = (obj, defaultValue, path) => {
  const paths = path.split('.')
  const pathsLength = paths.length
  let tmpObj = obj

  for (let idx = 0; idx < pathsLength; idx += 1) {
    if (tmpObj && tmpObj.hasOwnProperty && tmpObj.hasOwnProperty(paths[idx])) {
      tmpObj = tmpObj[paths[idx]]
    } else {
      return defaultValue
    }
  }

  return tmpObj
}

export function kata2 (obj, defaultValue = null, path) {
  checkArgObj(obj)
  checkArgPath(path)

  if (typeof path === 'string') {
    return getProperty(obj, defaultValue, path)
  } else if (path === undefined) {
    return function (obj, defaultValue, path) {
      checkArgPathAsString(path)
      return getProperty(obj, defaultValue, path)
    }.bind(null, obj, defaultValue)
  }
}
