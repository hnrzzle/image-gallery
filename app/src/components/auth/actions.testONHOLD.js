jest.mock('../../services/api', () => ({
  signin: jest.fn(),
  signup: jest.fn(),
  verify: jest.fn()
}));