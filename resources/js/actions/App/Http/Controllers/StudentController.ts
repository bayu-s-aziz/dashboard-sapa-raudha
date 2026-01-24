import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\StudentController::index
* @see app/Http/Controllers/StudentController.php:16
* @route '/api/students'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/students',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StudentController::index
* @see app/Http/Controllers/StudentController.php:16
* @route '/api/students'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StudentController::index
* @see app/Http/Controllers/StudentController.php:16
* @route '/api/students'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentController::index
* @see app/Http/Controllers/StudentController.php:16
* @route '/api/students'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\StudentController::index
* @see app/Http/Controllers/StudentController.php:16
* @route '/api/students'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentController::index
* @see app/Http/Controllers/StudentController.php:16
* @route '/api/students'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentController::index
* @see app/Http/Controllers/StudentController.php:16
* @route '/api/students'
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
* @see \App\Http\Controllers\StudentController::store
* @see app/Http/Controllers/StudentController.php:50
* @route '/api/students'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/students',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\StudentController::store
* @see app/Http/Controllers/StudentController.php:50
* @route '/api/students'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StudentController::store
* @see app/Http/Controllers/StudentController.php:50
* @route '/api/students'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\StudentController::store
* @see app/Http/Controllers/StudentController.php:50
* @route '/api/students'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\StudentController::store
* @see app/Http/Controllers/StudentController.php:50
* @route '/api/students'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\StudentController::getStatistics
* @see app/Http/Controllers/StudentController.php:203
* @route '/api/students/statistics'
*/
export const getStatistics = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getStatistics.url(options),
    method: 'get',
})

getStatistics.definition = {
    methods: ["get","head"],
    url: '/api/students/statistics',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StudentController::getStatistics
* @see app/Http/Controllers/StudentController.php:203
* @route '/api/students/statistics'
*/
getStatistics.url = (options?: RouteQueryOptions) => {
    return getStatistics.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StudentController::getStatistics
* @see app/Http/Controllers/StudentController.php:203
* @route '/api/students/statistics'
*/
getStatistics.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getStatistics.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentController::getStatistics
* @see app/Http/Controllers/StudentController.php:203
* @route '/api/students/statistics'
*/
getStatistics.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getStatistics.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\StudentController::getStatistics
* @see app/Http/Controllers/StudentController.php:203
* @route '/api/students/statistics'
*/
const getStatisticsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getStatistics.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentController::getStatistics
* @see app/Http/Controllers/StudentController.php:203
* @route '/api/students/statistics'
*/
getStatisticsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getStatistics.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentController::getStatistics
* @see app/Http/Controllers/StudentController.php:203
* @route '/api/students/statistics'
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
* @see \App\Http\Controllers\StudentController::getByClass
* @see app/Http/Controllers/StudentController.php:185
* @route '/api/students/class/{classId}'
*/
export const getByClass = (args: { classId: string | number } | [classId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getByClass.url(args, options),
    method: 'get',
})

getByClass.definition = {
    methods: ["get","head"],
    url: '/api/students/class/{classId}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StudentController::getByClass
* @see app/Http/Controllers/StudentController.php:185
* @route '/api/students/class/{classId}'
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
* @see \App\Http\Controllers\StudentController::getByClass
* @see app/Http/Controllers/StudentController.php:185
* @route '/api/students/class/{classId}'
*/
getByClass.get = (args: { classId: string | number } | [classId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getByClass.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentController::getByClass
* @see app/Http/Controllers/StudentController.php:185
* @route '/api/students/class/{classId}'
*/
getByClass.head = (args: { classId: string | number } | [classId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getByClass.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\StudentController::getByClass
* @see app/Http/Controllers/StudentController.php:185
* @route '/api/students/class/{classId}'
*/
const getByClassForm = (args: { classId: string | number } | [classId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getByClass.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentController::getByClass
* @see app/Http/Controllers/StudentController.php:185
* @route '/api/students/class/{classId}'
*/
getByClassForm.get = (args: { classId: string | number } | [classId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getByClass.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentController::getByClass
* @see app/Http/Controllers/StudentController.php:185
* @route '/api/students/class/{classId}'
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
* @see \App\Http\Controllers\StudentController::show
* @see app/Http/Controllers/StudentController.php:92
* @route '/api/students/{id}'
*/
export const show = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/students/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StudentController::show
* @see app/Http/Controllers/StudentController.php:92
* @route '/api/students/{id}'
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
* @see \App\Http\Controllers\StudentController::show
* @see app/Http/Controllers/StudentController.php:92
* @route '/api/students/{id}'
*/
show.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentController::show
* @see app/Http/Controllers/StudentController.php:92
* @route '/api/students/{id}'
*/
show.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\StudentController::show
* @see app/Http/Controllers/StudentController.php:92
* @route '/api/students/{id}'
*/
const showForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentController::show
* @see app/Http/Controllers/StudentController.php:92
* @route '/api/students/{id}'
*/
showForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentController::show
* @see app/Http/Controllers/StudentController.php:92
* @route '/api/students/{id}'
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
* @see \App\Http\Controllers\StudentController::update
* @see app/Http/Controllers/StudentController.php:109
* @route '/api/students/{id}'
*/
export const update = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/api/students/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\StudentController::update
* @see app/Http/Controllers/StudentController.php:109
* @route '/api/students/{id}'
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
* @see \App\Http\Controllers\StudentController::update
* @see app/Http/Controllers/StudentController.php:109
* @route '/api/students/{id}'
*/
update.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\StudentController::update
* @see app/Http/Controllers/StudentController.php:109
* @route '/api/students/{id}'
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
* @see \App\Http\Controllers\StudentController::update
* @see app/Http/Controllers/StudentController.php:109
* @route '/api/students/{id}'
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
* @see \App\Http\Controllers\StudentController::destroy
* @see app/Http/Controllers/StudentController.php:158
* @route '/api/students/{id}'
*/
export const destroy = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/students/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\StudentController::destroy
* @see app/Http/Controllers/StudentController.php:158
* @route '/api/students/{id}'
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
* @see \App\Http\Controllers\StudentController::destroy
* @see app/Http/Controllers/StudentController.php:158
* @route '/api/students/{id}'
*/
destroy.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\StudentController::destroy
* @see app/Http/Controllers/StudentController.php:158
* @route '/api/students/{id}'
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
* @see \App\Http\Controllers\StudentController::destroy
* @see app/Http/Controllers/StudentController.php:158
* @route '/api/students/{id}'
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
* @see \App\Http\Controllers\StudentController::getAttendance
* @see app/Http/Controllers/StudentController.php:222
* @route '/api/students/{studentId}/attendance'
*/
export const getAttendance = (args: { studentId: string | number } | [studentId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getAttendance.url(args, options),
    method: 'get',
})

getAttendance.definition = {
    methods: ["get","head"],
    url: '/api/students/{studentId}/attendance',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StudentController::getAttendance
* @see app/Http/Controllers/StudentController.php:222
* @route '/api/students/{studentId}/attendance'
*/
getAttendance.url = (args: { studentId: string | number } | [studentId: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return getAttendance.definition.url
            .replace('{studentId}', parsedArgs.studentId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StudentController::getAttendance
* @see app/Http/Controllers/StudentController.php:222
* @route '/api/students/{studentId}/attendance'
*/
getAttendance.get = (args: { studentId: string | number } | [studentId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getAttendance.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentController::getAttendance
* @see app/Http/Controllers/StudentController.php:222
* @route '/api/students/{studentId}/attendance'
*/
getAttendance.head = (args: { studentId: string | number } | [studentId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getAttendance.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\StudentController::getAttendance
* @see app/Http/Controllers/StudentController.php:222
* @route '/api/students/{studentId}/attendance'
*/
const getAttendanceForm = (args: { studentId: string | number } | [studentId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getAttendance.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentController::getAttendance
* @see app/Http/Controllers/StudentController.php:222
* @route '/api/students/{studentId}/attendance'
*/
getAttendanceForm.get = (args: { studentId: string | number } | [studentId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getAttendance.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentController::getAttendance
* @see app/Http/Controllers/StudentController.php:222
* @route '/api/students/{studentId}/attendance'
*/
getAttendanceForm.head = (args: { studentId: string | number } | [studentId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getAttendance.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getAttendance.form = getAttendanceForm

/**
* @see \App\Http\Controllers\StudentController::uploadPhoto
* @see app/Http/Controllers/StudentController.php:253
* @route '/api/students/{id}/upload-photo'
*/
export const uploadPhoto = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadPhoto.url(args, options),
    method: 'post',
})

uploadPhoto.definition = {
    methods: ["post"],
    url: '/api/students/{id}/upload-photo',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\StudentController::uploadPhoto
* @see app/Http/Controllers/StudentController.php:253
* @route '/api/students/{id}/upload-photo'
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
* @see \App\Http\Controllers\StudentController::uploadPhoto
* @see app/Http/Controllers/StudentController.php:253
* @route '/api/students/{id}/upload-photo'
*/
uploadPhoto.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadPhoto.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\StudentController::uploadPhoto
* @see app/Http/Controllers/StudentController.php:253
* @route '/api/students/{id}/upload-photo'
*/
const uploadPhotoForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: uploadPhoto.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\StudentController::uploadPhoto
* @see app/Http/Controllers/StudentController.php:253
* @route '/api/students/{id}/upload-photo'
*/
uploadPhotoForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: uploadPhoto.url(args, options),
    method: 'post',
})

uploadPhoto.form = uploadPhotoForm

const StudentController = { index, store, getStatistics, getByClass, show, update, destroy, getAttendance, uploadPhoto }

export default StudentController