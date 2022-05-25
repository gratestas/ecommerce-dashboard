import {
  GridComponent, 
  ColumnsDirective, 
  ColumnDirective,
  Page, Selection, Inject,
  Edit, Filter, Sort,
  Toolbar
} from "@syncfusion/ej2-react-grids"

import {Header} from '../components'
import {customersData, customersGrid} from "../data/dummy"

const Customers = () => {
  return (
    <div className='container'>
      <Header category="Page" title="Customers"/>
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={['Delete']}
        editSettings={{allowDeleting: true, allowEditing: true}}
        width='auto'
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) =>(
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[ Page, Toolbar, Selection, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  )
}

export default Customers