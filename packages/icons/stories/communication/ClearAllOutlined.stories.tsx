import type { Meta, StoryObj } from '@storybook/react';

import ClearAllOutlined from '../../lib/communication/ClearAllOutlined';

const meta: Meta<typeof ClearAllOutlined> = {
  component: ClearAllOutlined,
  tags: ['autodocs'],
  title: 'communication/ClearAllOutlined',
};

export default meta;
type Story = StoryObj<typeof ClearAllOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
