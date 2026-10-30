import { User } from '../models/index.js';
export const login = (request, response) => {
    console.log(request.body);
    const { email, password } = request.body;
    // Aquí puedes agregar la lógica de autenticación, como verificar el correo electrónico y la contraseña en tu base de datos.
    if (!email || !password) {
        return response.status(400).json({ error: 'Email and password are required' });
    }
    const result = User.findOne({ where: { email, password } });
    if (!result) {
        return response.status(401).json({ error: 'Usuario no encontrado' });
    }
    response.status(200).json({
        message: 'Login successful',
        data: { email, password }
    });
}