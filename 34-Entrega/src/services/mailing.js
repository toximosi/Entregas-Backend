import mailer from 'nodemailer';

export default class MailingService { 
    constructor() { 
        this.client = mailer.createTransport({ 
            service: 'gmail',
            port: 587,
            auth: {
                user: 'toximosi@gmail.com',
                pass: 'tbekayngztdokxdv',
            }
        })
    }

    sendSimpleMail = async({from,to,bcc,subject,html,attachments=[]})=>{
        let result = await this.client.sendMail({
            from,
            to,
            bcc,
            subject,
            html,
            attachments
        })
        return result;
    }

    //templates mail------------------------------------------

    MailRegister = (name = "",) => { 
        const mail = `<div>Hola ${name},<br>
        Has sido dadao de alta en al Entrega 34
        </div>` ;
        
        return mail;
    }
}