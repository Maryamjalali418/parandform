const { google } = require('googleapis');
const sheets = google.sheets('v4');
const axios = require('axios');

const googleSheetsId = process.env.GOOGLE_SHEET_ID;
const apiKey = process.env.GOOGLE_API_KEY;

async function sendToGoogleSheets(data) {
  const auth = new google.auth.GoogleAuth({
    apiKey: apiKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  });

  const authClient = await auth.getClient();
  const sheet = google.sheets({ version: 'v4', auth: authClient });

  await sheet.spreadsheets.values.append({
    spreadsheetId: googleSheetsId,
    range: 'Sheet1!A:B', // range where the data should be added
    valueInputOption: 'RAW',
    resource: {
      values: [
        [data.name, data.unitNumber]
      ]
    }
  });

  console.log('Data sent to Google Sheets!');
}

// Get payload from GitHub Dispatch Event
const payload = process.env.CLIENT_PAYLOAD ? JSON.parse(process.env.CLIENT_PAYLOAD) : {};
sendToGoogleSheets(payload);
