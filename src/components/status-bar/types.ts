import { StatusBarAnimation, StatusBarProps, StatusBarStyle } from 'expo-status-bar';

export interface StatusBarType extends StatusBarProps {
    style: StatusBarStyle;
    setBackgroundColor?: [string, boolean?]; // Cor de fundo e opcionalmente se é animado
    setHidden?: [boolean, StatusBarAnimation?]; // Esconder e opcionalmente a animação
    setNetworkActivityIndicatorVisible?: boolean; // Visibilidade do indicador de atividade de rede
    setTranslucent?: boolean; // Translucidez da barra de status
}
