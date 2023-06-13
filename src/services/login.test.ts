import { login } from "./login"

describe('login',  () => {

  const mockAlert = jest.fn()
  window.alert = mockAlert

  it('Should display a welcome alert', () => {
    login()
    expect(mockAlert).toHaveBeenCalledWith('Seja bem vindo(a)!')
  })
})