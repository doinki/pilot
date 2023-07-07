import type { Meta, StoryObj } from '@storybook/react';

import PunchClockOutlined from '../../lib/device/PunchClockOutlined';

const meta: Meta<typeof PunchClockOutlined> = {
  component: PunchClockOutlined,
  tags: ['autodocs'],
  title: 'device/PunchClockOutlined',
};

export default meta;
type Story = StoryObj<typeof PunchClockOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
