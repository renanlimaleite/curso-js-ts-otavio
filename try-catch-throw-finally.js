/**
 * Try
 * Catch
 * Throw
 * Finally
 * 
 * Sempre é bom tratar o erro, e não demonstrar pro client.
 * 
 * Finally sempre é executado.
 * 
 * Try Catchs Finally podem ser aninhados.
 */

// Try - Catch
try {
  console.log(variable)
} catch (err) {
  console.log('Aconteceu algum erro interno')
}

// Throw
/**
 * 
 * throw ('x e y precisam ser números') 
    x e y precisam ser números 
 * 
 */
function soma(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('x e y precisam ser números')
  }
  return x + y
}

try {
  soma(1, '1')
} catch (error) {
  console.log(error)
}

// Finaly sempre é executado.
try {
  console.log('Abrir um arquivo')
  console.log('Manipulei arquivo')
  console.log('Fechei arquivo')
} catch (e) {
  console.log('Tratar error')
} finally {
  console.log('Garantir que fechar o arquivo')
}