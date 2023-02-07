import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../Components/Layout'
import StocksList from '../Pages/StocksList'


export const PublicRoutes = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<StocksList />} />
            </Routes>
        </Layout>
    )
}
