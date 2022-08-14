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
          view: {
            error: 'Вы не можете редактировать или удалять другого пользователя',
          },
          create: {
            error: 'Не удалось зарегистрировать',
            success: 'Пользователь успешно зарегистрирован',
          },
          update: {
            error: 'Не удалось обновить',
            success: 'Пользователь успешно обновлён',
          },
          delete: {
            error: 'Не удалось удалить пользователя',
            success: 'Пользователь успешно удалён',
          }
        },
        statuses: {
          create: {
            error: 'Не удалось создать статус',
            success: 'Статус успешно создан',
          },
          update: {
            error: 'Не удалось обновить',
            success: 'Статус успешно обновлён',
          },
          delete: {
            error: 'Не удалось удалить статус',
            success: 'Статус успешно удалён',
          },
        },
        authError: 'Доступ запрещён! Пожалуйста, авторизируйтесь.',
      },
      layouts: {
        application: {
          users: 'Пользователи',
          signIn: 'Вход',
          signUp: 'Регистрация',
          signOut: 'Выход',
          statuses: 'Statuses',
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
          deleteLink: 'Удалить',
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
        status: {
          id: 'ID',
          name: 'name',
          created: 'Created',
          edit: {
            title: 'Edit status'
          },
          new: {
            title: 'Create new status',
            submit: 'Сохранить',
          }
        }
      },
    },
  };