import * as S from "./style"
import * as Images from "../img/index"
export default function Buttons() {

    return (
        <>
            <S.Button>
                <a href="https://www.netflix.com/br/title/60023642" target="_blank" className="primary">
                <img src={Images.Play}/>
                ASSISTA AGORA</a>
                <a href="https://www.youtube.com/watch?v=SgZI655GgHk" target="_blank" className="secondary">
                ASSISTA O TRAILER
                </a>
            </S.Button>
        </>
    )
}
