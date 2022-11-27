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

    sendSimpleMail = async({from,to,subject,html,attachments=[]})=>{
        let result = await this.client.sendMail({
            from,
            to,
            subject,
            html,
            attachments
        })
        return result;
    }

    //templates mail------------------------------------------

    MailRegister = (name = "",) => { 
        const mail = `<div>Nueva alta de: ${name}</div>` ;
        
        return mail;
    }
}