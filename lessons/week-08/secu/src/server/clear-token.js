export function clearToken(res) {
    res.setHeader('Set-Cookie', 'token=; HttpOnly; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT');
}
