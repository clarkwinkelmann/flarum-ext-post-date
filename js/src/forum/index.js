import {extend} from 'flarum/extend';
import PostControls from 'flarum/utils/PostControls';
import Button from 'flarum/components/Button';
import EditPostTimeModal from './components/EditPostTimeModal';

app.initializers.add('clarkwinkelmann/flarum-ext-post-date', () => {
    extend(PostControls, 'moderationControls', (items, post) => {
        if (!app.forum.attribute('clarkwinkelmannPostDateCanEdit')) {
            return;
        }

        items.add('clarkwinkelmann-post-date', Button.component({
            icon: 'far fa-clock',
            children: app.translator.trans('clarkwinkelmann-post-date.forum.post_controls.edit_button'),
            onclick() {
                app.modal.show(new EditPostTimeModal(post));
            },
        }));
    });
});
