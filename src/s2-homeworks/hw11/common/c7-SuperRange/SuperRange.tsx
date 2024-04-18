import React from 'react'
import {createTheme, Slider, SliderProps, ThemeProvider} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {



    return (

        <Slider

            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
            sx={{ // стили для слайдера // пишет студент
                width: 147,
                color: '#00CC22',
            }}



        />

    )
}

export default SuperRange
