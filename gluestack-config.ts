import {createConfig, config as defaultConfig} from '@gluestack-ui/themed';
const config = createConfig({
  ...defaultConfig.theme,
  tokens: {
    ...defaultConfig.theme.tokens,
    colors: {
      ...defaultConfig.theme.tokens.colors,
      primary0: '#ffffff',
      primary50: '#a3fff4',
      primary100: '#82fff0',
      primary200: '#61ffed',
      primary300: '#45fae5',
      primary400: '#24f9e1',
      primary500: '#17f3d9',
      primary600: '#12e4cb',
      primary700: '#17ccb7',
      primary800: '#1ab5a3',
      primary900: '#1c9f90',
      primary950: '#000000',
      blue600: '#282561',
      grey800: '#555556',
    },
    fonts: {
      heading: 'Montserrat',
      body: 'Montserrat',
      mono: 'Montserrat',
    },
  },
  components: {
    Text: {
      theme: {
        variants: {
          uppercase: {
            true: {
              textTransform: 'uppercase',
            },
          },
        },
      },
    },
    Button: {
      theme: {
        variants: {
          variant: {
            outline: {
              bg: 'transparent',
              h: '$12',
              borderWidth: '$1',
              borderColor: '$blue600',
              color: '$blue600',
              ':hover': {
                bg: '$backgroundLight50',
                borderColor: '$grey800',
              },
              ':active': {
                bg: 'transparent',
                borderColor: '$grey800',
              },
              _dark: {
                bg: 'transparent',
                ':hover': {
                  bg: '$backgroundDark900',
                },
                ':active': {
                  bg: 'transparent',
                },
              },
              _text: {
                color: '$primary100',
                // fontSize: '$xs',
                // lineHeight: '$sm',
                textTransform: 'uppercase',
                // fontWeight: '$bold',
                ':hover': {
                  color: '$grey800',
                },
                ':active': {
                  color: '$grey800',
                },
              },
              _icon: {
                color: '$blue600',
                ':hover': {
                  color: '$grey800',
                },
                ':active': {
                  color: '$grey800',
                },
              },
            },
          },
          size: {
            md: {
              px: '$5',
              h: '$12',
              _icon: {
                h: '$4.5',
                w: '$4.5',
              },
              _text: {
                fontSize: '$xs',
                lineHeight: '$md',
                fontWeight: '$bold'
              },
            },
          },
        },
      },
      componentConfig: {
        descendantStyle: ['_text', '_spinner', '_icon'],
      },
    },
  },
});

export {config};

// Get the type of Config
type ConfigType = typeof config;

// Extend the internal styled config
declare module '@gluestack-ui/themed' {
  interface UIConfig extends ConfigType {}
}