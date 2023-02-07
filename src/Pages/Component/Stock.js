import { Box, Button } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import './Stock.css'
import { FaCoins } from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'
import { GrCurrency } from 'react-icons/gr'
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io'


export const Stock = ({ data }) => {
    return (
        <div>
            <Box
                sx={{
                    m: 1,
                    height: 100,
                    backgroundColor: '#FFFFFF',
                    fontSize:"14px"
                }}
            >

                <div className='menu-icon'>
                    <MenuIcon />
                </div>
                <div className='name-price'>
                    <div>
                        {data?.type}
                    </div>
                    <div style={{ color: "green" }}>
                        ${data?.total_amount}
                    </div>
                </div>
                <div className='stock-type '>
                    <div style={{ color: "green" }}>
                        iShares
                    </div>
                    <div>
                        <strong>{data?.script}</strong>
                    </div>
                    <div>
                        {data?.stock_type}
                    </div>
                </div>

                <div className='quantity-invested'>
                    <div>
                        <FaCoins />  Quantity
                    </div>
                    <div>
                        <MdAlternateEmail />  Avg. Cost 
                    </div>
                    <div>
                        <GrCurrency />Invested Amt 
                    </div>
                </div>
                <div className='quantity-invested-value'>
                    <div>
                       <strong> ${data?.quantity}</strong>
                    </div>
                    <div>
                        <strong> ${data?.avg_cost}</strong>
                    </div>
                    <div>
                       <strong> ${data?.invasted_amt} </strong>
                    </div>
                </div>

                <div className='market-profit'>
                    <div>
                        <strong> Market Value </strong>  
                    </div>
                    <div>
                        % of profit value
                    </div>
                    <div className='progress mt-3'>
                        <div className='profit' style={{ width: `${data?.portfoli_percent}%` }}></div>
                    </div>
                </div>
                <div className='market-profit-value'>
                    <div>
                        <strong> ${data?.price} </strong>  
                    </div>
                    <div>
                        <strong> {data?.portfoli_percent} % </strong>
                    </div>
                </div>

                <div className='unreal-return'>
                    <div>
                        <strong>Unrealized P/L</strong>
                    </div>
                    <div>
                        % Return
                    </div>

                    <div className='progress mt-3'>
                        {data?.return < 0 ?
                            <div className="ext neg">
                                <div className='bar' style={{ width: Math.abs(data?.return), float: "right" }}  >
                                </div>
                            </div> :
                            <div className="ext pos">
                                <div className='bar' style={{ width: `${data?.return}%` }}>
                                </div>
                            </div>}
                    </div>
                </div>

                <div className='unreal-return-value'>
                    <div>
                        <strong>${data?.unrealizedPL}</strong>
                    </div>
                    <div>
                        {data?.return < 0 ? <IoMdArrowDropdown color='red' size={25} /> :
                            <IoMdArrowDropup color='green' size={25} />}
                        {data?.return} %
                    </div>
                </div>

                <div className='bottons'>
                    <div className='mb-2'>
                        <Button variant="outlined" size="small" color="error">
                            Buy
                        </Button>
                    </div>
                    <div>
                        <Button variant="outlined" size="small" color="error">
                            Sell
                        </Button>
                    </div>
                </div>
            </Box>
        </div>
    )
}
