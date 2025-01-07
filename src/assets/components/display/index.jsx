import * as S from "./style"
import Featured from "../featured";
import Menu from "../menu";

export default function Display (){

    return (
        <>
        <S.Display>
                <main>
                    <Menu/>
                    <Featured/>
                </main>  
        </S.Display>
        </>
    )
}