import React from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import { Pagination } from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {

    const lastPage = Math.ceil(totalCount / itemsCountForPage) // пишет студент // вычислить количество страниц

    const onChangeCallback = (event: any, page: number) => {
        // пишет студент
        onChange(page, itemsCountForPage)
    }

    const onChangeSelect = (event: any) => {

        // пишет студент
        const newTotalCountForPage = event.currentTarget.value
        console.log(newTotalCountForPage)
        onChange(page, newTotalCountForPage)
    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{
                    display: 'flex',                        // Горизонтальная ориентация элементов
                    // alignItems: 'center',                   // Выравнивание по центру по вертикали
                    // height: '32px',                         // Фиксированная общая высота для кнопок и текста
                    '& .MuiPaginationItem-root': {          // Стили для отдельных пунктов пагинации
                        // color: '#8B8B8B',                   // Стандартный серый цвет текста
                        fontSize: '14px',                   // Размер шрифта
                        lineHeight: '32px',                 // Высота строки равна высоте блока
                        borderRadius: '4px',                // Закругление углов
                        padding: '0 12px',                  // Внутренний отступ справа и слева
                        backgroundColor: 'transparent',     // Прозрачный фон
                        boxShadow: 'none',                  // Без теней
                        minWidth: 'auto',                   // Ширина зависит от содержимого
                        margin: '0 4px',                    // Внешние отступы
                        transition: 'background-color 0.3s ease-in-out', // Плавная смена фонов

                        '&:hover': {                       // Hover-стилизация
                            backgroundColor: '#F0F0F0',     // Светлый оттенок серого при наведении
                            cursor: 'pointer',             // Курсор-показатель
                        },

                        '&.Mui-selected': {                // Активная страница
                            backgroundColor: '#EFEFEF',     // Более яркий оттенок
                            color: '#333333',               // Темный текст
                            fontWeight: 'bold',             // Жирный шрифт
                        },
                    },
                }}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>
                Показать
            </span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={[
                    { id: 4, value: 4 },
                    { id: 7, value: 7 },
                    { id: 10, value: 10 },
                ]}
                onChange={onChangeSelect}
            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination
