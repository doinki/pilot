import type { Meta, StoryObj } from '@storybook/react';

import TextRotateVerticalOutlined from '../../lib/action/TextRotateVerticalOutlined';

const meta: Meta<typeof TextRotateVerticalOutlined> = {
  component: TextRotateVerticalOutlined,
  tags: ['autodocs'],
  title: 'action/TextRotateVerticalOutlined',
};

export default meta;
type Story = StoryObj<typeof TextRotateVerticalOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
