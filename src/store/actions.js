/*
 * action types
 */

export const EAT = 'EAT'
export const GROW = 'GROW'

/*
 * action creators
 */

export function eat() {
    return { type: EAT }
}

export function grow() {
    return { type: GROW }
}
