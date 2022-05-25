import {
  ScheduleComponent, 
  ViewsDirective, 
  ViewDirective, 
  Inject, 
  Day, Week, Month, WorkWeek, Agenda, 
  Resize, DragAndDrop
} from "@syncfusion/ej2-react-schedule"

import {DatePickerComponent} from "@syncfusion/ej2-react-calendars"

import {Header} from '../components'
import {scheduleData} from "../data/dummy"

const Calendar = () => {
  return (
    <div className="container">
      <Header category='App' title='Calendar' />
      <ScheduleComponent
        height='650px'
        eventSettings={{
          dataSource: scheduleData
        }}
        selectedDate={new Date(2021,0,10)}
      >
        <Inject 
          services={[
            Day, Week,WorkWeek, Month,
            Agenda,Resize, DragAndDrop
          ]} 
        />
      </ScheduleComponent>
    </div>
  )
}

export default Calendar