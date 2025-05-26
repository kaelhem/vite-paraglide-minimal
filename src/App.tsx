import { m } from '@/paraglide/messages'

function App() {
  return (
    <div>
      { m.example_message({ username: "world" }) }
    </div>
  )
}

export default App
