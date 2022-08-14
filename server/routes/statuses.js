// @ts-check

import i18next from 'i18next';

export default (app) => {
    app
        .get('/statuses', { name: 'statuses' }, async (req, reply) => {
            const statuses = await app.objection.models.status.query();
            reply.render('status/index', { statuses });
            return reply;
        })
        .get('/statuses/new', { name: 'newStatus' }, (req, reply) => {
            const status = new app.objection.models.status();
            reply.render('status/new', { status });
        })
        .get('/statuses/:id/edit', { name: 'editStatus' }, async (req, reply) => {
            const status = await app.objection.models.status.query().findById(req.params.id);

            await reply.render('status/edit', { status });

            return reply;
        })
        .post('/statuses', async (req, reply) => {
            if (!req.isAuthenticated()) {
                req.flash('error', i18next.t('flash.authError'));
                reply.redirect(app.reverse('statuses'));

                return reply;
            }
            const status = new app.objection.models.status();
            status.$set(req.body.data);

            try {
                const validStatus = await app.objection.models.status.fromJson(req.body.data);
                await app.objection.models.status.query().insert(validStatus);
                req.flash('info', i18next.t('flash.statuses.create.success'));
                reply.redirect(app.reverse('statuses'));
            } catch ({ data }) {
                req.flash('error', i18next.t('flash.statuses.create.error'));
                reply.render('status/new', { status, errors: data });
            }

            return reply;
        })
        .patch('/statuses/:id', async (req, reply) => {
            if (!req.isAuthenticated()) {
                req.flash('error', i18next.t('flash.authError'));
                reply.redirect(app.reverse('statuses'));

                return reply;
            }

            const status = await app.objection.models.status.query().findById(req.params.id);

            status.$set(req.body.data);

            try {
                const validStatus = await app.objection.models.status.fromJson(req.body.data);

                await app.objection.models.status.query().findById(req.params.id).patch(validStatus);
            
                req.flash('info', i18next.t('flash.statuses.update.success'));
                reply.redirect(app.reverse('statuses'));
            } catch ({ data }) {
                req.flash('error', i18next.t('flash.statuses.update.error'));
                reply.render('status/edit', { status, errors: data });
            }

            return reply;
        })
        .delete('/statuses/:id', { name: 'deleteStatus' }, async (req, reply) => {
            if (!req.isAuthenticated()) {
                req.flash('error', i18next.t('flash.authError'));
                reply.redirect(app.reverse('statuses'));

                return reply;
            }

            try {
                await app.objection.models.status.query().deleteById(+req.params.id);
                req.flash('info', i18next.t('flash.statuses.delete.success'));
                reply.redirect(app.reverse('statuses'));
            } catch({ data }) {
                req.flash('error', i18next.t('flash.statuses.delete.error'));
                reply.redirect(app.reverse('statuses'));
            }
            
        });
};