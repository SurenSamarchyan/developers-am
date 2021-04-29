export const palette = {
    primary: {
        main: '#ff0230',
        hover: '#d80e32',
        active: '#bc1639',
        disabled: '#d9d9d9',
    },
    secondary: {
        main: '#00ffcf',
        hover: '#29ccab',
        active: '#219c87',
        disabled: '#d9d9d9',
    },
    signal: {
        orange: '#ff7102',
        pink: '#ff00dd',
        purple: '#5812c7',
    },

    // BW pallet
    white: '#ffffff',
    veryLightGrey: '#f2f2f2',
    lightGrey: '#d9d9d9',
    grey: '#a6a6a6',
    darkGrey: '#3d3d3d',
    smoke: '#171d20',
    black: '#000000',

    // Red types
    neonRed: '#ff0230',
    darkNeonRed: '#d80e32',
    red: '#bc1639',
    darkRed: '#951e3d',
    veryDarkRed: '#6f1b34',

    // Mint types
    lightNeonMint: '#00ffcf',
    neonMint: '#29ccab',
    mint: '#219c87',
    darkNeonMint: '#217363',
    veryDarkNeonMint: '#215049',

    // Other
    orange: '#ff7102',
    pink: '#ff00dd',
    purple: '#5812c7',
}

export const buttonPalette = {
    primary: {
        btnColor: palette.primary.main,
        txtColor: palette.white,
    },
    complimentary: {
        btnColor: palette.black,
        txtColor: palette.white,
    },
    secondary: {
        btnColor: palette.secondary.main,
        txtColor: palette.black,
    },
    accent: {
        btnColor: palette.white,
        txtColor: palette.primary.main,
    },
}

export const alertPalette = {
    warning: {
        main: palette.signal.orange,
        background: '#fff3e5',
    },
    error: {
        main: palette.signal.purple,
        background: '#ffe5e5',
    },
}
