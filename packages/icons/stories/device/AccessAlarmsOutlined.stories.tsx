import type { Meta, StoryObj } from '@storybook/react';

import AccessAlarmsOutlined from '../../lib/device/AccessAlarmsOutlined';

const meta: Meta<typeof AccessAlarmsOutlined> = {
  component: AccessAlarmsOutlined,
  tags: ['autodocs'],
  title: 'device/AccessAlarmsOutlined',
};

export default meta;
type Story = StoryObj<typeof AccessAlarmsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
