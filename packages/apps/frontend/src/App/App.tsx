import { useEffect } from 'react'

import { getDevices } from '@devices/api/modules/devices/getDevices'

export const App = () => {
  const loadData = async () => {
    const data = await getDevices()

    console.log(data)
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className="App">
      <header className="App-header">Learn React</header>
    </div>
  )
}
