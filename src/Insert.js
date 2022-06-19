import React from "react"
import styled from "@emotion/styled"
import { useState } from "react"

function InsertForm({ text, onKeyUp, onInput }) {
    const [open, setOpen] = useState(false)

    const onInputForm = () => setOpen(!open)

    return (
        <>
            <TodoCreateBox>
                <TodoCreateButton onClick={onInputForm} open={open}>
                    +
                </TodoCreateButton>
            </TodoCreateBox>

            {open && (
                <InsertFormPositioner>
                    <Insert>
                        <Input
                            value={text}
                            onChange={onInput}
                            autoFocus
                            placeholder='할 일을 입력해주세요'
                            onKeyUp={onKeyUp}
                        />
                    </Insert>
                </InsertFormPositioner>
            )}
        </>
    )
}

const TodoCreateBox = styled.div``

const TodoCreateButton = styled.button`
    background: #38d9a9;
    &:hover {
        background: #63e6be;
    }
    &:active {
        background: #20c997;
    }

    z-index: 5;
    cursor: pointer;
    width: 80px;
    height: 80px;
    display: block;
    align-items: center;
    justify-content: center;
    font-size: 60px;
    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translate(-50%, 50%);
    color: white;
    border-radius: 50%;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.125s all ease-in;
`

const InsertFormPositioner = styled.div`
    width: 100%;
    bottom: 0;
    left: 0;
    position: absolute;
`

const Insert = styled.div`
    background: #f8f9fa;
    padding-left: 32px;
    padding-top: 32px;
    padding-right: 32px;
    padding-bottom: 72px;

    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top: 1px solid #e9ecef;
`

const Input = styled.input`
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    width: 100%;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
`

export default InsertForm
