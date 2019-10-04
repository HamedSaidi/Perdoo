import { parseItems } from './'

describe.only('#Helpers: parseItems', () => {
  it('should work properly', () => {
    const data = [{
      id: '1',
      attributes: { name: 'name' },
      meta: { copyright: 'copyright' }
    }]
    const tab = 'blogs'

    const expectedResult = [
      [
        {label: 'id', value: '1'},
        {label: 'name', value: 'name'},
        {label: 'copyright', value: 'copyright'}
      ]
    ]

    expect(parseItems(data, tab)).toEqual(expectedResult);
  });
});
