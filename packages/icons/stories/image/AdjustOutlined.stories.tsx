import type { Meta, StoryObj } from '@storybook/react';

import AdjustOutlined from '../../lib/image/AdjustOutlined';

const meta: Meta<typeof AdjustOutlined> = {
  component: AdjustOutlined,
  tags: ['autodocs'],
  title: 'image/AdjustOutlined',
};

export default meta;
type Story = StoryObj<typeof AdjustOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
