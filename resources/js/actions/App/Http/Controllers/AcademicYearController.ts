import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AcademicYearController::index
* @see app/Http/Controllers/AcademicYearController.php:15
* @route '/academic-years'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/academic-years',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AcademicYearController::index
* @see app/Http/Controllers/AcademicYearController.php:15
* @route '/academic-years'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AcademicYearController::index
* @see app/Http/Controllers/AcademicYearController.php:15
* @route '/academic-years'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AcademicYearController::index
* @see app/Http/Controllers/AcademicYearController.php:15
* @route '/academic-years'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AcademicYearController::index
* @see app/Http/Controllers/AcademicYearController.php:15
* @route '/academic-years'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AcademicYearController::index
* @see app/Http/Controllers/AcademicYearController.php:15
* @route '/academic-years'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AcademicYearController::index
* @see app/Http/Controllers/AcademicYearController.php:15
* @route '/academic-years'
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
* @see \App\Http\Controllers\AcademicYearController::store
* @see app/Http/Controllers/AcademicYearController.php:27
* @route '/academic-years'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/academic-years',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AcademicYearController::store
* @see app/Http/Controllers/AcademicYearController.php:27
* @route '/academic-years'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AcademicYearController::store
* @see app/Http/Controllers/AcademicYearController.php:27
* @route '/academic-years'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AcademicYearController::store
* @see app/Http/Controllers/AcademicYearController.php:27
* @route '/academic-years'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AcademicYearController::store
* @see app/Http/Controllers/AcademicYearController.php:27
* @route '/academic-years'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\AcademicYearController::setActive
* @see app/Http/Controllers/AcademicYearController.php:59
* @route '/academic-years/{academicYear}/set-active'
*/
export const setActive = (args: { academicYear: number | { id: number } } | [academicYear: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: setActive.url(args, options),
    method: 'put',
})

setActive.definition = {
    methods: ["put"],
    url: '/academic-years/{academicYear}/set-active',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\AcademicYearController::setActive
* @see app/Http/Controllers/AcademicYearController.php:59
* @route '/academic-years/{academicYear}/set-active'
*/
setActive.url = (args: { academicYear: number | { id: number } } | [academicYear: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { academicYear: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { academicYear: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            academicYear: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        academicYear: typeof args.academicYear === 'object'
        ? args.academicYear.id
        : args.academicYear,
    }

    return setActive.definition.url
            .replace('{academicYear}', parsedArgs.academicYear.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AcademicYearController::setActive
* @see app/Http/Controllers/AcademicYearController.php:59
* @route '/academic-years/{academicYear}/set-active'
*/
setActive.put = (args: { academicYear: number | { id: number } } | [academicYear: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: setActive.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\AcademicYearController::setActive
* @see app/Http/Controllers/AcademicYearController.php:59
* @route '/academic-years/{academicYear}/set-active'
*/
const setActiveForm = (args: { academicYear: number | { id: number } } | [academicYear: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: setActive.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AcademicYearController::setActive
* @see app/Http/Controllers/AcademicYearController.php:59
* @route '/academic-years/{academicYear}/set-active'
*/
setActiveForm.put = (args: { academicYear: number | { id: number } } | [academicYear: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: setActive.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

setActive.form = setActiveForm

/**
* @see \App\Http\Controllers\AcademicYearController::getActive
* @see app/Http/Controllers/AcademicYearController.php:75
* @route '/academic-years/active'
*/
export const getActive = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getActive.url(options),
    method: 'get',
})

getActive.definition = {
    methods: ["get","head"],
    url: '/academic-years/active',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AcademicYearController::getActive
* @see app/Http/Controllers/AcademicYearController.php:75
* @route '/academic-years/active'
*/
getActive.url = (options?: RouteQueryOptions) => {
    return getActive.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AcademicYearController::getActive
* @see app/Http/Controllers/AcademicYearController.php:75
* @route '/academic-years/active'
*/
getActive.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getActive.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AcademicYearController::getActive
* @see app/Http/Controllers/AcademicYearController.php:75
* @route '/academic-years/active'
*/
getActive.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getActive.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AcademicYearController::getActive
* @see app/Http/Controllers/AcademicYearController.php:75
* @route '/academic-years/active'
*/
const getActiveForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getActive.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AcademicYearController::getActive
* @see app/Http/Controllers/AcademicYearController.php:75
* @route '/academic-years/active'
*/
getActiveForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getActive.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AcademicYearController::getActive
* @see app/Http/Controllers/AcademicYearController.php:75
* @route '/academic-years/active'
*/
getActiveForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getActive.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getActive.form = getActiveForm

/**
* @see \App\Http\Controllers\AcademicYearController::update
* @see app/Http/Controllers/AcademicYearController.php:87
* @route '/academic-years/{academicYear}'
*/
export const update = (args: { academicYear: number | { id: number } } | [academicYear: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/academic-years/{academicYear}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\AcademicYearController::update
* @see app/Http/Controllers/AcademicYearController.php:87
* @route '/academic-years/{academicYear}'
*/
update.url = (args: { academicYear: number | { id: number } } | [academicYear: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { academicYear: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { academicYear: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            academicYear: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        academicYear: typeof args.academicYear === 'object'
        ? args.academicYear.id
        : args.academicYear,
    }

    return update.definition.url
            .replace('{academicYear}', parsedArgs.academicYear.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AcademicYearController::update
* @see app/Http/Controllers/AcademicYearController.php:87
* @route '/academic-years/{academicYear}'
*/
update.put = (args: { academicYear: number | { id: number } } | [academicYear: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\AcademicYearController::update
* @see app/Http/Controllers/AcademicYearController.php:87
* @route '/academic-years/{academicYear}'
*/
const updateForm = (args: { academicYear: number | { id: number } } | [academicYear: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AcademicYearController::update
* @see app/Http/Controllers/AcademicYearController.php:87
* @route '/academic-years/{academicYear}'
*/
updateForm.put = (args: { academicYear: number | { id: number } } | [academicYear: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\AcademicYearController::destroy
* @see app/Http/Controllers/AcademicYearController.php:119
* @route '/academic-years/{academicYear}'
*/
export const destroy = (args: { academicYear: number | { id: number } } | [academicYear: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/academic-years/{academicYear}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AcademicYearController::destroy
* @see app/Http/Controllers/AcademicYearController.php:119
* @route '/academic-years/{academicYear}'
*/
destroy.url = (args: { academicYear: number | { id: number } } | [academicYear: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { academicYear: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { academicYear: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            academicYear: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        academicYear: typeof args.academicYear === 'object'
        ? args.academicYear.id
        : args.academicYear,
    }

    return destroy.definition.url
            .replace('{academicYear}', parsedArgs.academicYear.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AcademicYearController::destroy
* @see app/Http/Controllers/AcademicYearController.php:119
* @route '/academic-years/{academicYear}'
*/
destroy.delete = (args: { academicYear: number | { id: number } } | [academicYear: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\AcademicYearController::destroy
* @see app/Http/Controllers/AcademicYearController.php:119
* @route '/academic-years/{academicYear}'
*/
const destroyForm = (args: { academicYear: number | { id: number } } | [academicYear: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AcademicYearController::destroy
* @see app/Http/Controllers/AcademicYearController.php:119
* @route '/academic-years/{academicYear}'
*/
destroyForm.delete = (args: { academicYear: number | { id: number } } | [academicYear: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const AcademicYearController = { index, store, setActive, getActive, update, destroy }

export default AcademicYearController