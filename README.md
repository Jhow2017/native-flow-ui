
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
  npm install native-flow
  yarn add native-flow
```
    
## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Uso/Exemplos

```javascript
import { DsBox, DsLink } from 'native-flow-ui';

export default function Box() {
    return (
        <DsBox
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
            <DsLink href="/" fontSize={32}>
                Voltar
            </DsLink>
        </DsBox>
    );
}

```


## Stack utilizada

**Front-end:** React, Expo Router V2 (Link),expo-status-bar, TypeScript, styled-component e moti.


## Autores

- [@jhowgama](https://www.linkedin.com/in/jonathan-gama-2365a4187/)

