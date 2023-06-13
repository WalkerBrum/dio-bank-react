import { hasUnderline } from "./hasUnderline";

describe('Has underline in email', () => {

  it('must find @ in the email', () => {
    const email = 'walker.b.lobato@gmail.com'

    const underline = hasUnderline(email)

    expect(underline).toBe(true)
  })

  it('must not find @ in the email', () => {
    const email = 'walker.b.lobatogmail.com'

    const underline = hasUnderline(email)

    expect(underline).toBe(false)
  })
})