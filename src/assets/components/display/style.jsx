import styled from "styled-components";
import { CursorDefault, CursorSelect } from "../img/index";
export const Display = styled.main `
    
    cursor: url(${CursorDefault}), auto;
    a,button,input{
        cursor: url(${CursorSelect}), auto;
    }
    ::selection{
        cursor: url(${CursorSelect}), auto;
    }


`;