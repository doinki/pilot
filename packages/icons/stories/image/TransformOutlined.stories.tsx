import type { Meta, StoryObj } from '@storybook/react';

import TransformOutlined from '../../lib/image/TransformOutlined';

const meta: Meta<typeof TransformOutlined> = {
  component: TransformOutlined,
  tags: ['autodocs'],
  title: 'image/TransformOutlined',
};

export default meta;
type Story = StoryObj<typeof TransformOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
