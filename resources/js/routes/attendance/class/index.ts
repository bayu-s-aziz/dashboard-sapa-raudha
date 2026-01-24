import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\AttendanceController::daily
* @see app/Http/Controllers/AttendanceController.php:830
* @route '/attendance/class/{classId}/daily'
*/
export const daily = (args: { classId: string | number } | [classId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: daily.url(args, options),
    method: 'get',
})

daily.definition = {
    methods: ["get","head"],
    url: '/attendance/class/{classId}/daily',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AttendanceController::daily
* @see app/Http/Controllers/AttendanceController.php:830
* @route '/attendance/class/{classId}/daily'
*/
daily.url = (args: { classId: string | number } | [classId: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return daily.definition.url
            .replace('{classId}', parsedArgs.classId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AttendanceController::daily
* @see app/Http/Controllers/AttendanceController.php:830
* @route '/attendance/class/{classId}/daily'
*/
daily.get = (args: { classId: string | number } | [classId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: daily.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::daily
* @see app/Http/Controllers/AttendanceController.php:830
* @route '/attendance/class/{classId}/daily'
*/
daily.head = (args: { classId: string | number } | [classId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: daily.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AttendanceController::daily
* @see app/Http/Controllers/AttendanceController.php:830
* @route '/attendance/class/{classId}/daily'
*/
const dailyForm = (args: { classId: string | number } | [classId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: daily.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::daily
* @see app/Http/Controllers/AttendanceController.php:830
* @route '/attendance/class/{classId}/daily'
*/
dailyForm.get = (args: { classId: string | number } | [classId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: daily.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AttendanceController::daily
* @see app/Http/Controllers/AttendanceController.php:830
* @route '/attendance/class/{classId}/daily'
*/
dailyForm.head = (args: { classId: string | number } | [classId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: daily.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

daily.form = dailyForm

const classMethod = {
    daily: Object.assign(daily, daily),
}

export default classMethod