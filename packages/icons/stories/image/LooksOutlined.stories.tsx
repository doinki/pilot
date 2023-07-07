import type { Meta, StoryObj } from '@storybook/react';

import LooksOutlined from '../../lib/image/LooksOutlined';

const meta: Meta<typeof LooksOutlined> = {
  component: LooksOutlined,
  tags: ['autodocs'],
  title: 'image/LooksOutlined',
};

export default meta;
type Story = StoryObj<typeof LooksOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
