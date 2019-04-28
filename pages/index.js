import React from 'react';
import PropTypes from 'prop-types';
import getConfig from 'next/config';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import moment from 'moment';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import MUIDataTable from 'mui-datatables';

class Index extends React.Component {

  static propTypes = {
    savings: PropTypes.arrayOf(PropTypes.shape({
      project: PropTypes.number,
      description: PropTypes.string,
      'start date': PropTypes.string,
      category: PropTypes.string,
      responsible: PropTypes.string,
      'savings amount': PropTypes.number,
      currency: PropTypes.string,
      complexity: PropTypes.string,
    })),
  };

  static async getInitialProps() {
    const { DATA_URL } = getConfig().publicRuntimeConfig;
    const response = await fetch(DATA_URL);
    const savings = await response.json();
    return { savings };
  }

  getMuiTheme = () => createMuiTheme({
    overrides: {
      MUIDataTable: {
        tableRoot: {
          tableLayout: 'fixed',
        },
        responsiveScroll: {
          maxHeight: 'unset',
        },
      },
      MUIDataTableBodyCell: {
        root: {
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
      },
    },
    typography: {
      useNextVariants: true,
    },
  });

  render() {
    const { savings=[] } = this.props;
    const data = savings.map(saving => ({
      ...saving,
      currency: saving.currency !== 'NULL' ? saving.currency : '',
      'start date': moment(saving['start date']).format('DD.MM.YYYY'),
    }));
    const customBodyRender = value => (
      <Tooltip title={value}>
        <span>
          {value}
        </span>
      </Tooltip>
    );
    return (
      <main>
        <Head>
          <title>
            HFL Savings List
          </title>
        </Head>
        <MuiThemeProvider theme={this.getMuiTheme()}>
          <MUIDataTable
            title="HFL Savings List (by Henrik Franciscus Leppä)"
            data={data}
            options={{
              filter: false,
              download: false,
              print: false,
              pagination: false,
              viewColumns: false,
              selectableRows: false,
              caseSensitive: false,
            }}
            columns={[
              {
                name: 'description',
                label: 'Description',
                options: {
                  customBodyRender,
                  searchable: true,
                  sort: false,
                },
              },
              {
                name: 'project',
                label: 'Project',
                options: {
                  customBodyRender,
                  searchable: false,
                  sort: true,
                },
              },
              {
                name: 'category',
                label: 'Category',
                options: {
                  customBodyRender,
                  searchable: false,
                  sort: false,
                },
              },
              {
                name: 'responsible',
                label: 'Responsible',
                options: {
                  customBodyRender,
                  searchable: false,
                  sort: false,
                },
              },
              {
                name: 'complexity',
                label: 'Complexity',
                options: {
                  customBodyRender,
                  searchable: false,
                  sort: false,
                },
              },
              {
                name: 'savings amount',
                label: 'Savings amount',
                options: {
                  customBodyRender,
                  searchable: false,
                  sort: false,
                },
              },
              {
                name: 'currency',
                label: 'Currency',
                options: {
                  customBodyRender,
                  searchable: false,
                  sort: false,
                },
              },
              {
                name: 'start date',
                label: 'Start date',
                options: {
                  customBodyRender,
                  searchable: false,
                  sort: false,
                },
              },
            ]}
          />
        </MuiThemeProvider>
      </main>
    );
  }
}

export default Index;
