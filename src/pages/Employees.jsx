import React from 'react'

import {
  GridComponent, 
  ColumnsDirective, 
  ColumnDirective,
  Search, Page, Inject, 
  Toolbar
  } from "@syncfusion/ej2-react-grids";

import {Header} from "../components"
import {employeesData, employeesGrid} from "../data/dummy"


const Employees = () => {
  return (
    <div className="container" >
    <Header category="Page" title="Employees" />
    <GridComponent
      dataSource={employeesData}
      allowPaging
      allowSorting
      toolbar={['Search']}
      width='auto'
    >
      <ColumnsDirective>
      {employeesGrid.map((item,index) => (
        <ColumnDirective key={index} {...item}/>
      ))}
      </ColumnsDirective>
      <Inject services={[Page, Search, Toolbar]} />
    </GridComponent>
    </div>
  )
}

export default Employees