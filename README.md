Данный проект является клиентской частью веб - приложения, которое представляет собой сайт для публикации записей. Сделан с использованием Angular. Отправляет запросы к данной api: https://github.com/maksim25y/InstagramApp

<details><summary>Функционал</summary>
При переходе по адресу /register происходит переход к форме регистрации
  
![image](https://github.com/maksim25y/clientApp/assets/131711956/7726eb70-2b44-4879-9487-1b81babf9d80)
После ввода корректных данных появляется возможность нажатия на кнопку для завершения регистрации

![image](https://github.com/maksim25y/clientApp/assets/131711956/4201d194-ccf8-4a5f-9bb4-f151c80037ce)
При переходе по адресу /login происходит переход к форме входа в аккаунт

![image](https://github.com/maksim25y/clientApp/assets/131711956/47b46851-ff20-4366-8bb9-79f6946486e5)
После входа в аккаунт появляется иконка пользователя, нажав на кнопку Profile можно перейти в свой профиль, нажав на кнопку Logout вы выходите из аккаунта

![image](https://github.com/maksim25y/clientApp/assets/131711956/c95cf93a-2797-4edd-913f-9555ba388f75)

При переходе в профиль показывается основаня информация о вашем профиле

![image](https://github.com/maksim25y/clientApp/assets/131711956/cc44c6e5-71cb-433a-b8a4-11c470c4406d)
Можно сменить аватарку, имя, фамилию, добавить описание профиля, добавить записи, удалить существующие записи, удалить комментарии, оставленные к вашим записям.

![image](https://github.com/maksim25y/clientApp/assets/131711956/1786cbfe-ec84-45a4-ad83-1422c9a55a54)
Форма создания записи:

![image](https://github.com/maksim25y/ShopApp/assets/131711956/f84c4849-a5cf-4f9f-a67c-dd46cda8316f)
Созданная запись:

![image](https://github.com/maksim25y/ShopApp/assets/131711956/009d060a-76b4-40a3-8e43-e17229d6b620)

При переходе по адресу /main появляются все записи, вы можете поставить лайк, убрать лайк, оставить комментарий:

![image](https://github.com/maksim25y/clientApp/assets/131711956/5f07ed26-7cd3-4302-928b-804cc30e8c70)

Запись после лайк и комментария:
![image](https://github.com/maksim25y/clientApp/assets/131711956/46c4b633-325c-41ca-9ee0-93cb48fb0ecd)

</details>

</details>
<details><summary>Запуск</summary>
Для того, чтобы запустить необходимо проделать следующие шаги на Windows, установите [Git Bash](https://git-scm.com/)

1. Склонируйте репозиторий

```shell
git clone git@github.com:maksim25y/clientApp.git
```

2. Скачайте и установите Docker

Скачать и найти инструкцию по установке вы можете на официальном сайте [Docker](https://www.docker.com)

3. Запустите клиент в Docker

Для этого откройте терминал и перейдите в папку репозитория

```shell
cd clientApp
```

Далее введите команду

```shell
docker-compose up --build
```
Готово! Клиент запущен.

Перейдите по адресу: localhost:4201

Чтобы остановить работу контейнеров, в терминале, откуда вы запускали docker-compose нажмите Ctrl+C (Control + C для Mac)
</details>
