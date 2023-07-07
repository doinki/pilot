import type { Meta, StoryObj } from '@storybook/react';

import HdrEnhancedSelectOutlined from '../../lib/image/HdrEnhancedSelectOutlined';

const meta: Meta<typeof HdrEnhancedSelectOutlined> = {
  component: HdrEnhancedSelectOutlined,
  tags: ['autodocs'],
  title: 'image/HdrEnhancedSelectOutlined',
};

export default meta;
type Story = StoryObj<typeof HdrEnhancedSelectOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
