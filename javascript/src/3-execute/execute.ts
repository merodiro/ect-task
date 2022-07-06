function execute(code: string, variables: Record<string, number>): void {
  const context = {
    $math: {
      sum: (a: number, b: number) => a + b,
      mul: (a: number, b: number) => a * b,
    },
    $logger: (...args: any[]) => console.log(...args),
  }

  const globalVariables = `
const $math = {
  sum: ${context.$math.sum.toString()},
  mul: ${context.$math.mul.toString()},
};
const $logger = ${context.$logger.toString()};`

  const variablesCode = Object.entries(variables).reduce(
    (acc, [key, value]) => `${acc}
const ${key} = ${value};`,
    ''
  )

  const codeWithVariables = `
${globalVariables}
${variablesCode}
${code}`

  eval(codeWithVariables)
}

export { execute }
