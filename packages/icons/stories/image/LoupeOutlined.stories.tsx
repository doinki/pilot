import type { Meta, StoryObj } from '@storybook/react';

import LoupeOutlined from '../../lib/image/LoupeOutlined';

const meta: Meta<typeof LoupeOutlined> = {
  component: LoupeOutlined,
  tags: ['autodocs'],
  title: 'image/LoupeOutlined',
};

export default meta;
type Story = StoryObj<typeof LoupeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
