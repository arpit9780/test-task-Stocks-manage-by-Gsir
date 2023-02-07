import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../Redux/Stocks/Stocks.action'
import { Grid } from '@mui/material';
import { Stock } from './Component/Stock';
import { Box } from '@mui/system';
import { Chart } from "react-google-charts";

const StocksList = () => {
  const dispatch = useDispatch()
  const { getStock, error } = useSelector((state) => {
    return {
      getStock: state?.stocksData?.stocks,
      error: state?.stocksData?.error
    }
  })

  useEffect(() => {
    dispatch(getData())
  }, [])

  const data = [
    ["name", "fund"],
    ["Mutual Fund", 7],
    ["ETF's", 3],
  ];

  const options = {
    title: "Portfolio",
    pieHole: 0.4,
    is3D: false,
  };

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={9} >
          {getStock?.map((row, i) => {
            return (
              <Stock key={i} data={row} />
            )
          })}
        </Grid>
        <Grid item xs={3}>
          <Box
            sx={{
              m: 1,
              height: 300,
              backgroundColor: '#FFFFFF',
            }}
          >
            <Chart
              chartType="PieChart"
              width="100%"
              height="100%"
              data={data}
              options={options}
            />
          </Box>
        </Grid>

      </Grid>

    </div>
  )
}

export default StocksList