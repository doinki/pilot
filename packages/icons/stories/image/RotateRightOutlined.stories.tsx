import type { Meta, StoryObj } from '@storybook/react';

import RotateRightOutlined from '../../lib/image/RotateRightOutlined';

const meta: Meta<typeof RotateRightOutlined> = {
  component: RotateRightOutlined,
  tags: ['autodocs'],
  title: 'image/RotateRightOutlined',
};

export default meta;
type Story = StoryObj<typeof RotateRightOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
