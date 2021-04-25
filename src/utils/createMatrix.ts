interface createMatrixType {
  (matrixLength: number): [string[][], string[][]]
}

export const matrixCreator: createMatrixType = (matrixLength) => {

  const createLine = (dotLength: number, lineLength: number): string[] => {
    const line: string[] = Array(dotLength).fill('.', 0, dotLength)
    for (let i = 0; i < (lineLength - dotLength) / 2; i++) {
      line.unshift('')
      line.push('')
    }
    return line
  }

  const matrixLines: string[][] = []
  const matrixBord: string[][] = []

  for (let i = 1; i <= matrixLength+1; i++) {
    if (i % 2 !== 0) {
      matrixLines.push(createLine(i, matrixLength))
      matrixBord.push(createLine(i, matrixLength))
    } else {
      matrixLines.push(createLine(i, matrixLength + 1))
    }
  }


  for (let i = matrixLength; i >= 1; i--) {
    if (i % 2 !== 0) {
      matrixLines.push(createLine(i, matrixLength))
      if (i !== matrixLength) matrixBord.push(createLine(i, matrixLength))
    } else {
      matrixLines.push(createLine(i, matrixLength + 1))
    }
  }

  matrixLines.forEach(line => {
    line[line.indexOf('.', 0)] = '#'
    if (line.includes('.')) line[line.lastIndexOf('.', line.length - 1)] = '#'
  })

  return [matrixLines, matrixBord]
}
