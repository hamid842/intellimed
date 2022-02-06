import {useRoutes} from "react-router-dom";
import PageNotFound from "@shared/error/page-not-found";
import Layout from "@shared/layout/Navigation";
import Login from './main/app/modules/login/LoginScreen'
import Patient from '@pages/patient/Patient';
import Profile from '@pages/profile/Profile';
import Prescriptions from "@pages/prescription/Prescriptions";
import Prescriber from "@pages/prescriber/Prescriber";
import Dashboard from "@pages/dashboard/Dashboard";
import AddNewPrescription from "@pages/add-new-prescription/NewPrescription";


const AppRoutes = () => {
    return useRoutes([
        {
            element: <PageNotFound/>
        },
        {
            path: '/',
            exact: true,
            element: <Login/>,
        }, {
            path: '/login',
            exact: true,
            element: <Login/>,
        },
        {
            element: <Layout/>,
            children: [
                {path: 'dashboard', exact: true, element: <Dashboard/>},
                {path: 'patient', exact: true, element: <Patient/>},
                {path: 'profile', exact: true, element: <Profile/>},
                {path: 'prescriptions', exact: true, element: <Prescriptions/>},
                {path: 'add-new-prescription', exact: true, element: <AddNewPrescription/>},
                {path: 'prescriber', exact: true, element: <Prescriber/>},
            ]
        }
    ])
}

export default AppRoutes;
