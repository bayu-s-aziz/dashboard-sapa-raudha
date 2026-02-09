import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AttendanceController::index
* @see app/Http/Controllers/AttendanceController.php:19
* @route '/api/attendance'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/attendance',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AttendanceController::index
* @see app/Http/Controllers/AttendanceController.php:19
* @route '/api/attendance'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AttendanceController::index
* @see app/Http/Controllers/AttendanceController.php:19
* @route '/api/attendance'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::index
* @see app/Http/Controllers/AttendanceController.php:19
* @route '/api/attendance'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AttendanceController::index
* @see app/Http/Controllers/AttendanceController.php:19
* @route '/api/attendance'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::index
* @see app/Http/Controllers/AttendanceController.php:19
* @route '/api/attendance'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::index
* @see app/Http/Controllers/AttendanceController.php:19
* @route '/api/attendance'
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
* @see \App\Http\Controllers\AttendanceController::store
* @see app/Http/Controllers/AttendanceController.php:52
* @route '/api/attendance'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/attendance',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AttendanceController::store
* @see app/Http/Controllers/AttendanceController.php:52
* @route '/api/attendance'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AttendanceController::store
* @see app/Http/Controllers/AttendanceController.php:52
* @route '/api/attendance'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AttendanceController::store
* @see app/Http/Controllers/AttendanceController.php:52
* @route '/api/attendance'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AttendanceController::store
* @see app/Http/Controllers/AttendanceController.php:52
* @route '/api/attendance'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\AttendanceController::getStatistics
* @see app/Http/Controllers/AttendanceController.php:342
* @route '/api/attendance/statistics'
*/
export const getStatistics = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getStatistics.url(options),
    method: 'get',
})

getStatistics.definition = {
    methods: ["get","head"],
    url: '/api/attendance/statistics',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AttendanceController::getStatistics
* @see app/Http/Controllers/AttendanceController.php:342
* @route '/api/attendance/statistics'
*/
getStatistics.url = (options?: RouteQueryOptions) => {
    return getStatistics.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AttendanceController::getStatistics
* @see app/Http/Controllers/AttendanceController.php:342
* @route '/api/attendance/statistics'
*/
getStatistics.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getStatistics.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::getStatistics
* @see app/Http/Controllers/AttendanceController.php:342
* @route '/api/attendance/statistics'
*/
getStatistics.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getStatistics.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AttendanceController::getStatistics
* @see app/Http/Controllers/AttendanceController.php:342
* @route '/api/attendance/statistics'
*/
const getStatisticsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getStatistics.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::getStatistics
* @see app/Http/Controllers/AttendanceController.php:342
* @route '/api/attendance/statistics'
*/
getStatisticsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getStatistics.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::getStatistics
* @see app/Http/Controllers/AttendanceController.php:342
* @route '/api/attendance/statistics'
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
* @see \App\Http\Controllers\AttendanceController::bulkUpdate
* @see app/Http/Controllers/AttendanceController.php:250
* @route '/api/attendance/bulk-update'
*/
export const bulkUpdate = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkUpdate.url(options),
    method: 'post',
})

bulkUpdate.definition = {
    methods: ["post"],
    url: '/api/attendance/bulk-update',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AttendanceController::bulkUpdate
* @see app/Http/Controllers/AttendanceController.php:250
* @route '/api/attendance/bulk-update'
*/
bulkUpdate.url = (options?: RouteQueryOptions) => {
    return bulkUpdate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AttendanceController::bulkUpdate
* @see app/Http/Controllers/AttendanceController.php:250
* @route '/api/attendance/bulk-update'
*/
bulkUpdate.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkUpdate.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AttendanceController::bulkUpdate
* @see app/Http/Controllers/AttendanceController.php:250
* @route '/api/attendance/bulk-update'
*/
const bulkUpdateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkUpdate.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AttendanceController::bulkUpdate
* @see app/Http/Controllers/AttendanceController.php:250
* @route '/api/attendance/bulk-update'
*/
bulkUpdateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkUpdate.url(options),
    method: 'post',
})

bulkUpdate.form = bulkUpdateForm

/**
* @see \App\Http\Controllers\AttendanceController::getClassSummary
* @see app/Http/Controllers/AttendanceController.php:308
* @route '/api/attendance/class-summary'
*/
export const getClassSummary = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getClassSummary.url(options),
    method: 'get',
})

getClassSummary.definition = {
    methods: ["get","head"],
    url: '/api/attendance/class-summary',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AttendanceController::getClassSummary
* @see app/Http/Controllers/AttendanceController.php:308
* @route '/api/attendance/class-summary'
*/
getClassSummary.url = (options?: RouteQueryOptions) => {
    return getClassSummary.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AttendanceController::getClassSummary
* @see app/Http/Controllers/AttendanceController.php:308
* @route '/api/attendance/class-summary'
*/
getClassSummary.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getClassSummary.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::getClassSummary
* @see app/Http/Controllers/AttendanceController.php:308
* @route '/api/attendance/class-summary'
*/
getClassSummary.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getClassSummary.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AttendanceController::getClassSummary
* @see app/Http/Controllers/AttendanceController.php:308
* @route '/api/attendance/class-summary'
*/
const getClassSummaryForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getClassSummary.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::getClassSummary
* @see app/Http/Controllers/AttendanceController.php:308
* @route '/api/attendance/class-summary'
*/
getClassSummaryForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getClassSummary.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::getClassSummary
* @see app/Http/Controllers/AttendanceController.php:308
* @route '/api/attendance/class-summary'
*/
getClassSummaryForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getClassSummary.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getClassSummary.form = getClassSummaryForm

/**
* @see \App\Http\Controllers\AttendanceController::getStudentReport
* @see app/Http/Controllers/AttendanceController.php:188
* @route '/api/attendance/student/{studentId}/report'
*/
export const getStudentReport = (args: { studentId: string | number } | [studentId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getStudentReport.url(args, options),
    method: 'get',
})

getStudentReport.definition = {
    methods: ["get","head"],
    url: '/api/attendance/student/{studentId}/report',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AttendanceController::getStudentReport
* @see app/Http/Controllers/AttendanceController.php:188
* @route '/api/attendance/student/{studentId}/report'
*/
getStudentReport.url = (args: { studentId: string | number } | [studentId: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return getStudentReport.definition.url
            .replace('{studentId}', parsedArgs.studentId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AttendanceController::getStudentReport
* @see app/Http/Controllers/AttendanceController.php:188
* @route '/api/attendance/student/{studentId}/report'
*/
getStudentReport.get = (args: { studentId: string | number } | [studentId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getStudentReport.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::getStudentReport
* @see app/Http/Controllers/AttendanceController.php:188
* @route '/api/attendance/student/{studentId}/report'
*/
getStudentReport.head = (args: { studentId: string | number } | [studentId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getStudentReport.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AttendanceController::getStudentReport
* @see app/Http/Controllers/AttendanceController.php:188
* @route '/api/attendance/student/{studentId}/report'
*/
const getStudentReportForm = (args: { studentId: string | number } | [studentId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getStudentReport.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::getStudentReport
* @see app/Http/Controllers/AttendanceController.php:188
* @route '/api/attendance/student/{studentId}/report'
*/
getStudentReportForm.get = (args: { studentId: string | number } | [studentId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getStudentReport.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::getStudentReport
* @see app/Http/Controllers/AttendanceController.php:188
* @route '/api/attendance/student/{studentId}/report'
*/
getStudentReportForm.head = (args: { studentId: string | number } | [studentId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getStudentReport.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getStudentReport.form = getStudentReportForm

/**
* @see \App\Http\Controllers\AttendanceController::getAvailableStudents
* @see app/Http/Controllers/AttendanceController.php:874
* @route '/api/attendance/available-students'
*/
export const getAvailableStudents = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getAvailableStudents.url(options),
    method: 'get',
})

getAvailableStudents.definition = {
    methods: ["get","head"],
    url: '/api/attendance/available-students',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AttendanceController::getAvailableStudents
* @see app/Http/Controllers/AttendanceController.php:874
* @route '/api/attendance/available-students'
*/
getAvailableStudents.url = (options?: RouteQueryOptions) => {
    return getAvailableStudents.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AttendanceController::getAvailableStudents
* @see app/Http/Controllers/AttendanceController.php:874
* @route '/api/attendance/available-students'
*/
getAvailableStudents.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getAvailableStudents.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::getAvailableStudents
* @see app/Http/Controllers/AttendanceController.php:874
* @route '/api/attendance/available-students'
*/
getAvailableStudents.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getAvailableStudents.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AttendanceController::getAvailableStudents
* @see app/Http/Controllers/AttendanceController.php:874
* @route '/api/attendance/available-students'
*/
const getAvailableStudentsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getAvailableStudents.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::getAvailableStudents
* @see app/Http/Controllers/AttendanceController.php:874
* @route '/api/attendance/available-students'
*/
getAvailableStudentsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getAvailableStudents.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::getAvailableStudents
* @see app/Http/Controllers/AttendanceController.php:874
* @route '/api/attendance/available-students'
*/
getAvailableStudentsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getAvailableStudents.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getAvailableStudents.form = getAvailableStudentsForm

/**
* @see \App\Http\Controllers\AttendanceController::show
* @see app/Http/Controllers/AttendanceController.php:101
* @route '/api/attendance/{id}'
*/
export const show = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/attendance/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AttendanceController::show
* @see app/Http/Controllers/AttendanceController.php:101
* @route '/api/attendance/{id}'
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
* @see \App\Http\Controllers\AttendanceController::show
* @see app/Http/Controllers/AttendanceController.php:101
* @route '/api/attendance/{id}'
*/
show.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::show
* @see app/Http/Controllers/AttendanceController.php:101
* @route '/api/attendance/{id}'
*/
show.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AttendanceController::show
* @see app/Http/Controllers/AttendanceController.php:101
* @route '/api/attendance/{id}'
*/
const showForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::show
* @see app/Http/Controllers/AttendanceController.php:101
* @route '/api/attendance/{id}'
*/
showForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::show
* @see app/Http/Controllers/AttendanceController.php:101
* @route '/api/attendance/{id}'
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
* @see \App\Http\Controllers\AttendanceController::update
* @see app/Http/Controllers/AttendanceController.php:117
* @route '/api/attendance/{id}'
*/
export const update = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/api/attendance/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\AttendanceController::update
* @see app/Http/Controllers/AttendanceController.php:117
* @route '/api/attendance/{id}'
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
* @see \App\Http\Controllers\AttendanceController::update
* @see app/Http/Controllers/AttendanceController.php:117
* @route '/api/attendance/{id}'
*/
update.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\AttendanceController::update
* @see app/Http/Controllers/AttendanceController.php:117
* @route '/api/attendance/{id}'
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
* @see \App\Http\Controllers\AttendanceController::update
* @see app/Http/Controllers/AttendanceController.php:117
* @route '/api/attendance/{id}'
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
* @see \App\Http\Controllers\AttendanceController::destroy
* @see app/Http/Controllers/AttendanceController.php:161
* @route '/api/attendance/{id}'
*/
export const destroy = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/attendance/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AttendanceController::destroy
* @see app/Http/Controllers/AttendanceController.php:161
* @route '/api/attendance/{id}'
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
* @see \App\Http\Controllers\AttendanceController::destroy
* @see app/Http/Controllers/AttendanceController.php:161
* @route '/api/attendance/{id}'
*/
destroy.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\AttendanceController::destroy
* @see app/Http/Controllers/AttendanceController.php:161
* @route '/api/attendance/{id}'
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
* @see \App\Http\Controllers\AttendanceController::destroy
* @see app/Http/Controllers/AttendanceController.php:161
* @route '/api/attendance/{id}'
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
* @see \App\Http\Controllers\AttendanceController::indexInertia
* @see app/Http/Controllers/AttendanceController.php:371
* @route '/attendance'
*/
export const indexInertia = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexInertia.url(options),
    method: 'get',
})

indexInertia.definition = {
    methods: ["get","head"],
    url: '/attendance',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AttendanceController::indexInertia
* @see app/Http/Controllers/AttendanceController.php:371
* @route '/attendance'
*/
indexInertia.url = (options?: RouteQueryOptions) => {
    return indexInertia.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AttendanceController::indexInertia
* @see app/Http/Controllers/AttendanceController.php:371
* @route '/attendance'
*/
indexInertia.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexInertia.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::indexInertia
* @see app/Http/Controllers/AttendanceController.php:371
* @route '/attendance'
*/
indexInertia.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexInertia.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AttendanceController::indexInertia
* @see app/Http/Controllers/AttendanceController.php:371
* @route '/attendance'
*/
const indexInertiaForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexInertia.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::indexInertia
* @see app/Http/Controllers/AttendanceController.php:371
* @route '/attendance'
*/
indexInertiaForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexInertia.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::indexInertia
* @see app/Http/Controllers/AttendanceController.php:371
* @route '/attendance'
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
* @see \App\Http\Controllers\AttendanceController::reports
* @see app/Http/Controllers/AttendanceController.php:413
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
* @see app/Http/Controllers/AttendanceController.php:413
* @route '/attendance/reports'
*/
reports.url = (options?: RouteQueryOptions) => {
    return reports.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AttendanceController::reports
* @see app/Http/Controllers/AttendanceController.php:413
* @route '/attendance/reports'
*/
reports.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: reports.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::reports
* @see app/Http/Controllers/AttendanceController.php:413
* @route '/attendance/reports'
*/
reports.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: reports.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AttendanceController::reports
* @see app/Http/Controllers/AttendanceController.php:413
* @route '/attendance/reports'
*/
const reportsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: reports.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::reports
* @see app/Http/Controllers/AttendanceController.php:413
* @route '/attendance/reports'
*/
reportsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: reports.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::reports
* @see app/Http/Controllers/AttendanceController.php:413
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
* @see \App\Http\Controllers\AttendanceController::exportReports
* @see app/Http/Controllers/AttendanceController.php:492
* @route '/attendance/reports/export'
*/
export const exportReports = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportReports.url(options),
    method: 'get',
})

exportReports.definition = {
    methods: ["get","head"],
    url: '/attendance/reports/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AttendanceController::exportReports
* @see app/Http/Controllers/AttendanceController.php:492
* @route '/attendance/reports/export'
*/
exportReports.url = (options?: RouteQueryOptions) => {
    return exportReports.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AttendanceController::exportReports
* @see app/Http/Controllers/AttendanceController.php:492
* @route '/attendance/reports/export'
*/
exportReports.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportReports.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::exportReports
* @see app/Http/Controllers/AttendanceController.php:492
* @route '/attendance/reports/export'
*/
exportReports.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportReports.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AttendanceController::exportReports
* @see app/Http/Controllers/AttendanceController.php:492
* @route '/attendance/reports/export'
*/
const exportReportsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportReports.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::exportReports
* @see app/Http/Controllers/AttendanceController.php:492
* @route '/attendance/reports/export'
*/
exportReportsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportReports.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::exportReports
* @see app/Http/Controllers/AttendanceController.php:492
* @route '/attendance/reports/export'
*/
exportReportsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportReports.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

exportReports.form = exportReportsForm

/**
* @see \App\Http\Controllers\AttendanceController::create
* @see app/Http/Controllers/AttendanceController.php:653
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
* @see app/Http/Controllers/AttendanceController.php:653
* @route '/attendance/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AttendanceController::create
* @see app/Http/Controllers/AttendanceController.php:653
* @route '/attendance/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::create
* @see app/Http/Controllers/AttendanceController.php:653
* @route '/attendance/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AttendanceController::create
* @see app/Http/Controllers/AttendanceController.php:653
* @route '/attendance/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::create
* @see app/Http/Controllers/AttendanceController.php:653
* @route '/attendance/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::create
* @see app/Http/Controllers/AttendanceController.php:653
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
* @see \App\Http\Controllers\AttendanceController::storeInertia
* @see app/Http/Controllers/AttendanceController.php:667
* @route '/attendance'
*/
export const storeInertia = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeInertia.url(options),
    method: 'post',
})

storeInertia.definition = {
    methods: ["post"],
    url: '/attendance',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AttendanceController::storeInertia
* @see app/Http/Controllers/AttendanceController.php:667
* @route '/attendance'
*/
storeInertia.url = (options?: RouteQueryOptions) => {
    return storeInertia.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AttendanceController::storeInertia
* @see app/Http/Controllers/AttendanceController.php:667
* @route '/attendance'
*/
storeInertia.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeInertia.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AttendanceController::storeInertia
* @see app/Http/Controllers/AttendanceController.php:667
* @route '/attendance'
*/
const storeInertiaForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeInertia.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AttendanceController::storeInertia
* @see app/Http/Controllers/AttendanceController.php:667
* @route '/attendance'
*/
storeInertiaForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeInertia.url(options),
    method: 'post',
})

storeInertia.form = storeInertiaForm

/**
* @see \App\Http\Controllers\AttendanceController::showInertia
* @see app/Http/Controllers/AttendanceController.php:741
* @route '/attendance/{kehadiran}'
*/
export const showInertia = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showInertia.url(args, options),
    method: 'get',
})

showInertia.definition = {
    methods: ["get","head"],
    url: '/attendance/{kehadiran}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AttendanceController::showInertia
* @see app/Http/Controllers/AttendanceController.php:741
* @route '/attendance/{kehadiran}'
*/
showInertia.url = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return showInertia.definition.url
            .replace('{kehadiran}', parsedArgs.kehadiran.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AttendanceController::showInertia
* @see app/Http/Controllers/AttendanceController.php:741
* @route '/attendance/{kehadiran}'
*/
showInertia.get = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showInertia.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::showInertia
* @see app/Http/Controllers/AttendanceController.php:741
* @route '/attendance/{kehadiran}'
*/
showInertia.head = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showInertia.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AttendanceController::showInertia
* @see app/Http/Controllers/AttendanceController.php:741
* @route '/attendance/{kehadiran}'
*/
const showInertiaForm = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showInertia.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::showInertia
* @see app/Http/Controllers/AttendanceController.php:741
* @route '/attendance/{kehadiran}'
*/
showInertiaForm.get = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showInertia.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::showInertia
* @see app/Http/Controllers/AttendanceController.php:741
* @route '/attendance/{kehadiran}'
*/
showInertiaForm.head = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\AttendanceController::edit
* @see app/Http/Controllers/AttendanceController.php:757
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
* @see app/Http/Controllers/AttendanceController.php:757
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
* @see app/Http/Controllers/AttendanceController.php:757
* @route '/attendance/{kehadiran}/edit'
*/
edit.get = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::edit
* @see app/Http/Controllers/AttendanceController.php:757
* @route '/attendance/{kehadiran}/edit'
*/
edit.head = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AttendanceController::edit
* @see app/Http/Controllers/AttendanceController.php:757
* @route '/attendance/{kehadiran}/edit'
*/
const editForm = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::edit
* @see app/Http/Controllers/AttendanceController.php:757
* @route '/attendance/{kehadiran}/edit'
*/
editForm.get = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::edit
* @see app/Http/Controllers/AttendanceController.php:757
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
* @see \App\Http\Controllers\AttendanceController::updateInertia
* @see app/Http/Controllers/AttendanceController.php:773
* @route '/attendance/{kehadiran}'
*/
export const updateInertia = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateInertia.url(args, options),
    method: 'put',
})

updateInertia.definition = {
    methods: ["put"],
    url: '/attendance/{kehadiran}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\AttendanceController::updateInertia
* @see app/Http/Controllers/AttendanceController.php:773
* @route '/attendance/{kehadiran}'
*/
updateInertia.url = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return updateInertia.definition.url
            .replace('{kehadiran}', parsedArgs.kehadiran.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AttendanceController::updateInertia
* @see app/Http/Controllers/AttendanceController.php:773
* @route '/attendance/{kehadiran}'
*/
updateInertia.put = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateInertia.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\AttendanceController::updateInertia
* @see app/Http/Controllers/AttendanceController.php:773
* @route '/attendance/{kehadiran}'
*/
const updateInertiaForm = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateInertia.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AttendanceController::updateInertia
* @see app/Http/Controllers/AttendanceController.php:773
* @route '/attendance/{kehadiran}'
*/
updateInertiaForm.put = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\AttendanceController::destroyInertia
* @see app/Http/Controllers/AttendanceController.php:820
* @route '/attendance/{kehadiran}'
*/
export const destroyInertia = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyInertia.url(args, options),
    method: 'delete',
})

destroyInertia.definition = {
    methods: ["delete"],
    url: '/attendance/{kehadiran}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AttendanceController::destroyInertia
* @see app/Http/Controllers/AttendanceController.php:820
* @route '/attendance/{kehadiran}'
*/
destroyInertia.url = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return destroyInertia.definition.url
            .replace('{kehadiran}', parsedArgs.kehadiran.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AttendanceController::destroyInertia
* @see app/Http/Controllers/AttendanceController.php:820
* @route '/attendance/{kehadiran}'
*/
destroyInertia.delete = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyInertia.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\AttendanceController::destroyInertia
* @see app/Http/Controllers/AttendanceController.php:820
* @route '/attendance/{kehadiran}'
*/
const destroyInertiaForm = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyInertia.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AttendanceController::destroyInertia
* @see app/Http/Controllers/AttendanceController.php:820
* @route '/attendance/{kehadiran}'
*/
destroyInertiaForm.delete = (args: { kehadiran: number | { id: number } } | [kehadiran: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyInertia.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroyInertia.form = destroyInertiaForm

/**
* @see \App\Http\Controllers\AttendanceController::dailyClassAttendance
* @see app/Http/Controllers/AttendanceController.php:847
* @route '/attendance/class/{classId}/daily'
*/
export const dailyClassAttendance = (args: { classId: string | number } | [classId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dailyClassAttendance.url(args, options),
    method: 'get',
})

dailyClassAttendance.definition = {
    methods: ["get","head"],
    url: '/attendance/class/{classId}/daily',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AttendanceController::dailyClassAttendance
* @see app/Http/Controllers/AttendanceController.php:847
* @route '/attendance/class/{classId}/daily'
*/
dailyClassAttendance.url = (args: { classId: string | number } | [classId: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return dailyClassAttendance.definition.url
            .replace('{classId}', parsedArgs.classId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AttendanceController::dailyClassAttendance
* @see app/Http/Controllers/AttendanceController.php:847
* @route '/attendance/class/{classId}/daily'
*/
dailyClassAttendance.get = (args: { classId: string | number } | [classId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dailyClassAttendance.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::dailyClassAttendance
* @see app/Http/Controllers/AttendanceController.php:847
* @route '/attendance/class/{classId}/daily'
*/
dailyClassAttendance.head = (args: { classId: string | number } | [classId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dailyClassAttendance.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AttendanceController::dailyClassAttendance
* @see app/Http/Controllers/AttendanceController.php:847
* @route '/attendance/class/{classId}/daily'
*/
const dailyClassAttendanceForm = (args: { classId: string | number } | [classId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dailyClassAttendance.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::dailyClassAttendance
* @see app/Http/Controllers/AttendanceController.php:847
* @route '/attendance/class/{classId}/daily'
*/
dailyClassAttendanceForm.get = (args: { classId: string | number } | [classId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dailyClassAttendance.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::dailyClassAttendance
* @see app/Http/Controllers/AttendanceController.php:847
* @route '/attendance/class/{classId}/daily'
*/
dailyClassAttendanceForm.head = (args: { classId: string | number } | [classId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dailyClassAttendance.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

dailyClassAttendance.form = dailyClassAttendanceForm

const AttendanceController = { index, store, getStatistics, bulkUpdate, getClassSummary, getStudentReport, getAvailableStudents, show, update, destroy, indexInertia, reports, exportReports, create, storeInertia, showInertia, edit, updateInertia, destroyInertia, dailyClassAttendance }

export default AttendanceController