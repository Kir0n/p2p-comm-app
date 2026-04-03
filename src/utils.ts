export function formatMessage(username: string, message: string): string {
    return `${username}: ${message}`;
}

export function parseMessage(rawMessage: string): { username: string; message: string } {
    const [username, ...messageParts] = rawMessage.split(': ');
    return {
        username,
        message: messageParts.join(': '),
    };
}