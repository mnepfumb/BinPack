import { useTheme } from '@mui/system';
import ReactEcharts from 'echarts-for-react';

const WasteTypesDoughnut = ({ height, color = [] }) => {
  const theme = useTheme();

  const option = {
    legend: {
      show: true,
      itemGap: 50,
      icon: 'circle',
      bottom: 0,
      textStyle: {  fontSize: 9, fontFamily: 'roboto', fontWeight: 'bold' },
    },
    tooltip: { show: false, trigger: 'item', formatter: '{a} <br/>{b}: {c} ({d}%)' },
    xAxis: [{ axisLine: { show: false }, splitLine: { show: false } }],
    yAxis: [{ axisLine: { show: false }, splitLine: { show: false } }],

    series: [
      {
        name: 'Task Rate',
        type: 'pie',
        radius: ['45%', '72.55%'],
        center: ['50%', '50%'],
        avoidLabelOverlap: false,
        hoverOffset: 5,
        stillShowZeroSum: false,
        label: {
          normal: {
            show: false,
            position: 'center', // shows the description data to center, turn off to show in right side
            textStyle: {
              color: theme.palette.text.secondary,
              fontSize: 13,
              fontFamily: 'roboto',
            },
            formatter: '{a}',
          },
          emphasis: {
            show: true,
            textStyle: { fontSize: '14', fontWeight: 'bold' },
            formatter: '{b}: {c}% ',
          },
        },
        labelLine: { normal: { show: false } },
        data: [
          { value: 10, name: 'Covid' },
          { value: 14, name: 'General' },
          { value: 10, name: 'Hazardous' },
          { value: 30, name: 'Metal' },
          { value: 5, name: 'Paper' },
          { value: 90, name: 'Plastic' },
          { value: 8, name: 'Refuse' },
          { value: 20, name: 'Healthcare' },
          { value: 21, name: 'Other' },
        ],
        itemStyle: {
          emphasis: { shadowBlur: 10, shadowOffsetX: 0, shadowColor: 'rgba(0, 0, 0, 0.5)' },
        },
      },
    ],
  };

  return <ReactEcharts style={{ height: height }} option={{ ...option, color: [...color] }} />;
};

export default WasteTypesDoughnut;
