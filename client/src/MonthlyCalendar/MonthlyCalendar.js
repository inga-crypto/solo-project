import React from 'react'
import FilesUploadComponent from '../FilesUploadComponent/FilesUploadComponent'
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import './MonthlyCalendar.css'

const MonthlyCalendar = React.forwardRef((props, ref) => {

const date = new Date();
const fullYear = date.getFullYear();
const month = date.getMonth();
  const dateValue = new Date(fullYear, month, 21);
  const startDate = new Date(fullYear, month, 12);

return (
  <div ref={ref} className="monthly-calendar-component">
    <FilesUploadComponent />
    <CalendarComponent value={dateValue}
    min={startDate}
    isMultiSelection={true}
    start="Year"></CalendarComponent>
  </div>
)
})

export default MonthlyCalendar