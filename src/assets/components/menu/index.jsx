import Links from "./Links";
import Logo from "./Logo";
import * as S from "./style"
export default function Menu (){

    return (
        <>
            <S.Menu>
                <header>
                    <Logo/>
                    <Links/>
                </header>
            </S.Menu>
        </>
    )
}