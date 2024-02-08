import {LOGIN_API_URL, LOGOUT_API_URL, CHECK_TOKEN_API_URL} from '../constants';

export interface AuthService {
    login(login: string, password: string): Promise<void>;
    logout(token: string): Promise<void>;
    checkToken(token: string): Promise<void>;
}


export class AuthServiceImpl implements AuthService {
    async login(login: string, password: string): Promise<void> {
        try {
            const response = await fetch(LOGIN_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    "login":login,
                    "password":password
                }),
            });

            if (!response.ok) {
                throw new Error('Не удалось выполнить аутентификацию');
            }

            const result = await response.json();

            if (result.status === 'ok') {
                localStorage.setItem('authToken', result.token);
                console.log('Успешная аутентификация');
                console.log('Токен:', result.token);
            } else {
                console.log('Ошибка аутентификации:', result.status);
            }
        } catch (error) {
            console.error('Произошла ошибка:', (error as Error).message);
            throw new Error('Не удалось выполнить аутентификацию');
        }
    }

    async logout(token: string): Promise<void> {
        try {
            const response = await fetch(LOGOUT_API_URL, {
                method: 'POST',
                headers: {
                    'X-Auth-Token': token,
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    'X-Auth-Token':token
                }),
            });

            if (!response.ok) {
                throw new Error('Не удалось выполнить выход');
            }

            const result = await response.json();

            if (result.status === 'ok') {
                localStorage.removeItem('authToken');
                console.log('Выход выполнен успешно');
            } else {
                console.log('Ошибка при выходе:', result.status);
            }
        } catch (error) {
            console.error('Произошла ошибка:', (error as Error).message);
            throw new Error('Не удалось выполнить выход');
        }
    }

    async checkToken(token: string): Promise<void> {
        try {
            const response = await fetch(CHECK_TOKEN_API_URL, {
                method: 'POST',
                headers: {
                    'X-Auth-Token': token,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    'X-Auth-Token':token
                }),
            });

            if (!response.ok) {
                throw new Error('Не удалось выполнить проверку токена');
            }

            const result = await response.json();

            if (result.status === 'ok') {
                console.log('Токен действителен');
            } else {
                console.log('Ошибка при проверке токена:', result.status);
            }
        } catch (error) {
            console.error('Произошла ошибка:', (error as Error).message);
            throw new Error('Не удалось выполнить проверку токена');
        }
    }
    
}

export const authService: AuthService = new AuthServiceImpl()