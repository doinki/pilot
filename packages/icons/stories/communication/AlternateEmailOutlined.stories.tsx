import type { Meta, StoryObj } from '@storybook/react';

import AlternateEmailOutlined from '../../lib/communication/AlternateEmailOutlined';

const meta: Meta<typeof AlternateEmailOutlined> = {
  component: AlternateEmailOutlined,
  tags: ['autodocs'],
  title: 'communication/AlternateEmailOutlined',
};

export default meta;
type Story = StoryObj<typeof AlternateEmailOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
