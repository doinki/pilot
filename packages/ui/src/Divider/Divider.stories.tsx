import type { Meta, StoryObj } from '@storybook/react';

import Divider from './Divider';

const meta: Meta<typeof Divider> = {
  argTypes: {
    flexItem: {
      control: 'boolean',
    },
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
    },
  },
  component: Divider,
  tags: ['autodocs'],
  title: 'ui/Divider',
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

export const FlexItemHorizontal: Story = {
  args: { flexItem: true, orientation: 'horizontal' },
  render: (args) => (
    <div className="flex flex-col">
      <Divider {...args} />
    </div>
  ),
};
export const FlexItemVertical: Story = {
  args: { flexItem: true, orientation: 'vertical' },
  render: (args) => (
    <div className="flex" style={{ height: 320 }}>
      <Divider {...args} />
    </div>
  ),
};
