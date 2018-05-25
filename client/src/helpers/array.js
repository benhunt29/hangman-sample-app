export function getGroupedArray (array = [], groupSize = 1) {
  let groupedArray = []
  for (let i = 0; i < array.length; i += groupSize) {
    groupedArray.push(array.slice(i, i + groupSize))
  }
  return groupedArray
}
