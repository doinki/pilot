import type { Meta, StoryObj } from '@storybook/react';

import SleddingOutlined from '../../lib/social/SleddingOutlined';

const meta: Meta<typeof SleddingOutlined> = {
  component: SleddingOutlined,
  tags: ['autodocs'],
  title: 'social/SleddingOutlined',
};

export default meta;
type Story = StoryObj<typeof SleddingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
