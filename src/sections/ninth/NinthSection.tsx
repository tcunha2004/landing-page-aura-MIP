import {
  Background,
  Icon,
  IconContainer,
  IconsContainer,
  IconText,
  TitleNinthSection,
} from "./styles";
import TitleImage from "../../assets/titles/seguranca_e_conveniencia.png";
import IconB from "../../assets/icons/aura_biometria.png";
import IconC from "../../assets/icons/aura_cameras.png";
import IconE from "../../assets/icons/aura_elevador.png";
import IconI from "../../assets/icons/aura_interfone.png";
import IconP from "../../assets/icons/aura_portao.png";
import IconPi from "../../assets/icons/aura_portaria.png";
import IconW from "../../assets/icons/aura_wifi.png";
import { Button } from "../../styled-components/SharebleComponents";

function NinthSection() {
  return (
    <Background>
      <TitleNinthSection src={TitleImage} />
      <IconsContainer>
        <IconContainer>
          <Icon src={IconPi} />
          <IconText>Portaria blindada 24h</IconText>
        </IconContainer>
        <IconContainer>
          <Icon src={IconC} />
          <IconText>Circuito fechado de televisão</IconText>
        </IconContainer>
        <IconContainer>
          <Icon src={IconB} />
          <IconText>
            Fechadura biométrica na porta de acesso principal do apartamento
          </IconText>
        </IconContainer>
        <IconContainer>
          <Icon src={IconE} />
          <IconText>Elevadores com código de acesso</IconText>
        </IconContainer>
        <IconContainer>
          <Icon src={IconW} />
          <IconText>Wi-fi na área de lazer</IconText>
        </IconContainer>
        <IconContainer>
          <Icon src={IconI} />
          <IconText>Interfone nas áreas comuns</IconText>
        </IconContainer>
        <IconContainer>
          <Icon src={IconP} />
          <IconText>Portão eletrônico controlado pela portaria</IconText>
        </IconContainer>
      </IconsContainer>
      <Button backgroundColor="white" border="no" color="marrom-avermelhado">
        CONVERSE COM UM CONSULTOR
      </Button>
    </Background>
  );
}

export default NinthSection;
