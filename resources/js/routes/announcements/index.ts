import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\AnnouncementController::index
* @see app/Http/Controllers/AnnouncementController.php:19
* @route '/announcements'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/announcements',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AnnouncementController::index
* @see app/Http/Controllers/AnnouncementController.php:19
* @route '/announcements'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AnnouncementController::index
* @see app/Http/Controllers/AnnouncementController.php:19
* @route '/announcements'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnouncementController::index
* @see app/Http/Controllers/AnnouncementController.php:19
* @route '/announcements'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AnnouncementController::index
* @see app/Http/Controllers/AnnouncementController.php:19
* @route '/announcements'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnouncementController::index
* @see app/Http/Controllers/AnnouncementController.php:19
* @route '/announcements'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnouncementController::index
* @see app/Http/Controllers/AnnouncementController.php:19
* @route '/announcements'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\AnnouncementController::create
* @see app/Http/Controllers/AnnouncementController.php:71
* @route '/announcements/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/announcements/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AnnouncementController::create
* @see app/Http/Controllers/AnnouncementController.php:71
* @route '/announcements/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AnnouncementController::create
* @see app/Http/Controllers/AnnouncementController.php:71
* @route '/announcements/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnouncementController::create
* @see app/Http/Controllers/AnnouncementController.php:71
* @route '/announcements/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AnnouncementController::create
* @see app/Http/Controllers/AnnouncementController.php:71
* @route '/announcements/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnouncementController::create
* @see app/Http/Controllers/AnnouncementController.php:71
* @route '/announcements/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnouncementController::create
* @see app/Http/Controllers/AnnouncementController.php:71
* @route '/announcements/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \App\Http\Controllers\AnnouncementController::store
* @see app/Http/Controllers/AnnouncementController.php:85
* @route '/announcements'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/announcements',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AnnouncementController::store
* @see app/Http/Controllers/AnnouncementController.php:85
* @route '/announcements'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AnnouncementController::store
* @see app/Http/Controllers/AnnouncementController.php:85
* @route '/announcements'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AnnouncementController::store
* @see app/Http/Controllers/AnnouncementController.php:85
* @route '/announcements'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AnnouncementController::store
* @see app/Http/Controllers/AnnouncementController.php:85
* @route '/announcements'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\AnnouncementController::show
* @see app/Http/Controllers/AnnouncementController.php:369
* @route '/announcements/{pengumuman}'
*/
export const show = (args: { pengumuman: number | { id: number } } | [pengumuman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/announcements/{pengumuman}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AnnouncementController::show
* @see app/Http/Controllers/AnnouncementController.php:369
* @route '/announcements/{pengumuman}'
*/
show.url = (args: { pengumuman: number | { id: number } } | [pengumuman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pengumuman: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { pengumuman: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            pengumuman: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        pengumuman: typeof args.pengumuman === 'object'
        ? args.pengumuman.id
        : args.pengumuman,
    }

    return show.definition.url
            .replace('{pengumuman}', parsedArgs.pengumuman.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AnnouncementController::show
* @see app/Http/Controllers/AnnouncementController.php:369
* @route '/announcements/{pengumuman}'
*/
show.get = (args: { pengumuman: number | { id: number } } | [pengumuman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnouncementController::show
* @see app/Http/Controllers/AnnouncementController.php:369
* @route '/announcements/{pengumuman}'
*/
show.head = (args: { pengumuman: number | { id: number } } | [pengumuman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AnnouncementController::show
* @see app/Http/Controllers/AnnouncementController.php:369
* @route '/announcements/{pengumuman}'
*/
const showForm = (args: { pengumuman: number | { id: number } } | [pengumuman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnouncementController::show
* @see app/Http/Controllers/AnnouncementController.php:369
* @route '/announcements/{pengumuman}'
*/
showForm.get = (args: { pengumuman: number | { id: number } } | [pengumuman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnouncementController::show
* @see app/Http/Controllers/AnnouncementController.php:369
* @route '/announcements/{pengumuman}'
*/
showForm.head = (args: { pengumuman: number | { id: number } } | [pengumuman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \App\Http\Controllers\AnnouncementController::edit
* @see app/Http/Controllers/AnnouncementController.php:381
* @route '/announcements/{pengumuman}/edit'
*/
export const edit = (args: { pengumuman: number | { id: number } } | [pengumuman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/announcements/{pengumuman}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AnnouncementController::edit
* @see app/Http/Controllers/AnnouncementController.php:381
* @route '/announcements/{pengumuman}/edit'
*/
edit.url = (args: { pengumuman: number | { id: number } } | [pengumuman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pengumuman: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { pengumuman: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            pengumuman: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        pengumuman: typeof args.pengumuman === 'object'
        ? args.pengumuman.id
        : args.pengumuman,
    }

    return edit.definition.url
            .replace('{pengumuman}', parsedArgs.pengumuman.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AnnouncementController::edit
* @see app/Http/Controllers/AnnouncementController.php:381
* @route '/announcements/{pengumuman}/edit'
*/
edit.get = (args: { pengumuman: number | { id: number } } | [pengumuman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnouncementController::edit
* @see app/Http/Controllers/AnnouncementController.php:381
* @route '/announcements/{pengumuman}/edit'
*/
edit.head = (args: { pengumuman: number | { id: number } } | [pengumuman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AnnouncementController::edit
* @see app/Http/Controllers/AnnouncementController.php:381
* @route '/announcements/{pengumuman}/edit'
*/
const editForm = (args: { pengumuman: number | { id: number } } | [pengumuman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnouncementController::edit
* @see app/Http/Controllers/AnnouncementController.php:381
* @route '/announcements/{pengumuman}/edit'
*/
editForm.get = (args: { pengumuman: number | { id: number } } | [pengumuman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnouncementController::edit
* @see app/Http/Controllers/AnnouncementController.php:381
* @route '/announcements/{pengumuman}/edit'
*/
editForm.head = (args: { pengumuman: number | { id: number } } | [pengumuman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see \App\Http\Controllers\AnnouncementController::update
* @see app/Http/Controllers/AnnouncementController.php:397
* @route '/announcements/{pengumuman}'
*/
export const update = (args: { pengumuman: number | { id: number } } | [pengumuman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/announcements/{pengumuman}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\AnnouncementController::update
* @see app/Http/Controllers/AnnouncementController.php:397
* @route '/announcements/{pengumuman}'
*/
update.url = (args: { pengumuman: number | { id: number } } | [pengumuman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pengumuman: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { pengumuman: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            pengumuman: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        pengumuman: typeof args.pengumuman === 'object'
        ? args.pengumuman.id
        : args.pengumuman,
    }

    return update.definition.url
            .replace('{pengumuman}', parsedArgs.pengumuman.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AnnouncementController::update
* @see app/Http/Controllers/AnnouncementController.php:397
* @route '/announcements/{pengumuman}'
*/
update.put = (args: { pengumuman: number | { id: number } } | [pengumuman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\AnnouncementController::update
* @see app/Http/Controllers/AnnouncementController.php:397
* @route '/announcements/{pengumuman}'
*/
const updateForm = (args: { pengumuman: number | { id: number } } | [pengumuman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AnnouncementController::update
* @see app/Http/Controllers/AnnouncementController.php:397
* @route '/announcements/{pengumuman}'
*/
updateForm.put = (args: { pengumuman: number | { id: number } } | [pengumuman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\AnnouncementController::destroy
* @see app/Http/Controllers/AnnouncementController.php:473
* @route '/announcements/{pengumuman}'
*/
export const destroy = (args: { pengumuman: number | { id: number } } | [pengumuman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/announcements/{pengumuman}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AnnouncementController::destroy
* @see app/Http/Controllers/AnnouncementController.php:473
* @route '/announcements/{pengumuman}'
*/
destroy.url = (args: { pengumuman: number | { id: number } } | [pengumuman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pengumuman: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { pengumuman: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            pengumuman: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        pengumuman: typeof args.pengumuman === 'object'
        ? args.pengumuman.id
        : args.pengumuman,
    }

    return destroy.definition.url
            .replace('{pengumuman}', parsedArgs.pengumuman.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AnnouncementController::destroy
* @see app/Http/Controllers/AnnouncementController.php:473
* @route '/announcements/{pengumuman}'
*/
destroy.delete = (args: { pengumuman: number | { id: number } } | [pengumuman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\AnnouncementController::destroy
* @see app/Http/Controllers/AnnouncementController.php:473
* @route '/announcements/{pengumuman}'
*/
const destroyForm = (args: { pengumuman: number | { id: number } } | [pengumuman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AnnouncementController::destroy
* @see app/Http/Controllers/AnnouncementController.php:473
* @route '/announcements/{pengumuman}'
*/
destroyForm.delete = (args: { pengumuman: number | { id: number } } | [pengumuman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const announcements = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default announcements