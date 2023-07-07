import type { Meta, StoryObj } from '@storybook/react';

import RssFeedOutlined from '../../lib/communication/RssFeedOutlined';

const meta: Meta<typeof RssFeedOutlined> = {
  component: RssFeedOutlined,
  tags: ['autodocs'],
  title: 'communication/RssFeedOutlined',
};

export default meta;
type Story = StoryObj<typeof RssFeedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
