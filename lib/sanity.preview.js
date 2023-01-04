import { definePreview } from 'next-sanity/preview';
import { projectId, dataset } from './sanity.client';

function onPublicAccessOnly() {
  throw new Error('You must be logged in to view this page');
}

if (!projectId || !dataset) {
  throw new Error('Missing projectId or dataset. Check your sanity.json');
}

export const usePreview = definePreview({
  projectId,
  dataset,
  onPublicAccessOnly
});
