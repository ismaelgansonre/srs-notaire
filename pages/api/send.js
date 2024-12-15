import EmailTemplate from '../components/EmailTemplate';
import {Resend} from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
await resend.emails.send({
    from: 'you@example.com',
    to: 'user@gmail.com',
    replyTo: 'you@example.com',
    subject: 'hello world',
    react: <EmailTemplate firstName="John" product="MyApp" />,
});