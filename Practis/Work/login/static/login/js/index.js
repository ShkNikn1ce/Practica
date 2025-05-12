document.addEventListener('DOMContentLoaded', function() {
            const loginForm = document.getElementById('login-form');
            const authError = document.getElementById('auth-error');
            const authSuccess = document.getElementById('auth-success');

            if (loginForm) {
                loginForm.addEventListener('submit', function(e) {
                    e.preventDefault();

                    // Получаем значения полей
                    const username = document.getElementById('username').value;
                    const password = document.getElementById('password').value;
                    const rememberMe = document.querySelector('input[name="remember"]').checked;

                    // Скрываем предыдущие сообщения
                    authError.style.display = 'none';
                    authSuccess.style.display = 'none';

                    // Проверка учетных данных
                    if (username === 'admin' && password === 'admin') {
                        // Успешная авторизация для admin
                        authSuccess.style.display = 'block';

                        // Сохраняем в localStorage если выбрано "Запомнить меня"
                        if (rememberMe) {
                            localStorage.setItem('rememberMe', 'true');
                            localStorage.setItem('username', username);
                        } else {
                            localStorage.removeItem('rememberMe');
                            localStorage.removeItem('username');
                        }

                        // Перенаправляем на главную страницу админа через 1 секунду
                        setTimeout(() => {
                            window.location.href = "{% url 'home' %}";
                        }, 1000);
                    } else if (username === 'stud' && password === 'stud') {
                        // Успешная авторизация для студента
                        authSuccess.style.display = 'block';

                        // Сохраняем в localStorage если выбрано "Запомнить меня"
                        if (rememberMe) {
                            localStorage.setItem('rememberMe', 'true');
                            localStorage.setItem('username', username);
                        } else {
                            localStorage.removeItem('rememberMe');
                            localStorage.removeItem('username');
                        }

                        // Перенаправляем на страницу студента через 1 секунду
                        setTimeout(() => {
                            window.location.href = "{% url 'home' %}";
                        }, 1000);
                    }else {
                        // Ошибка авторизации
                        authError.textContent = 'Неверный логин или пароль';
                        authError.style.display = 'block';
                    }
                });

                // Автозаполнение для демонстрации
                //document.getElementById('username').value = 'admin';
                //document.getElementById('password').value = 'admin';

                // Обработка ссылки "Забыли пароль?"
                const forgotPasswordLink = document.querySelector('.forgot-password');
                if (forgotPasswordLink) {
                    forgotPasswordLink.addEventListener('click', function(e) {
                        e.preventDefault();
                        alert('Для восстановления пароля обратитесь к системному администратору.');
                    });
                }
            }
        });