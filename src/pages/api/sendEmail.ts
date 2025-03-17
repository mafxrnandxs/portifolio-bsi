import { google } from 'googleapis';
import { NextApiRequest, NextApiResponse } from 'next';

const SCOPES = ['https://www.googleapis.com/auth/gmail.send'];
const REDIRECT_URI = 'http://localhost:3000';  // Substitua pela URL de seu servidor de produção
const CLIENT_ID = process.env.GMAIL_CLIENT_ID!;
const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET!;
const REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN!;

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

// Autenticando o cliente com o token de atualização
oauth2Client.setCredentials({
  refresh_token: REFRESH_TOKEN,
});

const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { firstName, email, phone, message } = req.body;

    try {
      const emailContent = `
        From: ${email}
        To: fernandes.mariafernandes03@gmail.com
        Subject: New Message from ${firstName}
        
        Phone: ${phone}
        
        Message:
        ${message}
      `;
      
      const encodedMessage = Buffer.from(emailContent).toString('base64url');

      const response = await gmail.users.messages.send({
        userId: 'me',
        requestBody: {
          raw: encodedMessage,
        },
      });

      return res.status(200).json({ message: 'Email sent successfully!', response });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error sending email.' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}

export default sendEmail;
