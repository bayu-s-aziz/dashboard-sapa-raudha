import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\LeaveRequestController::index
* @see app/Http/Controllers/LeaveRequestController.php:21
* @route '/api/leave-requests'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/leave-requests',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LeaveRequestController::index
* @see app/Http/Controllers/LeaveRequestController.php:21
* @route '/api/leave-requests'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LeaveRequestController::index
* @see app/Http/Controllers/LeaveRequestController.php:21
* @route '/api/leave-requests'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::index
* @see app/Http/Controllers/LeaveRequestController.php:21
* @route '/api/leave-requests'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::index
* @see app/Http/Controllers/LeaveRequestController.php:21
* @route '/api/leave-requests'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::index
* @see app/Http/Controllers/LeaveRequestController.php:21
* @route '/api/leave-requests'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::index
* @see app/Http/Controllers/LeaveRequestController.php:21
* @route '/api/leave-requests'
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
* @see \App\Http\Controllers\LeaveRequestController::store
* @see app/Http/Controllers/LeaveRequestController.php:243
* @route '/api/leave-requests'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/leave-requests',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\LeaveRequestController::store
* @see app/Http/Controllers/LeaveRequestController.php:243
* @route '/api/leave-requests'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LeaveRequestController::store
* @see app/Http/Controllers/LeaveRequestController.php:243
* @route '/api/leave-requests'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::store
* @see app/Http/Controllers/LeaveRequestController.php:243
* @route '/api/leave-requests'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::store
* @see app/Http/Controllers/LeaveRequestController.php:243
* @route '/api/leave-requests'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\LeaveRequestController::getStatistics
* @see app/Http/Controllers/LeaveRequestController.php:525
* @route '/api/leave-requests/statistics'
*/
export const getStatistics = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getStatistics.url(options),
    method: 'get',
})

getStatistics.definition = {
    methods: ["get","head"],
    url: '/api/leave-requests/statistics',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LeaveRequestController::getStatistics
* @see app/Http/Controllers/LeaveRequestController.php:525
* @route '/api/leave-requests/statistics'
*/
getStatistics.url = (options?: RouteQueryOptions) => {
    return getStatistics.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LeaveRequestController::getStatistics
* @see app/Http/Controllers/LeaveRequestController.php:525
* @route '/api/leave-requests/statistics'
*/
getStatistics.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getStatistics.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::getStatistics
* @see app/Http/Controllers/LeaveRequestController.php:525
* @route '/api/leave-requests/statistics'
*/
getStatistics.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getStatistics.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::getStatistics
* @see app/Http/Controllers/LeaveRequestController.php:525
* @route '/api/leave-requests/statistics'
*/
const getStatisticsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getStatistics.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::getStatistics
* @see app/Http/Controllers/LeaveRequestController.php:525
* @route '/api/leave-requests/statistics'
*/
getStatisticsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getStatistics.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::getStatistics
* @see app/Http/Controllers/LeaveRequestController.php:525
* @route '/api/leave-requests/statistics'
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
* @see \App\Http\Controllers\LeaveRequestController::getPending
* @see app/Http/Controllers/LeaveRequestController.php:501
* @route '/api/leave-requests/pending'
*/
export const getPending = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getPending.url(options),
    method: 'get',
})

getPending.definition = {
    methods: ["get","head"],
    url: '/api/leave-requests/pending',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LeaveRequestController::getPending
* @see app/Http/Controllers/LeaveRequestController.php:501
* @route '/api/leave-requests/pending'
*/
getPending.url = (options?: RouteQueryOptions) => {
    return getPending.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LeaveRequestController::getPending
* @see app/Http/Controllers/LeaveRequestController.php:501
* @route '/api/leave-requests/pending'
*/
getPending.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getPending.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::getPending
* @see app/Http/Controllers/LeaveRequestController.php:501
* @route '/api/leave-requests/pending'
*/
getPending.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getPending.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::getPending
* @see app/Http/Controllers/LeaveRequestController.php:501
* @route '/api/leave-requests/pending'
*/
const getPendingForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getPending.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::getPending
* @see app/Http/Controllers/LeaveRequestController.php:501
* @route '/api/leave-requests/pending'
*/
getPendingForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getPending.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::getPending
* @see app/Http/Controllers/LeaveRequestController.php:501
* @route '/api/leave-requests/pending'
*/
getPendingForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getPending.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getPending.form = getPendingForm

/**
* @see \App\Http\Controllers\LeaveRequestController::getByStudent
* @see app/Http/Controllers/LeaveRequestController.php:462
* @route '/api/leave-requests/student/{studentId}'
*/
export const getByStudent = (args: { studentId: string | number } | [studentId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getByStudent.url(args, options),
    method: 'get',
})

getByStudent.definition = {
    methods: ["get","head"],
    url: '/api/leave-requests/student/{studentId}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LeaveRequestController::getByStudent
* @see app/Http/Controllers/LeaveRequestController.php:462
* @route '/api/leave-requests/student/{studentId}'
*/
getByStudent.url = (args: { studentId: string | number } | [studentId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { studentId: args }
    }

    if (Array.isArray(args)) {
        args = {
            studentId: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        studentId: args.studentId,
    }

    return getByStudent.definition.url
            .replace('{studentId}', parsedArgs.studentId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LeaveRequestController::getByStudent
* @see app/Http/Controllers/LeaveRequestController.php:462
* @route '/api/leave-requests/student/{studentId}'
*/
getByStudent.get = (args: { studentId: string | number } | [studentId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getByStudent.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::getByStudent
* @see app/Http/Controllers/LeaveRequestController.php:462
* @route '/api/leave-requests/student/{studentId}'
*/
getByStudent.head = (args: { studentId: string | number } | [studentId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getByStudent.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::getByStudent
* @see app/Http/Controllers/LeaveRequestController.php:462
* @route '/api/leave-requests/student/{studentId}'
*/
const getByStudentForm = (args: { studentId: string | number } | [studentId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getByStudent.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::getByStudent
* @see app/Http/Controllers/LeaveRequestController.php:462
* @route '/api/leave-requests/student/{studentId}'
*/
getByStudentForm.get = (args: { studentId: string | number } | [studentId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getByStudent.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::getByStudent
* @see app/Http/Controllers/LeaveRequestController.php:462
* @route '/api/leave-requests/student/{studentId}'
*/
getByStudentForm.head = (args: { studentId: string | number } | [studentId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getByStudent.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getByStudent.form = getByStudentForm

/**
* @see \App\Http\Controllers\LeaveRequestController::bulkApprove
* @see app/Http/Controllers/LeaveRequestController.php:557
* @route '/api/leave-requests/bulk-approve'
*/
export const bulkApprove = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkApprove.url(options),
    method: 'post',
})

bulkApprove.definition = {
    methods: ["post"],
    url: '/api/leave-requests/bulk-approve',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\LeaveRequestController::bulkApprove
* @see app/Http/Controllers/LeaveRequestController.php:557
* @route '/api/leave-requests/bulk-approve'
*/
bulkApprove.url = (options?: RouteQueryOptions) => {
    return bulkApprove.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LeaveRequestController::bulkApprove
* @see app/Http/Controllers/LeaveRequestController.php:557
* @route '/api/leave-requests/bulk-approve'
*/
bulkApprove.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkApprove.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::bulkApprove
* @see app/Http/Controllers/LeaveRequestController.php:557
* @route '/api/leave-requests/bulk-approve'
*/
const bulkApproveForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkApprove.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::bulkApprove
* @see app/Http/Controllers/LeaveRequestController.php:557
* @route '/api/leave-requests/bulk-approve'
*/
bulkApproveForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkApprove.url(options),
    method: 'post',
})

bulkApprove.form = bulkApproveForm

/**
* @see \App\Http\Controllers\LeaveRequestController::bulkReject
* @see app/Http/Controllers/LeaveRequestController.php:601
* @route '/api/leave-requests/bulk-reject'
*/
export const bulkReject = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkReject.url(options),
    method: 'post',
})

bulkReject.definition = {
    methods: ["post"],
    url: '/api/leave-requests/bulk-reject',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\LeaveRequestController::bulkReject
* @see app/Http/Controllers/LeaveRequestController.php:601
* @route '/api/leave-requests/bulk-reject'
*/
bulkReject.url = (options?: RouteQueryOptions) => {
    return bulkReject.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LeaveRequestController::bulkReject
* @see app/Http/Controllers/LeaveRequestController.php:601
* @route '/api/leave-requests/bulk-reject'
*/
bulkReject.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkReject.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::bulkReject
* @see app/Http/Controllers/LeaveRequestController.php:601
* @route '/api/leave-requests/bulk-reject'
*/
const bulkRejectForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkReject.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::bulkReject
* @see app/Http/Controllers/LeaveRequestController.php:601
* @route '/api/leave-requests/bulk-reject'
*/
bulkRejectForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkReject.url(options),
    method: 'post',
})

bulkReject.form = bulkRejectForm

/**
* @see \App\Http\Controllers\LeaveRequestController::show
* @see app/Http/Controllers/LeaveRequestController.php:289
* @route '/api/leave-requests/{id}'
*/
export const show = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/leave-requests/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LeaveRequestController::show
* @see app/Http/Controllers/LeaveRequestController.php:289
* @route '/api/leave-requests/{id}'
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
* @see \App\Http\Controllers\LeaveRequestController::show
* @see app/Http/Controllers/LeaveRequestController.php:289
* @route '/api/leave-requests/{id}'
*/
show.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::show
* @see app/Http/Controllers/LeaveRequestController.php:289
* @route '/api/leave-requests/{id}'
*/
show.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::show
* @see app/Http/Controllers/LeaveRequestController.php:289
* @route '/api/leave-requests/{id}'
*/
const showForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::show
* @see app/Http/Controllers/LeaveRequestController.php:289
* @route '/api/leave-requests/{id}'
*/
showForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::show
* @see app/Http/Controllers/LeaveRequestController.php:289
* @route '/api/leave-requests/{id}'
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
* @see \App\Http\Controllers\LeaveRequestController::update
* @see app/Http/Controllers/LeaveRequestController.php:305
* @route '/api/leave-requests/{id}'
*/
export const update = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/api/leave-requests/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\LeaveRequestController::update
* @see app/Http/Controllers/LeaveRequestController.php:305
* @route '/api/leave-requests/{id}'
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
* @see \App\Http\Controllers\LeaveRequestController::update
* @see app/Http/Controllers/LeaveRequestController.php:305
* @route '/api/leave-requests/{id}'
*/
update.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::update
* @see app/Http/Controllers/LeaveRequestController.php:305
* @route '/api/leave-requests/{id}'
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
* @see \App\Http\Controllers\LeaveRequestController::update
* @see app/Http/Controllers/LeaveRequestController.php:305
* @route '/api/leave-requests/{id}'
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
* @see \App\Http\Controllers\LeaveRequestController::destroy
* @see app/Http/Controllers/LeaveRequestController.php:347
* @route '/api/leave-requests/{id}'
*/
export const destroy = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/leave-requests/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\LeaveRequestController::destroy
* @see app/Http/Controllers/LeaveRequestController.php:347
* @route '/api/leave-requests/{id}'
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
* @see \App\Http\Controllers\LeaveRequestController::destroy
* @see app/Http/Controllers/LeaveRequestController.php:347
* @route '/api/leave-requests/{id}'
*/
destroy.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::destroy
* @see app/Http/Controllers/LeaveRequestController.php:347
* @route '/api/leave-requests/{id}'
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
* @see \App\Http\Controllers\LeaveRequestController::destroy
* @see app/Http/Controllers/LeaveRequestController.php:347
* @route '/api/leave-requests/{id}'
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
* @see \App\Http\Controllers\LeaveRequestController::approve
* @see app/Http/Controllers/LeaveRequestController.php:374
* @route '/api/leave-requests/{id}/approve'
*/
export const approve = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve.url(args, options),
    method: 'post',
})

approve.definition = {
    methods: ["post"],
    url: '/api/leave-requests/{id}/approve',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\LeaveRequestController::approve
* @see app/Http/Controllers/LeaveRequestController.php:374
* @route '/api/leave-requests/{id}/approve'
*/
approve.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return approve.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LeaveRequestController::approve
* @see app/Http/Controllers/LeaveRequestController.php:374
* @route '/api/leave-requests/{id}/approve'
*/
approve.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::approve
* @see app/Http/Controllers/LeaveRequestController.php:374
* @route '/api/leave-requests/{id}/approve'
*/
const approveForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: approve.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::approve
* @see app/Http/Controllers/LeaveRequestController.php:374
* @route '/api/leave-requests/{id}/approve'
*/
approveForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: approve.url(args, options),
    method: 'post',
})

approve.form = approveForm

/**
* @see \App\Http\Controllers\LeaveRequestController::reject
* @see app/Http/Controllers/LeaveRequestController.php:418
* @route '/api/leave-requests/{id}/reject'
*/
export const reject = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reject.url(args, options),
    method: 'post',
})

reject.definition = {
    methods: ["post"],
    url: '/api/leave-requests/{id}/reject',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\LeaveRequestController::reject
* @see app/Http/Controllers/LeaveRequestController.php:418
* @route '/api/leave-requests/{id}/reject'
*/
reject.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return reject.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LeaveRequestController::reject
* @see app/Http/Controllers/LeaveRequestController.php:418
* @route '/api/leave-requests/{id}/reject'
*/
reject.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reject.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::reject
* @see app/Http/Controllers/LeaveRequestController.php:418
* @route '/api/leave-requests/{id}/reject'
*/
const rejectForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reject.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::reject
* @see app/Http/Controllers/LeaveRequestController.php:418
* @route '/api/leave-requests/{id}/reject'
*/
rejectForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reject.url(args, options),
    method: 'post',
})

reject.form = rejectForm

/**
* @see \App\Http\Controllers\LeaveRequestController::uploadAttachment
* @see app/Http/Controllers/LeaveRequestController.php:645
* @route '/api/leave-requests/{leaveRequestId}/upload-attachment'
*/
export const uploadAttachment = (args: { leaveRequestId: string | number } | [leaveRequestId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadAttachment.url(args, options),
    method: 'post',
})

uploadAttachment.definition = {
    methods: ["post"],
    url: '/api/leave-requests/{leaveRequestId}/upload-attachment',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\LeaveRequestController::uploadAttachment
* @see app/Http/Controllers/LeaveRequestController.php:645
* @route '/api/leave-requests/{leaveRequestId}/upload-attachment'
*/
uploadAttachment.url = (args: { leaveRequestId: string | number } | [leaveRequestId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { leaveRequestId: args }
    }

    if (Array.isArray(args)) {
        args = {
            leaveRequestId: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        leaveRequestId: args.leaveRequestId,
    }

    return uploadAttachment.definition.url
            .replace('{leaveRequestId}', parsedArgs.leaveRequestId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LeaveRequestController::uploadAttachment
* @see app/Http/Controllers/LeaveRequestController.php:645
* @route '/api/leave-requests/{leaveRequestId}/upload-attachment'
*/
uploadAttachment.post = (args: { leaveRequestId: string | number } | [leaveRequestId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadAttachment.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::uploadAttachment
* @see app/Http/Controllers/LeaveRequestController.php:645
* @route '/api/leave-requests/{leaveRequestId}/upload-attachment'
*/
const uploadAttachmentForm = (args: { leaveRequestId: string | number } | [leaveRequestId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: uploadAttachment.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::uploadAttachment
* @see app/Http/Controllers/LeaveRequestController.php:645
* @route '/api/leave-requests/{leaveRequestId}/upload-attachment'
*/
uploadAttachmentForm.post = (args: { leaveRequestId: string | number } | [leaveRequestId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: uploadAttachment.url(args, options),
    method: 'post',
})

uploadAttachment.form = uploadAttachmentForm

/**
* @see \App\Http\Controllers\LeaveRequestController::indexInertia
* @see app/Http/Controllers/LeaveRequestController.php:66
* @route '/leave-requests'
*/
export const indexInertia = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexInertia.url(options),
    method: 'get',
})

indexInertia.definition = {
    methods: ["get","head"],
    url: '/leave-requests',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LeaveRequestController::indexInertia
* @see app/Http/Controllers/LeaveRequestController.php:66
* @route '/leave-requests'
*/
indexInertia.url = (options?: RouteQueryOptions) => {
    return indexInertia.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LeaveRequestController::indexInertia
* @see app/Http/Controllers/LeaveRequestController.php:66
* @route '/leave-requests'
*/
indexInertia.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexInertia.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::indexInertia
* @see app/Http/Controllers/LeaveRequestController.php:66
* @route '/leave-requests'
*/
indexInertia.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexInertia.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::indexInertia
* @see app/Http/Controllers/LeaveRequestController.php:66
* @route '/leave-requests'
*/
const indexInertiaForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexInertia.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::indexInertia
* @see app/Http/Controllers/LeaveRequestController.php:66
* @route '/leave-requests'
*/
indexInertiaForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexInertia.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::indexInertia
* @see app/Http/Controllers/LeaveRequestController.php:66
* @route '/leave-requests'
*/
indexInertiaForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexInertia.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexInertia.form = indexInertiaForm

/**
* @see \App\Http\Controllers\LeaveRequestController::showInertia
* @see app/Http/Controllers/LeaveRequestController.php:128
* @route '/leave-requests/{id}'
*/
export const showInertia = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showInertia.url(args, options),
    method: 'get',
})

showInertia.definition = {
    methods: ["get","head"],
    url: '/leave-requests/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LeaveRequestController::showInertia
* @see app/Http/Controllers/LeaveRequestController.php:128
* @route '/leave-requests/{id}'
*/
showInertia.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return showInertia.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LeaveRequestController::showInertia
* @see app/Http/Controllers/LeaveRequestController.php:128
* @route '/leave-requests/{id}'
*/
showInertia.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showInertia.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::showInertia
* @see app/Http/Controllers/LeaveRequestController.php:128
* @route '/leave-requests/{id}'
*/
showInertia.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showInertia.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::showInertia
* @see app/Http/Controllers/LeaveRequestController.php:128
* @route '/leave-requests/{id}'
*/
const showInertiaForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showInertia.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::showInertia
* @see app/Http/Controllers/LeaveRequestController.php:128
* @route '/leave-requests/{id}'
*/
showInertiaForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showInertia.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::showInertia
* @see app/Http/Controllers/LeaveRequestController.php:128
* @route '/leave-requests/{id}'
*/
showInertiaForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\LeaveRequestController::approveInertia
* @see app/Http/Controllers/LeaveRequestController.php:144
* @route '/leave-requests/{id}/approve'
*/
export const approveInertia = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approveInertia.url(args, options),
    method: 'post',
})

approveInertia.definition = {
    methods: ["post"],
    url: '/leave-requests/{id}/approve',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\LeaveRequestController::approveInertia
* @see app/Http/Controllers/LeaveRequestController.php:144
* @route '/leave-requests/{id}/approve'
*/
approveInertia.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return approveInertia.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LeaveRequestController::approveInertia
* @see app/Http/Controllers/LeaveRequestController.php:144
* @route '/leave-requests/{id}/approve'
*/
approveInertia.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approveInertia.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::approveInertia
* @see app/Http/Controllers/LeaveRequestController.php:144
* @route '/leave-requests/{id}/approve'
*/
const approveInertiaForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: approveInertia.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::approveInertia
* @see app/Http/Controllers/LeaveRequestController.php:144
* @route '/leave-requests/{id}/approve'
*/
approveInertiaForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: approveInertia.url(args, options),
    method: 'post',
})

approveInertia.form = approveInertiaForm

/**
* @see \App\Http\Controllers\LeaveRequestController::rejectInertia
* @see app/Http/Controllers/LeaveRequestController.php:184
* @route '/leave-requests/{id}/reject'
*/
export const rejectInertia = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: rejectInertia.url(args, options),
    method: 'post',
})

rejectInertia.definition = {
    methods: ["post"],
    url: '/leave-requests/{id}/reject',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\LeaveRequestController::rejectInertia
* @see app/Http/Controllers/LeaveRequestController.php:184
* @route '/leave-requests/{id}/reject'
*/
rejectInertia.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return rejectInertia.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LeaveRequestController::rejectInertia
* @see app/Http/Controllers/LeaveRequestController.php:184
* @route '/leave-requests/{id}/reject'
*/
rejectInertia.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: rejectInertia.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::rejectInertia
* @see app/Http/Controllers/LeaveRequestController.php:184
* @route '/leave-requests/{id}/reject'
*/
const rejectInertiaForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: rejectInertia.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::rejectInertia
* @see app/Http/Controllers/LeaveRequestController.php:184
* @route '/leave-requests/{id}/reject'
*/
rejectInertiaForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: rejectInertia.url(args, options),
    method: 'post',
})

rejectInertia.form = rejectInertiaForm

/**
* @see \App\Http\Controllers\LeaveRequestController::destroyInertia
* @see app/Http/Controllers/LeaveRequestController.php:224
* @route '/leave-requests/{id}'
*/
export const destroyInertia = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyInertia.url(args, options),
    method: 'delete',
})

destroyInertia.definition = {
    methods: ["delete"],
    url: '/leave-requests/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\LeaveRequestController::destroyInertia
* @see app/Http/Controllers/LeaveRequestController.php:224
* @route '/leave-requests/{id}'
*/
destroyInertia.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroyInertia.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LeaveRequestController::destroyInertia
* @see app/Http/Controllers/LeaveRequestController.php:224
* @route '/leave-requests/{id}'
*/
destroyInertia.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyInertia.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::destroyInertia
* @see app/Http/Controllers/LeaveRequestController.php:224
* @route '/leave-requests/{id}'
*/
const destroyInertiaForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyInertia.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::destroyInertia
* @see app/Http/Controllers/LeaveRequestController.php:224
* @route '/leave-requests/{id}'
*/
destroyInertiaForm.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyInertia.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroyInertia.form = destroyInertiaForm

const LeaveRequestController = { index, store, getStatistics, getPending, getByStudent, bulkApprove, bulkReject, show, update, destroy, approve, reject, uploadAttachment, indexInertia, showInertia, approveInertia, rejectInertia, destroyInertia }

export default LeaveRequestController