import type { Meta, StoryObj } from '@storybook/react';

import PercentOutlined from '../../lib/action/PercentOutlined';

const meta: Meta<typeof PercentOutlined> = {
  component: PercentOutlined,
  tags: ['autodocs'],
  title: 'action/PercentOutlined',
};

export default meta;
type Story = StoryObj<typeof PercentOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
