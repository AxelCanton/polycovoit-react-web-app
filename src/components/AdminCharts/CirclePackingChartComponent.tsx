import { ResponsiveCirclePacking } from '@nivo/circle-packing'
import { ICircleChartProps } from './adminCharts.types';

interface CirclePackingData{
    id: string,
    children:{
        id:string,
        value:number
    }[]
}

const CirclePackingChart = ({users}:ICircleChartProps) => {

    const circlePackingData = () => {
        
        let result:CirclePackingData = {
            id: 'Villes',
            children: []
        };
        
        for (const user of users!){
            for(const location of user.locations){
                let newcity = true;
                for(const child of result.children){
                    if(child.id === location.city){
                        child.value += 1
                        newcity = false;
                    }
                }
                if(newcity){
                    result.children.push({
                        id: location.city,
                        value: 1
                    })
                }
            }
        }
        return result
    }

    return (
        <ResponsiveCirclePacking
                            data={circlePackingData()}
                            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                            leavesOnly
                            colors={{ scheme: 'nivo' }}
                            padding={4}
                            enableLabels={true}
                            labelTextColor={{
                                from: 'color',
                                modifiers: [
                                    [
                                        'darker',
                                        2
                                    ]
                                ]
                            }}
                            borderWidth={1}
                            borderColor={{
                                from: 'color',
                                modifiers: [
                                    [
                                        'darker',
                                        0.5
                                    ]
                                ]
                            }}
                        />
    )
}

export default CirclePackingChart;