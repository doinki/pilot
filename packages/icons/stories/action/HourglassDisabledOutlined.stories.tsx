import type { Meta, StoryObj } from '@storybook/react';

import HourglassDisabledOutlined from '../../lib/action/HourglassDisabledOutlined';

const meta: Meta<typeof HourglassDisabledOutlined> = {
  component: HourglassDisabledOutlined,
  tags: ['autodocs'],
  title: 'action/HourglassDisabledOutlined',
};

export default meta;
type Story = StoryObj<typeof HourglassDisabledOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
