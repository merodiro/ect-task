function deepCopy<T extends object>(value: T): T {
  let baseObj = Array.isArray(value) ? [] : {}

  for (let key of Object.keys(value)) {
    if (value[key] instanceof Date) {
      baseObj[key] = new Date(value[key].getTime())
    } else if (value[key] instanceof RegExp) {
      baseObj[key] = new RegExp(value[key].source, value[key].flags)
      // check if value is an array or object
    } else if (value[key] instanceof Object) {
      baseObj[key] = deepCopy(value[key])
    } else {
      baseObj[key] = value[key]
    }
  }

  return baseObj as T
}

export { deepCopy }
