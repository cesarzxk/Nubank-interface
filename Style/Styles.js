import {Animated} from 'react-native';
import styled from 'styled-components/native';
import {StyleSheet} from "react-native";
/** Parte de manipulação do titulo Nubank principal do aplicativo */

export const Logo = styled.Image``;


export const Top = styled.View`
  flex-direction: row;
  alignItems:center;
  marginBottom:9px;
  margin-left: 8px;
  `;
  

export const Title = styled.Text`
  font-size:20px;
  color:#FFF;
  font-weight: bold;
  `;


/** Parte de manipulação do card principal do aplicativo */

export const Menu = styled.ScrollView.attrs({showsVerticalScrollIndicator: false})` marginTop: 10;`;


export const Code = styled.View`
background: #FFF;
padding: 10px;
align-Self: center;
`;
  
export const TextMenu = styled.Text`
marginTop:2px;
color:#FFF;
align-Self: center;
`;
export const TextMenuBold = styled.Text`
font-weight: bold;
align-Self: center;
`;


export const Nav = styled.View`
margin-Top:30px;
border-top-width:${StyleSheet.hairlineWidth};
border-top-color:rgba(255,255,255,0.5);
`;


export const NavItem = styled.View`
padding:12px;
border-Bottom-width:${StyleSheet.hairlineWidth};
border-bottom-color:rgba(255,255,255,0.5);

`;


export const NavText = styled.Text`
color: #FFF;
fontSize:12px;
`;


/** Parte de manipulação do card principal do aplicativo */

export const Content = styled.View`
  flex: 1;
  max-height: 700px;
  `;
  

export const Card = styled(Animated.View)`
  flex: 1;
  background:#FFF;
  border-radius: 0.20px;
  height: 100%;
  position: absolute;
  left: 0 ;
  right: 0 ;
  top: 0;
  `;
  

export const CardHeader = styled.View`
  justifyContent:space-between;
  flex-direction:row;
  alignItems: center;
  padding: 30px
  `;
  

export const CardContent = styled.View`
  flex: 1;
  justify-Content: center;
  padding-left: 30;
  
  `;
  

export const TitleCard = styled.Text`
  fontSize: 13px;
  color: #999;
  `;
  

export const Description = styled.Text`
  fontSize: 32px;
  marginTop:3px;
  color:#333;
  `;
  

export const CardFooter = styled.View`
  padding: 30px;
  background: #eee;
  color: #333;
  border-radius:4px;`;
  

export const Annotation = styled.Text`
  fontSize: 12px;
  color: #333;
  `;
  

/** Parte de manipulação dos da tabnela de icones do aplicativo */

export const TabsContainer = styled.ScrollView.attrs({
    horizontal: true,
    contentContainerStyle:{paddingLeft:0, paddingRight:20},
    showsHorizontalScrollIndicator: false
  })`max-height:110;`;
  
export const TabItem = styled.View`
  width:100px;
  height:100px;
  background:rgba(255,255,255,0.2);
  border-radius:3px;
  marginLeft:8px;
  marginTop:15px;
  padding_left: 10px;
  padding:10px;
  justifyContent: space-between;
  `;
  

export const TabText = styled.Text`
  fontSize: 13px;
  color: #FFF;
  `;
