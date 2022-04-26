import { Container, MonthArea, MonthArrow, MonthTitle, ResumeArea } from './styles';
import { formatCurrentMonth } from '../../helpers/dateFilter'

type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void
}

export const InfoArea = ( {currentMonth, onMonthChange}: Props) => {

    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-')
        let currentDate = new Date(parseInt(year), parseInt(month) -1, 1)
        currentDate.setMonth( currentDate.getMonth() -1 )

        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()+1}`)
    }

    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-')
        let currentDate = new Date(parseInt(year), parseInt(month) -1, 1)
        currentDate.setMonth( currentDate.getMonth() +1 )

        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()+1}`)
    }

    return (
        <Container>

            <MonthArea>
                <MonthArrow onClick={handlePrevMonth}>⬅️</MonthArrow>
                <MonthTitle>{formatCurrentMonth(currentMonth)}</MonthTitle>
                <MonthArrow onClick={handleNextMonth}>➡️</MonthArrow>
            </MonthArea>

            <ResumeArea>

            </ResumeArea>

        </Container>
    );
}