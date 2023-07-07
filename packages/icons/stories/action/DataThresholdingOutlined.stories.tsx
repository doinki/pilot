import type { Meta, StoryObj } from '@storybook/react';

import DataThresholdingOutlined from '../../lib/action/DataThresholdingOutlined';

const meta: Meta<typeof DataThresholdingOutlined> = {
  component: DataThresholdingOutlined,
  tags: ['autodocs'],
  title: 'action/DataThresholdingOutlined',
};

export default meta;
type Story = StoryObj<typeof DataThresholdingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
