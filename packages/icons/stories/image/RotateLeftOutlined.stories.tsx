import type { Meta, StoryObj } from '@storybook/react';

import RotateLeftOutlined from '../../lib/image/RotateLeftOutlined';

const meta: Meta<typeof RotateLeftOutlined> = {
  component: RotateLeftOutlined,
  tags: ['autodocs'],
  title: 'image/RotateLeftOutlined',
};

export default meta;
type Story = StoryObj<typeof RotateLeftOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
