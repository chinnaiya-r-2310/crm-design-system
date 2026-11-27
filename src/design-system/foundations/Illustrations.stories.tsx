import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor, within } from 'storybook/test';
import manifest from './illustrations/manifest.json';
import './Illustrations.css';

const artwork = import.meta.glob<string>('./illustrations/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
});

const meta = {
  title: 'Design System/Foundations/Illustrations',
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/** Original Figma artwork; the final composite in the source frame is intentionally excluded. */
export const EmptyStates: Story = {
  name: 'Empty states',
  render: () => (
    <main className="illustrations-gallery">
      <header>
        <h1>Illustrations</h1>
        <p>Empty-state artwork for lists, records, search, permissions, and errors.</p>
        <a href="https://www.figma.com/design/W02fYIWpt9U3WADH4cwZny?node-id=545-375" target="_blank" rel="noreferrer">View Figma source</a>
      </header>
      <div className="illustrations-gallery__grid">
        {manifest.illustrations.map(({ id, label, description, background, figmaUrl }) => (
          <figure className="illustrations-gallery__item" key={id}>
            <div className="illustrations-gallery__preview" data-background={background}>
              <img src={artwork[`./illustrations/${id}.svg`]} alt={description} />
            </div>
            <figcaption>
              <h2>{label}</h2>
              <p>{description}</p>
              <a href={figmaUrl} target="_blank" rel="noreferrer">View in Figma</a>
            </figcaption>
          </figure>
        ))}
      </div>
    </main>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('heading', { name: 'Illustrations', exact: true })).toBeVisible();
    const images = canvas.getAllByRole('img');
    await expect(images).toHaveLength(19);
    for (const image of images) {
      await waitFor(() => expect((image as HTMLImageElement).complete && (image as HTMLImageElement).naturalWidth > 0).toBe(true));
    }
    await expect(canvas.getAllByRole('link', { name: 'View in Figma', exact: true })).toHaveLength(19);
    await expect(canvasElement.querySelector('[data-background="dark"] img')).toHaveAccessibleName('A translucent white magnifying glass for dark backgrounds.');
    await expect(canvasElement.querySelector('a[href*="545-3204"]')).toBeNull();
  },
};
