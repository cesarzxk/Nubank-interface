import React from "react";
import {Animated, StyleSheet, View, StatusBar, Text} from "react-native";
import logo from "./assets/Nubank_Logo.png";
import {Top,Title,TitleCard,Card,CardContent,CardFooter,CardHeader,Description,Logo,TabItem,TabText,
TabsContainer, Content,Annotation,Menu,Code,TextMenu, TextMenuBold, Nav, NavItem, NavText} from './Style/Styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();
import QRCode from 'react-native-qrcode-svg';
import {PanGestureHandler, State} from 'react-native-gesture-handler';



/** Main **/

export default function Main(){
/** Corpo da aplicação **/

let offset = 0;
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver:true }

    )

  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;

      const { translationY } = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,

      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

 return(

<>
  <View style={styles.container}>

  <View style={styles.header}>
    <Top>
    <Logo source={logo}/>
    <Title> César </Title>
    </Top>
    <Icon name ='keyboard-arrow-down' size={20} color="#FFF"/>
    </View>

    <Content>
      <Menu>
        <Code>
          <QRCode value = "https://nubank.com.br/" Size={30} color ="#8B10AE" backgroundColor="#FFF"/>
        </Code>
        <TextMenu>Banco<TextMenuBold> 260 - Nu Pagamentos</TextMenuBold></TextMenu>
        <TextMenu>Agência<TextMenuBold> 0001</TextMenuBold></TextMenu> 
        <TextMenu>Conta<TextMenuBold> 17688328-3</TextMenuBold></TextMenu> 
        <Nav>
          <NavItem>
            <NavText><Icon name="help-outline" size={20} color="#FFF"/> Me ajuda</NavText>
          </NavItem>
          <NavItem>
            <NavText><Icon name="credit-card" size={20} color="#FFF"/> Pedir função débido</NavText>
          </NavItem>
          <NavItem>
            <NavText><Icon name="person-outline" size={20} color="#FFF"/> Pefil</NavText>
          </NavItem>
          <NavItem>
            <NavText><Icon name="help-outline" size={20} color="#FFF"/> Congurar conta</NavText>
          </NavItem>
          <NavItem>
            <NavText><Icon name="credit-card" size={20} color="#FFF"/> Configurar Cartão</NavText>
          </NavItem>
          <NavItem>
            <NavText><Icon name="help-outline" size={20} color="#FFF"/> Pedir conta PJ</NavText>
          </NavItem>
          <NavItem>
            <NavText><Icon name="smartphone" size={20} color="#FFF"/> Configuração do app</NavText>
          </NavItem>
        </Nav>
      </Menu>
      
      <PanGestureHandler 
      onGestureEvent={animatedEvent} 
      onHandlerStateChange={onHandlerStateChanged}>

      <Card style={{
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-350, 0, 380],
                outputRange: [-50, 0, 380],
                extrapolate: 'clamp',
              }),
            }]
          }}>
        <CardHeader>
          <Icon name="attach-money" size={28} color='#666'/>
          <Icon name="visibility-off" size={28} color='#666'/>
        </CardHeader>
        <CardContent>
          <TitleCard>Saldo disponível</TitleCard>
          <Description>R$ 1.500.000,00</Description>
        </CardContent>
        <CardFooter>
          <Annotation>Resgate de R$500.000,00 do dinheiro guardado hoje</Annotation>
        </CardFooter>
      </Card>
      </PanGestureHandler>

    </Content>
    

  
    <TabsContainer>
      <TabItem>
        <Icon name='person-add' size={24} color='#FFF'/>
        <TabText>Indicar amigos</TabText>
      </TabItem>
      <TabItem>
        <Icon name='settings-cell' size={24} color='#FFF'/>
        <TabText>Recarrega de celular</TabText>
      </TabItem>
      <TabItem>
        <Icon name='chat' size={24} color='#FFF'/>
        <TabText>Dividir valor</TabText>
      </TabItem>
      <TabItem>
        <Icon name='send' size={24} color='#FFF'/>
        <TabText>Doação</TabText>
      </TabItem>
      <TabItem>
        <Icon name='person-add' size={24} color='#FFF'/>
        <TabText>Empréstimo</TabText>
      </TabItem>
    </TabsContainer>

  </View>

  <StatusBar barStyle="light-content" backgroundColor ="#8B10AE" />
</>
);
}

/** Style Sheet das tags View correspondentes a container e header **/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#8B10AE",
    justifyContent: "center",
    zIndex: 5
  },
  header:{
    padding: 10,
    alignItems: 'center'
  },
});


