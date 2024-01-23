
# Native Flow UI - React Native

Ui component to react native (Expo Go, TypeScript, Styled-component and expo router v2)


## Funcionalidades

- Temas dark e light (only 2)
- Ui Declarative
- Breakpoint
- Breakpoint using values interval
- _css to css styled-component
- _platform function props to add validation ios or android

## Instalação

Instale my-project com npm

```bash
  npm install native-flow-ui
  yarn add native-flow-ui
```
Obs: versão beta é native-flow, e assim que sair a versão final, será native-flow-ui
    
## Screenshots

![App Screenshot](https://raw.githubusercontent.com/Jhow2017/native-flow-ui/main/assets/code.png)


## Uso/Exemplos

```javascript
import { Box, Link } from 'native-flow-ui';

export default function Box() {
    return (
        <Box
            flex={1}
            width={'100%'}
            justifyContent={{ xs: 'center' }}
            alignItems={{ xs: 'center', md: 'center' }}
            backgroundColor={{ xs: 'green', md: 'red' }}
            // backgroundColor={{
            //     ':w[200,500]': 'green',
            //     ':w[500,900]': 'blue',
            // }}
            // _platform={(e) => ({
            //     backgroundColor: e.OS === 'ios' ? 'red' : 'blue',
            //     marginTop: e.OS === 'ios' ? 150 : 300,
            // })}
            // _css={'background-color: red;'}
            // _css={{
            //     xs: 'background-color: blue;',
            //     md: 'background-color: green; ',
            // }}
        >
            <Link href="/" fontSize={32}>
                Voltar
            </Link>
        </Box>
    );
}

```


## Stack utilizada

**Front-end:** React, React-Native, Expo Router V2 (Link),expo-status-bar, TypeScript, styled-component e moti.


## Autores

- [@jhowgama](https://www.linkedin.com/in/jonathan-gama-2365a4187/)

