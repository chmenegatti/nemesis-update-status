const GetDataService = require('./getDataService');
const query = require('../database/query');

jest.mock('../database/query');

describe('GetDataService', () => {
  it('should return data when query.get resolves', async () => {
    const mockData = { id: 1, name: 'Test Data' };
    query.get.mockResolvedValue(mockData);

    const tableName = 'yourTableName';
    const id = 1;

    const service = GetDataService;
    const result = await service.execute(tableName, id);

    expect(result).toEqual(mockData);
  });

  it('should throw an error when query.get rejects', async () => {
    const mockError = new Error('Test Error');
    query.get.mockRejectedValue(mockError);

    const tableName = 'yourTableName';
    const id = 1;

    const service = GetDataService;

    await expect(service.execute(tableName, id)).rejects.toThrow(mockError);
  });
});
