import React from "react"
import styled from "@emotion/styled"
import { MdDone } from "react-icons/md"

function BodyForm({ textArr, remove, onChecked }) {
    // const [checked, setChecked] = useState(false)

    return (
        <TodoBody>
            <TodoItemBox>
                <TodoText>
                    <ul>
                        {textArr.map(({ text, checked }, index) => (
                            <li key={`${text}${index}`}>
                                <ContentContainer>
                                    <CheckBoxContainer onClick={() => onChecked(index)}>
                                        {checked && <MdDone />}
                                    </CheckBoxContainer>
                                    <span className={checked ? "checked" : undefined}>{text}</span>
                                </ContentContainer>
                                <TodoRemove onClick={() => remove(index)}>x</TodoRemove>
                            </li>
                        ))}
                    </ul>
                </TodoText>
            </TodoItemBox>
        </TodoBody>
    )
}

const TodoBody = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`

const TodoItemBox = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 0;
`
const TodoText = styled.div`
    & > ul {
        & > li {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 385px;
            list-style-type: none;
            padding: 12px 0;
            & span {
                font-size: 25px;
            }

            & .checked {
                opacity: 0.2;
            }
        }
    }
`

const ContentContainer = styled.div`
    display: flex;
    align-items: center;
`

const CheckBoxContainer = styled.div`
    width: 32px;
    height: 32px;
    font-size: 30px;
    border-radius: 16px;
    border: ${(props) => (props.checked ? "1px solid #ced4da" : "1px solid #38d9a9")};
    background: white;
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #38d9a9;

    &:hover {
        border: 1px solid #38d9a9;
    }
`

const TodoRemove = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    color: #dee2e6;
    cursor: pointer;
    font-size: 25px;
    &:hover {
        color: #ff6b6b;
    }
`

export default BodyForm
