import type { Meta, StoryObj } from '@storybook/react';

import AlarmOnOutlined from '../../lib/action/AlarmOnOutlined';

const meta: Meta<typeof AlarmOnOutlined> = {
  component: AlarmOnOutlined,
  tags: ['autodocs'],
  title: 'action/AlarmOnOutlined',
};

export default meta;
type Story = StoryObj<typeof AlarmOnOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
