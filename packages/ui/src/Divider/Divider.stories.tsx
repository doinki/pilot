import type { Meta, StoryObj } from '@storybook/react';

import Divider from './Divider';

const meta: Meta<typeof Divider> = {
  component: Divider,
  tags: ['autodocs'],
  title: 'Divider',
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const OrientationHorizontal: Story = {
  args: { orientation: 'horizontal' },
};
export const OrientationVertical: Story = {
  args: { orientation: 'vertical' },
  render: (args) => (
    <div style={{ height: 320 }}>
      <Divider {...args} />
    </div>
  ),
};
