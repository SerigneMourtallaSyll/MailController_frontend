import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AccountSettings from './Pages/AccountSettings.jsx'
import AdvancedDocuments from './Pages/AdvancedDocuments.jsx'
import Campaigns from './Pages/Campaigns.jsx'
import ClickReport from './Pages/ClickReport.jsx'
import Contacts from './Pages/Contacts.jsx'
import EmailProductivity from './Pages/EmailProductivity.jsx'
import Integrations from './Pages/Integrations.jsx'
import Team from './Pages/Team.jsx'
import Templates from './Pages/Templates.jsx'
import EmailTracking from './Pages/EmailTracking.jsx'
import { PrimeReactProvider } from 'primereact/api';
import 'primeflex/primeflex.css';  
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'react-loading-skeleton/dist/skeleton.css'




const route = createBrowserRouter([
  {
    path: "/",
    element:<App />,
    children:[
      {
        path: "account-settings",
        element: <AccountSettings />
      },
      {
        path: "advanced-documents",
        element: <AdvancedDocuments />
      },
      {
        path: "campaigns",
        element: <Campaigns />
      },
      {
        path: "click-report",
        element: <ClickReport />
      },
      {
        path: "contacts",
        element: <Contacts />
      },
      {
        path: "email-productivity",
        element: <EmailProductivity />
      },
      {
        path: "",
        element: <EmailTracking />
      },
      {
        path: "integrations",
        element: <Integrations />
      },
      {
        path: "team",
        element: <Team />
      },
      {
        path: "templates",
        element: <Templates />
      },
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <RouterProvider router={route}>
      </RouterProvider>
    </PrimeReactProvider>
  </React.StrictMode>,
)
