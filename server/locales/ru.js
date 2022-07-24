// @ts-check

export default {
    translation: {
      appName: 'Менеджер задач',
      flash: {
        session: {
          create: {
            success: 'Вы залогинены',
            error: 'Неправильный емейл или пароль',
          },
          delete: {
            success: 'Вы разлогинены',
          },
        },
        users: {
          create: {
            error: 'Не удалось зарегистрировать',
            success: 'Пользователь успешно зарегистрирован',
          },
          update: {
            error: 'Не удалось обновить',
            success: 'Пользователь успешно обновлён',
          }
        },
        authError: 'Доступ запрещён! Пожалуйста, авторизируйтесь.',
      },
      layouts: {
        application: {
          users: 'Пользователи',
          signIn: 'Вход',
          signUp: 'Регистрация',
          signOut: 'Выход',
        },
      },
      views: {
        session: {
          new: {
            signIn: 'Вход',
            submit: 'Войти',
          },
        },
        users: {
          id: 'ID',
          email: 'Email',
          createdAt: 'Дата создания',
          editLink: 'Редактировать',
          new: {
            submit: 'Сохранить',
            update: 'Обновить',
            signUp: 'Регистрация',
          },
        },
        welcome: {
          index: {
            hello: 'Привет от Хекслета!',
            description: 'Практические курсы по программированию',
            more: 'Узнать Больше',
          },
        },
      },
    },
  };