import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\GuruController::index
* @see app/Http/Controllers/GuruController.php:16
* @route '/api/teachers'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/teachers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GuruController::index
* @see app/Http/Controllers/GuruController.php:16
* @route '/api/teachers'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GuruController::index
* @see app/Http/Controllers/GuruController.php:16
* @route '/api/teachers'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GuruController::index
* @see app/Http/Controllers/GuruController.php:16
* @route '/api/teachers'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\GuruController::index
* @see app/Http/Controllers/GuruController.php:16
* @route '/api/teachers'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GuruController::index
* @see app/Http/Controllers/GuruController.php:16
* @route '/api/teachers'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GuruController::index
* @see app/Http/Controllers/GuruController.php:16
* @route '/api/teachers'
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
* @see \App\Http\Controllers\GuruController::store
* @see app/Http/Controllers/GuruController.php:44
* @route '/api/teachers'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/teachers',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\GuruController::store
* @see app/Http/Controllers/GuruController.php:44
* @route '/api/teachers'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GuruController::store
* @see app/Http/Controllers/GuruController.php:44
* @route '/api/teachers'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\GuruController::store
* @see app/Http/Controllers/GuruController.php:44
* @route '/api/teachers'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\GuruController::store
* @see app/Http/Controllers/GuruController.php:44
* @route '/api/teachers'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\GuruController::show
* @see app/Http/Controllers/GuruController.php:96
* @route '/api/teachers/{id}'
*/
export const show = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/teachers/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GuruController::show
* @see app/Http/Controllers/GuruController.php:96
* @route '/api/teachers/{id}'
*/
show.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return show.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\GuruController::show
* @see app/Http/Controllers/GuruController.php:96
* @route '/api/teachers/{id}'
*/
show.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GuruController::show
* @see app/Http/Controllers/GuruController.php:96
* @route '/api/teachers/{id}'
*/
show.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\GuruController::show
* @see app/Http/Controllers/GuruController.php:96
* @route '/api/teachers/{id}'
*/
const showForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GuruController::show
* @see app/Http/Controllers/GuruController.php:96
* @route '/api/teachers/{id}'
*/
showForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GuruController::show
* @see app/Http/Controllers/GuruController.php:96
* @route '/api/teachers/{id}'
*/
showForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\GuruController::update
* @see app/Http/Controllers/GuruController.php:110
* @route '/api/teachers/{id}'
*/
export const update = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/api/teachers/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\GuruController::update
* @see app/Http/Controllers/GuruController.php:110
* @route '/api/teachers/{id}'
*/
update.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return update.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\GuruController::update
* @see app/Http/Controllers/GuruController.php:110
* @route '/api/teachers/{id}'
*/
update.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\GuruController::update
* @see app/Http/Controllers/GuruController.php:110
* @route '/api/teachers/{id}'
*/
const updateForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\GuruController::update
* @see app/Http/Controllers/GuruController.php:110
* @route '/api/teachers/{id}'
*/
updateForm.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\GuruController::destroy
* @see app/Http/Controllers/GuruController.php:165
* @route '/api/teachers/{id}'
*/
export const destroy = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/teachers/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\GuruController::destroy
* @see app/Http/Controllers/GuruController.php:165
* @route '/api/teachers/{id}'
*/
destroy.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return destroy.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\GuruController::destroy
* @see app/Http/Controllers/GuruController.php:165
* @route '/api/teachers/{id}'
*/
destroy.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\GuruController::destroy
* @see app/Http/Controllers/GuruController.php:165
* @route '/api/teachers/{id}'
*/
const destroyForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\GuruController::destroy
* @see app/Http/Controllers/GuruController.php:165
* @route '/api/teachers/{id}'
*/
destroyForm.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

/**
* @see \App\Http\Controllers\GuruController::uploadPhoto
* @see app/Http/Controllers/GuruController.php:193
* @route '/api/teachers/{id}/upload-photo'
*/
export const uploadPhoto = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadPhoto.url(args, options),
    method: 'post',
})

uploadPhoto.definition = {
    methods: ["post"],
    url: '/api/teachers/{id}/upload-photo',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\GuruController::uploadPhoto
* @see app/Http/Controllers/GuruController.php:193
* @route '/api/teachers/{id}/upload-photo'
*/
uploadPhoto.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return uploadPhoto.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\GuruController::uploadPhoto
* @see app/Http/Controllers/GuruController.php:193
* @route '/api/teachers/{id}/upload-photo'
*/
uploadPhoto.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadPhoto.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\GuruController::uploadPhoto
* @see app/Http/Controllers/GuruController.php:193
* @route '/api/teachers/{id}/upload-photo'
*/
const uploadPhotoForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: uploadPhoto.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\GuruController::uploadPhoto
* @see app/Http/Controllers/GuruController.php:193
* @route '/api/teachers/{id}/upload-photo'
*/
uploadPhotoForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: uploadPhoto.url(args, options),
    method: 'post',
})

uploadPhoto.form = uploadPhotoForm

const GuruController = { index, store, show, update, destroy, uploadPhoto }

export default GuruController