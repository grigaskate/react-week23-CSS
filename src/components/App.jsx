import '../style/App.css';
import Cards from './Cards/Cards'

const data=[
  {
    rate: '300',
    speed: '10',
    color: 'blue',
    flag: false
  },
  {
    rate: '450',
    speed: '50',
    color: 'pink',
    flag: false
  },
  {
    rate: '550',
    speed: '100',
    color: 'red',
    flag: true
  },
  {
    rate: '1000',
    speed: '200',
    color: 'yellow',
    flag: false
  },
]

function App() {
  return (
    <div className="container">
    < Cards arr={data}/>
    </div>
  );
}


export default App;

