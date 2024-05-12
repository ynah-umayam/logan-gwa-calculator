import { FileSizePipe } from './file-size.pipe';

describe('FileSizePipe', () => {
  let pipe: FileSizePipe;

  beforeEach(() => {
    pipe = new FileSizePipe();
  });

  it('should return 0 Bytes if size is zero', () => {
    const result = pipe.transform(0, 1);
    expect(result).toEqual('0 Bytes');
  });
  it('should return size in MB with one decimal place', () => {
    const result = pipe.transform(2330371, 1);
    expect(result).toEqual('2.3 MB');
  });
  it('should return size in MB with 2 decimal place', () => {
    const result = pipe.transform(2330371, 2);
    expect(result).toEqual('2.23 MB');
  });
  it('should return size in MB with no decimal place', () => {
    const result = pipe.transform(2330371, 0);
    expect(result).toEqual('3 MB');
  });
  it('should return size in GB', () => {
    const result = pipe.transform(2330371000, 1);
    expect(result).toEqual('2.2 GB');
  });
});
