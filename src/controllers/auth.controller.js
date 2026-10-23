export const login = (request, response) => {
    const { email, password } = request.body;
    // Aquí puedes agregar la lógica de autenticación, como verificar el correo electrónico y la contraseña en tu base de datos.
    if (!email || !password) {
        return response.status(400).json({ error: 'Email and password are required' });
    }
    response.status(200).json({
        message: 'Login successful', email });
        data: { email, password } 
    };
    