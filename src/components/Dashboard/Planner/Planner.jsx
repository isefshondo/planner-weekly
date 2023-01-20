import React from 'react'
import { PanelTask, PlannerColumn, PlannerRow, PlannerWrapper, TaskColor, TaskDescription } from './Dashboard.styles';
import DeleteButton from './DeleteButton';
import PlannerHeader from './PlannerHeader'
import TaskTime from './TaskTime';

const Planner = ({ tasks, setTasks }) => {
  const [filterWeekDay, setFilterWeekDay] = React.useState(null);

  const filterDaySelected = (enteredWeekDay) => {
    setFilterWeekDay(enteredWeekDay);
  };

  const onDeleteTask = ({ id }) => {
    setTasks(tasks.filter((assignment) => assignment.id !== id));
  };

  return (
    <React.Fragment>
      <PlannerHeader onGetDay={filterDaySelected} />
      <PlannerWrapper>
        <PlannerColumn>
          <TaskTime time={'Time'} />
          {
            tasks && tasks.filter((selectedDay) => {
              return selectedDay.selectDay === filterWeekDay
            }).map((task) => {
              return <TaskTime key={task.id} day={task.selectDay} time={task.choosenTime} />
            })
          }
        </PlannerColumn>
        <PanelTask>
          <PlannerRow />
          {
            tasks && tasks.filter((selectedDay) => {
              return selectedDay.selectDay === filterWeekDay
            }).map((task) => {
              return <TaskDescription key={task.id}>
                <TaskColor day={task.selectDay} />
                <p>
                  {task.description}
                </p>
                <DeleteButton onClick={() => onDeleteTask(task)} />
              </TaskDescription>
            })
          }
        </PanelTask>
      </PlannerWrapper>
    </React.Fragment>
    // <PlannerWrapper>
    //   <PlannerHeader onGetDay={filterDaySelected} />
    //   <PlannerRow>
    //     <TaskTime time={'Time'} />
    //   </PlannerRow>
    //   {
    //     tasks && tasks.filter((selectedDay) => {
    //       return selectedDay.selectDay === filterWeekDay
    //     }).map((task) => {
    //       return <PlannerRow key={task.id}>
    //         <TaskTime day={task.selectDay} time={task.choosenTime} />
    //         <TaskDescription>
    //           <TaskColor day={task.selectDay} />
    //           <p>
    //             {task.description}
    //           </p>
    //           <DeleteButton />
    //         </TaskDescription>
    //       </PlannerRow>
    //     })
    //   }
    // </PlannerWrapper>
  )
}

export default Planner
