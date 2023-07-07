import type { Meta, StoryObj } from '@storybook/react';

import EventAvailableOutlined from '../../lib/notification/EventAvailableOutlined';

const meta: Meta<typeof EventAvailableOutlined> = {
  component: EventAvailableOutlined,
  tags: ['autodocs'],
  title: 'notification/EventAvailableOutlined',
};

export default meta;
type Story = StoryObj<typeof EventAvailableOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
