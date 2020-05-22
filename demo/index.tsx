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

<button onClick={() => console.info(1)}></button>
