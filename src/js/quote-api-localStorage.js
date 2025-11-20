import axios from 'axios';

axios.defaults.baseURL = 'https://your-energy.b.goit.study/api/';

// АРІ for get data for the quote
export const getQuoteOfTheDay = async () => {
  try {
    const { data } = await axios.get('/quote');
    console.log('Quote from API:', data);
    return data;
  } catch (error) {
    console.error('Error fetching quote:', error);
    throw error;
  }
};

// Get today day
export const getTodayDate = () => {
  return new Date().toISOString().split('T')[0];
};

// Get day for the quote
export const handleGetQuoteOfTheDay = async () => {
  const storedQuote = JSON.parse(localStorage.getItem('quoteOfTheDay'));
  const today = getTodayDate();

  if (storedQuote && storedQuote.date === today) {
    console.log("Already have today's quote:", storedQuote);
    return storedQuote;
  }
  const quote = await getQuoteOfTheDay();

  const quoteWithDate = {
    ...quote,
    date: today,
  };

  localStorage.setItem('quoteOfTheDay', JSON.stringify(quoteWithDate));

  return quoteWithDate;
};

// Render the quote of the day
export async function renderQuoteOfTheDay() {
  try {
    const quoteData = await handleGetQuoteOfTheDay();

    const quoteTextEl = document.querySelector('.quote-api-text');
    const quoteAuthorEl = document.querySelector('.quote-api-author');

    if (quoteTextEl) {
      quoteTextEl.textContent = quoteData.quote || 'No quote available';
    }

    if (quoteAuthorEl) {
      quoteAuthorEl.textContent = quoteData.author || 'Unknown author';
    }
  } catch (error) {
    console.error('Error rendering quote:', error);
  }
}
