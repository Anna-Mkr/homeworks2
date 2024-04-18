const initState: InitSateType = {
    themeId: 1,
}

export const themeReducer = (state: InitSateType = initState, action: ChangeThemIdType): any => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID": {
            return {...state, themeId: action.id}
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const) // fix any

type ChangeThemIdType = ReturnType<typeof changeThemeId>
type InitSateType = {
    themeId: 1 | 2 | 3
}

