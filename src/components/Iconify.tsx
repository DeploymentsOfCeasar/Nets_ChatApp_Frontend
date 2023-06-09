import PropTypes from 'prop-types';
// icons
import { Icon } from '@iconify/react';
// @mui
import { Box } from '@mui/material';

// ==============================|| COMPONENT: ICONIFY ||============================== //

const Iconify = ({ icon, sx, ...other }: any) => {
    return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
};

Iconify.propTypes = {
    icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    sx: PropTypes.object,
};

export default Iconify;
