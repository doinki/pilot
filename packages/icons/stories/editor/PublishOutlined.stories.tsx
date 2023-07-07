import type { Meta, StoryObj } from '@storybook/react';

import PublishOutlined from '../../lib/editor/PublishOutlined';

const meta: Meta<typeof PublishOutlined> = {
  component: PublishOutlined,
  tags: ['autodocs'],
  title: 'editor/PublishOutlined',
};

export default meta;
type Story = StoryObj<typeof PublishOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
