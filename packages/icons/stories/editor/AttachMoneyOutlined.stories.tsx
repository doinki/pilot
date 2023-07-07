import type { Meta, StoryObj } from '@storybook/react';

import AttachMoneyOutlined from '../../lib/editor/AttachMoneyOutlined';

const meta: Meta<typeof AttachMoneyOutlined> = {
  component: AttachMoneyOutlined,
  tags: ['autodocs'],
  title: 'editor/AttachMoneyOutlined',
};

export default meta;
type Story = StoryObj<typeof AttachMoneyOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
