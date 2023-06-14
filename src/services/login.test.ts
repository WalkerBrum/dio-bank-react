import { api } from "../api";
import { login } from "./login";


describe('login',  async () => {

  const mockAlert = jest.fn();
  window.alert = mockAlert;

  const data: any = await api;

  const mockEmail = data.email;
  const mockPassword = data.password;

  it('Should display a welcome alert if the email is valid', async () => {
    await login(mockEmail, mockPassword);
    expect(mockAlert).toHaveBeenCalledWith(`Seja bem vindo(a) ${data.name}!`);
  });

  it('display an error if the email is invalid', async () => {
    await login('email@invalido.com', mockEmail);
    expect(mockAlert).toHaveBeenCalledWith(`Email inválido!`);
  });

  it('Should display a welcome alert if the password is valid', async () => {
    await login(mockEmail, '415225');
    expect(mockAlert).toHaveBeenCalledWith(`Senha inválida!`);
  });
})