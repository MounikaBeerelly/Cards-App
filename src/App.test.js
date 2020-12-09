describe(`The Card Lists are`, () => {

  beforeEach(() => {
    console.log('BeforeEach called')
  });
  
  beforeAll(() => {
    console.log('BeforeAll called')
  });

  afterEach(() => {
    console.log('AfterEach called')
  });

  afterAll(() => {
    console.log('AfterAll called')
  })

  it.only(`Should be equal to`, () => {
    expect(2+3).toEqual(5);
  });
  it.skip(`Should be`, () => {
    expect(2+3).toBe(5);
  });
});
