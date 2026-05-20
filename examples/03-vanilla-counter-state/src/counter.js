export function createCounter(initialValue = 0) {
  let count = initialValue

  return {
    get value() {
      return count
    },
    increment() {
      count += 1
      return count
    },
    decrement() {
      count -= 1
      return count
    },
    reset() {
      count = initialValue
      return count
    },
  }
}
