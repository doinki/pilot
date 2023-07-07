import type { Meta, StoryObj } from '@storybook/react';

import ThreePOutlined from '../../lib/communication/ThreePOutlined';

const meta: Meta<typeof ThreePOutlined> = {
  component: ThreePOutlined,
  tags: ['autodocs'],
  title: 'communication/ThreePOutlined',
};

export default meta;
type Story = StoryObj<typeof ThreePOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
