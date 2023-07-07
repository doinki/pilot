import type { Meta, StoryObj } from '@storybook/react';

import FiberManualRecordOutlined from '../../lib/av/FiberManualRecordOutlined';

const meta: Meta<typeof FiberManualRecordOutlined> = {
  component: FiberManualRecordOutlined,
  tags: ['autodocs'],
  title: 'av/FiberManualRecordOutlined',
};

export default meta;
type Story = StoryObj<typeof FiberManualRecordOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
