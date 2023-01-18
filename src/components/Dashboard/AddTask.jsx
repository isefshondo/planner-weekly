import React from 'react'
import { FormDashboard } from '../../styled-components/styled-components'
import ManageButton from './ManageButton'
import WeekSelect from './WeekSelect'

const AddTask = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <FormDashboard onSubmit={onSubmitHandler}>
        <div className='add-task'>
          <input type="text" placeholder='Task or issue' className='task-input' />
          <WeekSelect />
        </div>
        <div className='manage-task'>
          <ManageButton type={'submit'}>
            + Add to calendar
          </ManageButton>
          <ManageButton type={'button'}>
            - Delete all
          </ManageButton>
        </div>
      </FormDashboard>
    </React.Fragment>
  )
}

export default AddTask
