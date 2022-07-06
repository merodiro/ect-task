function compare(value: object, other: object): boolean {
  for (let key in value) {
    // check if value doesn't exist on other and isn't undefined or null in value
    if (!other.hasOwnProperty(key) && value[key] != undefined) {
      return false
    } else if (value[key] instanceof Date) {
      if (value[key].getTime() != other[key].getTime()) {
        return false
      }
      // check if value is an array or object
    } else if (other[key] instanceof Object) {
      if (!check(other[key], value[key])) {
        return false
      }
    } else if (other[key] != value[key]) {
      return false
    }
  }
  return true
}

function check(value: object, other: object): boolean {
  return compare(value, other) && compare(other, value)
}

export { check }
