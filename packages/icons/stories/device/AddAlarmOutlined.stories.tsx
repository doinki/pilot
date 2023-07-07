import type { Meta, StoryObj } from '@storybook/react';

import AddAlarmOutlined from '../../lib/device/AddAlarmOutlined';

const meta: Meta<typeof AddAlarmOutlined> = {
  component: AddAlarmOutlined,
  tags: ['autodocs'],
  title: 'device/AddAlarmOutlined',
};

export default meta;
type Story = StoryObj<typeof AddAlarmOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
