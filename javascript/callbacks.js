function f1(callback) {
  setTimeout(() => {
    console.log('f1')
    if (callback) {
      callback()
    }
  }, 500)
}
function f2(callback) {
  setTimeout(() => {
    console.log('f2')
    if (callback) {
      callback()
    }
  }, 1000)
}
function f3(callback) {
  setTimeout(() => {
    console.log('f3')
    if (callback) {
      callback()
    }
  }, 800)
}

// f1()
// f2()
// f3()
// console.log('exit')

f1(() => f2(() => f3(() => console.log('Exit'))))

/**
 * f1...
 * 500ms
 * f2()...
 * 1000ms
 * f3()...
 */

f1(f1Callback)

function f1Callback() {
  f2(f2Callback)
}

function f2Callback() {
  f3(f3Callback)
}

function f3Callback() {
  console.log('exit')
}