import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Projects')
        .child(
          S.document()
            .title('Project List')
            .schemaType('projects')
            .documentId('projects')
        ),
      S.listItem()
        .title('404 Page')
        .child(
          S.document()
            .title('Page Details')
            .schemaType('fourPage')
            .documentId('fourPage')
        ),
      ...S.documentTypeListItems().filter(
        (listItem) => !['projects', 'fourPage'].includes(listItem.getId())
      ),
    ]);
