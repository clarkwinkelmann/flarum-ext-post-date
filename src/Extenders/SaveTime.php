<?php

namespace ClarkWinkelmann\PostDate\Extenders;

use Carbon\Carbon;
use ClarkWinkelmann\PostDate\Validators\TimeValidator;
use Flarum\Extend\ExtenderInterface;
use Flarum\Extension\Extension;
use Flarum\Post\Event\Saving;
use Flarum\User\AssertPermissionTrait;
use Illuminate\Contracts\Container\Container;
use Illuminate\Support\Arr;

class SaveTime implements ExtenderInterface
{
    use AssertPermissionTrait;

    public function extend(Container $container, Extension $extension = null)
    {
        $container['events']->listen(Saving::class, [$this, 'savePost']);
    }

    public function savePost(Saving $event)
    {
        $attributes = Arr::get($event->data, 'attributes', []);

        if (isset($attributes['createdAt'])) {
            $this->assertCan($event->actor, 'clarkwinkelmann-post-date.edit-post-date');

            /**
             * @var $validator TimeValidator
             */
            $validator = app(TimeValidator::class);
            $validator->assertValid([
                'time' => $attributes['createdAt'],
            ]);

            $event->post->created_at = Carbon::parse($attributes['createdAt']);
        }

        if (isset($attributes['editedAt'])) {
            $this->assertCan($event->actor, 'clarkwinkelmann-post-date.edit-post-date');

            if (empty($attributes['editedAt'])) {
                $event->post->edited_at = null;
            } else {
                /**
                 * @var $validator TimeValidator
                 */
                $validator = app(TimeValidator::class);
                $validator->assertValid([
                    'time' => $attributes['editedAt'],
                ]);

                $event->post->edited_at = Carbon::parse($attributes['editedAt']);
            }
        }
    }
}
