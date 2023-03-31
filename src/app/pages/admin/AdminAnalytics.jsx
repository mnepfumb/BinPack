import { Card, Grid, styled, useTheme } from '@mui/material';
import { Fragment } from 'react';
import DoughnutChart from 'app/pages/admin/components/Doughnut';
import RowCards from './components/WasteCategories/RowCards';
import StatCards from 'app/pages/admin/components/StatCards';
import StatCards2 from 'app/pages/admin/components/StatCards2';
import TopSellingTable from './components/TopSellingTable';
import SimpleCard from 'app/components/SimpleCard';
import ComparisonChart2 from 'app/pages/admin/components/ComparisonChart2';
import ModifiedAreaChart from 'app/pages/dashboard/shared/ModifiedAreaChart';

import CategoryChart from './components/WasteCategories/CategoryChart';
import CategoryDoughnut from './components/WasteCategories/CategoryDoughnut';
import CategoriesTable  from './components/WasteCategories/CategoriesTable';

import WasteTypesChart from './components/WasteTypes/WasteTypesChart';
import WasteTypesDoughnut from './components/WasteTypes/WasteTypesDoughnut';
import WasteTypesTable  from './components/WasteTypes/WasteTypesTable';

const ContentBox = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  marginRight: '.5rem',
  textTransform: 'capitalize',
}));

const SubTitle = styled('span')(({ theme }) => ({
  fontSize: '0.875rem',
  color: theme.palette.text.secondary,
}));

const H4 = styled('h4')(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: '500',
  marginBottom: '16px',
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
}));

// const Container = styled('div')(({ theme }) => ({
//   margin: '30px',
//   [theme.breakpoints.down('sm')]: {
//     margin: '16px',
//   },
//   '& .breadcrumb': {
//     marginBottom: '30px',
//     [theme.breakpoints.down('sm')]: {
//       marginBottom: '16px',
//     },
//   },
// }));

const AdminAnalytics = () => {
	const { palette } = useTheme();
	const theme = useTheme();
	const Purple = '#800080';
	const Fuchsia = '#FF00FF';
	const Navy = '#000080';
	const Blue = '#0000FF';
	const Teal = '#008080';
	const Aqua = '#00FFFF';
	const Green = '#008000';
	const Olive = '#808000';
	const Silver = '#C0C0C0';

	const rosybrown = '#8B6969';
	const cadmiumorange = '#FF6103';
	const peachpuff = '#CDAF95';
	const wheat3 = '#CDBA96';
	const khaki4 = '#8B864E';
	const cyan3 = '#00CDCD';
	const paleturquoise4 = '#668B8B';
	const dodgerblue = '#1E90FF';
	const lightslateblue = '#8470FF';
	const blueviolet = '#8A2BE2';
	const lightpink4 = '#8B5F65';
	const rosybrown4 = '#8B6969';
	const antiquewhite4 = '#8B8378';

	return (
		<Fragment>
			<ContentBox className="admin-analytics">
				<SimpleCard title="Waste Categories" sx={{ mb: '24px' }}>
					<SimpleCard  sx={{ mb: '24px' }}>
						<CategoryChart
							height="450px"
							colors={[
								Silver, Olive, Green, Aqua, Teal, Navy, Fuchsia, Blue, Purple
							]}
						/>
					</SimpleCard>
					<Grid container spacing={3}>
						<Grid item lg={6} md={8} sm={12} xs={12}>
							<SimpleCard  sx={{ mb: '24px' }}>
							<CategoriesTable />
							</SimpleCard>
						</Grid>
						<Grid item lg={6} md={8} sm={12} xs={12}>
							<SimpleCard  sx={{ mb: '24px' }}>
							<Card sx={{ px: 3, py: 2, mb: 3 }}>
								<Title>Tasks</Title>
								<SubTitle>Last 30 days</SubTitle>

								<CategoryDoughnut
									height="490px"
									color={[ Silver, Olive, Green, Aqua, Teal, Navy, Fuchsia, Blue, Purple ]}
								/>
							</Card>
							</SimpleCard>
						</Grid>
					</Grid>
				</SimpleCard>

				<SimpleCard title="Waste Types" sx={{ mb: '24px' }}>
					<SimpleCard  sx={{ mb: '24px' }}>
						<WasteTypesChart
							height="550px"
							colors={[
								Silver, Olive, Green, Aqua, Teal, Navy, Fuchsia, rosybrown, Blue, Purple, cadmiumorange,
								wheat3, khaki4, peachpuff, paleturquoise4, cyan3, dodgerblue, lightslateblue, blueviolet,
								lightpink4 //, rosybrown4, antiquewhite4
							]}
						/>
					</SimpleCard>
					<Grid container spacing={3}>
						<Grid item lg={6} md={8} sm={12} xs={12}>
							<SimpleCard  sx={{ mb: '24px' }}>
							<WasteTypesTable />
							</SimpleCard>
						</Grid>
						<Grid item lg={6} md={8} sm={12} xs={12}>
							<SimpleCard  sx={{ mb: '24px' }}>
							<Card sx={{ px: 3, py: 2, mb: 3 }}>
								<Title>Tasks</Title>
								<SubTitle>Last 30 days</SubTitle>

								<WasteTypesDoughnut
									height="490px"
									color={[ Silver, Olive, Green, Aqua, Teal, Navy, Fuchsia, Blue, Purple ]}
								/>
							</Card>
							</SimpleCard>
						</Grid>
					</Grid>
				</SimpleCard>

				<SimpleCard title="Waste Status" sx={{ mb: '24px' }}>
					<SimpleCard title="Diverted Waste Types">
						<ComparisonChart2
							height="500px"
							color={[theme.palette.primary.dark, theme.palette.primary.light]}
						/>
					</SimpleCard>
				</SimpleCard>

				<Grid container spacing={3}>
					<Grid item lg={8} md={8} sm={12} xs={12}>
						
					<ModifiedAreaChart />
						<SimpleCard title="ESG Reporting">
							<StatCards />
						</SimpleCard>

						<TopSellingTable />

						<H4>Ongoing Projects</H4>
						<RowCards />
					</Grid>
					<Grid item lg={4} md={4} sm={12} xs={12}>
						<Card sx={{ px: 3, py: 2, mb: 3 }}>
							<Title>Tasks</Title>
							<SubTitle>Last 30 days</SubTitle>

							<DoughnutChart
								height="300px"
								color={[palette.primary.dark, palette.primary.main, palette.primary.light]}
							/>
						</Card>
						<StatCards2 />
						{/* <UpgradeCard />
						<Campaigns /> */}
					</Grid>
				</Grid>
			</ContentBox>
		</Fragment>
	);
};

export default AdminAnalytics;
