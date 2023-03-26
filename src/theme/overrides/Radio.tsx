// ==============================|| OVERRIDE: RADIO ||============================== //

const Radio = (theme: any) => {
    return {
        MuiRadio: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(1),
                    svg: {
                        fontSize: 24,
                        '&[font-size=small]': {
                            fontSize: 20,
                        },
                    },
                },
            },
        },
    };
};

export default Radio;