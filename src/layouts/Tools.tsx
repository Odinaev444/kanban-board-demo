import styled from "styled-components"

import Tool from "../components/Tool"
import { ReactComponent as RoadmapIcon } from '../assets/icons/Union.svg';
import { ReactComponent as ScheduleIcon } from '../assets/icons/Schedule.svg';
import { ReactComponent as TasksIcon } from '../assets/icons/Tasks.svg';
import { ReactComponent as NotesIcon } from '../assets/icons/Notes.svg';
import { ReactComponent as FileIcon } from '../assets/icons/File.svg';

const Container = styled.div`
  width: 154px;
  padding-top: 28px;
  background: #F5F8FA;
`
const Title = styled.h6`
  margin-left: 16px;
  font-weight: 400;
  font-size: 18px;
  color: #222222;
`
const TollsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 138px;
  height: 250px;
  margin-top: 26px;
`

const Tools = () => {
  return (
    <Container>
      <Title>Tools</Title>
      <TollsList>
        <Tool title="Roadmap" icon={<RoadmapIcon />} />
        <Tool active title="Schedule" icon={<ScheduleIcon />} />
        <Tool title="Tasks" icon={<TasksIcon />} />
        <Tool title="Notes" icon={<NotesIcon />} />
        <Tool title="Files" icon={<FileIcon />} />
      </TollsList>
    </Container>
  )
}

export default Tools