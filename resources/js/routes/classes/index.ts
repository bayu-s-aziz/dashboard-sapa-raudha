import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\KelasController::index
* @see app/Http/Controllers/KelasController.php:18
* @route '/classes'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/classes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\KelasController::index
* @see app/Http/Controllers/KelasController.php:18
* @route '/classes'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\KelasController::index
* @see app/Http/Controllers/KelasController.php:18
* @route '/classes'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KelasController::index
* @see app/Http/Controllers/KelasController.php:18
* @route '/classes'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\KelasController::index
* @see app/Http/Controllers/KelasController.php:18
* @route '/classes'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KelasController::index
* @see app/Http/Controllers/KelasController.php:18
* @route '/classes'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KelasController::index
* @see app/Http/Controllers/KelasController.php:18
* @route '/classes'
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
* @see \App\Http\Controllers\KelasController::addAcademicYear
* @see app/Http/Controllers/KelasController.php:254
* @route '/classes/add-academic-year'
*/
export const addAcademicYear = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: addAcademicYear.url(options),
    method: 'post',
})

addAcademicYear.definition = {
    methods: ["post"],
    url: '/classes/add-academic-year',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\KelasController::addAcademicYear
* @see app/Http/Controllers/KelasController.php:254
* @route '/classes/add-academic-year'
*/
addAcademicYear.url = (options?: RouteQueryOptions) => {
    return addAcademicYear.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\KelasController::addAcademicYear
* @see app/Http/Controllers/KelasController.php:254
* @route '/classes/add-academic-year'
*/
addAcademicYear.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: addAcademicYear.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\KelasController::addAcademicYear
* @see app/Http/Controllers/KelasController.php:254
* @route '/classes/add-academic-year'
*/
const addAcademicYearForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: addAcademicYear.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\KelasController::addAcademicYear
* @see app/Http/Controllers/KelasController.php:254
* @route '/classes/add-academic-year'
*/
addAcademicYearForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: addAcademicYear.url(options),
    method: 'post',
})

addAcademicYear.form = addAcademicYearForm

/**
* @see \App\Http\Controllers\KelasController::show
* @see app/Http/Controllers/KelasController.php:105
* @route '/classes/{kelas}'
*/
export const show = (args: { kelas: number | { id: number } } | [kelas: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/classes/{kelas}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\KelasController::show
* @see app/Http/Controllers/KelasController.php:105
* @route '/classes/{kelas}'
*/
show.url = (args: { kelas: number | { id: number } } | [kelas: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kelas: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { kelas: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            kelas: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        kelas: typeof args.kelas === 'object'
        ? args.kelas.id
        : args.kelas,
    }

    return show.definition.url
            .replace('{kelas}', parsedArgs.kelas.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\KelasController::show
* @see app/Http/Controllers/KelasController.php:105
* @route '/classes/{kelas}'
*/
show.get = (args: { kelas: number | { id: number } } | [kelas: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KelasController::show
* @see app/Http/Controllers/KelasController.php:105
* @route '/classes/{kelas}'
*/
show.head = (args: { kelas: number | { id: number } } | [kelas: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\KelasController::show
* @see app/Http/Controllers/KelasController.php:105
* @route '/classes/{kelas}'
*/
const showForm = (args: { kelas: number | { id: number } } | [kelas: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KelasController::show
* @see app/Http/Controllers/KelasController.php:105
* @route '/classes/{kelas}'
*/
showForm.get = (args: { kelas: number | { id: number } } | [kelas: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KelasController::show
* @see app/Http/Controllers/KelasController.php:105
* @route '/classes/{kelas}'
*/
showForm.head = (args: { kelas: number | { id: number } } | [kelas: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\KelasController::edit
* @see app/Http/Controllers/KelasController.php:125
* @route '/classes/{kelas}/edit'
*/
export const edit = (args: { kelas: number | { id: number } } | [kelas: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/classes/{kelas}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\KelasController::edit
* @see app/Http/Controllers/KelasController.php:125
* @route '/classes/{kelas}/edit'
*/
edit.url = (args: { kelas: number | { id: number } } | [kelas: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kelas: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { kelas: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            kelas: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        kelas: typeof args.kelas === 'object'
        ? args.kelas.id
        : args.kelas,
    }

    return edit.definition.url
            .replace('{kelas}', parsedArgs.kelas.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\KelasController::edit
* @see app/Http/Controllers/KelasController.php:125
* @route '/classes/{kelas}/edit'
*/
edit.get = (args: { kelas: number | { id: number } } | [kelas: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KelasController::edit
* @see app/Http/Controllers/KelasController.php:125
* @route '/classes/{kelas}/edit'
*/
edit.head = (args: { kelas: number | { id: number } } | [kelas: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\KelasController::edit
* @see app/Http/Controllers/KelasController.php:125
* @route '/classes/{kelas}/edit'
*/
const editForm = (args: { kelas: number | { id: number } } | [kelas: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KelasController::edit
* @see app/Http/Controllers/KelasController.php:125
* @route '/classes/{kelas}/edit'
*/
editForm.get = (args: { kelas: number | { id: number } } | [kelas: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KelasController::edit
* @see app/Http/Controllers/KelasController.php:125
* @route '/classes/{kelas}/edit'
*/
editForm.head = (args: { kelas: number | { id: number } } | [kelas: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\KelasController::update
* @see app/Http/Controllers/KelasController.php:146
* @route '/classes/{kelas}'
*/
export const update = (args: { kelas: number | { id: number } } | [kelas: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/classes/{kelas}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\KelasController::update
* @see app/Http/Controllers/KelasController.php:146
* @route '/classes/{kelas}'
*/
update.url = (args: { kelas: number | { id: number } } | [kelas: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kelas: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { kelas: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            kelas: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        kelas: typeof args.kelas === 'object'
        ? args.kelas.id
        : args.kelas,
    }

    return update.definition.url
            .replace('{kelas}', parsedArgs.kelas.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\KelasController::update
* @see app/Http/Controllers/KelasController.php:146
* @route '/classes/{kelas}'
*/
update.put = (args: { kelas: number | { id: number } } | [kelas: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\KelasController::update
* @see app/Http/Controllers/KelasController.php:146
* @route '/classes/{kelas}'
*/
const updateForm = (args: { kelas: number | { id: number } } | [kelas: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\KelasController::update
* @see app/Http/Controllers/KelasController.php:146
* @route '/classes/{kelas}'
*/
updateForm.put = (args: { kelas: number | { id: number } } | [kelas: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\KelasController::destroy
* @see app/Http/Controllers/KelasController.php:208
* @route '/classes/{kelas}'
*/
export const destroy = (args: { kelas: number | { id: number } } | [kelas: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/classes/{kelas}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\KelasController::destroy
* @see app/Http/Controllers/KelasController.php:208
* @route '/classes/{kelas}'
*/
destroy.url = (args: { kelas: number | { id: number } } | [kelas: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kelas: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { kelas: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            kelas: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        kelas: typeof args.kelas === 'object'
        ? args.kelas.id
        : args.kelas,
    }

    return destroy.definition.url
            .replace('{kelas}', parsedArgs.kelas.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\KelasController::destroy
* @see app/Http/Controllers/KelasController.php:208
* @route '/classes/{kelas}'
*/
destroy.delete = (args: { kelas: number | { id: number } } | [kelas: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\KelasController::destroy
* @see app/Http/Controllers/KelasController.php:208
* @route '/classes/{kelas}'
*/
const destroyForm = (args: { kelas: number | { id: number } } | [kelas: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\KelasController::destroy
* @see app/Http/Controllers/KelasController.php:208
* @route '/classes/{kelas}'
*/
destroyForm.delete = (args: { kelas: number | { id: number } } | [kelas: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const classes = {
    index: Object.assign(index, index),
    addAcademicYear: Object.assign(addAcademicYear, addAcademicYear),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default classes