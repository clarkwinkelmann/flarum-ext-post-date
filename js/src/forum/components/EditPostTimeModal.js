import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';

export default class EditPostTimeModal extends Modal {
    constructor(post) {
        super();

        this.post = post;
        this.createdAt = this.post.createdAt().toISOString().slice(0, 16);
        this.editedAt = this.post.editedAt() ? this.post.editedAt().toISOString().slice(0, 16) : '';
        this.dirty = false;
        this.loading = false;
    }

    className() {
        return '';
    }

    title() {
        return app.translator.trans('clarkwinkelmann-post-date.forum.modal.title');
    }

    content() {
        return m('.Modal-body', [
            m('.Form-group', [
                m('label', app.translator.trans('clarkwinkelmann-post-date.forum.modal.created_at')),
                m('input[type=datetime-local][required].FormControl', {
                    value: this.createdAt,
                    onchange: m.withAttr('value', value => {
                        this.createdAt = value;
                        this.dirty = true;
                    }),
                }),
            ]),
            m('.Form-group', [
                m('label', app.translator.trans('clarkwinkelmann-post-date.forum.modal.edited_at')),
                m('input[type=datetime-local].FormControl', {
                    value: this.editedAt,
                    onchange: m.withAttr('value', value => {
                        this.editedAt = value;
                        this.dirty = true;
                    }),
                }),
            ]),
            Button.component({
                disabled: !this.dirty,
                loading: this.loading,
                type: 'submit',
                className: 'Button Button--primary',
                children: app.translator.trans('clarkwinkelmann-post-date.forum.modal.submit'),
            }),
        ]);
    }

    onsubmit(e) {
        e.preventDefault();

        this.loading = true;

        this.post.save({
            createdAt: this.createdAt,
            editedAt: this.editedAt,
        }).then(() => {
            this.loading = false;
            this.dirty = false;
            m.redraw();
        }).catch(err => {
            this.loading = false;
            m.redraw();
            throw err;
        });
    }
}
