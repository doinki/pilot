import type { Meta, StoryObj } from '@storybook/react';

import AlarmOffOutlined from '../../lib/action/AlarmOffOutlined';

const meta: Meta<typeof AlarmOffOutlined> = {
  component: AlarmOffOutlined,
  tags: ['autodocs'],
  title: 'action/AlarmOffOutlined',
};

export default meta;
type Story = StoryObj<typeof AlarmOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
