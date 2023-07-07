import type { Meta, StoryObj } from '@storybook/react';

import AlarmOutlined from '../../lib/action/AlarmOutlined';

const meta: Meta<typeof AlarmOutlined> = {
  component: AlarmOutlined,
  tags: ['autodocs'],
  title: 'action/AlarmOutlined',
};

export default meta;
type Story = StoryObj<typeof AlarmOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
