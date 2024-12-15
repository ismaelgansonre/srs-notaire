import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Méthode non autorisée" });
    }

    const { fullName, email, phone, date, message } = req.body;

    if (!fullName || !email || !phone || !date || !message) {
        return res.status(400).json({ error: "Tous les champs sont obligatoires." });
    }

    try {
        await resend.emails.send({
            from: "formulaire@srs-notaire.com", // Adresse email configurée dans Resend
            to: "ssawadogo@notarius.net", // Adresse email où recevoir les informations
            subject: "Nouvelle réservation de consultation",
            html: `
        <h1>Nouvelle demande de consultation</h1>
        <p><strong>Nom complet :</strong> ${fullName}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone}</p>
        <p><strong>Date souhaitée :</strong> ${date}</p>
        <p><strong>Message :</strong> ${message}</p>
      `,
        });

        res.status(200).json({ message: "Email envoyé avec succès !" });
    } catch (error) {
        console.error("Erreur lors de l'envoi de l'email :", error);
        res.status(500).json({ error: "Erreur interne. Impossible d'envoyer l'email." });
    }
}
