import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ParentController::index
* @see app/Http/Controllers/ParentController.php:17
* @route '/api/parents'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/parents',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ParentController::index
* @see app/Http/Controllers/ParentController.php:17
* @route '/api/parents'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ParentController::index
* @see app/Http/Controllers/ParentController.php:17
* @route '/api/parents'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ParentController::index
* @see app/Http/Controllers/ParentController.php:17
* @route '/api/parents'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ParentController::index
* @see app/Http/Controllers/ParentController.php:17
* @route '/api/parents'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ParentController::index
* @see app/Http/Controllers/ParentController.php:17
* @route '/api/parents'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ParentController::index
* @see app/Http/Controllers/ParentController.php:17
* @route '/api/parents'
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
* @see \App\Http\Controllers\ParentController::store
* @see app/Http/Controllers/ParentController.php:43
* @route '/api/parents'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/parents',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ParentController::store
* @see app/Http/Controllers/ParentController.php:43
* @route '/api/parents'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ParentController::store
* @see app/Http/Controllers/ParentController.php:43
* @route '/api/parents'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ParentController::store
* @see app/Http/Controllers/ParentController.php:43
* @route '/api/parents'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ParentController::store
* @see app/Http/Controllers/ParentController.php:43
* @route '/api/parents'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\ParentController::show
* @see app/Http/Controllers/ParentController.php:115
* @route '/api/parents/{id}'
*/
export const show = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/parents/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ParentController::show
* @see app/Http/Controllers/ParentController.php:115
* @route '/api/parents/{id}'
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
* @see \App\Http\Controllers\ParentController::show
* @see app/Http/Controllers/ParentController.php:115
* @route '/api/parents/{id}'
*/
show.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ParentController::show
* @see app/Http/Controllers/ParentController.php:115
* @route '/api/parents/{id}'
*/
show.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ParentController::show
* @see app/Http/Controllers/ParentController.php:115
* @route '/api/parents/{id}'
*/
const showForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ParentController::show
* @see app/Http/Controllers/ParentController.php:115
* @route '/api/parents/{id}'
*/
showForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ParentController::show
* @see app/Http/Controllers/ParentController.php:115
* @route '/api/parents/{id}'
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
* @see \App\Http\Controllers\ParentController::update
* @see app/Http/Controllers/ParentController.php:129
* @route '/api/parents/{id}'
*/
export const update = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/api/parents/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\ParentController::update
* @see app/Http/Controllers/ParentController.php:129
* @route '/api/parents/{id}'
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
* @see \App\Http\Controllers\ParentController::update
* @see app/Http/Controllers/ParentController.php:129
* @route '/api/parents/{id}'
*/
update.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\ParentController::update
* @see app/Http/Controllers/ParentController.php:129
* @route '/api/parents/{id}'
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
* @see \App\Http\Controllers\ParentController::update
* @see app/Http/Controllers/ParentController.php:129
* @route '/api/parents/{id}'
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
* @see \App\Http\Controllers\ParentController::destroy
* @see app/Http/Controllers/ParentController.php:189
* @route '/api/parents/{id}'
*/
export const destroy = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/parents/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ParentController::destroy
* @see app/Http/Controllers/ParentController.php:189
* @route '/api/parents/{id}'
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
* @see \App\Http\Controllers\ParentController::destroy
* @see app/Http/Controllers/ParentController.php:189
* @route '/api/parents/{id}'
*/
destroy.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\ParentController::destroy
* @see app/Http/Controllers/ParentController.php:189
* @route '/api/parents/{id}'
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
* @see \App\Http\Controllers\ParentController::destroy
* @see app/Http/Controllers/ParentController.php:189
* @route '/api/parents/{id}'
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
* @see \App\Http\Controllers\ParentController::uploadPhoto
* @see app/Http/Controllers/ParentController.php:217
* @route '/api/parents/{id}/upload-photo'
*/
export const uploadPhoto = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadPhoto.url(args, options),
    method: 'post',
})

uploadPhoto.definition = {
    methods: ["post"],
    url: '/api/parents/{id}/upload-photo',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ParentController::uploadPhoto
* @see app/Http/Controllers/ParentController.php:217
* @route '/api/parents/{id}/upload-photo'
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
* @see \App\Http\Controllers\ParentController::uploadPhoto
* @see app/Http/Controllers/ParentController.php:217
* @route '/api/parents/{id}/upload-photo'
*/
uploadPhoto.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadPhoto.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ParentController::uploadPhoto
* @see app/Http/Controllers/ParentController.php:217
* @route '/api/parents/{id}/upload-photo'
*/
const uploadPhotoForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: uploadPhoto.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ParentController::uploadPhoto
* @see app/Http/Controllers/ParentController.php:217
* @route '/api/parents/{id}/upload-photo'
*/
uploadPhotoForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: uploadPhoto.url(args, options),
    method: 'post',
})

uploadPhoto.form = uploadPhotoForm

/**
* @see \App\Http\Controllers\ParentController::switchActiveParent
* @see app/Http/Controllers/ParentController.php:260
* @route '/api/parents/{id}/switch-active-parent'
*/
export const switchActiveParent = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: switchActiveParent.url(args, options),
    method: 'post',
})

switchActiveParent.definition = {
    methods: ["post"],
    url: '/api/parents/{id}/switch-active-parent',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ParentController::switchActiveParent
* @see app/Http/Controllers/ParentController.php:260
* @route '/api/parents/{id}/switch-active-parent'
*/
switchActiveParent.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return switchActiveParent.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ParentController::switchActiveParent
* @see app/Http/Controllers/ParentController.php:260
* @route '/api/parents/{id}/switch-active-parent'
*/
switchActiveParent.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: switchActiveParent.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ParentController::switchActiveParent
* @see app/Http/Controllers/ParentController.php:260
* @route '/api/parents/{id}/switch-active-parent'
*/
const switchActiveParentForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: switchActiveParent.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ParentController::switchActiveParent
* @see app/Http/Controllers/ParentController.php:260
* @route '/api/parents/{id}/switch-active-parent'
*/
switchActiveParentForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: switchActiveParent.url(args, options),
    method: 'post',
})

switchActiveParent.form = switchActiveParentForm

const ParentController = { index, store, show, update, destroy, uploadPhoto, switchActiveParent }

export default ParentController