import { createRoot } from 'react-dom/client';

export const pushComponentToBody = (idName: string) => {
  let container = document.getElementById(idName);
  if (!container) {
    const body = document.getElementsByTagName('BODY')[0];
    container = document.createElement('div');
    container.id = idName;
    body?.appendChild(container);
  }
  container.appendChild(document.createElement('div'));
  const previewDiv = container.children[container.children.length - 1];
  const previewContainer = createRoot(previewDiv);

  const onDestroy = () => previewDiv.remove();

  const onClose = (oc?: (event: React.MouseEvent) => void) => (
    e: React.MouseEvent
  ) => {
    previewDiv.remove();
    oc && oc(e);
  };

  return { container: previewContainer, onClose, onDestroy };
};
