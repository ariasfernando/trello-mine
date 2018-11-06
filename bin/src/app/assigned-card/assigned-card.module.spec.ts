import { AssignedCardModule } from './assigned-card.module';

describe('AssignedCardModule', () => {
  let assignedCardModule: AssignedCardModule;

  beforeEach(() => {
    assignedCardModule = new AssignedCardModule();
  });

  it('should create an instance', () => {
    expect(assignedCardModule).toBeTruthy();
  });
});
