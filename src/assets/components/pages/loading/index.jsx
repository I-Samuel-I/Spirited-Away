import * as Image from "../../img/index";
import * as S from "./style";

export default function Index() {
    return (
        <>
            <S.GlobalStyle />
            <section>
                <figure>
                    <img src={Image.Loading} alt="loading" />
                </figure>
                <h1>
                    CARREGANDO
                    <div className="dots">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                </h1>
            </section>
        </>
    );
}
