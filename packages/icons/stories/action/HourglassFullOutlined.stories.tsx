import type { Meta, StoryObj } from '@storybook/react';

import HourglassFullOutlined from '../../lib/action/HourglassFullOutlined';

const meta: Meta<typeof HourglassFullOutlined> = {
  component: HourglassFullOutlined,
  tags: ['autodocs'],
  title: 'action/HourglassFullOutlined',
};

export default meta;
type Story = StoryObj<typeof HourglassFullOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
