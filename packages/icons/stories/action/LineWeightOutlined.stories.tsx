import type { Meta, StoryObj } from '@storybook/react';

import LineWeightOutlined from '../../lib/action/LineWeightOutlined';

const meta: Meta<typeof LineWeightOutlined> = {
  component: LineWeightOutlined,
  tags: ['autodocs'],
  title: 'action/LineWeightOutlined',
};

export default meta;
type Story = StoryObj<typeof LineWeightOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
