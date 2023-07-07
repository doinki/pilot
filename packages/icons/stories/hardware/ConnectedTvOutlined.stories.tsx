import type { Meta, StoryObj } from '@storybook/react';

import ConnectedTvOutlined from '../../lib/hardware/ConnectedTvOutlined';

const meta: Meta<typeof ConnectedTvOutlined> = {
  component: ConnectedTvOutlined,
  tags: ['autodocs'],
  title: 'hardware/ConnectedTvOutlined',
};

export default meta;
type Story = StoryObj<typeof ConnectedTvOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
