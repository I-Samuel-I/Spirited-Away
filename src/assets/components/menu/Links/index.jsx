import * as Icons from "../../img/index";
import * as S from "./style"
export default function Links (){
    return (
        <>
            <S.Links>
                <nav>
                    <ul>
                        <li>
                            <a href="https://www.bing.com/search?q=spirited+away&qs=OS&pq=spirte+away&sk=HS1&sc=11-11&cvid=F844F30C20C543E7B4291DA23CAF898D&FORM=QBRE&sp=2&lq=0" target="_blank" >
                            <img src={Icons.GoogleLogo}/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/groups/1289832838048931" target="_blank">
                                <img src={Icons.FacebookLogo}/>
                            </a>
                        </li>
                        <li>
                            <a href="https://x.com/anime_twits" target="_blank">
                                <img src={Icons.TwitterLogo}/>
                            </a>        
                        </li>
                        <li>
                            <a href="https://www.instagram.com/sam.pongp/#" target="_blank">
                                <img src={Icons.InstagramLogo}/>
                            </a>
                        </li>
                    </ul>
                </nav>
            </S.Links>
        </>
    )
}