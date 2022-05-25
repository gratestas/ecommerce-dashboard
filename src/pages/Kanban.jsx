import {
  KanbanComponent, 
  ColumnsDirective, 
  ColumnDirective
} from "@syncfusion/ej2-react-kanban"

import {Header} from '../components'
import {kanbanData, kanbanGrid} from '../data/dummy'
const Kanban = () => {
  return (
    <div className='container'>
      <Header category="App" title="Kanban"/>
      <KanbanComponent
        id='kanban'
        dataSource={kanbanData}
        cardSettings={{ 
          contentField: 'Summary',
          headerField: "Id"
        }}
        keyField="Status"
      >
        <ColumnsDirective>
        {kanbanGrid.map((item,index)=>(
          <ColumnDirective key={index} {...item} />
        ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  )
}

export default Kanban