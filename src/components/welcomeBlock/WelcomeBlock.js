import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ReactDOM from 'react-dom';
import "./WelcomeBlock.css"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Slider } from '@mui/material';


const data = [
  {
    name: '20',
    Interest: 250,
    Employee: 250,
    Employer: 250,
    amt: 2400,
  },
  {
    name: '25',
    Interest: 450,
    Employee: 450,
    Employer: 450,
    amt: 2210,
  },
  {
    name: '30',
    Interest: 650,
    Employee: 650,
    Employer: 650,
    amt: 2290,
  },
  {
    name: '35',
    Interest: 850,
    Employee: 850,
    Employer: 850,
    amt: 2000,
  },
  {
    name: '40',
    Interest: 1050,
    Employee: 1050,
    Employer: 1050,
    amt: 2181,
  },
  {
    name: '45',
    Interest: 1250,
    Employee: 1250,
    Employer: 1250,
    amt: 2500,
  },
  {
    name: '50',
    Interest: 1450,
    Employee: 1450,
    Employer: 1450,
    amt: 2100,
  },
];


export default class WelcomeBlock extends PureComponent {

  static demoUrl = 'https://codesandbox.io/s/stacked-bar-chart-s47i2';

  render(){
  return (
    <div className='welcomeMainContainer'>
      {/* first welcome  */}
      <div className='welcomeFirst'>
        {/* top profile  */}
        <div className='profileTop'>
          <div className='profileImgCont'>
            <img className='profImg' src='prof-Img.jpeg' />
          </div>
          <div className='profileTopDetails'>
            <h2 className='profileTitle'>Hi Mike,</h2>
            <h5 className='profileDesc'>welcome back.</h5>
          </div>
        </div>
        {/* middle profile  */}
        <div className='profileMiddle'>
          <h3 className='desc-1'>Today</h3>
          {/* prof middle cont 1  */}
          <div className='profBalanceCont'>
            <div className='main-h1'>$19,892</div>
            <div className='main-desc'>Account Balance</div>
          </div>
          {/* prof middle cont 2  */}
          <div className='profBalanceCont2 cont-marg'>
            <div className='profBalanceCont2Inside1'>
              <div className='main-h2'>$4,000</div>
              <div className='main-desc'>Year-to-Date Contributions</div>
            </div>
            
            <div className='profBalanceCont2Inside2 cont-marg'>
              <div className='main-h2'>$1,892</div>
              <div className='main-desc'>Total Interest</div>
            </div>
          </div>
          {/* I want to btn  */}

          <button className='wantToBtn'>I want to</button>
        </div>
        {/* last profile  */}
        <div className='profileLast'>
          <h3 className='desc-1'>Recent Transaction</h3>
          <div className='transactionCont'>
            <div className='main-desc'>2020-08-07</div>
            <div className='main-desc-bold'>Withdrawal Transfer to Bank-XXX11</div>
          </div>
          <div className='transactionCont'>
            <div className='main-desc'>2020-07-21</div>
            <div className='main-desc-bold'>Withdrawal Transfer to Bank-XXX11</div>
          </div>
          <div className='transactionCont'>
            <div className='main-desc'>2020-07-16</div>
            <div className='main-desc-bold'>Withdrawal Transfer to Bank-XXX11</div>
          </div>
        </div>
      </div>

      {/* second welcome  */}
      <div className='welcomeMiddle'>
          <div className='retirementTop'>
            {/* Retirement titles  */}
            <div className='rt-Titles'>
              <div className='subtitle'>Retirement Income</div>
              <div className='main-title'>Starting Year 2056</div>
            </div>

            {/* retirement dashboard incomes  */}
            <div className='retirementIncomeContainer'>
              <div className='ri-top'>
                <div className='main-title'>$300,000</div>
                <div className='ri-subtitle'>My Goal</div>
                <hr className='hr-blue'/>
              </div>

              <div className='ri-bottom'>
                <div className='ri-top'>
                  <div className='main-title'>59%</div>
                  <div className='ri-subtitle'>Goal Achieved</div>
                  <hr className='hr-blue'/>
                </div>

                <div className='ri-top-last'>
                  <div className='main-title'>59%</div>
                  <div className='ri-subtitle'>Goal Achieved</div>
                  <hr className='hr-blue'/>
                </div>
              </div>
            </div>
            
          </div>

          {/* middle retirement  */}
          <div className='retirementMiddle'>
            {/* retirement bar chart section  */}
            <div className='barChartContainer'>
              <div className='d-title'>Contributions Overtime</div>
                
                {/* bar details  */}
              <div className='bc-Container'>
                <div className='bc-details-container bc-mr-20'>
                  <hr className='hr-chart dark-blue bc-mr-5'/>
                  <div className='bc-detail-desc bc-mr-5'>Employer:</div>
                  <div className='bc-detail-value'>K 73,500</div>
                </div>

                <div className='bc-details-container bc-mr-20'>
                  <hr className='hr-chart blue bc-mr-5'/>
                  <div className='bc-detail-desc bc-mr-5'>Employee:</div>
                  <div className='bc-detail-value'>K 52,500</div>
                </div>

                <div className='bc-details-container bc-mr-20'>
                  <hr className='hr-chart light-blue bc-mr-5'/>
                  <div className='bc-detail-desc bc-mr-5'>Total Interest</div>
                  <div className='bc-detail-value'>K 244,313</div>
                </div>
              </div>

              {/* actual bar chart  */}
              <BarChart
                className='barChart'
                width={300}
                height={200}
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                {/* <Legend /> */}
                <Bar dataKey="Employer" stackId="a" fill="#000f89" />
                <Bar dataKey="Employee" stackId="a" fill="#4d4dff" />
                <Bar dataKey="Interest" stackId="a" fill="#6b8beb" />
              </BarChart>
              {/* actual bar chart ends  */}
            </div>
          </div>

          {/* retirement last  */}

          <div className='retirementLast'>
            <div className='rl-Top'>
              <div className='d-title'>How do I compare to my peers?</div>
              <div className='ri-subtitle'>These numbers represent current goal achievement</div>
            </div>

            <div className='peers-cont'>
              {/* peers  */}
              <div className='optionsCont'>
                {/* all options  */}
                <div className='optionC'>
                  <div className='ocTitle'>Age:</div>
                  <select className='ocSelect'>
                    <option>Under 30</option>
                  </select>
                </div>

                <div className='optionC'>
                  <div className='ocTitle'>Salary:</div>
                  <select className='ocSelect'>
                    <option>K 20 - K 30</option>
                  </select>
                </div>

                <div className='optionC'>
                  <div className='ocTitle'>Gender:</div>
                  <select className='ocSelect'>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>
              {/* percentage cont  */}
              <div className='percentageCont'>
                <div className='subPercentCont'>
                  <div className='percCont'>
                    <CircularProgressbar value={78} text='78%' 
                    styles={buildStyles({
                      pathColor: "#29ab87",
                      trailColor: "#aaf0d1",
                      fontWeight: "bolder"
                    })}/>
                  </div>
                  <div className='percTitle'>Average</div>
                </div>

                <div className='subPercentCont'>
                  <div className='percCont'>
                    <CircularProgressbar value={95} text='95%' 
                    styles={buildStyles({
                      pathColor: "#29ab87",
                      trailColor: "#aaf0d1",
                      fontWeight: "bolder"
                    })}/>
                  </div>
                  <div className='percTitle'>Top</div>
                </div>

                <div className='subPercentCont'>
                  <div className='percCont'>
                    <CircularProgressbar value={59} text='59%' 
                    styles={buildStyles({
                      pathColor: "#29ab87",
                      trailColor: "#aaf0d1",
                      fontWeight: "bolder"
                    })}/>
                  </div>
                  <div className='percTitle'>Me</div>
                </div>
              </div>
              {/* pecent cont end  */}
            </div>
          </div>
      </div>
      {/* last welcome  */}
      <div className='welcomeLast'>

          <div className='wl-Container'>

            <div className='employeeCard'>
              <div className='d-title'>Retirement Strategy</div>

              <div className='ec-container'>
                <div className='ec-text'>Employee Contribution</div>
                <div className='slider-cont'>
                  <Slider min={0} max={20} defaultValue={12} aria-label="Default" valueLabelDisplay="auto"
                   sx={{
                    '& .MuiSlider-thumb': {
                      color: "white"
                    },
                    '& .MuiSlider-track': {
                        color: "#6b8beb"
                    }
                  }} />

                  <div className='slider-text'>12%</div>
                </div>
              </div>

              <div className='ec-container'>
                <div className='ec-text'>Retirement Age</div>
                <div className='slider-cont'>
                  <Slider min={0} max={90} defaultValue={65} aria-label="Default" valueLabelDisplay="auto"
                   sx={{
                    '& .MuiSlider-thumb': {
                      color: "white"
                    },
                    '& .MuiSlider-track': {
                        color: "#6b8beb"
                    }
                  }} />

                  <div className='slider-text'>65</div>
                </div>
              </div>

              <hr className='ec-hr'/>

              <div className='employer-details-cont'>
                  <div className='ed-text'>Employer Contribution</div>
                  <div className='ed-perc'>8.4%</div>
              </div>
              <div className='employer-details-cont'>
                  <div className='ed-text'>Interest Rate</div>
                  <div className='ed-perc'>5%</div>
              </div>
              {/* btn  */}
              <button className='updateBtn'>update</button>

              <div className='hlp-docs-cont'>
                <div className='hlp-text'>{"View Help Docs >"}</div>
              </div>
            </div>

          </div>

      </div>
    </div>
  )
  }
}


