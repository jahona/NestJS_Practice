import { Inject, Injectable } from '@nestjs/common';
import emailConfig from '../config/emailConfig';
import { ConfigType } from '@nestjs/config';

interface EmailOptions {
    to: string;
    subject: string;
    html: string;
}

@Injectable()
export class EmailService {
    constructor(@Inject(emailConfig.KEY) private config: ConfigType<typeof emailConfig>) {
        console.log(`emailConfig: ${JSON.stringify(config)}`);
    }

    async sendMemberJoinVerification(email: string, signupVerifyToken: string) {
        const baseUrl = this.config.baseUrl;

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
