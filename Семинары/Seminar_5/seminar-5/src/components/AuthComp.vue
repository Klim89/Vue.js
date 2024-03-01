<!-- Создайте компонент "Аутентификация" (Authentication),
который будет отображать форму входа или сообщение об
успешной аутентификации в зависимости от переданного
пропса isAuthenticated. Используйте директиву v-if для
условного отображения разных элементов в шаблоне
компонента. -->

<template>
    <div>
        <h2>Аутентификация</h2>
        <div v-if="isAuthenticated">
            <p>Успешная аутентификация! Добро пожаловать!</p>
        </div>
        <div v-else>
            <form @submit="login">
                <label for="username">Имя пользователя:</label>
                <input type="text" id="username" v-model="username" required>
                <label for="password">Пароль:</label>
                <input type="password" id="password" v-model="password" required>
                <button type="submit">Войти</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AuthComp',
    data() {
        return {
            username: '',
            password: '',
            isAuthenticated: false,
            users: [
                { username: 'sergey', password: 'admin' },
                { username: 'admin', password: 'admin' },
                { username: 'test', password: 'test' }
            ]
        };
    },
    methods: {
        login(event) {
            event.preventDefault();
            if (this.users.find(item => item.username === this.username && item.password === this.password)) {
                this.isAuthenticated = true;
            }
            this.username = '';
            this.password = '';
        }
    }
};
</script>

<style scoped>
* {
    margin: 0;
    box-sizing: border-box;
}

form {
    margin: 0 auto;
    padding: 15px;
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: 1px solid grey;
    border-radius: 10px;
}

input,
button {
    width: 100%;
    height: 30px;
    font-size: 20px;
    border: 1px solid;
    border-radius: 6px;
}
</style>
