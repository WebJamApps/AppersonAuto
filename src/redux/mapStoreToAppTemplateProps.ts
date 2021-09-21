import type { Store } from './mapStoreToProps';

const mapStoreToProps = (store: Store): Record<string, unknown> => ({
  images: store.images.images,
  auth: store.auth,
});
export default mapStoreToProps;
