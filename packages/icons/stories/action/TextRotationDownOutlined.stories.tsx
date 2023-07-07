import type { Meta, StoryObj } from '@storybook/react';

import TextRotationDownOutlined from '../../lib/action/TextRotationDownOutlined';

const meta: Meta<typeof TextRotationDownOutlined> = {
  component: TextRotationDownOutlined,
  tags: ['autodocs'],
  title: 'action/TextRotationDownOutlined',
};

export default meta;
type Story = StoryObj<typeof TextRotationDownOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
