import { GoogleSpreadsheet } from "google-spreadsheet";

export default async function appendGoogleSheet(req, res) {
    
    let data = req.body;

    // Config variables
    const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
    const SHEET_ID = process.env.SHEET_ID;
    const CLIENT_EMAIL = process.env.CLIENT_EMAIL;
    const PRIVATE_KEY = process.env.PRIVATE_KEY;

    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

    const appendSpreadsheet = async (row) => {

        try {
            await doc.useServiceAccountAuth({
                client_email: CLIENT_EMAIL,
                private_key: PRIVATE_KEY,
            });
           
            // loads document properties and worksheets
            await doc.loadInfo();

            const sheet = doc.sheetsById[SHEET_ID];
            await sheet.addRow(row);
            res.status(200).json({ result: "Row was successfully appended." });
        } catch (error) {
            res.status(400).json({ error: 'Failed to send email.\n' + error });
        }
    };

    const newRow = {
        'First Name': data.firstName,
        'Last Name': data.lastName,
        'Primary personal email': data.email,
    };

    appendSpreadsheet(newRow);
}