import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AuthController::login
* @see app/Http/Controllers/AuthController.php:13
* @route '/api/auth/login'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

login.definition = {
    methods: ["post"],
    url: '/api/auth/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuthController::login
* @see app/Http/Controllers/AuthController.php:13
* @route '/api/auth/login'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::login
* @see app/Http/Controllers/AuthController.php:13
* @route '/api/auth/login'
*/
login.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthController::login
* @see app/Http/Controllers/AuthController.php:13
* @route '/api/auth/login'
*/
const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: login.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthController::login
* @see app/Http/Controllers/AuthController.php:13
* @route '/api/auth/login'
*/
loginForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: login.url(options),
    method: 'post',
})

login.form = loginForm

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:46
* @route '/api/auth/logout'
*/
const logout028457b752b2e7db1fe4736d8c51831d = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout028457b752b2e7db1fe4736d8c51831d.url(options),
    method: 'post',
})

logout028457b752b2e7db1fe4736d8c51831d.definition = {
    methods: ["post"],
    url: '/api/auth/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:46
* @route '/api/auth/logout'
*/
logout028457b752b2e7db1fe4736d8c51831d.url = (options?: RouteQueryOptions) => {
    return logout028457b752b2e7db1fe4736d8c51831d.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:46
* @route '/api/auth/logout'
*/
logout028457b752b2e7db1fe4736d8c51831d.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout028457b752b2e7db1fe4736d8c51831d.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:46
* @route '/api/auth/logout'
*/
const logout028457b752b2e7db1fe4736d8c51831dForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout028457b752b2e7db1fe4736d8c51831d.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:46
* @route '/api/auth/logout'
*/
logout028457b752b2e7db1fe4736d8c51831dForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout028457b752b2e7db1fe4736d8c51831d.url(options),
    method: 'post',
})

logout028457b752b2e7db1fe4736d8c51831d.form = logout028457b752b2e7db1fe4736d8c51831dForm
/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:46
* @route '/api/auth/logout'
*/
const logout028457b752b2e7db1fe4736d8c51831d = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: logout028457b752b2e7db1fe4736d8c51831d.url(options),
    method: 'get',
})

logout028457b752b2e7db1fe4736d8c51831d.definition = {
    methods: ["get","head"],
    url: '/api/auth/logout',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:46
* @route '/api/auth/logout'
*/
logout028457b752b2e7db1fe4736d8c51831d.url = (options?: RouteQueryOptions) => {
    return logout028457b752b2e7db1fe4736d8c51831d.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:46
* @route '/api/auth/logout'
*/
logout028457b752b2e7db1fe4736d8c51831d.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: logout028457b752b2e7db1fe4736d8c51831d.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:46
* @route '/api/auth/logout'
*/
logout028457b752b2e7db1fe4736d8c51831d.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: logout028457b752b2e7db1fe4736d8c51831d.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:46
* @route '/api/auth/logout'
*/
const logout028457b752b2e7db1fe4736d8c51831dForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: logout028457b752b2e7db1fe4736d8c51831d.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:46
* @route '/api/auth/logout'
*/
logout028457b752b2e7db1fe4736d8c51831dForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: logout028457b752b2e7db1fe4736d8c51831d.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:46
* @route '/api/auth/logout'
*/
logout028457b752b2e7db1fe4736d8c51831dForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: logout028457b752b2e7db1fe4736d8c51831d.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

logout028457b752b2e7db1fe4736d8c51831d.form = logout028457b752b2e7db1fe4736d8c51831dForm

export const logout = {
    '/api/auth/logout': logout028457b752b2e7db1fe4736d8c51831d,
    '/api/auth/logout': logout028457b752b2e7db1fe4736d8c51831d,
}

/**
* @see \App\Http\Controllers\AuthController::user
* @see app/Http/Controllers/AuthController.php:53
* @route '/api/user'
*/
export const user = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: user.url(options),
    method: 'get',
})

user.definition = {
    methods: ["get","head"],
    url: '/api/user',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuthController::user
* @see app/Http/Controllers/AuthController.php:53
* @route '/api/user'
*/
user.url = (options?: RouteQueryOptions) => {
    return user.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::user
* @see app/Http/Controllers/AuthController.php:53
* @route '/api/user'
*/
user.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: user.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AuthController::user
* @see app/Http/Controllers/AuthController.php:53
* @route '/api/user'
*/
user.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: user.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AuthController::user
* @see app/Http/Controllers/AuthController.php:53
* @route '/api/user'
*/
const userForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: user.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AuthController::user
* @see app/Http/Controllers/AuthController.php:53
* @route '/api/user'
*/
userForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: user.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AuthController::user
* @see app/Http/Controllers/AuthController.php:53
* @route '/api/user'
*/
userForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: user.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

user.form = userForm

const AuthController = { login, logout, user }

export default AuthController