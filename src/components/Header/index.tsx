import logoImg from '../../assets/logo.png';
import { Container, Content } from "./styles";

interface HeaderProps {
    onOpenTransactionModal: () => void
}

export function Header({onOpenTransactionModal} : HeaderProps) {
    return (
        <Container>
            <Content>
               <div>
                <img src={logoImg} alt="dt money"/>
                <span>je tickets</span>
               </div>
                <button type="button" onClick={onOpenTransactionModal} >
                    Novo Cadastro
                </button>
            </Content>
        </Container>
    );
}