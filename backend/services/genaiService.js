const Llama = require('llama-node').Llama;
const path = require('path');

const model = new Llama({
  modelPath: path.resolve(__dirname, '../genai/models/llama-model.bin'),
});

exports.generateMessage = async (input) => {
  try {
    const output = await model.generate(input);
    return output;
  } catch (error) {
    throw new Error('Erro ao gerar mensagem com GenAI');
  }
};