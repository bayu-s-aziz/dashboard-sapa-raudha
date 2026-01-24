import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AnnouncementController::index
* @see app/Http/Controllers/AnnouncementController.php:19
* @route '/api/announcements'
*/
const index8900c2f609cf0650ecc80d8947b5f3c0 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index8900c2f609cf0650ecc80d8947b5f3c0.url(options),
    method: 'get',
})

index8900c2f609cf0650ecc80d8947b5f3c0.definition = {
    methods: ["get","head"],
    url: '/api/announcements',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AnnouncementController::index
* @see app/Http/Controllers/AnnouncementController.php:19
* @route '/api/announcements'
*/
index8900c2f609cf0650ecc80d8947b5f3c0.url = (options?: RouteQueryOptions) => {
    return index8900c2f609cf0650ecc80d8947b5f3c0.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AnnouncementController::index
* @see app/Http/Controllers/AnnouncementController.php:19
* @route '/api/announcements'
*/
index8900c2f609cf0650ecc80d8947b5f3c0.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index8900c2f609cf0650ecc80d8947b5f3c0.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnouncementController::index
* @see app/Http/Controllers/AnnouncementController.php:19
* @route '/api/announcements'
*/
index8900c2f609cf0650ecc80d8947b5f3c0.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index8900c2f609cf0650ecc80d8947b5f3c0.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AnnouncementController::index
* @see app/Http/Controllers/AnnouncementController.php:19
* @route '/api/announcements'
*/
const index8900c2f609cf0650ecc80d8947b5f3c0Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index8900c2f609cf0650ecc80d8947b5f3c0.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnouncementController::index
* @see app/Http/Controllers/AnnouncementController.php:19
* @route '/api/announcements'
*/
index8900c2f609cf0650ecc80d8947b5f3c0Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index8900c2f609cf0650ecc80d8947b5f3c0.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnouncementController::index
* @see app/Http/Controllers/AnnouncementController.php:19
* @route '/api/announcements'
*/
index8900c2f609cf0650ecc80d8947b5f3c0Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index8900c2f609cf0650ecc80d8947b5f3c0.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index8900c2f609cf0650ecc80d8947b5f3c0.form = index8900c2f609cf0650ecc80d8947b5f3c0Form
/**
* @see \App\Http\Controllers\AnnouncementController::index
* @see app/Http/Controllers/AnnouncementController.php:19
* @route '/announcements'
*/
const indexc6f10a055e0027df4f56e6a48e43a2d8 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexc6f10a055e0027df4f56e6a48e43a2d8.url(options),
    method: 'get',
})

indexc6f10a055e0027df4f56e6a48e43a2d8.definition = {
    methods: ["get","head"],
    url: '/announcements',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AnnouncementController::index
* @see app/Http/Controllers/AnnouncementController.php:19
* @route '/announcements'
*/
indexc6f10a055e0027df4f56e6a48e43a2d8.url = (options?: RouteQueryOptions) => {
    return indexc6f10a055e0027df4f56e6a48e43a2d8.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AnnouncementController::index
* @see app/Http/Controllers/AnnouncementController.php:19
* @route '/announcements'
*/
indexc6f10a055e0027df4f56e6a48e43a2d8.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexc6f10a055e0027df4f56e6a48e43a2d8.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnouncementController::index
* @see app/Http/Controllers/AnnouncementController.php:19
* @route '/announcements'
*/
indexc6f10a055e0027df4f56e6a48e43a2d8.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexc6f10a055e0027df4f56e6a48e43a2d8.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AnnouncementController::index
* @see app/Http/Controllers/AnnouncementController.php:19
* @route '/announcements'
*/
const indexc6f10a055e0027df4f56e6a48e43a2d8Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexc6f10a055e0027df4f56e6a48e43a2d8.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnouncementController::index
* @see app/Http/Controllers/AnnouncementController.php:19
* @route '/announcements'
*/
indexc6f10a055e0027df4f56e6a48e43a2d8Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexc6f10a055e0027df4f56e6a48e43a2d8.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnouncementController::index
* @see app/Http/Controllers/AnnouncementController.php:19
* @route '/announcements'
*/
indexc6f10a055e0027df4f56e6a48e43a2d8Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexc6f10a055e0027df4f56e6a48e43a2d8.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexc6f10a055e0027df4f56e6a48e43a2d8.form = indexc6f10a055e0027df4f56e6a48e43a2d8Form

export const index = {
    '/api/announcements': index8900c2f609cf0650ecc80d8947b5f3c0,
    '/announcements': indexc6f10a055e0027df4f56e6a48e43a2d8,
}

/**
* @see \App\Http\Controllers\AnnouncementController::store
* @see app/Http/Controllers/AnnouncementController.php:85
* @route '/api/announcements'
*/
const store8900c2f609cf0650ecc80d8947b5f3c0 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store8900c2f609cf0650ecc80d8947b5f3c0.url(options),
    method: 'post',
})

store8900c2f609cf0650ecc80d8947b5f3c0.definition = {
    methods: ["post"],
    url: '/api/announcements',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AnnouncementController::store
* @see app/Http/Controllers/AnnouncementController.php:85
* @route '/api/announcements'
*/
store8900c2f609cf0650ecc80d8947b5f3c0.url = (options?: RouteQueryOptions) => {
    return store8900c2f609cf0650ecc80d8947b5f3c0.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AnnouncementController::store
* @see app/Http/Controllers/AnnouncementController.php:85
* @route '/api/announcements'
*/
store8900c2f609cf0650ecc80d8947b5f3c0.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store8900c2f609cf0650ecc80d8947b5f3c0.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AnnouncementController::store
* @see app/Http/Controllers/AnnouncementController.php:85
* @route '/api/announcements'
*/
const store8900c2f609cf0650ecc80d8947b5f3c0Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store8900c2f609cf0650ecc80d8947b5f3c0.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AnnouncementController::store
* @see app/Http/Controllers/AnnouncementController.php:85
* @route '/api/announcements'
*/
store8900c2f609cf0650ecc80d8947b5f3c0Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store8900c2f609cf0650ecc80d8947b5f3c0.url(options),
    method: 'post',
})

store8900c2f609cf0650ecc80d8947b5f3c0.form = store8900c2f609cf0650ecc80d8947b5f3c0Form
/**
* @see \App\Http\Controllers\AnnouncementController::store
* @see app/Http/Controllers/AnnouncementController.php:85
* @route '/announcements'
*/
const storec6f10a055e0027df4f56e6a48e43a2d8 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storec6f10a055e0027df4f56e6a48e43a2d8.url(options),
    method: 'post',
})

storec6f10a055e0027df4f56e6a48e43a2d8.definition = {
    methods: ["post"],
    url: '/announcements',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AnnouncementController::store
* @see app/Http/Controllers/AnnouncementController.php:85
* @route '/announcements'
*/
storec6f10a055e0027df4f56e6a48e43a2d8.url = (options?: RouteQueryOptions) => {
    return storec6f10a055e0027df4f56e6a48e43a2d8.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AnnouncementController::store
* @see app/Http/Controllers/AnnouncementController.php:85
* @route '/announcements'
*/
storec6f10a055e0027df4f56e6a48e43a2d8.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storec6f10a055e0027df4f56e6a48e43a2d8.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AnnouncementController::store
* @see app/Http/Controllers/AnnouncementController.php:85
* @route '/announcements'
*/
const storec6f10a055e0027df4f56e6a48e43a2d8Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storec6f10a055e0027df4f56e6a48e43a2d8.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AnnouncementController::store
* @see app/Http/Controllers/AnnouncementController.php:85
* @route '/announcements'
*/
storec6f10a055e0027df4f56e6a48e43a2d8Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storec6f10a055e0027df4f56e6a48e43a2d8.url(options),
    method: 'post',
})

storec6f10a055e0027df4f56e6a48e43a2d8.form = storec6f10a055e0027df4f56e6a48e43a2d8Form

export const store = {
    '/api/announcements': store8900c2f609cf0650ecc80d8947b5f3c0,
    '/announcements': storec6f10a055e0027df4f56e6a48e43a2d8,
}

/**
* @see \App\Http\Controllers\AnnouncementController::getStatistics
* @see app/Http/Controllers/AnnouncementController.php:277
* @route '/api/announcements/statistics'
*/
export const getStatistics = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getStatistics.url(options),
    method: 'get',
})

getStatistics.definition = {
    methods: ["get","head"],
    url: '/api/announcements/statistics',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AnnouncementController::getStatistics
* @see app/Http/Controllers/AnnouncementController.php:277
* @route '/api/announcements/statistics'
*/
getStatistics.url = (options?: RouteQueryOptions) => {
    return getStatistics.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AnnouncementController::getStatistics
* @see app/Http/Controllers/AnnouncementController.php:277
* @route '/api/announcements/statistics'
*/
getStatistics.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getStatistics.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnouncementController::getStatistics
* @see app/Http/Controllers/AnnouncementController.php:277
* @route '/api/announcements/statistics'
*/
getStatistics.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getStatistics.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AnnouncementController::getStatistics
* @see app/Http/Controllers/AnnouncementController.php:277
* @route '/api/announcements/statistics'
*/
const getStatisticsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getStatistics.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnouncementController::getStatistics
* @see app/Http/Controllers/AnnouncementController.php:277
* @route '/api/announcements/statistics'
*/
getStatisticsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getStatistics.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnouncementController::getStatistics
* @see app/Http/Controllers/AnnouncementController.php:277
* @route '/api/announcements/statistics'
*/
getStatisticsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getStatistics.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getStatistics.form = getStatisticsForm

/**
* @see \App\Http\Controllers\AnnouncementController::getByClass
* @see app/Http/Controllers/AnnouncementController.php:259
* @route '/api/announcements/class/{classId}'
*/
export const getByClass = (args: { classId: string | number } | [classId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getByClass.url(args, options),
    method: 'get',
})

getByClass.definition = {
    methods: ["get","head"],
    url: '/api/announcements/class/{classId}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AnnouncementController::getByClass
* @see app/Http/Controllers/AnnouncementController.php:259
* @route '/api/announcements/class/{classId}'
*/
getByClass.url = (args: { classId: string | number } | [classId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { classId: args }
    }

    if (Array.isArray(args)) {
        args = {
            classId: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        classId: args.classId,
    }

    return getByClass.definition.url
            .replace('{classId}', parsedArgs.classId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AnnouncementController::getByClass
* @see app/Http/Controllers/AnnouncementController.php:259
* @route '/api/announcements/class/{classId}'
*/
getByClass.get = (args: { classId: string | number } | [classId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getByClass.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnouncementController::getByClass
* @see app/Http/Controllers/AnnouncementController.php:259
* @route '/api/announcements/class/{classId}'
*/
getByClass.head = (args: { classId: string | number } | [classId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getByClass.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AnnouncementController::getByClass
* @see app/Http/Controllers/AnnouncementController.php:259
* @route '/api/announcements/class/{classId}'
*/
const getByClassForm = (args: { classId: string | number } | [classId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getByClass.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnouncementController::getByClass
* @see app/Http/Controllers/AnnouncementController.php:259
* @route '/api/announcements/class/{classId}'
*/
getByClassForm.get = (args: { classId: string | number } | [classId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getByClass.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnouncementController::getByClass
* @see app/Http/Controllers/AnnouncementController.php:259
* @route '/api/announcements/class/{classId}'
*/
getByClassForm.head = (args: { classId: string | number } | [classId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getByClass.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getByClass.form = getByClassForm

/**
* @see \App\Http\Controllers\AnnouncementController::show
* @see app/Http/Controllers/AnnouncementController.php:164
* @route '/api/announcements/{id}'
*/
export const show = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/announcements/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AnnouncementController::show
* @see app/Http/Controllers/AnnouncementController.php:164
* @route '/api/announcements/{id}'
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
* @see \App\Http\Controllers\AnnouncementController::show
* @see app/Http/Controllers/AnnouncementController.php:164
* @route '/api/announcements/{id}'
*/
show.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnouncementController::show
* @see app/Http/Controllers/AnnouncementController.php:164
* @route '/api/announcements/{id}'
*/
show.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AnnouncementController::show
* @see app/Http/Controllers/AnnouncementController.php:164
* @route '/api/announcements/{id}'
*/
const showForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnouncementController::show
* @see app/Http/Controllers/AnnouncementController.php:164
* @route '/api/announcements/{id}'
*/
showForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnouncementController::show
* @see app/Http/Controllers/AnnouncementController.php:164
* @route '/api/announcements/{id}'
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
* @see \App\Http\Controllers\AnnouncementController::update
* @see app/Http/Controllers/AnnouncementController.php:181
* @route '/api/announcements/{id}'
*/
export const update = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/api/announcements/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\AnnouncementController::update
* @see app/Http/Controllers/AnnouncementController.php:181
* @route '/api/announcements/{id}'
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
* @see \App\Http\Controllers\AnnouncementController::update
* @see app/Http/Controllers/AnnouncementController.php:181
* @route '/api/announcements/{id}'
*/
update.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\AnnouncementController::update
* @see app/Http/Controllers/AnnouncementController.php:181
* @route '/api/announcements/{id}'
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
* @see \App\Http\Controllers\AnnouncementController::update
* @see app/Http/Controllers/AnnouncementController.php:181
* @route '/api/announcements/{id}'
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
* @see \App\Http\Controllers\AnnouncementController::destroy
* @see app/Http/Controllers/AnnouncementController.php:224
* @route '/api/announcements/{id}'
*/
export const destroy = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/announcements/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AnnouncementController::destroy
* @see app/Http/Controllers/AnnouncementController.php:224
* @route '/api/announcements/{id}'
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
* @see \App\Http\Controllers\AnnouncementController::destroy
* @see app/Http/Controllers/AnnouncementController.php:224
* @route '/api/announcements/{id}'
*/
destroy.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\AnnouncementController::destroy
* @see app/Http/Controllers/AnnouncementController.php:224
* @route '/api/announcements/{id}'
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
* @see \App\Http\Controllers\AnnouncementController::destroy
* @see app/Http/Controllers/AnnouncementController.php:224
* @route '/api/announcements/{id}'
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
* @see \App\Http\Controllers\AnnouncementController::uploadAttachment
* @see app/Http/Controllers/AnnouncementController.php:296
* @route '/api/announcements/{announcementId}/upload-attachment'
*/
export const uploadAttachment = (args: { announcementId: string | number } | [announcementId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadAttachment.url(args, options),
    method: 'post',
})

uploadAttachment.definition = {
    methods: ["post"],
    url: '/api/announcements/{announcementId}/upload-attachment',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AnnouncementController::uploadAttachment
* @see app/Http/Controllers/AnnouncementController.php:296
* @route '/api/announcements/{announcementId}/upload-attachment'
*/
uploadAttachment.url = (args: { announcementId: string | number } | [announcementId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { announcementId: args }
    }

    if (Array.isArray(args)) {
        args = {
            announcementId: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        announcementId: args.announcementId,
    }

    return uploadAttachment.definition.url
            .replace('{announcementId}', parsedArgs.announcementId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AnnouncementController::uploadAttachment
* @see app/Http/Controllers/AnnouncementController.php:296
* @route '/api/announcements/{announcementId}/upload-attachment'
*/
uploadAttachment.post = (args: { announcementId: string | number } | [announcementId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadAttachment.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AnnouncementController::uploadAttachment
* @see app/Http/Controllers/AnnouncementController.php:296
* @route '/api/announcements/{announcementId}/upload-attachment'
*/
const uploadAttachmentForm = (args: { announcementId: string | number } | [announcementId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: uploadAttachment.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AnnouncementController::uploadAttachment
* @see app/Http/Controllers/AnnouncementController.php:296
* @route '/api/announcements/{announcementId}/upload-attachment'
*/
uploadAttachmentForm.post = (args: { announcementId: string | number } | [announcementId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: uploadAttachment.url(args, options),
    method: 'post',
})

uploadAttachment.form = uploadAttachmentForm

/**
* @see \App\Http\Controllers\AnnouncementController::deleteAttachment
* @see app/Http/Controllers/AnnouncementController.php:338
* @route '/api/announcements/attachments/{attachmentId}'
*/
export const deleteAttachment = (args: { attachmentId: string | number } | [attachmentId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteAttachment.url(args, options),
    method: 'delete',
})

deleteAttachment.definition = {
    methods: ["delete"],
    url: '/api/announcements/attachments/{attachmentId}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AnnouncementController::deleteAttachment
* @see app/Http/Controllers/AnnouncementController.php:338
* @route '/api/announcements/attachments/{attachmentId}'
*/
deleteAttachment.url = (args: { attachmentId: string | number } | [attachmentId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { attachmentId: args }
    }

    if (Array.isArray(args)) {
        args = {
            attachmentId: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        attachmentId: args.attachmentId,
    }

    return deleteAttachment.definition.url
            .replace('{attachmentId}', parsedArgs.attachmentId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AnnouncementController::deleteAttachment
* @see app/Http/Controllers/AnnouncementController.php:338
* @route '/api/announcements/attachments/{attachmentId}'
*/
deleteAttachment.delete = (args: { attachmentId: string | number } | [attachmentId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteAttachment.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\AnnouncementController::deleteAttachment
* @see app/Http/Controllers/AnnouncementController.php:338
* @route '/api/announcements/attachments/{attachmentId}'
*/
const deleteAttachmentForm = (args: { attachmentId: string | number } | [attachmentId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteAttachment.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AnnouncementController::deleteAttachment
* @see app/Http/Controllers/AnnouncementController.php:338
* @route '/api/announcements/attachments/{attachmentId}'
*/
deleteAttachmentForm.delete = (args: { attachmentId: string | number } | [attachmentId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteAttachment.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

deleteAttachment.form = deleteAttachmentForm

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
* @see \App\Http\Controllers\AnnouncementController::showInertia
* @see app/Http/Controllers/AnnouncementController.php:369
* @route '/announcements/{pengumuman}'
*/
export const showInertia = (args: { pengumuman: number | { id: number } } | [pengumuman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showInertia.url(args, options),
    method: 'get',
})

showInertia.definition = {
    methods: ["get","head"],
    url: '/announcements/{pengumuman}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AnnouncementController::showInertia
* @see app/Http/Controllers/AnnouncementController.php:369
* @route '/announcements/{pengumuman}'
*/
showInertia.url = (args: { pengumuman: number | { id: number } } | [pengumuman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return showInertia.definition.url
            .replace('{pengumuman}', parsedArgs.pengumuman.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AnnouncementController::showInertia
* @see app/Http/Controllers/AnnouncementController.php:369
* @route '/announcements/{pengumuman}'
*/
showInertia.get = (args: { pengumuman: number | { id: number } } | [pengumuman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showInertia.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnouncementController::showInertia
* @see app/Http/Controllers/AnnouncementController.php:369
* @route '/announcements/{pengumuman}'
*/
showInertia.head = (args: { pengumuman: number | { id: number } } | [pengumuman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showInertia.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AnnouncementController::showInertia
* @see app/Http/Controllers/AnnouncementController.php:369
* @route '/announcements/{pengumuman}'
*/
const showInertiaForm = (args: { pengumuman: number | { id: number } } | [pengumuman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showInertia.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnouncementController::showInertia
* @see app/Http/Controllers/AnnouncementController.php:369
* @route '/announcements/{pengumuman}'
*/
showInertiaForm.get = (args: { pengumuman: number | { id: number } } | [pengumuman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showInertia.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnouncementController::showInertia
* @see app/Http/Controllers/AnnouncementController.php:369
* @route '/announcements/{pengumuman}'
*/
showInertiaForm.head = (args: { pengumuman: number | { id: number } } | [pengumuman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showInertia.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showInertia.form = showInertiaForm

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
* @see \App\Http\Controllers\AnnouncementController::updateInertia
* @see app/Http/Controllers/AnnouncementController.php:397
* @route '/announcements/{pengumuman}'
*/
export const updateInertia = (args: { pengumuman: number | { id: number } } | [pengumuman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateInertia.url(args, options),
    method: 'put',
})

updateInertia.definition = {
    methods: ["put"],
    url: '/announcements/{pengumuman}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\AnnouncementController::updateInertia
* @see app/Http/Controllers/AnnouncementController.php:397
* @route '/announcements/{pengumuman}'
*/
updateInertia.url = (args: { pengumuman: number | { id: number } } | [pengumuman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return updateInertia.definition.url
            .replace('{pengumuman}', parsedArgs.pengumuman.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AnnouncementController::updateInertia
* @see app/Http/Controllers/AnnouncementController.php:397
* @route '/announcements/{pengumuman}'
*/
updateInertia.put = (args: { pengumuman: number | { id: number } } | [pengumuman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateInertia.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\AnnouncementController::updateInertia
* @see app/Http/Controllers/AnnouncementController.php:397
* @route '/announcements/{pengumuman}'
*/
const updateInertiaForm = (args: { pengumuman: number | { id: number } } | [pengumuman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateInertia.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AnnouncementController::updateInertia
* @see app/Http/Controllers/AnnouncementController.php:397
* @route '/announcements/{pengumuman}'
*/
updateInertiaForm.put = (args: { pengumuman: number | { id: number } } | [pengumuman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateInertia.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateInertia.form = updateInertiaForm

/**
* @see \App\Http\Controllers\AnnouncementController::destroyInertia
* @see app/Http/Controllers/AnnouncementController.php:473
* @route '/announcements/{pengumuman}'
*/
export const destroyInertia = (args: { pengumuman: number | { id: number } } | [pengumuman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyInertia.url(args, options),
    method: 'delete',
})

destroyInertia.definition = {
    methods: ["delete"],
    url: '/announcements/{pengumuman}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AnnouncementController::destroyInertia
* @see app/Http/Controllers/AnnouncementController.php:473
* @route '/announcements/{pengumuman}'
*/
destroyInertia.url = (args: { pengumuman: number | { id: number } } | [pengumuman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return destroyInertia.definition.url
            .replace('{pengumuman}', parsedArgs.pengumuman.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AnnouncementController::destroyInertia
* @see app/Http/Controllers/AnnouncementController.php:473
* @route '/announcements/{pengumuman}'
*/
destroyInertia.delete = (args: { pengumuman: number | { id: number } } | [pengumuman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyInertia.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\AnnouncementController::destroyInertia
* @see app/Http/Controllers/AnnouncementController.php:473
* @route '/announcements/{pengumuman}'
*/
const destroyInertiaForm = (args: { pengumuman: number | { id: number } } | [pengumuman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyInertia.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AnnouncementController::destroyInertia
* @see app/Http/Controllers/AnnouncementController.php:473
* @route '/announcements/{pengumuman}'
*/
destroyInertiaForm.delete = (args: { pengumuman: number | { id: number } } | [pengumuman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyInertia.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroyInertia.form = destroyInertiaForm

const AnnouncementController = { index, store, getStatistics, getByClass, show, update, destroy, uploadAttachment, deleteAttachment, create, showInertia, edit, updateInertia, destroyInertia }

export default AnnouncementController