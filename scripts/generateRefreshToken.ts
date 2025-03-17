import { google } from 'googleapis';
import dotenv from 'dotenv';

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

const SCOPES = ['https://www.googleapis.com/auth/gmail.send'];
const CLIENT_ID = process.env.CLIENT_ID!;
const CLIENT_SECRET = process.env.CLIENT_SECRET!;

const REDIRECT_URI = 'http://localhost:3000';
const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: SCOPES,
});

console.log('\n🔗 Autorize este app acessando este link:\n', authUrl);
console.log('\nApós autorizar, copie o "code" da URL e cole aqui.\n');

process.stdin.on('data', async (data) => {
  const authorizationCode = data.toString().trim();
  
  try {
    const { tokens } = await oauth2Client.getToken(authorizationCode);
    oauth2Client.setCredentials(tokens);

    console.log('\n✅ Refresh Token gerado com sucesso:');
    console.log(tokens.refresh_token);
    console.log('\n💾 Salve esse token com segurança!');

    process.exit(0);
  } catch (err) {
    console.error('\n❌ Erro ao obter o token:', err);
    process.exit(1);
  }
});
