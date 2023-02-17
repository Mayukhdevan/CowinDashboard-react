import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {data} = props

  return (
    <div className="chart-container">
      <h1 className="vaccination-text">Vaccination by gender</h1>
      <ResponsiveContainer height={400}>
        <PieChart>
          <Pie
            cx="50%"
            cy="60%"
            data={data}
            startAngle={180}
            endAngle={0}
            innerRadius="30%"
            outerRadius="55%"
            dataKey="count"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill=" #5a8dee" />
            <Cell name="Others" fill="#2cc6c6" />
          </Pie>
          <Legend iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByGender
