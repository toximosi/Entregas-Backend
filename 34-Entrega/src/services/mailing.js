import nodemail from 'nodemailer';

export default class MailingService { 
    constructor() { 
        this.client = nodemail.createTransport({ 
            service: 'gmail',
            port: 587,
            auth: {
                user: 'toximosi@gmail.com',
                pass: 'zkvmqpztladnfjhk',
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


    MailRegister = (name = "",) => { 
        const mail = `
        <div>
        ${name}<br>
        Has sido dadao de alta en al Entrega 34
        </div>` 
        
        return mail;
    }
}