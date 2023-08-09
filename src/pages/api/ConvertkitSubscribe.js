const API_KEY = process.env.CONVERTKIT_API_KEY;
const FORM_ID = process.env.CONVERTKIT_FORM_ID;
const BASE_URL = 'https://api.convertkit.com/v3';
const email_required_message = 'Email is required';
const error_message = `There was a problem, please try again.`;
const success_message = `🎉 You have been added to the wait list! Check your email to confirm your interest.`;

async function convertkitSubscribeHandler(req, res) {
  const email = req.body.email;

  if (!email) {
    return res.status(400).json({ message: email_required_message });
  }

  try {
    const url = [BASE_URL, `forms`, FORM_ID, 'subscribe'].join('/');
    const data = {
      api_key: API_KEY,
      email: email,
    };

    const response = await fetch(url, {
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      method: 'POST',
    });

    if (response.status == 200) {
      return res.status(200).json({ message: success_message });
    } else {
      return res.status(500).json({ message: error_message });
    }
  } catch (error) {
    return res.status(500).json({ message: error_message });
  }
}

export default convertkitSubscribeHandler;
