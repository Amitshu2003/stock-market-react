import React from 'react'
import LeftContainer from "./LeftContainer"
import MainContainer from "./MainContainer";

function Dashboard() {
  return (
    <div className="flex flex-col sm:flex-row">
        <LeftContainer />
      <MainContainer />
    </div>
  )
}

export default Dashboard