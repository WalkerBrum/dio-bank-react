const conta = {
  email: 'walker.b.lobato@gmail.com',
  password: '464196',
  name: 'Walker Lobato',
  balance: 2000.00
}

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta)
  }, 3000)
})