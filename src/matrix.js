let first = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

let second = [
  [9, 7, 8],
  [6, 5, 4],
  [3, 2, 1],
]

let row = []
let result = []
let item = 0
const multiplyMatrix = (mat1, mat2) => {
  for (let a = 0; a < mat1.length; a++) {
    for (let i = 0; i < mat1.length; i++) {
      for (let e = 0; e < mat2.length; e++) {
        item += mat1[a][e] * mat2[e][i]
      }
      row.push(item)
      item = 0
    }
    result.push(row)
    row = []
  }
  console.log(result)
}
multiplyMatrix(first, second)
