import type { Meta, StoryObj } from '@storybook/react';

import AccessAlarmOutlined from '../../lib/device/AccessAlarmOutlined';

const meta: Meta<typeof AccessAlarmOutlined> = {
  component: AccessAlarmOutlined,
  tags: ['autodocs'],
  title: 'device/AccessAlarmOutlined',
};

export default meta;
type Story = StoryObj<typeof AccessAlarmOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
