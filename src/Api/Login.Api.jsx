import axios from 'axios';

const LoginApi = async (credentials) => {
    const base = "http://localhost:3000";

    try {
        const res = await axios.post(`${base}/sessions/login`, credentials);

        const { token, userId, user: userData } = res.data;

        const user = {
            token,
            userId,
            name: userData.name,
            lastName: userData.lastName,
            secondLastName: userData.secondLastName
        };

        // Configuración básica de la cookie
        document.cookie = `user=${JSON.stringify(user)}; HttpOnly; Secure; SameSite=Strict`;

        return res;
    } catch (error) {
        // Manejo de errores
        console.error('Error en la solicitud de inicio de sesión:', error);
        throw error; // Propagar el error para que sea manejado en otro lugar si es necesario
    }
};

export { LoginApi };
2