import { type NextRequest, NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { email, name, file, etude, details, profession, salutation, programme, telephone, prenom, etatcivil, currentCountry, dateDeNaissance, country } = await request.json();
  // console.log("payload from route", email, name, file)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    // port: 465,
    // host: 'smtpro.zoho.in',
    // secure: true,
    // providerauth: {user: process.env.MY_EMAIL},
    // pass: process.env.MY_PASSWORD,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL,
      pass: process.env.NEXT_PUBLIC_APP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const mailOptions: Mail.Options = {
    from: process.env.NEXT_PUBLIC_EMAIL,
    to: email,
    subject: `Formulaire d evaluation de ${salutation} ${name} ${prenom}`,
    html: `
    <div>
      <h1>Voici les informations relatives</h1>
      <br>
      <h2>Nom et prenom: <b>${name} ${prenom}</b></h2>
      <p>Etat civil: <b>${etatcivil}</b></p>
      <p>Date de naissance: <b>${dateDeNaissance}</b></p>
      <p>Pays de citoyenneté: <b>${country}</b></p>
      <p>Pays de résidence actuel: <b>${currentCountry}</b></p>
      <p>Email: <b>${email}</b></p>
      <p>Telephone: <b>${telephone}</b></p>
      <p>Programme: <b>${programme}</b></p>
      <p>Détails: <b>${details}</b></p>
      <p>Niveau d'étude: <b>${etude}</b></p>
      <p>Profession: <b>${profession}</b></p>
      <p>Cv: ${file}</p>
      <h2>${salutation} ${name} viens d'envoyer un formulaire pour l'évaluation de son dossier</h2>
    </div>
    `,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transporter.sendMail(mailOptions, (err) => {
        if (!err) {
          resolve('Email sent');
        } else {
          // console.log('an error occured', err.message)
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent', status: 500 });
  } catch (err) {
    // console.log('from route', err)
    return NextResponse.json({ error: err }, { status: 500 });
  }
}