import type { Meta, StoryObj } from '@storybook/react';

import ForumOutlined from '../../lib/communication/ForumOutlined';

const meta: Meta<typeof ForumOutlined> = {
  component: ForumOutlined,
  tags: ['autodocs'],
  title: 'communication/ForumOutlined',
};

export default meta;
type Story = StoryObj<typeof ForumOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
