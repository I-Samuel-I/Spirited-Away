import * as S from "./style";
import * as Image from "../img/index";
import Buttons from "../buttons";
export default function Featured (){
    return (
        <>
            <S.Featured>
                <section>
                    <S.Content>
                         <h6>HAYAO MIYAZAKI</h6>
                        <h1>A VIAGEM <br/>DE CHIHIRO</h1>
                        <p>Chihiro chega a um mundo mágico dominado<br/>
                        por uma bruxa. Aqueles que a desobedecem<br/> 
                        são transformados em animais.</p>
                        <Buttons/>
                    </S.Content>
                    <img src={Image.Ghosts}/>
                    
                </section> 
            </S.Featured>
        
        </>
    )
}