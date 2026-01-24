import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
import reports3613d0 from './reports'
import classMethod from './class'
/**
* @see \App\Http\Controllers\AttendanceController::index
* @see app/Http/Controllers/AttendanceController.php:354
* @route '/attendance'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/attendance',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AttendanceController::index
* @see app/Http/Controllers/AttendanceController.php:354
* @route '/attendance'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AttendanceController::index
* @see app/Http/Controllers/AttendanceController.php:354
* @route '/attendance'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::index
* @see app/Http/Controllers/AttendanceController.php:354
* @route '/attendance'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AttendanceController::index
* @see app/Http/Controllers/AttendanceController.php:354
* @route '/attendance'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::index
* @see app/Http/Controllers/AttendanceController.php:354
* @route '/attendance'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::index
* @see app/Http/Controllers/AttendanceController.php:354
* @route '/attendance'
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
* @see \App\Http\Controllers\AttendanceController::reports
* @see app/Http/Controllers/AttendanceController.php:396
* @route '/attendance/reports'
*/
export const reports = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: reports.url(options),
    method: 'get',
})

reports.definition = {
    methods: ["get","head"],
    url: '/attendance/reports',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AttendanceController::reports
* @see app/Http/Controllers/AttendanceController.php:396
* @route '/attendance/reports'
*/
reports.url = (options?: RouteQueryOptions) => {
    return reports.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AttendanceController::reports
* @see app/Http/Controllers/AttendanceController.php:396
* @route '/attendance/reports'
*/
reports.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: reports.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::reports
* @see app/Http/Controllers/AttendanceController.php:396
* @route '/attendance/reports'
*/
reports.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: reports.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AttendanceController::reports
* @see app/Http/Controllers/AttendanceController.php:396
* @route '/attendance/reports'
*/
const reportsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: reports.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::reports
* @see app/Http/Controllers/AttendanceController.php:396
* @route '/attendance/reports'
*/
reportsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: reports.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::reports
* @see app/Http/Controllers/AttendanceController.php:396
* @route '/attendance/reports'
*/
reportsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: reports.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

reports.form = reportsForm

/**
* @see \App\Http\Controllers\AttendanceController::create
* @see app/Http/Controllers/AttendanceController.php:636
* @route '/attendance/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/attendance/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AttendanceController::create
* @see app/Http/Controllers/AttendanceController.php:636
* @route '/attendance/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AttendanceController::create
* @see app/Http/Controllers/AttendanceController.php:636
* @route '/attendance/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::create
* @see app/Http/Controllers/AttendanceController.php:636
* @route '/attendance/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AttendanceController::create
* @see app/Http/Controllers/AttendanceController.php:636
* @route '/attendance/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::create
* @see app/Http/Controllers/AttendanceController.php:636
* @route '/attendance/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::create
* @see app/Http/Controllers/AttendanceController.php:636
* @route '/attendance/create'
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
* @see \App\Http\Controllers\AttendanceController::store
* @see app/Http/Controllers/AttendanceController.php:650
* @route '/attendance'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/attendance',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AttendanceController::store
* @see app/Http/Controllers/AttendanceController.php:650
* @route '/attendance'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AttendanceController::store
* @see app/Http/Controllers/AttendanceController.php:650
* @route '/attendance'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AttendanceController::store
* @see app/Http/Controllers/AttendanceController.php:650
* @route '/attendance'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AttendanceController::store
* @see app/Http/Controllers/AttendanceController.php:650
* @route '/attendance'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\AttendanceController::show
* @see app/Http/Controllers/AttendanceController.php:724
* @route '/attendance/{kehadiran}'
*/
export const show = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/attendance/{kehadiran}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AttendanceController::show
* @see app/Http/Controllers/AttendanceController.php:724
* @route '/attendance/{kehadiran}'
*/
show.url = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kehadiran: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { kehadiran: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            kehadiran: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        kehadiran: typeof args.kehadiran === 'object'
        ? args.kehadiran.id
        : args.kehadiran,
    }

    return show.definition.url
            .replace('{kehadiran}', parsedArgs.kehadiran.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AttendanceController::show
* @see app/Http/Controllers/AttendanceController.php:724
* @route '/attendance/{kehadiran}'
*/
show.get = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::show
* @see app/Http/Controllers/AttendanceController.php:724
* @route '/attendance/{kehadiran}'
*/
show.head = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AttendanceController::show
* @see app/Http/Controllers/AttendanceController.php:724
* @route '/attendance/{kehadiran}'
*/
const showForm = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::show
* @see app/Http/Controllers/AttendanceController.php:724
* @route '/attendance/{kehadiran}'
*/
showForm.get = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::show
* @see app/Http/Controllers/AttendanceController.php:724
* @route '/attendance/{kehadiran}'
*/
showForm.head = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\AttendanceController::edit
* @see app/Http/Controllers/AttendanceController.php:740
* @route '/attendance/{kehadiran}/edit'
*/
export const edit = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/attendance/{kehadiran}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AttendanceController::edit
* @see app/Http/Controllers/AttendanceController.php:740
* @route '/attendance/{kehadiran}/edit'
*/
edit.url = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kehadiran: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { kehadiran: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            kehadiran: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        kehadiran: typeof args.kehadiran === 'object'
        ? args.kehadiran.id
        : args.kehadiran,
    }

    return edit.definition.url
            .replace('{kehadiran}', parsedArgs.kehadiran.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AttendanceController::edit
* @see app/Http/Controllers/AttendanceController.php:740
* @route '/attendance/{kehadiran}/edit'
*/
edit.get = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::edit
* @see app/Http/Controllers/AttendanceController.php:740
* @route '/attendance/{kehadiran}/edit'
*/
edit.head = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AttendanceController::edit
* @see app/Http/Controllers/AttendanceController.php:740
* @route '/attendance/{kehadiran}/edit'
*/
const editForm = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::edit
* @see app/Http/Controllers/AttendanceController.php:740
* @route '/attendance/{kehadiran}/edit'
*/
editForm.get = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::edit
* @see app/Http/Controllers/AttendanceController.php:740
* @route '/attendance/{kehadiran}/edit'
*/
editForm.head = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\AttendanceController::update
* @see app/Http/Controllers/AttendanceController.php:756
* @route '/attendance/{kehadiran}'
*/
export const update = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/attendance/{kehadiran}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\AttendanceController::update
* @see app/Http/Controllers/AttendanceController.php:756
* @route '/attendance/{kehadiran}'
*/
update.url = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kehadiran: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { kehadiran: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            kehadiran: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        kehadiran: typeof args.kehadiran === 'object'
        ? args.kehadiran.id
        : args.kehadiran,
    }

    return update.definition.url
            .replace('{kehadiran}', parsedArgs.kehadiran.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AttendanceController::update
* @see app/Http/Controllers/AttendanceController.php:756
* @route '/attendance/{kehadiran}'
*/
update.put = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\AttendanceController::update
* @see app/Http/Controllers/AttendanceController.php:756
* @route '/attendance/{kehadiran}'
*/
const updateForm = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AttendanceController::update
* @see app/Http/Controllers/AttendanceController.php:756
* @route '/attendance/{kehadiran}'
*/
updateForm.put = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\AttendanceController::destroy
* @see app/Http/Controllers/AttendanceController.php:803
* @route '/attendance/{kehadiran}'
*/
export const destroy = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/attendance/{kehadiran}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AttendanceController::destroy
* @see app/Http/Controllers/AttendanceController.php:803
* @route '/attendance/{kehadiran}'
*/
destroy.url = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kehadiran: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { kehadiran: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            kehadiran: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        kehadiran: typeof args.kehadiran === 'object'
        ? args.kehadiran.id
        : args.kehadiran,
    }

    return destroy.definition.url
            .replace('{kehadiran}', parsedArgs.kehadiran.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AttendanceController::destroy
* @see app/Http/Controllers/AttendanceController.php:803
* @route '/attendance/{kehadiran}'
*/
destroy.delete = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\AttendanceController::destroy
* @see app/Http/Controllers/AttendanceController.php:803
* @route '/attendance/{kehadiran}'
*/
const destroyForm = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AttendanceController::destroy
* @see app/Http/Controllers/AttendanceController.php:803
* @route '/attendance/{kehadiran}'
*/
destroyForm.delete = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const attendance = {
    index: Object.assign(index, index),
    reports: Object.assign(reports, reports3613d0),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    class: Object.assign(classMethod, classMethod),
}

export default attendance