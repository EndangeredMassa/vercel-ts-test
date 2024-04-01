import { name } from '../backend/app.js'

export default async function handler(request, response) {
  return response.status(200).send(`Hello, ${name}!`);
}