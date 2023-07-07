import type { Meta, StoryObj } from '@storybook/react';

import CallMergeOutlined from '../../lib/communication/CallMergeOutlined';

const meta: Meta<typeof CallMergeOutlined> = {
  component: CallMergeOutlined,
  tags: ['autodocs'],
  title: 'communication/CallMergeOutlined',
};

export default meta;
type Story = StoryObj<typeof CallMergeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
