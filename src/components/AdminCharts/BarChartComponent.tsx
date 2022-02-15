import { ResponsiveBar } from '@nivo/bar'
import { IBarChartProps } from './adminCharts.types'

export type BarChartData = {
        date: string;
        value: number;
        label: string;
}

const BarChartComponent = ({reservations, period, specialityColors}: IBarChartProps) => {

    const pushDays: (date:Date[]) => BarChartData[] = (date: Date[]) => {
        return [{
            "date": date[0].getFullYear()+"-"+date[0].getMonth()+"-"+date[0].getDate(),
            value: 0,
            "label": date[0].getDate()+"/"+(date[0].getMonth()+1 < 10? "0"+(date[0].getMonth()+1):date[0].getMonth()+1)+"/"+date[0].getFullYear()
        },{
            "date": date[1].getFullYear()+"-"+date[1].getMonth()+"-"+date[1].getDate(),
            value: 0,
            "label": date[1].getDate()+"/"+(date[1].getMonth()+1 < 10? "0"+(date[1].getMonth()+1):date[1].getMonth()+1)+"/"+date[1].getFullYear()
        },{
            "date": date[2].getFullYear()+"-"+date[2].getMonth()+"-"+date[2].getDate(),
            value: 0,
            "label": date[2].getDate()+"/"+(date[2].getMonth()+1 < 10? "0"+(date[2].getMonth()+1):date[2].getMonth()+1)+"/"+date[2].getFullYear()
        },{
            "date": date[3].getFullYear()+"-"+date[3].getMonth()+"-"+date[3].getDate(),
            value: 0,
            "label": date[3].getDate()+"/"+(date[3].getMonth()+1 < 10? "0"+(date[3].getMonth()+1):date[3].getMonth()+1)+"/"+date[3].getFullYear()
        },{
            "date": date[4].getFullYear()+"-"+date[4].getMonth()+"-"+date[4].getDate(),
            value: 0,
            "label": date[4].getDate()+"/"+(date[4].getMonth()+1 < 10? "0"+(date[4].getMonth()+1):date[4].getMonth()+1)+"/"+date[4].getFullYear()
        },{
            "date": date[5].getFullYear()+"-"+date[5].getMonth()+"-"+date[5].getDate(),
            value: 0,
            "label": date[5].getDate()+"/"+(date[5].getMonth()+1 < 10? "0"+(date[5].getMonth()+1):date[5].getMonth()+1)+"/"+date[5].getFullYear()
        },{
            "date": date[6].getFullYear()+"-"+date[6].getMonth()+"-"+date[6].getDate(),
            value: 0,
            "label": date[6].getDate()+"/"+(date[6].getMonth()+1 < 10? "0"+(date[6].getMonth()+1):date[6].getMonth()+1)+"/"+date[6].getFullYear()
        }
    ]}

    const pushWeeks: (date:Date[]) => BarChartData[] = (date:Date[]) => {
        return [{
            "date": date[0].getFullYear()+"-"+date[0].getMonth()+"-"+date[0].getDate(),
            value: 0,
            "label": date[0].getDate()+"/"+(date[0].getMonth()+1 < 10? "0"+(date[0].getMonth()+1):date[0].getMonth()+1)+"/"+date[0].getFullYear()
        },{
            "date": date[1].getFullYear()+"-"+date[1].getMonth()+"-"+date[1].getDate(),
            value: 0,
            "label": date[1].getDate()+"/"+(date[1].getMonth()+1 < 10? "0"+(date[1].getMonth()+1):date[1].getMonth()+1)+"/"+date[1].getFullYear()
        },{
            "date": date[2].getFullYear()+"-"+date[2].getMonth()+"-"+date[2].getDate(),
            value: 0,
            "label": date[2].getDate()+"/"+(date[2].getMonth()+1 < 10? "0"+(date[2].getMonth()+1):date[2].getMonth()+1)+"/"+date[2].getFullYear()
        },{
            "date": date[3].getFullYear()+"-"+date[3].getMonth()+"-"+date[3].getDate(),
            value: 0,
            "label": date[3].getDate()+"/"+(date[3].getMonth()+1 < 10? "0"+(date[3].getMonth()+1):date[3].getMonth()+1)+"/"+date[3].getFullYear()
        },{
            "date": date[4].getFullYear()+"-"+date[4].getMonth()+"-"+date[4].getDate(),
            value: 0,
            "label": date[4].getDate()+"/"+(date[4].getMonth()+1 < 10? "0"+(date[4].getMonth()+1):date[4].getMonth()+1)+"/"+date[4].getFullYear()
        },{
            "date": date[5].getFullYear()+"-"+date[5].getMonth()+"-"+date[5].getDate(),
            value: 0,
            "label": date[5].getDate()+"/"+(date[5].getMonth()+1 < 10? "0"+(date[5].getMonth()+1):date[5].getMonth()+1)+"/"+date[5].getFullYear()
        },{
            "date": date[6].getFullYear()+"-"+date[6].getMonth()+"-"+date[6].getDate(),
            value: 0,
            "label": date[6].getDate()+"/"+(date[6].getMonth()+1 < 10? "0"+(date[6].getMonth()+1):date[6].getMonth()+1)+"/"+date[6].getFullYear()
        },{
            "date": date[7].getFullYear()+"-"+date[7].getMonth()+"-"+date[7].getDate(),
            value: 0,
            "label": date[7].getDate()+"/"+(date[7].getMonth()+1 < 10? "0"+(date[7].getMonth()+1):date[7].getMonth()+1)+"/"+date[7].getFullYear()
        },{
            "date": date[8].getFullYear()+"-"+date[8].getMonth()+"-"+date[8].getDate(),
            value: 0,
            "label": date[8].getDate()+"/"+(date[8].getMonth()+1 < 10? "0"+(date[8].getMonth()+1):date[8].getMonth()+1)+"/"+date[8].getFullYear()
        }
    ]
    }

    const pushMonth: (date:Date[]) => BarChartData[] = (date:Date[]) => {
        return [{
            "date": date[0].getFullYear()+"-"+date[0].getMonth()+"-"+date[0].getDate(),
            value: 0,
            "label": month(date[0].getMonth())
        },{
            "date": date[1].getFullYear()+"-"+date[1].getMonth()+"-"+date[1].getDate(),
            value: 0,
            "label": month(date[1].getMonth())
        },{
            "date": date[2].getFullYear()+"-"+date[2].getMonth()+"-"+date[2].getDate(),
            value: 0,
            "label": month(date[2].getMonth())
        },{
            "date": date[3].getFullYear()+"-"+date[3].getMonth()+"-"+date[3].getDate(),
            value: 0,
            "label": month(date[3].getMonth())
        },{
            "date": date[4].getFullYear()+"-"+date[4].getMonth()+"-"+date[4].getDate(),
            value: 0,
            "label": month(date[4].getMonth())
        },{
            "date": date[5].getFullYear()+"-"+date[5].getMonth()+"-"+date[5].getDate(),
            value: 0,
            "label": month(date[5].getMonth())
        },{
            "date": date[6].getFullYear()+"-"+date[6].getMonth()+"-"+date[6].getDate(),
            value: 0,
            "label": month(date[6].getMonth())
        },{
            "date": date[7].getFullYear()+"-"+date[7].getMonth()+"-"+date[7].getDate(),
            value: 0,
            "label": month(date[7].getMonth())
        },{
            "date": date[8].getFullYear()+"-"+date[8].getMonth()+"-"+date[8].getDate(),
            value: 0,
            "label": month(date[8].getMonth())
        },{
            "date": date[9].getFullYear()+"-"+date[9].getMonth()+"-"+date[9].getDate(),
            value: 0,
            "label": month(date[9].getMonth())
        },{
            "date": date[10].getFullYear()+"-"+date[10].getMonth()+"-"+date[10].getDate(),
            value: 0,
            "label": month(date[10].getMonth())
        },{
            "date": date[11].getFullYear()+"-"+date[11].getMonth()+"-"+date[11].getDate(),
            value: 0,
            "label": month(date[11].getMonth())
        }
    ]
    }

    const month = (value: number) => {
        switch (value) {
            case 0: return "Janvier"
            case 1: return "Février"
            case 2: return "Mars"
            case 3: return "Avril"
            case 4: return "Mai"
            case 5: return "Juin"
            case 6: return "Juillet"
            case 7: return "Aout"
            case 8: return "Septembre"
            case 9: return "Octobre"
            case 10: return "Novembre"
            case 11: return "Decemebre"
            default: return ""
        }
    }

    const barChartData = () => {
        let dataToReturn

        if (period === "days"){
            dataToReturn = pushDays(dayList())
            for(let reservation of reservations){
                const reservationDate = new Date(reservation.date)
                for(let day of dataToReturn){
                    if(day.date === reservationDate.getFullYear()+"-"+reservationDate.getMonth()+"-"+reservationDate.getDate()){
                        day.value += 1
                    }
                }
            }
        } else if (period === "weeks"){
            dataToReturn = pushWeeks(weekList())
            for (let reservation of reservations){
                const reservationDate = new Date(reservation.date)
                for(let week of dataToReturn){
                    if(isInWeek(reservationDate,week)){
                        week.value += 1
                    }
                }
            }
        } else {
            dataToReturn = pushMonth(monthList())
            for(let reservation of reservations){
                const reservationDate = new Date(reservation.date)
                for(let month of dataToReturn){
                    if(isInMonth(reservationDate,month)){
                        month.value += 1
                    }
                }
            }
        }
        return dataToReturn
    }

    const isInWeek = (reservationDate: Date ,week: BarChartData) => {
        if(reservationDate.getMonth() === parseInt(week.date.split("-")[1])){
            if(reservationDate.getDate() >= parseInt(week.date.split("-")[2]) && reservationDate.getDate() <= parseInt(week.date.split("-")[2])+7){
                return true;
            }
        }
        return false;
    }

    const isInMonth = (reservationDate: Date ,month: BarChartData) => {
        if(reservationDate.getMonth() === parseInt(month.date.split("-")[1])){
            return true
        }
        return false;
    }

    const dayList = () => {
        const today = new Date();
        let dayList: Date[] = []

        for(let i = 1; i <= 7; i++){
            dayList.push(new Date(today.getTime() - (7-i) * 24 * 60 * 60 * 1000))
        }

        return dayList
    }

    const weekList = () => {
        const today = new Date();
        let weekList: Date[] = [];

        for(let i = 0; i < 9; i++){
            weekList.push(new Date(today.getTime() - 7 * (9-i) * 24 * 60 * 60 * 1000))
        }

        return weekList;
    }

    const monthList = () => {
        const today = new Date();
        let monthList: Date[] = [];

        let date = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate())
        date.setMonth(date.getMonth() + 1)

        for(let i = 0; i < 12; i++){
            if(date.getMonth() !== 11){
                monthList.push(new Date(date))
                date.setMonth(date.getMonth() + 1)
            } else {
                monthList.push(new Date(date))
                date.setMonth(0)
                date.setFullYear(date.getFullYear() + 1)
            }
            
        }
        return monthList
    };

    const getLegendName = period === "days"?  "Jours":(period === "weeks"? "Semaines":"Mois")

    return (
        <ResponsiveBar
                        data={barChartData()}
                        keys={["value"]}
                        indexBy="label"
                        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                        padding={0.3}
                        valueScale={{ type: 'linear' }}
                        indexScale={{ type: 'band', round: true }}
                        colors={{ scheme: 'nivo' }}
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: getLegendName,
                            legendPosition: 'middle',
                            legendOffset: 32
                        }}
                        axisLeft={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'Demandes',
                            legendPosition: 'middle',
                            legendOffset: -40
                        }}
                        labelSkipWidth={12}
                        labelSkipHeight={12}
                        labelTextColor={{
                            from: 'color',
                            modifiers: [
                                [
                                    'darker',
                                    1.6
                                ]
                            ]
                        }}
                    />
    )
}

export default BarChartComponent