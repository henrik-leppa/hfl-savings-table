import React from 'react';
import { mount } from 'enzyme';
import moment from 'moment';
import MUIDataTable from 'mui-datatables';
import Index from '../pages/index';
import renderer from 'react-test-renderer';

const savings = [
  {
    "project": 5,
    "description": "Buy cheaper paper clips",
    "start date": "2019-06-13T00:00:00+00:00",
    "category": "Office supplies",
    "responsible": "John Doe",
    "savings amount": 1000.00,
    "currency": "NULL",
    "complexity": "Medium"
  },
];

describe('Pages', () => {

  describe('Index', () => {

    const wrapper = mount(<Index savings={savings} />);

    it('renders', () => {
      expect(wrapper.find('td').at(1).text())
        .toBe(savings[0].description);
    });

    it('renders correctly', () => {
      const tree = renderer.create(<Index savings={savings} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('allows sorting by project', () => {
      const { columns } = wrapper.find(MUIDataTable).props();
      const projectColumn = columns.find(column => column.name === 'project');
      const { sort } = projectColumn.options;
      expect(sort === true || sort === undefined)
        .toBe(true);
    });

    it('allows searching only by description', () => {
      const { columns } = wrapper.find(MUIDataTable).props();
      expect(columns.every(column => {
        const { searchable } = column.options;
        if (column.name === 'description') {
          return searchable === true || searchable === undefined;
        }
        else {
          return searchable === false;
        }
      })).toBe(true);
    });

    it('searches case-insensitively', () => {
      const { caseSensitive } = wrapper.find(MUIDataTable).props().options;
      expect(caseSensitive === false || caseSensitive === undefined)
        .toBe(true);
    });

    it('renders dates in format: `DD.MM.YYYY`', () => {
      const { data } = wrapper.find(MUIDataTable).props();
      expect(data[0]['start date'])
        .toBe(moment(savings[0]['start date']).format('DD.MM.YYYY'));
    });

    it('renders "NULL" values as empty cells', () => {
      const { data } = wrapper.find(MUIDataTable).props();
      expect(savings[0].currency)
        .toBe('NULL');
      expect(data[0].currency)
        .toBe('');
    });
  });
});
