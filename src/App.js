import styled from "@emotion/styled"
import { useState } from "react"
import { css, Global } from "@emotion/react"
import HeadForm from "./Head"
import BodyForm from "./Body"
import InsertForm from "./Insert"

function App() {
    const [text, setText] = useState("")
    const [textArr, setTextArr] = useState([])

    const onKeyUp = (e) => {
        e.preventDefault()
        if (e.key === "Enter") {
            setTextArr((prev) => [...prev, { text, checked: false }])
            setText("")
        }
    }

    const onInput = (e) => setText(e.target.value)

    const Remove = (target) => {
        setTextArr((prev) => prev.filter((_, index) => index !== target))
    }

    const onChecked = (target) => {
        setTextArr((prev) =>
            prev.map((prevText, index) =>
                target === index ? { ...prevText, checked: !prevText.checked } : prevText
            )
        )
    }

    return (
        <>
            <Global styles={GlobalStyle} />
            <TodoTemplate>
                <HeadForm />
                <BodyForm remove={Remove} textArr={textArr} onChecked={onChecked} />
                <InsertForm text={text} onKeyUp={onKeyUp} onInput={onInput} />
            </TodoTemplate>
        </>
    )
}

const TodoTemplate = styled.div`
    width: 512px;
    height: 765px;

    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    position: relative;

    border-radius: 16px;
    background: white;
    margin-top: 95px;
    margin-bottom: 30px;
    box-shadow: 0 0 8px 0 rgb(0, 0, 0, 0.04);
`

const GlobalStyle = css`
    body {
        background: rgb(233, 236, 239);
    }
`
export default App
