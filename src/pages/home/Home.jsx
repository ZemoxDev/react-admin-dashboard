import React from 'react'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import "./home.css"
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'

export default function Home() {
  return (
    <div className="home">
        <FeaturedInfo />
        <Chart />
        <div className="homeWidget">
          <WidgetSm />
          <WidgetLg />
        </div>
    </div>
  )
}
