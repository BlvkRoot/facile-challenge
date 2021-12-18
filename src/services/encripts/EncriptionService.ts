
class EncriptionService {
    async encript(name: string): Promise<string> {
        return Buffer.from(name).toString('base64');
    }

    async decript(encripted_name: string): Promise<string> {
        return Buffer.from(encripted_name, 'base64').toString('utf-8');
    }
}

export { EncriptionService }