import { Button, Input, Textarea } from '@chakra-ui/react';
import React, { useState } from 'react'
import { IState as Props } from "../App";

interface IProps {
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
    people: Props["people"]
}

const AddToList: React.FC<IProps> = ({ setPeople, people }) => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        note: "",
        img: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        if (!input.name || !input.age) return

        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                img: input.img,
                note: input.note,
                key: Math.random()
            }
        ]);

        setInput({
            name: "",
            age: "",
            img: "",
            note: ""
        })
    }

    return (
        <div className="AddToList">
            <Input
                type="text"
                onChange={handleChange}
                name="name"
                value={input.name}
                placeholder="Name"
            />
            <br />
            <Input
                type="text"
                onChange={handleChange}
                name="age"
                value={input.age}
                placeholder="Age"
            />
            <br />
            <Input
                type="text"
                onChange={handleChange}
                name="img"
                value={input.img}
                placeholder="Image Url"
            />
            <br />
            <Textarea
                onChange={handleChange}
                name="note"
                value={input.note}
                placeholder="Note"
            />
            <br />
            <Button bgColor='Highlight' color='whatsapp.100' _hover={{ color: 'gray.700', backgroundColor: 'gray.200' }} onClick={handleClick}> Add to List </Button>
        </div>
    )
}

export default AddToList
