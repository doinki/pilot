import type { Meta, StoryObj } from '@storybook/react';

import FiberSmartRecordOutlined from '../../lib/av/FiberSmartRecordOutlined';

const meta: Meta<typeof FiberSmartRecordOutlined> = {
  component: FiberSmartRecordOutlined,
  tags: ['autodocs'],
  title: 'av/FiberSmartRecordOutlined',
};

export default meta;
type Story = StoryObj<typeof FiberSmartRecordOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
