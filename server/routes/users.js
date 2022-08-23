// @ts-check

import i18next from 'i18next';

export default (app) => {
    app
        .get('/users', { name: 'users' }, async (req, reply) => {
            const users = await app.objection.models.user.query();
            reply.render('users/index', { users });
            return reply;
        })
        .get('/users/new', { name: 'newUser' }, (req, reply) => {
            const user = new app.objection.models.user();
            reply.render('users/new', { user });
        })
        .get('/users/:id/edit', { name: 'editUser' }, async (req, reply) => {
            if (!req.isAuthenticated()) {
                req.flash('error', i18next.t('flash.authError'));
                reply.redirect(app.reverse('users'));

                return reply;
            }
            if (req?.user?.id !== +req.params.id) {
                req.flash('error', i18next.t('flash.users.view.error'));
                reply.redirect(app.reverse('users'));

                return reply;
            }

            const user = await app.objection.models.user.query().findById(req.params.id);
            const userInfo = await user.$relatedQuery('usersinfo');

            await reply.render(
                'users/edit',
                {
                    userInfo: {
                        firstName: userInfo?.first || '',
                        lastName: userInfo?.last || '',
                        user: user?.id
                    }
                }
            );

            return reply;
        })
        .post('/users', async (req, reply) => {
            const user = new app.objection.models.user();
            user.$set(req.body.data);

            try {
                const validUser = await app.objection.models.user.fromJson(req.body.data);
                await app.objection.models.user.query().insert(validUser);
                req.flash('info', i18next.t('flash.users.create.success'));
                reply.redirect(app.reverse('root'));
            } catch ({ data }) {
                req.flash('error', i18next.t('flash.users.create.error'));
                reply.render('users/new', { user, errors: data });
            }

            return reply;
        })
        .patch('/users/:id', async (req, reply) => {
            const data = {
                first: req.body.data.firstName,
                last: req.body.data.lastName,
            }
            const user = await app.objection.models.user.query().findById(req.params.id);
            const currentUserInfo = await user.$relatedQuery('usersinfo');

            const userInfo = new app.objection.models.userInfo();
            userInfo.$set({ ...data, user: req.params.id});

            try {
                const validUser = await app.objection.models.userInfo.fromJson({ ...data, user: +req.params.id });

                if (currentUserInfo) {
                    await app.objection.models.userInfo.query().findById(currentUserInfo.id).patch(validUser);
                } else {
                    await app.objection.models.userInfo.query().insert(validUser);
                }
            
                req.flash('info', i18next.t('flash.users.update.success'));
                reply.redirect(app.reverse('root'));
            } catch ({ data }) {
                req.flash('error', i18next.t('flash.users.update.error'));
                reply.render('users/edit', { userInfo, errors: data });
            }

            return reply;
        })
        .delete('/users/:id', { name: 'deleteUser' }, async (req, reply) => {
            if (!req.isAuthenticated()) {
                req.flash('error', i18next.t('flash.authError'));
                reply.redirect(app.reverse('users'));

                return reply;
            }
            if (req?.user?.id !== +req.params.id) {
                req.flash('error', i18next.t('flash.users.view.error'));
                reply.redirect(app.reverse('users'));

                return reply;
            }

            const taskCreator = await app.objection.models.task.query().findOne({ creatorid: +req.params.id });
            const taskExecutor = await app.objection.models.task.query().findOne({ executorid: +req.params.id });

            if (taskCreator || taskExecutor) {
                req.flash('info', i18next.t('flash.users.delete.task'));
                reply.redirect(app.reverse('users'));

                return reply;
            }

            try {
                await app.objection.models.userInfo.query().delete().where('user', +req.params.id);
                await app.objection.models.user.query().deleteById(+req.params.id);
                req.flash('info', i18next.t('flash.users.delete.success'));
                reply.redirect(app.reverse('users'));
            } catch({ data }) {
                req.flash('error', i18next.t('flash.users.delete.error'));
                reply.redirect(app.reverse('users'));
            }
            
        });
};