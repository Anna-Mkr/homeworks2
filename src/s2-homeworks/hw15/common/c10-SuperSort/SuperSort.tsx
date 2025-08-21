import React from 'react'
import sortUpIcon from '../../../../assets/icons/sortUpIcon.svg'
import sortDownIcon from '../../../../assets/icons/sortDownIcon.svg'
import noneSortIcon from '../../../../assets/icons/noneSortIcon.svg'


// добавить в проект иконки и импортировать

const downIcon = sortDownIcon
const upIcon = sortUpIcon
const noneIcon = noneSortIcon

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    if (sort === up) {
        return ''
    } else if (sort === down) {
        return up
    }
    return down
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    //return up // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    debugger

    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon


            console.log(icon)
    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            <img
        style={{width:'8px'}}
               id={id + '-icon-' + sort}
                src={icon}
            />

          
        </span>
    )
}

export default SuperSort