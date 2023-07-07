import type { Meta, StoryObj } from '@storybook/react';

import MoreTimeOutlined from '../../lib/communication/MoreTimeOutlined';

const meta: Meta<typeof MoreTimeOutlined> = {
  component: MoreTimeOutlined,
  tags: ['autodocs'],
  title: 'communication/MoreTimeOutlined',
};

export default meta;
type Story = StoryObj<typeof MoreTimeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
