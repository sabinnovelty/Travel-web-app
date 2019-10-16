const GUIDES_PATH = '/guides'

export const GUIDE_ROUTES = {
  GUIDES: GUIDES_PATH,
  ADD_GUIDE: `${GUIDES_PATH}/new`,
  EDIT_GUIDE: `${GUIDES_PATH}/:id/edit`,
  DETAIL_GUIDE: `${GUIDES_PATH}/:id`,
}
