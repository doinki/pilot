import type { Meta, StoryObj } from '@storybook/react';

import LiveTvOutlined from '../../lib/notification/LiveTvOutlined';

const meta: Meta<typeof LiveTvOutlined> = {
  component: LiveTvOutlined,
  tags: ['autodocs'],
  title: 'notification/LiveTvOutlined',
};

export default meta;
type Story = StoryObj<typeof LiveTvOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
