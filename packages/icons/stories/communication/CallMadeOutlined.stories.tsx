import type { Meta, StoryObj } from '@storybook/react';

import CallMadeOutlined from '../../lib/communication/CallMadeOutlined';

const meta: Meta<typeof CallMadeOutlined> = {
  component: CallMadeOutlined,
  tags: ['autodocs'],
  title: 'communication/CallMadeOutlined',
};

export default meta;
type Story = StoryObj<typeof CallMadeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
