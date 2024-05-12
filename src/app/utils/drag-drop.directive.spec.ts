import { DragDropDirective } from './drag-drop.directive';

const mockEvent = {
  preventDefault: () => {},
  stopPropagation: () => {},
} as any;

describe('DragDropDirective', () => {
  let directive: DragDropDirective;

  beforeEach(() => {
    directive = new DragDropDirective();
  });

  it('should emit dragOver', () => {
    jest.spyOn(directive.dragOver, 'emit');
    directive.onDragOver(mockEvent);
    expect(directive.dragOver.emit).toHaveBeenCalled();
  });
  it('should emit dragLeave', () => {
    jest.spyOn(directive.dragLeave, 'emit');
    directive.onDragLeave(mockEvent);
    expect(directive.dragLeave.emit).toHaveBeenCalled();
  });
  it('should emit dropFile', () => {
    jest.spyOn(directive.dropFile, 'emit');
    directive.onDrop(mockEvent);
    expect(directive.dropFile.emit).toHaveBeenCalled();
  });
});
