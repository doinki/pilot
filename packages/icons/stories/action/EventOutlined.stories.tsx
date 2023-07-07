import type { Meta, StoryObj } from '@storybook/react';

import EventOutlined from '../../lib/action/EventOutlined';

const meta: Meta<typeof EventOutlined> = {
  component: EventOutlined,
  tags: ['autodocs'],
  title: 'action/EventOutlined',
};

export default meta;
type Story = StoryObj<typeof EventOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
