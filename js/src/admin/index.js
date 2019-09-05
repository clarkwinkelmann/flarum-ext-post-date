import {extend} from 'flarum/extend';
import PermissionGrid from 'flarum/components/PermissionGrid';

app.initializers.add('clarkwinkelmann/flarum-ext-post-date', () => {
    extend(PermissionGrid.prototype, 'moderateItems', items => {
        items.add('clarkwinkelmann-post-date', {
            icon: 'far fa-clock',
            label: app.translator.trans('clarkwinkelmann-post-date.admin.permissions.edit-post-date'),
            permission: 'clarkwinkelmann-post-date.edit-post-date',
        });
    });
});
