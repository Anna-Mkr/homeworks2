import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let stateCopy = []
            if (action.payload === 'up') {
                stateCopy =  [...state].sort((a, b) => a.name > b.name ? 1 : -1)
                console.log(stateCopy)
            } else {
                stateCopy=  [...state].sort((a, b) => b.name > a.name ? 1 : -1)
                console.log(stateCopy)
            }
            return stateCopy
        }
        case 'check': {
            const stateCopy = [...state].filter(el => el.age >= action.payload)

            return stateCopy // need to fix
        }
        default:
            return state
    }
}
