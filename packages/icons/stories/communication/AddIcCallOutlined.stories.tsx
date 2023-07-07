import type { Meta, StoryObj } from '@storybook/react';

import AddIcCallOutlined from '../../lib/communication/AddIcCallOutlined';

const meta: Meta<typeof AddIcCallOutlined> = {
  component: AddIcCallOutlined,
  tags: ['autodocs'],
  title: 'communication/AddIcCallOutlined',
};

export default meta;
type Story = StoryObj<typeof AddIcCallOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
