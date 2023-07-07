import type { Meta, StoryObj } from '@storybook/react';

import AlarmAddOutlined from '../../lib/action/AlarmAddOutlined';

const meta: Meta<typeof AlarmAddOutlined> = {
  component: AlarmAddOutlined,
  tags: ['autodocs'],
  title: 'action/AlarmAddOutlined',
};

export default meta;
type Story = StoryObj<typeof AlarmAddOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
