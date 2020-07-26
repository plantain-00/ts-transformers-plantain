// last-executing-code:disable
let _lastExecutingCode: string | undefined

for (let i = 0; i < 4; i++) {
  let j = i
  /**
   * executed-code:disable
   * code-time:disable
   */
  while (j < 4) {
    j++
  }
}

try {
  throw 1
} catch {
  // last-executing-code:disable
  console.info(_lastExecutingCode)
}

/**
 * executed-code:disable
 * code-time:disable
 */
function foo() {
  console.info(1)
}

function bar() {
  function baz() {
    console.info(2)
  }
  console.info(baz)
}

class A {
  b() {
    console.info(1)
  }
  constructor() {
    console.info(2)
  }
  get c() {
    return 1
  }
  set c(value: number) {
    console.info(value)
  }
}

declare const _showCodeCoverage: () => void
_showCodeCoverage();

<button onClick={() => console.info(1)}></button>

const a = 'aa'.length + 1
console.info(a)
