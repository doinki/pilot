import type { Meta, StoryObj } from '@storybook/react';

import HdrStrongOutlined from '../../lib/image/HdrStrongOutlined';

const meta: Meta<typeof HdrStrongOutlined> = {
  component: HdrStrongOutlined,
  tags: ['autodocs'],
  title: 'image/HdrStrongOutlined',
};

export default meta;
type Story = StoryObj<typeof HdrStrongOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
