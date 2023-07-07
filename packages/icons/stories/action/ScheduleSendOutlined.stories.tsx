import type { Meta, StoryObj } from '@storybook/react';

import ScheduleSendOutlined from '../../lib/action/ScheduleSendOutlined';

const meta: Meta<typeof ScheduleSendOutlined> = {
  component: ScheduleSendOutlined,
  tags: ['autodocs'],
  title: 'action/ScheduleSendOutlined',
};

export default meta;
type Story = StoryObj<typeof ScheduleSendOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
