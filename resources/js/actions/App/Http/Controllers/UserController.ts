import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\UserController::index
* @see app/Http/Controllers/UserController.php:18
* @route '/api/users'
*/
const index51602741bb19a7e9b158852b9bfa08a4 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index51602741bb19a7e9b158852b9bfa08a4.url(options),
    method: 'get',
})

index51602741bb19a7e9b158852b9bfa08a4.definition = {
    methods: ["get","head"],
    url: '/api/users',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserController::index
* @see app/Http/Controllers/UserController.php:18
* @route '/api/users'
*/
index51602741bb19a7e9b158852b9bfa08a4.url = (options?: RouteQueryOptions) => {
    return index51602741bb19a7e9b158852b9bfa08a4.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::index
* @see app/Http/Controllers/UserController.php:18
* @route '/api/users'
*/
index51602741bb19a7e9b158852b9bfa08a4.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index51602741bb19a7e9b158852b9bfa08a4.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::index
* @see app/Http/Controllers/UserController.php:18
* @route '/api/users'
*/
index51602741bb19a7e9b158852b9bfa08a4.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index51602741bb19a7e9b158852b9bfa08a4.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UserController::index
* @see app/Http/Controllers/UserController.php:18
* @route '/api/users'
*/
const index51602741bb19a7e9b158852b9bfa08a4Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index51602741bb19a7e9b158852b9bfa08a4.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::index
* @see app/Http/Controllers/UserController.php:18
* @route '/api/users'
*/
index51602741bb19a7e9b158852b9bfa08a4Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index51602741bb19a7e9b158852b9bfa08a4.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::index
* @see app/Http/Controllers/UserController.php:18
* @route '/api/users'
*/
index51602741bb19a7e9b158852b9bfa08a4Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index51602741bb19a7e9b158852b9bfa08a4.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index51602741bb19a7e9b158852b9bfa08a4.form = index51602741bb19a7e9b158852b9bfa08a4Form
/**
* @see \App\Http\Controllers\UserController::index
* @see app/Http/Controllers/UserController.php:18
* @route '/users'
*/
const index6e8299a085c11017e62ab420951fb27c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index6e8299a085c11017e62ab420951fb27c.url(options),
    method: 'get',
})

index6e8299a085c11017e62ab420951fb27c.definition = {
    methods: ["get","head"],
    url: '/users',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserController::index
* @see app/Http/Controllers/UserController.php:18
* @route '/users'
*/
index6e8299a085c11017e62ab420951fb27c.url = (options?: RouteQueryOptions) => {
    return index6e8299a085c11017e62ab420951fb27c.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::index
* @see app/Http/Controllers/UserController.php:18
* @route '/users'
*/
index6e8299a085c11017e62ab420951fb27c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index6e8299a085c11017e62ab420951fb27c.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::index
* @see app/Http/Controllers/UserController.php:18
* @route '/users'
*/
index6e8299a085c11017e62ab420951fb27c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index6e8299a085c11017e62ab420951fb27c.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UserController::index
* @see app/Http/Controllers/UserController.php:18
* @route '/users'
*/
const index6e8299a085c11017e62ab420951fb27cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index6e8299a085c11017e62ab420951fb27c.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::index
* @see app/Http/Controllers/UserController.php:18
* @route '/users'
*/
index6e8299a085c11017e62ab420951fb27cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index6e8299a085c11017e62ab420951fb27c.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::index
* @see app/Http/Controllers/UserController.php:18
* @route '/users'
*/
index6e8299a085c11017e62ab420951fb27cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index6e8299a085c11017e62ab420951fb27c.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index6e8299a085c11017e62ab420951fb27c.form = index6e8299a085c11017e62ab420951fb27cForm

export const index = {
    '/api/users': index51602741bb19a7e9b158852b9bfa08a4,
    '/users': index6e8299a085c11017e62ab420951fb27c,
}

/**
* @see \App\Http\Controllers\UserController::store
* @see app/Http/Controllers/UserController.php:0
* @route '/api/users'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/users',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\UserController::store
* @see app/Http/Controllers/UserController.php:0
* @route '/api/users'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::store
* @see app/Http/Controllers/UserController.php:0
* @route '/api/users'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserController::store
* @see app/Http/Controllers/UserController.php:0
* @route '/api/users'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserController::store
* @see app/Http/Controllers/UserController.php:0
* @route '/api/users'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\UserController::getStatistics
* @see app/Http/Controllers/UserController.php:391
* @route '/api/users/statistics'
*/
export const getStatistics = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getStatistics.url(options),
    method: 'get',
})

getStatistics.definition = {
    methods: ["get","head"],
    url: '/api/users/statistics',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserController::getStatistics
* @see app/Http/Controllers/UserController.php:391
* @route '/api/users/statistics'
*/
getStatistics.url = (options?: RouteQueryOptions) => {
    return getStatistics.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::getStatistics
* @see app/Http/Controllers/UserController.php:391
* @route '/api/users/statistics'
*/
getStatistics.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getStatistics.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::getStatistics
* @see app/Http/Controllers/UserController.php:391
* @route '/api/users/statistics'
*/
getStatistics.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getStatistics.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UserController::getStatistics
* @see app/Http/Controllers/UserController.php:391
* @route '/api/users/statistics'
*/
const getStatisticsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getStatistics.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::getStatistics
* @see app/Http/Controllers/UserController.php:391
* @route '/api/users/statistics'
*/
getStatisticsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getStatistics.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::getStatistics
* @see app/Http/Controllers/UserController.php:391
* @route '/api/users/statistics'
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
* @see \App\Http\Controllers\UserController::getByRole
* @see app/Http/Controllers/UserController.php:0
* @route '/api/users/by-role/{role}'
*/
export const getByRole = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getByRole.url(args, options),
    method: 'get',
})

getByRole.definition = {
    methods: ["get","head"],
    url: '/api/users/by-role/{role}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserController::getByRole
* @see app/Http/Controllers/UserController.php:0
* @route '/api/users/by-role/{role}'
*/
getByRole.url = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { role: args }
    }

    if (Array.isArray(args)) {
        args = {
            role: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        role: args.role,
    }

    return getByRole.definition.url
            .replace('{role}', parsedArgs.role.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::getByRole
* @see app/Http/Controllers/UserController.php:0
* @route '/api/users/by-role/{role}'
*/
getByRole.get = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getByRole.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::getByRole
* @see app/Http/Controllers/UserController.php:0
* @route '/api/users/by-role/{role}'
*/
getByRole.head = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getByRole.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UserController::getByRole
* @see app/Http/Controllers/UserController.php:0
* @route '/api/users/by-role/{role}'
*/
const getByRoleForm = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getByRole.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::getByRole
* @see app/Http/Controllers/UserController.php:0
* @route '/api/users/by-role/{role}'
*/
getByRoleForm.get = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getByRole.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::getByRole
* @see app/Http/Controllers/UserController.php:0
* @route '/api/users/by-role/{role}'
*/
getByRoleForm.head = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getByRole.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getByRole.form = getByRoleForm

/**
* @see \App\Http\Controllers\UserController::show
* @see app/Http/Controllers/UserController.php:157
* @route '/api/users/{id}'
*/
const show8577520d388f94c4f06093a0b2195853 = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show8577520d388f94c4f06093a0b2195853.url(args, options),
    method: 'get',
})

show8577520d388f94c4f06093a0b2195853.definition = {
    methods: ["get","head"],
    url: '/api/users/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserController::show
* @see app/Http/Controllers/UserController.php:157
* @route '/api/users/{id}'
*/
show8577520d388f94c4f06093a0b2195853.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show8577520d388f94c4f06093a0b2195853.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::show
* @see app/Http/Controllers/UserController.php:157
* @route '/api/users/{id}'
*/
show8577520d388f94c4f06093a0b2195853.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show8577520d388f94c4f06093a0b2195853.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::show
* @see app/Http/Controllers/UserController.php:157
* @route '/api/users/{id}'
*/
show8577520d388f94c4f06093a0b2195853.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show8577520d388f94c4f06093a0b2195853.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UserController::show
* @see app/Http/Controllers/UserController.php:157
* @route '/api/users/{id}'
*/
const show8577520d388f94c4f06093a0b2195853Form = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show8577520d388f94c4f06093a0b2195853.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::show
* @see app/Http/Controllers/UserController.php:157
* @route '/api/users/{id}'
*/
show8577520d388f94c4f06093a0b2195853Form.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show8577520d388f94c4f06093a0b2195853.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::show
* @see app/Http/Controllers/UserController.php:157
* @route '/api/users/{id}'
*/
show8577520d388f94c4f06093a0b2195853Form.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show8577520d388f94c4f06093a0b2195853.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show8577520d388f94c4f06093a0b2195853.form = show8577520d388f94c4f06093a0b2195853Form
/**
* @see \App\Http\Controllers\UserController::show
* @see app/Http/Controllers/UserController.php:157
* @route '/users/{id}'
*/
const show3d7aae258ed911ef8bd3b1d2fc6768ef = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show3d7aae258ed911ef8bd3b1d2fc6768ef.url(args, options),
    method: 'get',
})

show3d7aae258ed911ef8bd3b1d2fc6768ef.definition = {
    methods: ["get","head"],
    url: '/users/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserController::show
* @see app/Http/Controllers/UserController.php:157
* @route '/users/{id}'
*/
show3d7aae258ed911ef8bd3b1d2fc6768ef.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show3d7aae258ed911ef8bd3b1d2fc6768ef.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::show
* @see app/Http/Controllers/UserController.php:157
* @route '/users/{id}'
*/
show3d7aae258ed911ef8bd3b1d2fc6768ef.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show3d7aae258ed911ef8bd3b1d2fc6768ef.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::show
* @see app/Http/Controllers/UserController.php:157
* @route '/users/{id}'
*/
show3d7aae258ed911ef8bd3b1d2fc6768ef.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show3d7aae258ed911ef8bd3b1d2fc6768ef.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UserController::show
* @see app/Http/Controllers/UserController.php:157
* @route '/users/{id}'
*/
const show3d7aae258ed911ef8bd3b1d2fc6768efForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show3d7aae258ed911ef8bd3b1d2fc6768ef.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::show
* @see app/Http/Controllers/UserController.php:157
* @route '/users/{id}'
*/
show3d7aae258ed911ef8bd3b1d2fc6768efForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show3d7aae258ed911ef8bd3b1d2fc6768ef.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::show
* @see app/Http/Controllers/UserController.php:157
* @route '/users/{id}'
*/
show3d7aae258ed911ef8bd3b1d2fc6768efForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show3d7aae258ed911ef8bd3b1d2fc6768ef.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show3d7aae258ed911ef8bd3b1d2fc6768ef.form = show3d7aae258ed911ef8bd3b1d2fc6768efForm

export const show = {
    '/api/users/{id}': show8577520d388f94c4f06093a0b2195853,
    '/users/{id}': show3d7aae258ed911ef8bd3b1d2fc6768ef,
}

/**
* @see \App\Http\Controllers\UserController::update
* @see app/Http/Controllers/UserController.php:203
* @route '/api/users/{id}'
*/
const update8577520d388f94c4f06093a0b2195853 = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update8577520d388f94c4f06093a0b2195853.url(args, options),
    method: 'put',
})

update8577520d388f94c4f06093a0b2195853.definition = {
    methods: ["put"],
    url: '/api/users/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\UserController::update
* @see app/Http/Controllers/UserController.php:203
* @route '/api/users/{id}'
*/
update8577520d388f94c4f06093a0b2195853.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return update8577520d388f94c4f06093a0b2195853.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::update
* @see app/Http/Controllers/UserController.php:203
* @route '/api/users/{id}'
*/
update8577520d388f94c4f06093a0b2195853.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update8577520d388f94c4f06093a0b2195853.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\UserController::update
* @see app/Http/Controllers/UserController.php:203
* @route '/api/users/{id}'
*/
const update8577520d388f94c4f06093a0b2195853Form = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update8577520d388f94c4f06093a0b2195853.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserController::update
* @see app/Http/Controllers/UserController.php:203
* @route '/api/users/{id}'
*/
update8577520d388f94c4f06093a0b2195853Form.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update8577520d388f94c4f06093a0b2195853.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update8577520d388f94c4f06093a0b2195853.form = update8577520d388f94c4f06093a0b2195853Form
/**
* @see \App\Http\Controllers\UserController::update
* @see app/Http/Controllers/UserController.php:203
* @route '/users/{id}'
*/
const update3d7aae258ed911ef8bd3b1d2fc6768ef = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update3d7aae258ed911ef8bd3b1d2fc6768ef.url(args, options),
    method: 'put',
})

update3d7aae258ed911ef8bd3b1d2fc6768ef.definition = {
    methods: ["put"],
    url: '/users/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\UserController::update
* @see app/Http/Controllers/UserController.php:203
* @route '/users/{id}'
*/
update3d7aae258ed911ef8bd3b1d2fc6768ef.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return update3d7aae258ed911ef8bd3b1d2fc6768ef.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::update
* @see app/Http/Controllers/UserController.php:203
* @route '/users/{id}'
*/
update3d7aae258ed911ef8bd3b1d2fc6768ef.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update3d7aae258ed911ef8bd3b1d2fc6768ef.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\UserController::update
* @see app/Http/Controllers/UserController.php:203
* @route '/users/{id}'
*/
const update3d7aae258ed911ef8bd3b1d2fc6768efForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update3d7aae258ed911ef8bd3b1d2fc6768ef.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserController::update
* @see app/Http/Controllers/UserController.php:203
* @route '/users/{id}'
*/
update3d7aae258ed911ef8bd3b1d2fc6768efForm.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update3d7aae258ed911ef8bd3b1d2fc6768ef.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update3d7aae258ed911ef8bd3b1d2fc6768ef.form = update3d7aae258ed911ef8bd3b1d2fc6768efForm

export const update = {
    '/api/users/{id}': update8577520d388f94c4f06093a0b2195853,
    '/users/{id}': update3d7aae258ed911ef8bd3b1d2fc6768ef,
}

/**
* @see \App\Http\Controllers\UserController::destroy
* @see app/Http/Controllers/UserController.php:338
* @route '/api/users/{id}'
*/
const destroy8577520d388f94c4f06093a0b2195853 = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy8577520d388f94c4f06093a0b2195853.url(args, options),
    method: 'delete',
})

destroy8577520d388f94c4f06093a0b2195853.definition = {
    methods: ["delete"],
    url: '/api/users/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\UserController::destroy
* @see app/Http/Controllers/UserController.php:338
* @route '/api/users/{id}'
*/
destroy8577520d388f94c4f06093a0b2195853.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroy8577520d388f94c4f06093a0b2195853.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::destroy
* @see app/Http/Controllers/UserController.php:338
* @route '/api/users/{id}'
*/
destroy8577520d388f94c4f06093a0b2195853.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy8577520d388f94c4f06093a0b2195853.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\UserController::destroy
* @see app/Http/Controllers/UserController.php:338
* @route '/api/users/{id}'
*/
const destroy8577520d388f94c4f06093a0b2195853Form = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy8577520d388f94c4f06093a0b2195853.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserController::destroy
* @see app/Http/Controllers/UserController.php:338
* @route '/api/users/{id}'
*/
destroy8577520d388f94c4f06093a0b2195853Form.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy8577520d388f94c4f06093a0b2195853.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy8577520d388f94c4f06093a0b2195853.form = destroy8577520d388f94c4f06093a0b2195853Form
/**
* @see \App\Http\Controllers\UserController::destroy
* @see app/Http/Controllers/UserController.php:338
* @route '/users/{id}'
*/
const destroy3d7aae258ed911ef8bd3b1d2fc6768ef = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy3d7aae258ed911ef8bd3b1d2fc6768ef.url(args, options),
    method: 'delete',
})

destroy3d7aae258ed911ef8bd3b1d2fc6768ef.definition = {
    methods: ["delete"],
    url: '/users/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\UserController::destroy
* @see app/Http/Controllers/UserController.php:338
* @route '/users/{id}'
*/
destroy3d7aae258ed911ef8bd3b1d2fc6768ef.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroy3d7aae258ed911ef8bd3b1d2fc6768ef.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::destroy
* @see app/Http/Controllers/UserController.php:338
* @route '/users/{id}'
*/
destroy3d7aae258ed911ef8bd3b1d2fc6768ef.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy3d7aae258ed911ef8bd3b1d2fc6768ef.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\UserController::destroy
* @see app/Http/Controllers/UserController.php:338
* @route '/users/{id}'
*/
const destroy3d7aae258ed911ef8bd3b1d2fc6768efForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy3d7aae258ed911ef8bd3b1d2fc6768ef.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserController::destroy
* @see app/Http/Controllers/UserController.php:338
* @route '/users/{id}'
*/
destroy3d7aae258ed911ef8bd3b1d2fc6768efForm.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy3d7aae258ed911ef8bd3b1d2fc6768ef.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy3d7aae258ed911ef8bd3b1d2fc6768ef.form = destroy3d7aae258ed911ef8bd3b1d2fc6768efForm

export const destroy = {
    '/api/users/{id}': destroy8577520d388f94c4f06093a0b2195853,
    '/users/{id}': destroy3d7aae258ed911ef8bd3b1d2fc6768ef,
}

/**
* @see \App\Http\Controllers\UserController::uploadPhoto
* @see app/Http/Controllers/UserController.php:403
* @route '/api/users/{id}/upload-photo'
*/
export const uploadPhoto = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadPhoto.url(args, options),
    method: 'post',
})

uploadPhoto.definition = {
    methods: ["post"],
    url: '/api/users/{id}/upload-photo',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\UserController::uploadPhoto
* @see app/Http/Controllers/UserController.php:403
* @route '/api/users/{id}/upload-photo'
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
* @see \App\Http\Controllers\UserController::uploadPhoto
* @see app/Http/Controllers/UserController.php:403
* @route '/api/users/{id}/upload-photo'
*/
uploadPhoto.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadPhoto.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserController::uploadPhoto
* @see app/Http/Controllers/UserController.php:403
* @route '/api/users/{id}/upload-photo'
*/
const uploadPhotoForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: uploadPhoto.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserController::uploadPhoto
* @see app/Http/Controllers/UserController.php:403
* @route '/api/users/{id}/upload-photo'
*/
uploadPhotoForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: uploadPhoto.url(args, options),
    method: 'post',
})

uploadPhoto.form = uploadPhotoForm

/**
* @see \App\Http\Controllers\UserController::teachers
* @see app/Http/Controllers/UserController.php:77
* @route '/users/teachers'
*/
export const teachers = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: teachers.url(options),
    method: 'get',
})

teachers.definition = {
    methods: ["get","head"],
    url: '/users/teachers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserController::teachers
* @see app/Http/Controllers/UserController.php:77
* @route '/users/teachers'
*/
teachers.url = (options?: RouteQueryOptions) => {
    return teachers.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::teachers
* @see app/Http/Controllers/UserController.php:77
* @route '/users/teachers'
*/
teachers.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: teachers.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::teachers
* @see app/Http/Controllers/UserController.php:77
* @route '/users/teachers'
*/
teachers.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: teachers.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UserController::teachers
* @see app/Http/Controllers/UserController.php:77
* @route '/users/teachers'
*/
const teachersForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: teachers.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::teachers
* @see app/Http/Controllers/UserController.php:77
* @route '/users/teachers'
*/
teachersForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: teachers.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::teachers
* @see app/Http/Controllers/UserController.php:77
* @route '/users/teachers'
*/
teachersForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: teachers.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

teachers.form = teachersForm

/**
* @see \App\Http\Controllers\UserController::parents
* @see app/Http/Controllers/UserController.php:115
* @route '/users/parents'
*/
export const parents = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: parents.url(options),
    method: 'get',
})

parents.definition = {
    methods: ["get","head"],
    url: '/users/parents',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserController::parents
* @see app/Http/Controllers/UserController.php:115
* @route '/users/parents'
*/
parents.url = (options?: RouteQueryOptions) => {
    return parents.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::parents
* @see app/Http/Controllers/UserController.php:115
* @route '/users/parents'
*/
parents.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: parents.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::parents
* @see app/Http/Controllers/UserController.php:115
* @route '/users/parents'
*/
parents.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: parents.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UserController::parents
* @see app/Http/Controllers/UserController.php:115
* @route '/users/parents'
*/
const parentsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: parents.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::parents
* @see app/Http/Controllers/UserController.php:115
* @route '/users/parents'
*/
parentsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: parents.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::parents
* @see app/Http/Controllers/UserController.php:115
* @route '/users/parents'
*/
parentsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: parents.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

parents.form = parentsForm

/**
* @see \App\Http\Controllers\UserController::edit
* @see app/Http/Controllers/UserController.php:187
* @route '/users/{id}/edit'
*/
export const edit = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/users/{id}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserController::edit
* @see app/Http/Controllers/UserController.php:187
* @route '/users/{id}/edit'
*/
edit.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::edit
* @see app/Http/Controllers/UserController.php:187
* @route '/users/{id}/edit'
*/
edit.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::edit
* @see app/Http/Controllers/UserController.php:187
* @route '/users/{id}/edit'
*/
edit.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UserController::edit
* @see app/Http/Controllers/UserController.php:187
* @route '/users/{id}/edit'
*/
const editForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::edit
* @see app/Http/Controllers/UserController.php:187
* @route '/users/{id}/edit'
*/
editForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::edit
* @see app/Http/Controllers/UserController.php:187
* @route '/users/{id}/edit'
*/
editForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

const UserController = { index, store, getStatistics, getByRole, show, update, destroy, uploadPhoto, teachers, parents, edit }

export default UserController