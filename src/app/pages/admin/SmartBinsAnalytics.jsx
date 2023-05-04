import { styled } from '@mui/material';
import { Fragment } from 'react';

const ContentBox = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
}));

const SmartBinsAnalytics = () => {

	return (
		<Fragment>
			<ContentBox className="admin-analytics">
			</ContentBox>
		</Fragment>
	);
};

export default SmartBinsAnalytics;
