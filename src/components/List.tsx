import { Box, Center, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react'
import { IState as Props } from "../App";

interface IProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
}

interface IRemovePeopleAction {
    people: Props['people']
    key: number,
    setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
}

const removePeopleHandler: ({ }: IRemovePeopleAction) => void = ({ people, key, setPeople }) => {
    const newPeople: Props['people'] = people.filter(p => key !== p.key)
    setPeople(newPeople)


}

const List: React.FC<IProps> = ({ people, setPeople }) => {

    const renderList = (): JSX.Element[] => {
        return people.map(person => {
            return (
                <Tr _hover={{ cursor: 'pointer', backgroundColor: 'gray.200' }} transition='all 0.3s' onClick={() => removePeopleHandler({ people, key: person.key, setPeople })}>
                    <Td>
                        <Box display='flex' alignItems='center'>
                            <img className="List-img" src={person.img} />
                            <Text fontFamily='sans-serif' letterSpacing={1} color='CaptionText'>{person.name}</Text>
                        </Box>
                    </Td>
                    <Td>
                        <Text fontFamily='sans-serif' letterSpacing={1} color='CaptionText'>{person.age} years old</Text>
                    </Td>
                    <Td>
                        <Text fontFamily='sans-serif' letterSpacing={1} color='CaptionText'>{person.note}</Text>
                    </Td>
                </Tr>
            )
        })
    }

    return (
        <Center>
            <Table variant="simple" width='1xl' alignItems='center' transition='all 0.2s'>
                <Thead>
                    <Tr>
                        <Th>Vocalist</Th>
                        <Th>Age</Th>
                        <Th>Note</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {renderList()}
                </Tbody>
            </Table>
        </Center>
    )
}

export default List
