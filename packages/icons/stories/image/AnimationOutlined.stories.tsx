import type { Meta, StoryObj } from '@storybook/react';

import AnimationOutlined from '../../lib/image/AnimationOutlined';

const meta: Meta<typeof AnimationOutlined> = {
  component: AnimationOutlined,
  tags: ['autodocs'],
  title: 'image/AnimationOutlined',
};

export default meta;
type Story = StoryObj<typeof AnimationOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
