PageHeader is a layout that can be used to display breadcrumbs, a header section, containing title (and title supplement) and actions, a subheader section, and an extras section that slides down. It can also wrap the rest of a page's content such that it fades in after loading is complete.

```jsx
import Badge from '../badge';
import Button from '../button';
import Heading from '../heading';
import Text from '../text';

const [loading, setLoading] = React.useState(true);
window.setTimeout(() => {
  setLoading(false);
}, 5000);

<PageHeader loading={loading}>
  <PageHeader.Header>
    <PageHeader.Title>Hello world</PageHeader.Title>
    <PageHeader.TitleSupplement>
      <Badge type="info" weight="subtle">
        ⭐️ You get a star
      </Badge>
    </PageHeader.TitleSupplement>
    <PageHeader.Actions>
      <Button icon="profile">Click me</Button>
    </PageHeader.Actions>
  </PageHeader.Header>
  <PageHeader.SubHeader>
    <Text>This is the sub-header section.</Text>
  </PageHeader.SubHeader>
  <PageHeader.Extras style={{ display: 'flex' }}>
    <div style={{ display: 'inline-flex', margin: '16px 0', width: '100%' }}>
      <Heading as="h6" style={{ marginRight: '8px' }}>
        Extra
      </Heading>
      <Text size="small">This is the extras section.</Text>
    </div>
  </PageHeader.Extras>
</PageHeader>;
```
