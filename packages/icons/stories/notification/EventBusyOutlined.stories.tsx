import type { Meta, StoryObj } from '@storybook/react';

import EventBusyOutlined from '../../lib/notification/EventBusyOutlined';

const meta: Meta<typeof EventBusyOutlined> = {
  component: EventBusyOutlined,
  tags: ['autodocs'],
  title: 'notification/EventBusyOutlined',
};

export default meta;
type Story = StoryObj<typeof EventBusyOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
