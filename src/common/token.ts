interface TokenData {
    userId: string;
    token: string;
    level: number;
    amount: number;
    apiCalls: number;
    count: number;
    expiry: number;
}

class Token {
    private tokenMap: Record<string, TokenData> = {};
    private tokenShelfLife = 5; // token过期时间 5小时
    private static token: Token | undefined;

    private constructor() {}

    static getInstance(): Token {
        if (!this.token) {
            this.token = new Token();
        }
        return this.token;
    }

    generateToken(
        userId: string,
        level = 0,
        amount = 0,
        apiCalls = 0,
        count = 50
    ): string {
        const token = this.generateRandomToken();
        if (this.tokenMap[userId]) {
            delete this.tokenMap[userId];
        }
        this.tokenMap[userId] = {
            userId,
            token,
            level,
            amount,
            apiCalls,
            count,
            expiry: this.calculateExpiry(Date.now()),
        };
        return token;
    }

    refreshUserToken(userId: string): boolean {
        return this.tokenMap.hasOwnProperty(userId);
    }

    isTokenExpired(token: string, userId: string): number {
        if (!this.tokenMap.hasOwnProperty(userId)) return 0;
        if (userId && this.tokenMap[userId].token !== token) return 3;
        const expiry = this.tokenMap[userId].expiry;
        const currentTime = Date.now();
        const shelfLifeRemaining = 3600000; // 1小时剩余保质期
        if (currentTime < expiry) {
            return currentTime + shelfLifeRemaining < expiry ? 1 : 2;
        } else {
            return 0;
        }
    }

    generateRandomToken(): string {
        const characters =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let token = '';
        for (let i = 0; i < characters.length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            token += characters[randomIndex];
        }
        return token;
    }

    calculateExpiry(countTime: number): number {
        const oneDayInMilliseconds = this.tokenShelfLife * 60 * 60 * 1000;
        return countTime + oneDayInMilliseconds;
    }

    deleteToken(token: string, userId: string): boolean {
        if (
            token &&
            userId &&
            this.tokenMap[userId] &&
            this.tokenMap[userId].userId === userId.toString()
        ) {
            delete this.tokenMap[userId];
            return true;
        } else {
            return false;
        }
    }
}

export default Token;
