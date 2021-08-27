import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';
import { Box } from '@chakra-ui/react';

export interface IState {
  people: {
    name: string
    age: number
    img: string
    note?: string
    key: number
  }[]
}


function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Alex Terrible",
      age: 29,
      img: "https://i1.sndcdn.com/artworks-000252471107-ra8k3x-t500x500.jpg",
      note: "His voice so frekin brutal",
      key: 0
    },
    {
      name: "Phill Bozeman",
      age: 32,
      img: "https://i.ytimg.com/vi/M0uhctjISfo/maxresdefault.jpg",
      key: 1,
    }
  ])

  return (
    <div className="App">
      <Box fontSize='5xl'>Deathcore Vocalist List</Box>
      <List setPeople={setPeople} people={people} />
      <AddToList setPeople={setPeople} people={people} />
    </div>
  );
}

export default App;
