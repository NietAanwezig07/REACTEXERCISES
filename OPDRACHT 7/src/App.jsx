import './App.css'
import ItemList from './components/ItemList'
import Header from './components/Header'
import Layout from './components/Layout'

function App() {

  return (
    <>
<Layout>
  <Header headerText="Our Menu"/>
  <ItemList />
</Layout>
    </>
  )
}

export default App
