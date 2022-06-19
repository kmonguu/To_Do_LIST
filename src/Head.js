import React from "react"
import styled from "@emotion/styled"

function HeadForm() {
    return (
        <TodoHead>
            <h1>2022년 3월 22일</h1>
            <Week>월요일</Week>
            <TodoAmount>오늘의 할 일</TodoAmount>
        </TodoHead>
    )
}
const TodoHead = styled.div`
    padding: 48px 32px 32px 24px;
    border-bottom: 1px solid #e9ecef;

    h1 {
        margin: 0;
        font-size: 36px;
        color: #343a40;
    }
`

const Week = styled.div`
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
`

const TodoAmount = styled.div`
    font-size: 18px;
    color: rgb(32, 201, 151);
    margin-top: 40px;
    font-weight: bold;
`
export default HeadForm
