import type { Meta, StoryObj } from '@storybook/react';

import RttOutlined from '../../lib/communication/RttOutlined';

const meta: Meta<typeof RttOutlined> = {
  component: RttOutlined,
  tags: ['autodocs'],
  title: 'communication/RttOutlined',
};

export default meta;
type Story = StoryObj<typeof RttOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
