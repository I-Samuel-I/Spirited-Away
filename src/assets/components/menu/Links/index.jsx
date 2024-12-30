import * as Icons from "../../img/index";
import * as S from "./style"
export default function Links (){
    return (
        <>
            <S.Links>
                <nav>
                    <ul>
                        <li>
                            <img src={Icons.GoogleLogo}/>
                        </li>
                        <li>
                            <img src={Icons.FacebookLogo}/>
                        </li>
                        <li>
                            <img src={Icons.TwitterLogo}/>
                        </li>
                        <li>
                            <img src={Icons.InstagramLogo}/>
                        </li>
                    </ul>
                </nav>
            </S.Links>
        </>
    )
}