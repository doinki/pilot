import type { Meta, StoryObj } from '@storybook/react';

import ShareOutlined from '../../lib/social/ShareOutlined';

const meta: Meta<typeof ShareOutlined> = {
  component: ShareOutlined,
  tags: ['autodocs'],
  title: 'social/ShareOutlined',
};

export default meta;
type Story = StoryObj<typeof ShareOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
