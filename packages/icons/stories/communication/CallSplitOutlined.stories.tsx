import type { Meta, StoryObj } from '@storybook/react';

import CallSplitOutlined from '../../lib/communication/CallSplitOutlined';

const meta: Meta<typeof CallSplitOutlined> = {
  component: CallSplitOutlined,
  tags: ['autodocs'],
  title: 'communication/CallSplitOutlined',
};

export default meta;
type Story = StoryObj<typeof CallSplitOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
