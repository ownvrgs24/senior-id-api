import prisma, { user_accounts } from "../config/global.config";
import { hashPassword } from "../utils/auth-related";

export default class UserAccountModel {
    async getUserAccountByUsername(username: string) {
        return await prisma.user_accounts.findFirst({
            where: {
                username,
                is_deleted: false,
            },
        });
    }

    async createUserAccount(body: user_accounts) {
        return await prisma.user_accounts.create({
            data: {
                ...body,
                password: await hashPassword(body.password),
            },
        });
    }
}
