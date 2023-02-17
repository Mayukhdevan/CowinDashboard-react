import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {data} = props

  const dataFormatter = number => `${number.toString()}k`

  return (
    <div className="chart-container">
      <h1 className="vaccination-text">Vaccination Coverage</h1>
      <ResponsiveContainer height={400}>
        <BarChart data={data}>
          <XAxis
            dataKey="vaccineDate"
            tick={{
              stroke: '#94a3b8',
              strokeWidth: 0,
            }}
          />
          <YAxis
            tickFormatter={dataFormatter}
            tick={{
              stroke: '#94a3b8',
              strokeWidth: 0,
            }}
          />
          <Legend
            iconType="rect"
            align="center"
            wrapperStyle={{
              paddingTop: 20,
            }}
          />
          <Bar
            dataKey="dose1"
            name="Dose 1"
            fill="#5a8dee"
            barSize="20%"
            radius={[8, 8, 0, 0]}
          />
          <Bar
            dataKey="dose2"
            name="Dose 2"
            fill="#f54394"
            barSize="20%"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationCoverage
