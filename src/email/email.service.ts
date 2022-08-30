import { Injectable } from '@nestjs/common';

interface EmailOptions {
    to: string;
    subject: string;
    html: string;
}

@Injectable()
export class EmailService {
    constructor() {

    }

    async sendMemberJoinVerification(email: string, signupVerifyToken: string) {
        const baseUrl = 'http://localhost:3000'; // TODO: config

        const url = `${baseUrl}/users/email-verify?signupVerifyToken=${signupVerifyToken}`;

        const mailOptions: EmailOptions = {
            to: email,
            subject: '가입 인증 메일',
            html: `
                <form action="${url}", method="POST">
                    <button>가입확인</button>
                </form>
            `
        }

        // TODO: return await this.transporter.sendMail(mailOptions);

        return;
    }
}
