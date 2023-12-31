import axios from 'axios';

const apiKey = 'Generate from Open AI'; // give your own API
const apiUrl = 'https://api.openai.com/v1/engines/davinci/completions';

const searchImages = async (text) => {
  try {
    const response = await axios.post(apiUrl, {
      prompt: text,
      max_tokens: 50, // Adjust this according to your needs
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      },
    });
    console.log(response.data.choices[0].text);
  } catch (error) {
    console.error('API request error:', error);
    return 'Failed to generate description.';
  }
}


export default searchImages;
