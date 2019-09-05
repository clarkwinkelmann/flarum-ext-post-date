# Post Date

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/clarkwinkelmann/flarum-ext-post-date.svg)](https://packagist.org/packages/clarkwinkelmann/flarum-ext-post-date)

Let mods update the create and edit time of posts.

The time edit button is added underneath the post edit button.

The field uses the native [datetime-local](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local) picker in browsers that support it (at the time of writing, Chrome/Edge/Opera).
The field format in supported browser will match your browser/operating system language and country setting.

**The time in the modal is UTC.**

### Installation

Use [Bazaar](https://discuss.flarum.org/d/5151-flagrow-bazaar-the-extension-marketplace) or install manually with composer:

```sh
composer require clarkwinkelmann/flarum-ext-post-date
```

### Updating

```sh
composer update clarkwinkelmann/flarum-ext-post-date
```

### Links

- [Packagist](https://packagist.org/packages/clarkwinkelmann/flarum-ext-post-date)
