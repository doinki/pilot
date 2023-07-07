import type { Meta, StoryObj } from '@storybook/react';

import EventSeatOutlined from '../../lib/action/EventSeatOutlined';

const meta: Meta<typeof EventSeatOutlined> = {
  component: EventSeatOutlined,
  tags: ['autodocs'],
  title: 'action/EventSeatOutlined',
};

export default meta;
type Story = StoryObj<typeof EventSeatOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
