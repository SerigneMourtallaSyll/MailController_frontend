import axios from 'axios';

const API_URL = 'https://api-django-email.onrender.com/';

const EmailService = {
  async getEmails(selectedOption) {
    try {
      let url = `${API_URL}get-email-tracking-data/`;
      if (selectedOption !== '2') {
        url += `?opened=${selectedOption === '1' ? '1' : '0'}`;
      }
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error loading emails:', error);
      throw error;
    }
  },

  async deleteEmail(emailId) {
    try {
      const response = await axios.delete(`${API_URL}email-tracker/${emailId}/`);
      return response.data;
    } catch (error) {
      console.error('Error deleting email data:', error);
      throw error;
    }
  },
};

export default EmailService;
