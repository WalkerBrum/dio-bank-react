import { activeButton } from "./activeButton"

describe('Button must be activated', () => {

  it('must send a non-empty email and password', () => {
    const email = 'walker.b.lobato@gmail.com'
    const password = '464196'

    const buttonActived = activeButton(email, password)

    expect(buttonActived).toBe(false)
  })

  it('must send an empty email and a non-empty password', () => {
    const email = 'walker.b.lobato@gmail.com'
    const password = ''

    const buttonActived = activeButton(email, password)

    expect(buttonActived).toBe(true)
  })

  it('must send a non-empty email and an empty password', () => {
    const email = ''
    const password = '464196'

    const buttonActived = activeButton(email, password)

    expect(buttonActived).toBe(true)
  })
})