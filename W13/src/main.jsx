import React from 'react'
import ReactDOM from 'react-dom/client'
import Catalog from './App.jsx'
import CatalogItem from './CatalogItem.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="container py-3">
      <h2 className="pb-2 mb-4 border-bottom px-0">Our Books</h2>
      <div className="row">
      <Catalog />
      </div>
    </div>
  </React.StrictMode>,
)
