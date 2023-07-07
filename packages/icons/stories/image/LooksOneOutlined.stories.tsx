import type { Meta, StoryObj } from '@storybook/react';

import LooksOneOutlined from '../../lib/image/LooksOneOutlined';

const meta: Meta<typeof LooksOneOutlined> = {
  component: LooksOneOutlined,
  tags: ['autodocs'],
  title: 'image/LooksOneOutlined',
};

export default meta;
type Story = StoryObj<typeof LooksOneOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
