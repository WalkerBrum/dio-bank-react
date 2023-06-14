import { api } from "../api"

export const login = async (email: string, password: string): Promise<void> => {
  const data: any = await api;

  if (email !== data.email) return alert('Email inválido!');

  if (password !== data.password) return alert('Senha inválida!');

  alert(`Seja bem vindo(a) ${data.name}!`)
}